import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignOutButton from '../../components/SignOutButton.jsx';

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
};

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
        <SignOutButton />
      </View>
      <View style={styles.content}>
        <Text>Main Content</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
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
});

export default HomePage;
