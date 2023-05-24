import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './frontend/features/screens/AppNavigator.jsx';
import AuthWrapper from './frontend/features/authentication/AuthWrapper.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <AuthWrapper>
        <AppNavigator />
      </AuthWrapper>
    </NavigationContainer>
  );
}
