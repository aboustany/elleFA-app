import React from 'react';
import { Auth } from 'aws-amplify';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignOutButton = () => {
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    signOutButton: {
      marginRight: 25, 
    }
  });
  

export default SignOutButton;
