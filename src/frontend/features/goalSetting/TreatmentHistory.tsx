import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SignOutButton from '../../components/SignOutButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { GraphQLQuery } from "@aws-amplify/api";
import { UpdateUserGoalsInput, UpdateUserGoalsMutation } from '../../../API';
import { AuthContext } from '../authentication/AuthContext';
import { API, graphqlOperation } from 'aws-amplify';
import { updateUserGoals } from '../../../graphql/mutations';

export default function TreatmentHistory({ navigation }) {
  const [treatments, setTreatments] = useState([]);
  const [currentTreatment, setCurrentTreatment] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  const { userId } = useContext(AuthContext);

  const handleAddTreatment = () => {
    if(currentTreatment) {

      if (toDate && fromDate && toDate < fromDate) {
        alert('The end date of the treatment cannot be before the start date.');
        return;
      }

      const newTreatment = {
        name: currentTreatment,
        from: fromDate || new Date(),
        to: toDate || new Date(),
      };
      setTreatments([...treatments, newTreatment]);
      setCurrentTreatment('');
      setFromDate(null);
      setToDate(null);
    }
  };


  const handleRemoveTreatment = (index) => {
    setTreatments(treatments.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
      try{
        const response: UpdateUserGoalsInput = {
          id: userId,
          treatments: treatments
        }

        if (treatments.length > 0) {
          response.treatments = treatments;
        }

        const createdGoals = await API.graphql<GraphQLQuery<UpdateUserGoalsMutation>>(
          graphqlOperation(updateUserGoals, {
            input:
              response 
          })
        ).catch(e => {
          console.error('GraphQL error: ', e);
        });

        console.log("Treatments updated!: ", treatments)
      }
      catch(e){
        console.error(e);
      }
      
      console.log("TREATMENTS LIST:", treatments);

      navigation.navigate('TrackingQuestions');
    };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient 
          colors={['rgba(141, 128, 227, 0.6)', '#ffffff']}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '120%'}}
        />
        <ScrollView style={{flex: 1}}>
          <SignOutButton/>
          <Text style={styles.title}> Treatment History </Text>

          <Text style={styles.question}> What treatments have you been taking? </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.treatmentInput}
              onChangeText={setCurrentTreatment} 
              value={currentTreatment}
              onSubmitEditing={handleAddTreatment} 
            />
            <TouchableOpacity style={styles.inputButton} onPress={handleAddTreatment}> 
                <Text style={styles.inputButtonText}> + </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.datePickersContainer}>
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowFromDatePicker(true)}>  
              <View style={styles.datePicker}>
                <Text style={styles.dateText}> From: {fromDate ? fromDate.toLocaleDateString() : "Select a date"} </Text>
                <Ionicons name="calendar" size={30} color="rgba(141, 128, 227, 0.6)" />
              </View>
            </TouchableOpacity>

            {showFromDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode={"date"}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowFromDatePicker(false);
                  setFromDate(selectedDate || new Date());  // If no date is selected, fallback to current date
                }}
              />
            )}
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowToDatePicker(true)}>  
              <View style={styles.datePicker}>
                <Text style={styles.dateText}>To: {toDate ? toDate.toLocaleDateString() : "Select a date"}</Text>
                <Ionicons name="calendar" size={30} color="rgba(141, 128, 227, 0.6)" />
              </View>
            </TouchableOpacity>

            {showToDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode={"date"}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowToDatePicker(false);
                  setToDate(selectedDate || new Date());  // If no date is selected, fallback to current date
                }}
              />
            )}
          </View>

          {(treatments.length > 0) && (
            <View style={styles.treatmentContainer}>
              <ScrollView>
                {treatments.map((treatment, index) => (
                  <View key={index} style={styles.treatmentItem}>
                    <Text style={{flex: 1}}>{treatment.name} (From: {new Date(treatment.from).toLocaleDateString()} To: {new Date(treatment.to).toLocaleDateString()})</Text>
                    <TouchableOpacity onPress={() => handleRemoveTreatment(index)}>
                      <Text style={{color: 'red'}}> Remove </Text>
                    </TouchableOpacity>

                  </View>
                ))}
              </ScrollView>
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}> Done </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontSize: 35,
      lineHeight: 48,
      fontFamily: 'DMSerifDisplay',
      color: '#000000',
      marginTop: 81,
      marginBottom: 30,
      alignSelf: 'center'
    },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  treatmentInput: {
    flex: 1,
    height: 44,
    borderColor: '#FBFAFE',
    borderWidth: 1,
    borderTopLeftRadius: 58,
    borderBottomLeftRadius: 58,
    paddingHorizontal: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#ffffff'
  },
  inputButton: {
    height: 44,
    width: 44,
    borderColor: '#FBFAFE',
    borderWidth: 1,
    borderTopRightRadius: 58,
    borderBottomRightRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#ffffff'
  },
  inputButtonText: {
    fontSize: 24,
    color: '#000000',
  },
    question: {
      fontSize: 16.5,
      lineHeight: 18,
      fontFamily: 'Almarai',
      color: '#000000',
      marginBottom: 10,
      alignSelf: 'center'
    },
    input: {
      height: 44,
      borderColor: '#FBFAFE',
      borderWidth: 1,
      borderRadius: 58,
      paddingHorizontal: 10,
      marginBottom: 30,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      backgroundColor: '#ffffff'
    },
    button: {
      height: 45,
      borderRadius: 58,
      backgroundColor: '#F7D7E3',
      justifyContent: 'center',
      alignSelf: 'center',
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
      fontSize: 18,
      lineHeight: 20,
      fontFamily: 'Almarai',
      color: '#000000',
      textAlign: 'center',
    },

  medicationItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 44,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.1)',
      backgroundColor: 'transparent',
  },
  treatmentContainer: {
    borderWidth: 1,
    borderColor: '#FBFAFE',
    borderRadius: 15,
    padding: 10,
    marginBottom: 30,
    maxHeight: 250,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  datePickersContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  },

  datePicker: {
    alignItems: 'center',
  },

  dateButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flex: 1, // Allow the TouchableOpacity to grow to use as much space as possible
  },

  dateText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center', // Center the text
  },
  treatmentItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  backgroundColor: 'transparent',
},
  });