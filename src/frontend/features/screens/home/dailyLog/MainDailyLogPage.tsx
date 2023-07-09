import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SignOutButton from "../../../../components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import { DailyLogContext } from "./DailyLogContext";
import { BackButton } from "@components/BackButton";
import { API, graphqlOperation } from "aws-amplify";
import {
  GetDailyLogQuery,
  GetSymptomLogQuery,
  CreateDailyLogInput,
  CreateDailyLogMutation,
  UpdateUserMutation,
  UpdateUserInput,
  DailyLogByUserAndDateQuery,
  ModelStringKeyConditionInput,
} from "../../../../../API";
import {
  dailyLogByUserAndDate,
  getDailyLog,
  getSymptomLog,
} from "../../../../../graphql/queries";
import { AuthContext } from "../../../authentication/AuthContext";
import { GraphQLQuery, GraphQLResult } from "@aws-amplify/api";
import { createDailyLog, updateUser } from "../../../../../graphql/mutations";

const buttonWidth = Dimensions.get("window").width / 2.5;

const MainDailyLogPage = ({ navigation }) => {
  const { logs, setDailyLog, setDailyLogId } = useContext(DailyLogContext);
  const { userId } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      const fetchDailyLog = async (date) => {
        try {
          const keyCondition: ModelStringKeyConditionInput = {
            eq: date,
          };

          const params = {
            userDailyLogId: userId,
            createdAt: keyCondition,
          };

          const dailyLogData = (await API.graphql(
            graphqlOperation(dailyLogByUserAndDate, params)
          )) as GraphQLResult<any>;

          const dailyLogItems = dailyLogData.data?.dailyLogByUserAndDate.items;
          console.log("items??", dailyLogItems);

          if (dailyLogData.data.dailyLogByUserAndDate.items.length > 0) {
            console.log("Fetched daily log for the day", dailyLogData);
            setDailyLog(dailyLogItems);
            console.log("dailylog id?: ", dailyLogItems[0].id);
            setDailyLogId(dailyLogItems[0].id);
          } else {
            const newDailyLog: CreateDailyLogInput = {
              createdAt: date,
              userDailyLogId: userId,
            };

            const createdDailyLog = await API.graphql<
              GraphQLQuery<CreateDailyLogMutation>
            >(graphqlOperation(createDailyLog, { input: newDailyLog }));

            console.log("New log created for the day", createdDailyLog);
            setDailyLog(createdDailyLog);
            setDailyLogId(createdDailyLog.data.createDailyLog.id);
          }
        } catch (error) {
          console.log("Error fetching or creating daily log:", error);
        }
      };

      const currentDate =
        new Date().toISOString().split("T")[0] + "T00:00:00.000Z";
      fetchDailyLog(currentDate);
    }, [])
  );

  const handleMentalHealth = () => {
    navigation.navigate("MENTAL_HEALTH");
  };

  const handleTreatmentsAndCare = () => {
    navigation.navigate("TREATMENTS_CARE");
  };

  const handleLifeStyleTracking = () => {
    navigation.navigate("LIFESTYLE_TRACKING");
  };

  const handlePainTracking = () => {
    // navigation.navigate("PAIN_TRACKING")
    console.log("Pain Tracking to be implemented!");
  };

  const handleSymptomLog = () => {
    navigation.navigate("SYMPTOM_LOG");
  };

  const handleSave = () => {
    console.log("Function not implemented.");
  };

  return (
    <>
      <LinearGradient
        colors={["rgba(141, 128, 227, 0.6)", "#ffffff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton />
            <Text style={styles.headerText}>Today's Log</Text>
          </View>

          <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={handleSymptomLog}>
              <Text style={styles.buttonText}> Symptom Log </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleMentalHealth}
            >
              <Text style={styles.buttonText}> Mental Health </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleTreatmentsAndCare}
            >
              <View>
                <Text style={styles.buttonText}>Treatments</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLifeStyleTracking}
            >
              <Text style={styles.buttonText}> Lifestyle </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handlePainTracking}
            >
              <Text style={styles.buttonText}> Pain </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.buttonText}>Submit Log</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "DMSerifDisplay",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 3,
    paddingRight: 3,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    minHeight: 45,
    borderRadius: 20,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: buttonWidth,
    elevation: 4,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
    fontFamily: "DMSerifDisplay",
  },
  imageContainer: {
    width: "80%",
    height: "80%",
    position: "relative",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  saveButton: {
    height: 45,
    borderRadius: 58,
    backgroundColor: "rgba(141, 128, 227, 0.8)",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    marginBottom: 7,
  },
});

export default MainDailyLogPage;
