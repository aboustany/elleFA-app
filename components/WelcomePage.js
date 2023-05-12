import React, { useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
    const scale = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to elleFA</Text>
           
            <Image
                source={require('../assets/images/elleFA_logo_no_bg.png')} // replace with your image url
                style={styles.image}
            />

            <Text style={styles.info}>A centralized platform to track all your endometriosis needs</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.buttonText}>Let's Get Started!</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7DAFF',
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    fontFamily: 'Georgia',
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    borderRadius: 15, 
    backgroundColor: "#ffffff",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    margin:2.5,
  },
  info:{
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 30,
    fontSize: 20,
  }
});

export default WelcomePage;
