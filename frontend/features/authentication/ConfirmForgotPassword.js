import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
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
    <View style={styles.container}>
    <Text style={styles.title}>Code sent to {route.params.email}</Text>
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
    signInText: {
      color: 'blue',
    },
    errorText: {
        marginTop: 20,
        color: 'red',
        fontSize: 12,
      },
  });

