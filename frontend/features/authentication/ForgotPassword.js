import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthenticationStackParamList } from './AuthenticationStack';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
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
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text>"Send Code"</Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
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
