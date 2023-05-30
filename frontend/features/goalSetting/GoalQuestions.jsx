import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignOutButton from '../../components/SignOutButton.jsx';

export default function GoalQuestions() {
  const [diagnosis, setDiagnosis] = useState("");
  const [workingWith, setWorkingWith] = useState("");
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  function handleDiagnosisChoice(choice) {
    setDiagnosis(choice);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  function handleWorkingWithChoice(choice) {
    setWorkingWith(choice);
  }

  function handleNext() {
    console.log(workingWith);
    console.log(diagnosis);
    // navigation.navigate('MedicalHistory');
  }

  return (
    <View style={styles.container}>
    <SignOutButton/>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Goal Setting</Text>
        <Text style={styles.subtitle}>ElleFA is tailored to meet your personal needs. Please select your goal from the options below. Don’t worry, you can always update this goal later!</Text>
      </View>
      
      <TouchableOpacity style={diagnosis === "suspect" ? styles.buttonSelected : styles.button} onPress={() => handleDiagnosisChoice("suspect")}>
        <Text style={styles.choice}>I want to see if I have endometriosis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={diagnosis === "diagnosed" ? styles.buttonSelected : styles.button} onPress={() => handleDiagnosisChoice("diagnosed")}>
        <Text style={styles.choice}>I have been diagnosed with endometriosis</Text>
      </TouchableOpacity>

      {diagnosis !== "" && (
        <Animated.View style={{ ...styles.animatedContainer, opacity: fadeAnim }}>
          <Text style={styles.question}>Who are you working with?</Text>
          <TouchableOpacity style={workingWith === "clinician" ? styles.buttonSelected : styles.button} onPress={() => handleWorkingWithChoice("clinician")}>
            <Text style={styles.choice}>I am working with a clinician</Text>
          </TouchableOpacity>
          <TouchableOpacity style={workingWith === "independent" ? styles.buttonSelected : styles.button} onPress={() => handleWorkingWithChoice("independent")}>
            <Text style={styles.choice}>I am working independently</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      <View style={styles.bottomContainer}>
        {workingWith !== "" && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.choice}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7DAFF',
    padding: 30,
    paddingTop: 50, 
  },
  animatedContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'left',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Almarai_Bold',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 35,
    lineHeight: 48,
    letterSpacing: 0.03,
    color: '#000000',
    marginBottom: 25, 
  },
  subtitle: {
    fontFamily: 'Almarai_Light',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: '#000000',
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  choice: {
    fontSize: 19,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Almarai',
  },
  button: {
    minHeight: 45,
    width: '80%',
    backgroundColor: '#F7D7E3',
    padding: 7,
    borderRadius: 58,
    marginTop: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'column', 
  },
  buttonSelected: {
    minHeight: 45,
    width: '80%',
    backgroundColor: '#E891A5', 
    padding: 7,
    borderRadius: 58,
    marginTop: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center', 
    flexDirection: 'column', 
  },
  nextButton: {
    height: 40,
    width: 125,
    backgroundColor: '#F7D7E3',
    padding: 7,
    borderRadius: 58,
    marginTop: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
