import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from "react-native";
import SignOutButton from "../../../../components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";
import { DailyLogContext } from "./DailyLogContext";
import { BackButton } from "@components/BackButton";
import {
  CreateMentalHealthLogInput,
  CreateMentalHealthLogMutation,
  UpdateDailyLogInput,
  UpdateDailyLogMutation,
  UpdateMentalHealthLogInput,
  UpdateMentalHealthLogMutation,
} from "src/API";
import { API, graphqlOperation } from "aws-amplify";
import {
  updateMentalHealthLog,
  createMentalHealthLog,
  updateDailyLog,
} from "../../../../../graphql/mutations";
import { GraphQLQuery, GraphQLResult } from "@aws-amplify/api";
import { AuthContext } from "../../../../../frontend/features/authentication/AuthContext";

const MentalHealthSymptomPage = ({ navigation }) => {
  const [moodVisible, setMoodVisible] = useState(false);
  const [emotionsVisible, setEmotionsVisible] = useState(false);
  const { dailyLog } = useContext(DailyLogContext);

  const [mood, setMood] = useState(5);
  const [emotions, setEmotions] = useState({
    anxiety: false,
    irritable: false,
    anger: false,
    sadness: false,
    happiness: false,
    excitement: false,
  });

  const [mentalHealthSymptoms, setMentalHealthSymptoms] = useState({
    mood: 5,
    emotions: {
      anxiety: false,
      irritable: false,
      anger: false,
      sadness: false,
      happiness: false,
      excitement: false,
    },
  });

  const handleNextButtonClick = async () => {
    console.log("MENTAL HEALTH ANSWERS:", { mood, emotions });

    let mentalHealthLogId = null;

    console.log(dailyLog);

    // Check if there is an existing MentalHealthLog for the current DailyLog
    if (dailyLog && dailyLog[0].dailyLogMentalHealthLogId) {
      mentalHealthLogId = dailyLog[0].dailyLogMentalHealthLogId;
    }

    const mentalHealthLogData = {
      mood: mood,
      anxiety: emotions.anxiety,
      irritable: emotions.irritable,
      anger: emotions.anger,
      sadness: emotions.sadness,
      happiness: emotions.happiness,
      excitement: emotions.excitement,
    };

    try {
      if (mentalHealthLogId) {
        console.log("Mental Health Log created for Today already!");
        const updateMentalHealthLogInput: UpdateMentalHealthLogInput = {
          id: mentalHealthLogId,
          ...mentalHealthLogData,
        };

        const result = await API.graphql<
          GraphQLQuery<UpdateMentalHealthLogMutation>
        >(
          graphqlOperation(updateMentalHealthLog, {
            input: updateMentalHealthLogInput,
          })
        );
        console.log("Mental health data updated:", result);
      } else {
        console.log("NO MENTAL HEALTH LOG ID");

        const createMentalHealthLogInput: CreateMentalHealthLogInput = {
          mentalHealthLogDailyLogId: dailyLog[0].id,
          ...mentalHealthLogData,
        };

        const result = (await API.graphql<CreateMentalHealthLogMutation>(
          graphqlOperation(createMentalHealthLog, {
            input: createMentalHealthLogInput,
          })
        )) as GraphQLResult<any>;

        console.log("Mental health data saved:", result);
        console.log(result.data.createMentalHealthLog.id);

        try {
          const updateDailyLogInput: UpdateDailyLogInput = {
            id: dailyLog[0].id,
            dailyLogMentalHealthLogId: result.data.createMentalHealthLog.id,
          };

          const updatedDailyLog = await API.graphql<UpdateDailyLogMutation>(
            graphqlOperation(updateDailyLog, {
              input: updateDailyLogInput,
            })
          );

          console.log(
            "Daily Log Successfully Updated with Mental Health Symptoms!",
            updatedDailyLog
          );
        } catch (e) {
          console.error(
            "Error updating daily log with medical health symptom info."
          );
        }
      }
    } catch (error) {
      console.error("Error saving mental health data:", error);
    }

    navigation.goBack();
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
            <Text style={styles.headerText}>Mental Health</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => setMoodVisible(!moodVisible)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Mood</Text>
            </TouchableOpacity>

            {moodVisible && (
              <View style={styles.moodContainer}>
                <Text style={{ fontFamily: "Almarai_Light", fontSize: 17 }}>
                  How was your general mood today?
                </Text>

                <View style={styles.sliderContainer}>
                  <Ionicons name="sad-outline" size={24} color="black" />
                  <Slider
                    style={{ flex: 1 }}
                    minimumValue={1}
                    maximumValue={10}
                    step={1}
                    value={mood}
                    onValueChange={(value) => setMood(value)}
                  />
                  <Ionicons name="happy-outline" size={24} color="black" />
                </View>
                <Text style={styles.sliderValue}>{mood}</Text>
              </View>
            )}

            <TouchableOpacity
              onPress={() => setEmotionsVisible(!emotionsVisible)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Emotions</Text>
            </TouchableOpacity>

            {emotionsVisible && (
              <View style={styles.emotionsContainer}>
                {Object.entries(emotions).map(([key, value]) => (
                  <View key={key} style={styles.switchContainer}>
                    <Text>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                    <Switch
                      //   ios_backgroundColor="#3e3e3e"
                      onValueChange={() =>
                        setEmotions({ ...emotions, [key]: !value })
                      }
                      value={value}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={handleNextButtonClick}
              style={styles.nextButton}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
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
  signOutButton: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  headerRightIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
  },
  headerLeftIcons: {
    flexDirection: "row",
    position: "absolute",
    left: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  button: {
    height: 45,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 174,
    marginTop: 30,
    elevation: 4,
    marginBottom: 7,
  },
  buttonText: {
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "DMSerifDisplay",
  },
  moodContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 10,
  },
  emotionsContainer: {
    width: "40%",
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sliderValue: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "center",
    fontFamily: "Almarai_Bold",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
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
    marginTop: 30,
    elevation: 4,
    marginBottom: 7,
  },
});

export default MentalHealthSymptomPage;
