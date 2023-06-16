import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import SignOutButton from '../../../../components/SignOutButton';
import { Ionicons } from '@expo/vector-icons';
import SafeViewAndroid from '../../../../components/SafeViewAndroid';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider'


const MentalHealthSymptomPage = ({ navigation }) => {

  const [moodVisible, setMoodVisible] = useState(false);
  const [emotionsVisible, setEmotionsVisible] = useState(false);
  
  const [mood, setMood] = useState(5);
  const [emotions, setEmotions] = useState({
    anxiety: false,
    irritable: false,
    anger: false,
    sadness: false,
    happiness: false,
    excitement: false
  });

  return (
    <>
    <LinearGradient 
            colors={['rgba(141, 128, 227, 0.6)', '#ffffff']}
            style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}
    />
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.container}>
        <View style={styles.header}>

          <Text style={styles.headerText}>Mental Health</Text>

        </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => setMoodVisible(!moodVisible)} style={styles.button}>
          <Text style={styles.buttonText}>Mood</Text>
        </TouchableOpacity>

        {moodVisible && (
          <View style={styles.moodContainer}>
            <Text style={{fontFamily: 'Almarai_Light', fontSize: 17}}>How was your general mood today?</Text>

            <View style={styles.sliderContainer}>
              <Ionicons name="sad-outline" size={24} color="black" />
              <Slider
                style={{flex: 1}}
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={mood}
                onValueChange={(value) => setMood(value)}
              />
              <Ionicons name="happy-outline" size={24} color="black" />
            </View>
            <Text style={styles.sliderValue}>{mood}</Text>
          </View>
        )}

        <TouchableOpacity onPress={() => setEmotionsVisible(!emotionsVisible)} style={styles.button}>
          <Text style={styles.buttonText}>Emotions</Text>
        </TouchableOpacity>

        {emotionsVisible && (
          <View style={styles.emotionsContainer}>
            {Object.entries(emotions).map(([key, value]) => (
              <View key={key} style={styles.switchContainer}>
                <Text>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                <Switch
                //   ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setEmotions({ ...emotions, [key]: !value })}
                  value={value}
                />
              </View>
            ))}
          </View>
        )}
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
  buttonText: {
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "DMSerifDisplay",
  },
  moodContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  emotionsContainer: {
    width: '40%',
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderValue: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Almarai_Bold'
  },
});

export default MentalHealthSymptomPage;
