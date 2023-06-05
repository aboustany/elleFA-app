import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);


const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  
  const handleSendCode = () => {
    Auth.forgotPassword(email)
      .then((data) => {
        console.log('data', data);
        navigation.navigate('CONFIRM_FORGOT_PASSWORD', { email });
      })
      .catch((err) => {
        console.log('err', err, Object.keys(err), err.code);
        switch (err.name) {
          case 'UserNotFoundException':
            setErrorMessage('User does not exist');
            break;
          case 'AuthError':
            setErrorMessage(err.log);
            break;
          case 'LimitExceededException':
            setErrorMessage('Attempt limit exceeded, please try after some time');
          default:
            console.log('Unknown error');
        }
      });
  };
  useEffect(() => {
    setErrorMessage(null);
  }, [email]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>Please enter the email used to login to your account. A code will be sent to verify your identity.</Text>
      </View>
      <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;

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
      // fontWeight:'bold'
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
    instructions: {
      marginTop: 5,
      marginBottom: 20,
      color: '#000000',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Almarai_Light'
    },
    instructionsContainer:{
      width: 350
    },
    errorText: {
        marginTop: 20,
        color: 'red',
        fontSize: 12,
    },
  });
