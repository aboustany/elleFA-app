import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/frontend/features/screens/AppNavigator';
import AuthWrapper from './src/frontend/features/authentication/AuthWrapper';
import * as Font from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SafeViewAndroid from './src/frontend/components/SafeViewAndroid';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Almarai: require('./src/frontend/assets/fonts/Almarai-Regular.ttf'),
          Almarai_Bold: require('./src/frontend/assets/fonts/Almarai-Bold.ttf'),
          Almarai_Light: require('./src/frontend/assets/fonts/Almarai-Light.ttf'),
          Almarai_ExtraBold: require('./src/frontend/assets/fonts/Almarai-ExtraBold.ttf'),
          DMSerifDisplay_Italic: require('./src/frontend/assets/fonts/DMSerifDisplay-Italic.ttf'),
          DMSerifDisplay: require('./src/frontend/assets/fonts/DMSerifDisplay-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.log("Error loading fonts", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; 
  }

  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <AuthWrapper>
            <AppNavigator />
          </AuthWrapper>
        </NavigationContainer>
     </SafeAreaProvider>
  );
}
