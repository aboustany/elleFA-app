import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import config from '../../src/aws-exports';
Amplify.configure(config);

const SignInSignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const [resendCode, setResendCode] = useState(false);


  // const handleSignUp = async () => {
  //   try {
  //     const { user } = await Auth.signUp({
  //       email,
  //       password,
  //       attributes: {
  //         email,
  //         given_name: givenName,
  //         family_name: familyName,
  //         phone_number: phoneNumber,
  //       },
  //     });
  //     console.log(user);
  //   } catch (error) {
  //     console.log('error signing up:', error);
  //     Alert.alert('Error signing up', error.message);
  //   }
  // };

  const handleSubmit = async () => {
    if (isConfirming) {
      try {
        await Auth.confirmSignUp(email, confirmationCode);
        Alert.alert('User successfully confirmed');
        setIsConfirming(false); 
        navigation.navigate('HomePage');
      } catch (error) {
        console.log('error confirming sign up', error);
        Alert.alert('Error confirming sign up', error.message);
      }
    } else {
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
        setIsConfirming(true);
      } catch (error) {
        console.log('error signing up:', error);
        Alert.alert('Error signing up', error.message);
      }
    }
  };
  
  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      navigation.navigate('HomePage');
    } catch (error) {
      console.log('error signing in:', error);
      // handles user email confirmation, could be improved
      if (error.code === 'UserNotConfirmedException') {
        setIsConfirming(true);
        setResendCode(true);
        Alert.alert('Error signing in', 'Please confirm your account. Check your email for the confirmation code.');
      } else {
        Alert.alert('Error signing in', error.message);
      }
    }
  };
  

  const handleResendCode = async () => {
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
      <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={text => setEmail(text)}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        value={password} 
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      {isSignUp && (
        <>
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
        </>
      )}
   
      {isConfirming && (
        <TextInput 
          style={styles.input} 
          placeholder="Confirmation Code" 
          value={confirmationCode} 
          onChangeText={text => setConfirmationCode(text)}
        />
      )}

      <TouchableOpacity 
        style={styles.button} 
        onPress={isConfirming ? handleSubmit : (isSignUp ? handleSubmit : handleSignIn)}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.buttonText}>{`Switch to ${isSignUp ? 'Sign In' : 'Sign Up'}`}</Text>
      </TouchableOpacity>

      {resendCode && (
        <TouchableOpacity style={styles.button} onPress={handleResendCode}>
          <Text style={styles.buttonText}>Resend Confirmation Code</Text>
        </TouchableOpacity>
      )}
      
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
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },

  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
},
  buttonText: {
      fontSize: 20,
      textAlign: 'center',
  },
});

export default SignInSignUpPage;
