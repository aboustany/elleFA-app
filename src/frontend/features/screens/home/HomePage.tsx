import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import SignOutButton from '../../../components/SignOutButton';
import { Ionicons } from '@expo/vector-icons';
import SafeViewAndroid from '../../../components/SafeViewAndroid';


const HomePage = ({ navigation }) => {

  const handleMenuPress = () => {
    navigation.navigate('ACCOUNT_MANAGEMENT');
  };

  const handlePdfPress = () => {
    navigation.navigate('PDF_PAGE');
  };

  const handleBellPress = () => {
    // Add logic to handle mute/unmute notifications
    alert('Notifications button pressed');
  };



  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftIcons}>
          <TouchableOpacity onPress={handleMenuPress}>
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Header</Text>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity onPress={handlePdfPress} style={styles.iconButton}>
            <Ionicons name="print-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBellPress} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text>HOME PAGE</Text>
        <SignOutButton/>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    top: -10,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',  
  },
  headerText: {
    fontSize: 20,
  },
  signOutButton: {
    marginRight: 10, 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
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
