import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import SignOutButton from '../../../components/SignOutButton';


const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
        <SignOutButton/>
      </View>
      <View style={styles.content}>
        <Text>Main Content</Text>
        <SignOutButton/>
      </View>
    </SafeAreaView>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
  }
});

export default HomePage;
