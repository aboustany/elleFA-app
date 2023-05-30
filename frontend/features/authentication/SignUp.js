import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
Amplify.configure(awsconfig);

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

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
      navigation.navigate('CONFIRM_EMAIL', { email: email, password: password });
    } catch (error) {
      console.log('error signing up:', error);
      setErrorMessage(error.message);
      Alert.alert('Error signing up', error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput style={styles.input} placeholder="Name" value={givenName} onChangeText={setGivenName} />
      <TextInput style={styles.input} placeholder="Surname" value={familyName} onChangeText={setFamilyName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('LOGIN')}>
         <Text style={styles.signInText}>Already have an account?<Text style={[styles.signInText, {color: '#4A4A4A', fontWeight: 'bold'}]}> Sign In</Text>
          </Text>
      </TouchableOpacity>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
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
    padding: 15,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    fontFamily: 'Almarai',
    color: '#000000',
    // fontWeight:'bold',
    paddingBottom: 10,
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
    marginTop: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  buttonText: {
    fontSize: 19,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Almarai',
  },
  signIn: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#000000',
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    fontSize: 12,
  },
});

export default SignUp;