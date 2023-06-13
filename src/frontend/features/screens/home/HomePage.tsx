import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import SignOutButton from '../../../components/SignOutButton';
import { Ionicons } from '@expo/vector-icons';
import SafeViewAndroid from '../../../components/SafeViewAndroid';
import { LinearGradient } from 'expo-linear-gradient';


const HomePage = ({ navigation }) => {

  const handleMenuPress = () => {
    navigation.navigate('SETTINGS');
  };

  const handlePdfPress = () => {
    navigation.navigate('PDF_PAGE');
  };

  const handleBellPress = () => {
    // Add logic to handle mute/unmute notifications
    alert('Notifications button pressed');
  };

  return (
    <>
    <LinearGradient 
            colors={['rgba(141, 128, 227, 0.6)', '#ffffff']}
            style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}
    />
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeftIcons}>
            <TouchableOpacity onPress={handleMenuPress}>
              <Ionicons name="menu-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>Home</Text>
          <View style={styles.headerRightIcons}>
            <TouchableOpacity onPress={handlePdfPress} style={styles.iconButton}>
              <Ionicons name="print-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBellPress} style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text>HOME PAGE</Text>
          <SignOutButton/>
        </View>
      </View> 
    </SafeAreaView>
    </>
  ); 
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',  
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'DMSerifDisplay',
  },
  signOutButton: {
    marginRight: 10, 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerRightIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },
  headerLeftIcons:{
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default HomePage;
