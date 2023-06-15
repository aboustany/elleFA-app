import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PdfPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>PDF Page</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default PdfPage;
