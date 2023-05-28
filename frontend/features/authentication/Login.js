import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
Amplify.configure(awsconfig);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      navigation.navigate('HomePage');
    } catch (error) {
      console.log('error signing in:', error);
      setErrorMessage(error.message);
      if (error.code === 'UserNotConfirmedException') {
        Alert.alert(
          'Error signing in',
          'Please confirm your account. Check your email for the confirmation code.'
        );
        navigation.navigate('CONFIRM_EMAIL', { email: email, password: password });
      } else {
        Alert.alert('Error signing in', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate('FORGOT_PASSWORD')}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('REGISTER')}>
         <Text style={styles.signInText}>Don't have an account?<Text style={[styles.signUpText, {color: '#4A4A4A', fontWeight: 'bold'}]}> Sign Up</Text>
          </Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(141,128,227,0.2)',
    padding: 15,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    fontFamily: 'Georgia',
    color: '#000000',
    fontWeight:'bold',
    textAlign: 'left'
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
    marginTop: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Georgia',
  },
  signUp: {
    marginTop: 20,
  },
  signUpText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#4A4A4A',
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    fontSize: 12,
  },
  forgotPasswordText: {
    color: '#4A4A4A',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default Login;
