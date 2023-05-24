import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
Amplify.configure(awsconfig);

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name: givenName,
          family_name: familyName,
          phone_number: phoneNumber,
        },
      });
      console.log(user);
      navigation.navigate('CONFIRM_EMAIL', {email: email, password: password});
    } catch (error) {
      console.log('error signing up:', error);
      Alert.alert('Error signing up', error.message);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
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
    <TextInput 
        style={styles.input} 
        placeholder="Given Name" 
        value={givenName} 
        onChangeText={text => setGivenName(text)}
    />
    <TextInput 
        style={styles.input} 
        placeholder="Family Name" 
        value={familyName} 
        onChangeText={text => setFamilyName(text)}
    />
    {/* Should specify that the format needs to be: "+(country code)(phone number)"  */}
    <TextInput 
        style={styles.input} 
        placeholder="Phone Number: +**********" 
        value={phoneNumber} 
        onChangeText={text => setPhoneNumber(text)}
    />
    <TouchableOpacity  style={styles.button} onPress={handleSignUp}>
      <Text>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('LOGIN')}>
      <Text>Already have an account? Sign In</Text>
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
  
export default SignUp;
