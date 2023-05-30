import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './frontend/features/screens/AppNavigator.tsx';
import AuthWrapper from './frontend/features/authentication/AuthWrapper.tsx';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Almarai: require('./frontend/assets/fonts/Almarai-Regular.ttf'),
          Almarai_Bold: require('./frontend/assets/fonts/Almarai-Bold.ttf'),
          Almarai_Light: require('./frontend/assets/fonts/Almarai-Light.ttf'),
          Almarai_ExtraBold: require('./frontend/assets/fonts/Almarai-ExtraBold.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.log("Error loading fonts", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // You can return an ActivityIndicator or a splash screen here
  }

  return (
    <NavigationContainer>
      <AuthWrapper>
        <AppNavigator />
      </AuthWrapper>
    </NavigationContainer>
  );
}
