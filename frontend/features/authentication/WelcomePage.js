import React, { useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
    const logoAnim = useRef(new Animated.Value(0)).current;
    const textAnim = useRef(new Animated.Value(0)).current;
    const promptAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(logoAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(promptAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <Animated.View style={styles.container}>
            <Animated.Text style={[styles.welcome, {opacity: textAnim}]}>Welcome to</Animated.Text>
            <Animated.Image
                source={require('../../assets/images/logo-text-only.png')} 
                style={[styles.logoText, {opacity: logoAnim}]}
                resizeMode="contain"
            />
            <Animated.Image
                source={require('../../assets/images/black-logo-without-text.png')} 
                style={[styles.image, {opacity: logoAnim}]}
            />
            
            <Animated.Text style={[styles.info, {opacity: textAnim}]}>A centralized platform to track all your endometriosis needs</Animated.Text>
            <Animated.View style={{opacity: promptAnim}}> 
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('REGISTER')}>
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D7DAFF',
    },
    ellipse: {
        position: 'absolute',
        width: 287,
        height: 287,
        left: -72,
        top: -63,
        backgroundColor: '#8D80E3',
        borderRadius: 287/2,
        opacity: 0.2,
    },
    welcome:{
      fontFamily:'Almarai_Light',
      fontSize: 30,
      marginBottom: -25
    },
    image: {
        width: 175,
        height: 175,
        marginBottom: 40,
    },
    logoText:{
        width: '40%',
        height: '20%',
    },
    button: {
      width: 180,
      backgroundColor: '#F7D7E3',
      padding: 10,
      borderRadius: 58,
      marginTop: 10,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1,
    },
    buttonText: {
      fontSize: 19,
      textAlign: 'center',
      color: '#000000',
      fontFamily: 'Almarai',
    },
    info:{
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 30,
        fontSize: 20,
        fontFamily: 'Almarai_Light',
    }
});

export default WelcomePage;
