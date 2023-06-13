import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
import { View, Text, TouchableOpacity, Animated, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import SignOutButton from '../../components/SignOutButton';
import awsconfig from '../../../aws-exports';
import { AuthContext } from "../authentication/AuthContext";
import { GraphQLQuery } from "@aws-amplify/api";
import { CreateUserGoalsMutation, UpdateUserGoalsInput, UpdateUserGoalsMutation } from '../../../API';
import { updateUserGoals } from '../../../graphql/mutations';
Amplify.configure(awsconfig);

export default function MedicalHistory({navigation}) {
    const [medications, setMedications] = useState([]);
    const [conditions, setConditions] = useState('');
    const [reproductiveHealth, setReproductiveHealth] = useState('');
    const [currentMedication, setCurrentMedication] = useState('');
    const { userId } = useContext(AuthContext);

    const handleAddMedication = () => {
      setMedications([...medications, currentMedication]); 
      setCurrentMedication(''); 
    };

    const handleRemoveMedication = (index) => {
      setMedications(medications.filter((_, i) => i !== index));
    };
  
    const handleSubmit = async () => {
      try{
        const response: UpdateUserGoalsInput = {
          id: userId,
          conditions: conditions,
          reproductiveHealth: reproductiveHealth,
        }

        if (medications.length > 0) {
          response.medications = medications;
        }

        const createdGoals = await API.graphql<GraphQLQuery<UpdateUserGoalsMutation>>(
          graphqlOperation(updateUserGoals, {
            input:
              response 
          })
        ).catch(e => {
          console.error('GraphQL error: ', e);
        });
      }
      catch(e){
        console.error(e);
      }
      
      console.log("MEDICATIONS LIST:", medications);

      navigation.navigate('ScreeningQuestions');
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
                <Text style={styles.title}>Medical History</Text>
                
                <Text style={styles.question}>What medications are you currently taking?</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.medicationInput}
                    onChangeText={setCurrentMedication} 
                    value={currentMedication} 
                    onSubmitEditing={handleAddMedication}
                  />
                  <TouchableOpacity style={styles.inputButton} onPress={handleAddMedication}> 
                      <Text style={styles.inputButtonText}>+</Text>
                  </TouchableOpacity>
                </View>

               {(medications.length > 0) && <View style={styles.medicationContainer}>
                  <ScrollView>
                    {medications.map((medication, index) => (
                      <View key={index} style={styles.medicationItem}>
                        <Text>{medication}</Text>
                        <TouchableOpacity onPress={() => handleRemoveMedication(index)}>
                          <Text> X </Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              }
                <Text style={styles.question}>What other medical conditions do you have?</Text>
                <TextInput
                style={styles.input}
                value={conditions}
                onChangeText={setConditions}
                />
        
                <Text style={styles.question}>Has anyone in your family been diagnosed with a reproductive health disorder (ex: PCOS?)</Text>
                <TextInput
                style={styles.input}
                value={reproductiveHealth}
                onChangeText={setReproductiveHealth}
                />
        
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Done</Text>
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
  medicationInput: {
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
  medicationContainer: {
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
  });