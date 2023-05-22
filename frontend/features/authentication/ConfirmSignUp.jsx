import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';

const ConfirmSignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState(null);
  

  const handleConfirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      Alert.alert('User successfully confirmed');
      navigation.navigate('LOGIN');
    } catch (error) {
      console.log('error confirming sign up', error);
      setError(error.message);
      Alert.alert('Error confirming sign up', error.message);
    }
  };

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Confirmation code resent successfully');
    } catch (error) {
      console.log('error resending code:', error);
      Alert.alert('Error resending code', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Sign Up</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail}
      />
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
    fontFamily: 'Georgia',
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
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default ConfirmSignUp;