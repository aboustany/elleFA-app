import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);

const ConfirmForgotPassword = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signUp = async () => {
    Auth.forgotPasswordSubmit(route.params.email, value, newPassword)
      .then((result) => {
        console.log('RESULT', result);
        navigation.navigate('LOGIN');
      })
      .catch((error) => {
        console.log('error confirming code:', error, error.name);
        switch (error.name) {
          case 'CodeMismatchException':
            console.log('CodeMismatchException');
            setErrorMessage('Invalid Code');
            break;
          case 'ExpiredCodeException':
            setErrorMessage('Your code has been expired, please resend it to your email.');
            console.log('ExpiredCodeException');
            break;
          case 'LimitExceededException':
            setErrorMessage('Too many attempts. Please try again later.');
            console.log('LimitExceededException');
            break;
          case 'UserNotFoundException':
            setErrorMessage('User does not exist.');
            console.log('UserNotFoundException');
            break;
          case 'NotAuthorizedException':
            console.log('NotAuthorizedException');
            navigation.navigate('LOGIN');
            break;
          case 'InvalidPasswordException':
            console.log('InvalidPasswordException');
            setErrorMessage('Invalid Password: ' + error.message.split(':')[1]);
            break;
          case 'AuthError':
            console.log('AuthError');
            console.log(error);
            setErrorMessage(error.message);
            break;
          default:
            console.log('default');
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>
    <Text style={styles.title}>A code has been sent to {route.params.email}</Text>

    <View style={styles.instructionsContainer}>
      <Text style={styles.instructions}>Please enter the authentication code you received below, followed by your new password.</Text>
    </View>

          <TextInput 
              style={styles.input} 
              placeholder="Authentication Code" 
              value={value} 
              onChangeText={setValue}
          />
          <TextInput
              style={styles.input}
              placeholder="New Password"
              onChangeText={setNewPassword}
              secureTextEntry={true}
              value={newPassword}
          />
          
            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View> 
    </TouchableWithoutFeedback>

  );
};

export default ConfirmForgotPassword;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D7DAFF',
    },
    title: {
      fontSize: 23,
      marginBottom: 20,
      fontFamily: 'Almarai',
      // fontWeight:'bold',
      textAlign: 'center'
    },
    input: {
      height: 45,
      width: '80%',
      borderColor: '#000000',
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 58,
      paddingLeft: 10,
      backgroundColor: 'transparent',
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
    signInText: {
      color: 'blue',
    },
    errorText: {
        marginTop: 20,
        color: 'red',
        fontSize: 12,
      },
      instructions: {
        marginTop: 5,
        marginBottom: 20,
        color: '#000000',
        fontSize: 16,
        textAlign: 'center'
      },
      instructionsContainer:{
        width: 350
      }
  });

