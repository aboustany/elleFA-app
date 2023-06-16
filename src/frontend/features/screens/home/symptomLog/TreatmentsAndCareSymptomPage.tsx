import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import SignOutButton from '../../../../components/SignOutButton';
import { Ionicons } from '@expo/vector-icons';
import SafeViewAndroid from '../../../../components/SafeViewAndroid';
import { LinearGradient } from 'expo-linear-gradient';


const TreatmentsAndCareSymptomPage = ({ navigation }) => {

  const handleLogPress = () => {

  }

  return (
    <>
    <LinearGradient 
            colors={['rgba(141, 128, 227, 0.6)', '#ffffff']}
            style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}
    />
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>

          <Text style={styles.headerText}>Today's Log</Text>

        </View>



        <View style={styles.content}>
            

    
      
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
  button:{
    height: 45,
      borderRadius: 58,
      backgroundColor: '#F7D7E3',
      justifyContent: 'center',
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      width: 174,
      marginTop: 30,
      elevation: 4,
      marginBottom: 7,
  },
  buttonText:{
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "Almarai",
  }
});

export default TreatmentsAndCareSymptomPage;
