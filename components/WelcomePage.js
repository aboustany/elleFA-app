import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomePage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to our App!</Text>
            <Button
                title="Sign In / Sign Up"
                onPress={() => navigation.navigate('SignInSignUp')}
            />
        </View>
    );
};

export default WelcomePage;
