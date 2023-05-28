import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from './ForgotPassword';
import ConfirmForgotPassword from './ConfirmForgotPassword';
import WelcomePage from './WelcomePage';

export type AuthenticationStackParamList = {
  WELCOME: undefined;
  LOGIN: undefined;
  REGISTER: undefined;
  FORGOT_PASSWORD: undefined;
  CONFIRM_EMAIL: { email: string; password: string };
  CONFIRM_FORGOT_PASSWORD: { email: string };
};

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParamList>();

export default function Authentication() {
  return (
    <AuthenticationStack.Navigator initialRouteName="WELCOME">
      <AuthenticationStack.Screen
        name="WELCOME"
        component={WelcomePage}
        options={{ headerShown: false }} 
      />
      <AuthenticationStack.Screen
        name="LOGIN"
        component={Login}
        options={() => ({
          title: 'Login',
          headerShown: false,
        })}
      />
      <AuthenticationStack.Screen
        name="REGISTER"
        component={SignUp}
        options={() => ({
          title: 'Register',
          headerShown: false,
        })}
      />
      <AuthenticationStack.Screen
        name="CONFIRM_EMAIL"
        component={ConfirmSignUp}
        options={() => ({
          title: 'Confirm Email',
          headerShown: false,
        })}
      />
      <AuthenticationStack.Screen
        name="FORGOT_PASSWORD"
        component={ForgotPassword}
        options={() => ({
          title: 'Forgot Password',
          headerShown: false,
        })}
      />
      <AuthenticationStack.Screen
        name="CONFIRM_FORGOT_PASSWORD"
        component={ConfirmForgotPassword}
        options={() => ({
          title: 'Set New Password',
          headerShown: false,
        })}
      />
    </AuthenticationStack.Navigator>
  );
}
