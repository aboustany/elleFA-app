import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Amplify } from 'aws-amplify';
import { View, Text, TouchableOpacity, Animated, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SignOutButton from '../../components/SignOutButton.jsx';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);

export default function MedicalHistory({navigation}) {
    const [medication, setMedication] = useState('');
    const [conditions, setConditions] = useState('');
    const [reproductiveHealth, setReproductiveHealth] = useState('');
  
    const handleSubmit = () => {
      // Do something with the answers
      console.log(medication, conditions, reproductiveHealth);
      navigation.navigate('ScreeningQuestions')
    };
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <LinearGradient 
                colors={['rgba(141, 128, 227, 0.6)', '#ffffff']}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '120%'}}
                />
                
                <SignOutButton/>
                <Text style={styles.title}>Medical History</Text>
                
                <Text style={styles.question}>What medications are you currently taking?</Text>
                <TextInput
                style={styles.input}
                value={medication}
                onChangeText={setMedication}
                />
        
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
    },
    buttonText: {
      fontSize: 18,
      lineHeight: 20,
      fontFamily: 'Almarai',
      color: '#000000',
      textAlign: 'center',
    },
  });