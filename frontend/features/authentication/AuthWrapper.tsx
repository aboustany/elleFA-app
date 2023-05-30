import { View, Text } from 'react-native';
import { Amplify, Hub, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import Authentication from './AuthenticationStack';
import GoalSetting from '../goalSetting/GoalSettingStack';
import AppNavigator from '../screens/AppNavigator';
import config from '../../../src/aws-exports.js';
Amplify.configure(config);

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = (props: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [goalsSet, setGoalsSet] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    console.log('AUTH WRAPPER');
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('AUTHENTICATED USER', user);
        setAuthenticated(true);
        setLoading(false);
        // checkIfGoalsSet(user) // TO BE DEFINED
        //   .then((goalsSetForUser) => {
        //     setGoalsSet(goalsSetForUser);
        //     setLoading(false);
        //   })
        //   .catch((err) => {
        //     console.log('Error checking if goals are set', err);
        //     setLoading(false);
        //   });
      })
      .catch((err) => {
        setAuthenticated(false);
        setLoading(false);
      });
      
    Hub.listen('auth', (data) => {
      console.log('AUTH HUB', data);
      switch (data.payload.event) {
        case 'signIn':
          setAuthenticated(true);
          break;
        case 'signOut':
          setAuthenticated(false);
          setGoalsSet(false);
          break;
        default:
          break;
      }
    });
  }, []);
  if (loading) return <View />;
  if (!authenticated) return <Authentication />;
  if (!goalsSet){
    console.log("Goals not set")
    return <GoalSetting />;
  } 
  return <AppNavigator />;
};

export default AuthWrapper;
