import React from 'react';
import { Auth } from 'aws-amplify';
import { TouchableOpacity, Text } from 'react-native';

const SignOutButton = () => {
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <TouchableOpacity onPress={signOut}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default SignOutButton;
