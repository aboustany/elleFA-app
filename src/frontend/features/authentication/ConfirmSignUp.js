import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);

const ConfirmSignUp = ({ navigation, route}) => {

  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState(null);
  
  const handleConfirmSignUp = async () => {
    try {
      const { email, password } = route.params;

      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn(email, password); 
      Alert.alert('User successfully confirmed and signed in');
    } catch (error) {
      console.log('error confirming sign up or signing in', error);
      setError(error.message);
      Alert.alert('Error confirming sign up or signing in', error.message);
    }
  };
  

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Confirmation code successfully resent to ', email);
    } catch (error) {
      console.log('error resending code:', error);
      Alert.alert('Error resending code', error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Sign Up</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Confirmation Code" 
          value={confirmationCode} 
          onChangeText={setConfirmationCode}
        />
        <TouchableOpacity style={styles.button} onPress={handleConfirmSignUp}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resendCode}>
          <Text style={styles.buttonText}>Resend Code</Text>
        </TouchableOpacity>

        {/* <Text style={styles.error}>{error.message}</Text> : null */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7DAFF',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Almarai',
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
      width: '40%',
      backgroundColor: '#F7D7E3',
      padding: 7,
      borderRadius: 58,
      marginTop: 15,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1,
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
    },
  
  error: {
    color: 'red',
    marginTop: 10,
  },
  
});

export default ConfirmSignUp;