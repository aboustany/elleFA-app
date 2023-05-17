import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';
import SignInSignUpPage from './SignInSignUpPage';
import HomePage from './HomePage';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomePage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignInSignUpPage}
          options={({ navigation }) => ({
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity style={ styles.button } onPress={() => navigation.goBack()}>
              <Ionicons name="md-arrow-back" size={24} color="black" />
            </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 15, 
      padding: 10,
      marginLeft:5,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default AppNavigator;
