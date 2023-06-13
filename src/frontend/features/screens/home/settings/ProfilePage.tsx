import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Button, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SafeViewAndroid from '../../../../components/SafeViewAndroid';
import { Auth } from 'aws-amplify';

const ProfilePage = ({ navigation }) => {

  const [user, setUser] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
      } catch (error) {
        console.log('error fetching user', error);
      }
    };

    fetchUser();
  }, []);

  const handleChangePassword = async () => {
    if(newPassword !== newPasswordConfirmation) {
      alert('New passwords do not match.');
      return;
    }

    try {
      await Auth.changePassword(user, oldPassword, newPassword);
      alert('Password changed successfully!');
      setOldPassword('');
      setNewPassword('');
      setNewPasswordConfirmation('');
      setShowChangePasswordForm(false);
    } catch (error) {
      console.log('error changing password', error);
      alert('Failed to change password.');
    }
  };

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
    <ScrollView>
    <TouchableWithoutFeedback>
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}> Account Information </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.option}>Email: {user ? user.attributes.email : 'Loading...'}</Text>
        <Text style={styles.option}>Given Name: {user ? user.attributes.given_name : 'Loading...'}</Text>
        <Text style={styles.option}>Family Name: {user ? user.attributes.family_name : 'Loading...'}</Text>
        <Text style={styles.option}>Phone Number: {user ? user.attributes.phone_number : 'Loading...'}</Text>
        <TouchableOpacity style={styles.changePasswordButton} onPress={() => setShowChangePasswordForm(!showChangePasswordForm)}><Text style={styles.changePasswordButtonText}> Change Password? </Text></TouchableOpacity>
      </View>

      {showChangePasswordForm && (
        <View style={styles.changePasswordForm}>
          <Text style={styles.changePasswordLabel}>Change Password:</Text>
          <TextInput 
            style={styles.changePasswordInput}
            secureTextEntry={true}
            placeholder='Old Password'
            onChangeText={setOldPassword}
            value={oldPassword}
          />
          <TextInput 
            style={styles.changePasswordInput}
            secureTextEntry={true}
            placeholder='New Password'
            onChangeText={setNewPassword}
            value={newPassword}
          />
          <TextInput 
            style={styles.changePasswordInput}
            secureTextEntry={true}
            placeholder='Re-enter New Password'
            onChangeText={setNewPasswordConfirmation}
            value={newPasswordConfirmation}
          />
          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </ScrollView>
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
  changePasswordForm: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  changePasswordLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  changePasswordInput: {
    height: 45,
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 58,
    paddingLeft: 10,
    backgroundColor: 'transparent',
  },
  button: {
    width: '40%',
    backgroundColor: 'rgba(171, 150, 227, 1)',
    padding: 7,
    borderRadius: 20,
    marginTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
},
   buttonText: {
    fontSize: 18,
    textAlign: 'center',
},
changePasswordButtonText:{
    fontSize: 17,
    marginBottom: 10,
    fontFamily:'Almarai'
},
changePasswordButton: {
    width: '40%',
    backgroundColor: 'rgba(171, 150, 227, 1)',
    paddingTop: 5,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    alignSelf: 'center',
    alignItems: 'center',
},
});

export default ProfilePage;
