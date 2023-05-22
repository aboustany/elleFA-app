import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      navigation.navigate('HomePage');
    } catch (error) {
      console.log('error signing in:', error);
      if (error.code === 'UserNotConfirmedException') {
        navigation.navigate('ConfirmSignUpPage', {email, password});
        Alert.alert('Error signing in', 'Please confirm your account. Check your email for the confirmation code.');
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
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text>Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('REGISTER')}>
      <Text>Don't have an account? Sign Up</Text>
    </TouchableOpacity>
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
    signInText: {
      color: 'blue',
    },
  });

export default Login;
