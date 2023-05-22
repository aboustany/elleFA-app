import React from 'react';
import AppNavigator from './frontend/features/screens/AppNavigator.jsx';
import AuthWrapper from './frontend/features/authentication/AuthWrapper.tsx';
import { NavigationContainer } from '@react-navigation/native';
// import Amplify from 'aws-amplify';
// import config from './src/aws-exports.js';
// Amplify.configure(config);

export default function App() {
  return (
    <NavigationContainer>
      <AuthWrapper>
        <AppNavigator />
      </AuthWrapper>
    </NavigationContainer>
  );
}
