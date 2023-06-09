import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../../authentication/AuthContext';
import SafeViewAndroid from '../../../../components/SafeViewAndroid';

const AccountManagement = ({ navigation }) => {

  const { setGoalsUpdated } = useContext(AuthContext);
  
  const handlePress = (value) => {
    navigation.navigate("PROFILE_PAGE")
  }

  const handleGoalsAndMedicalHistory = () =>{
    setGoalsUpdated(false);
  }

  return (

    <><LinearGradient
        colors={["rgba(141, 128, 227, 0.6)", "#ffffff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
    
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={styles.container}>
      

      <View style={styles.header}>
        <Text style={styles.headerText}> Settings </Text>
      </View>

      <View style={styles.content}>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('profile')}>
          <View style={styles.optionContent}>
            <Ionicons name="person-circle" size={30} color="black"/>
            <Text style={styles.optionText}> This Account </Text>
            <Text> {'>'} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('security')}>
          <View style={styles.optionContent}>
            <Ionicons name="lock-closed" size={30} color="black"/>
            <Text style={styles.optionText}> Security and Privacy </Text>
            <Text> {'>'} </Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handleGoalsAndMedicalHistory()}>
          <View style={styles.optionContent}>
            <Ionicons name="heart" size={30} color="black"/>
            <Text style={styles.optionText}> Goals and Medical History </Text>
            <Text> {'>'} </Text> 
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handlePress('help')}>
          <View style={styles.optionContent}>
            <Ionicons name="help-circle" size={30} color="black"/>
            <Text style={styles.optionText}> Help </Text>
            <Text> {'>'} </Text>
          </View>
        </TouchableOpacity>

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
    fontFamily: "DMSerifDisplay"
  },
  signOutButton: {
    marginRight: 10, 
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch', 
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  option: {
    width: '90%',
    padding: 15,
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 20, 
    fontFamily: 'Almarai_Light',
  },
});

export default AccountManagement;
