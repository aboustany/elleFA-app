import { View, Text } from "react-native";
import { Amplify, Hub, Auth,API ,graphqlOperation} from "aws-amplify";
import React, { createContext, useEffect, useState } from "react";
import Authentication from "./AuthenticationStack";
import GoalSetting from "../goalSetting/GoalSettingStack";
import AppNavigator from "../screens/AppNavigator";
import config from "../../../aws-exports";
import { AuthContext } from "./AuthContext";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "../../../API";
import { getUser, getUserGoals } from "../../../graphql/queries"
Amplify.configure(config);

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = (props: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [goalsSet, setGoalsSet] = useState<boolean>(false);
  const [goalsUpdated, setGoalsUpdated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<String>("");

  useEffect(() => {
    console.log("Goals already set? ", goalsSet);
  }, [goalsSet]);

  useEffect(() => {
    console.log("Goals updated? ", goalsUpdated);
  }, [goalsUpdated]);

  useEffect(() => {
    console.log("AUTH WRAPPER");
    Auth.currentAuthenticatedUser()
    .then(async (user) => {
      console.log("AUTHENTICATED USER", user); 

      const userSub = user.attributes.sub;
      setUserId(userSub); 
      console.log('Setting user id:', userSub);

      setAuthenticated(true);
      setLoading(false);
      
      try{

        const graphQLUser = await API.graphql<GraphQLQuery<GetUserQuery>>(graphqlOperation(
          getUser, {    
            id: userSub
        }));

        console.log("GRAPH QL USER:", graphQLUser);

        setGoalsSet(!!graphQLUser.data.getUser.goals);
        setGoalsUpdated(!!graphQLUser.data.getUser.goals);
      }
      catch(err){
        console.error(err);
      }     
    })
    .catch((err) => {
      setAuthenticated(false);
      setLoading(false);
    });

    Hub.listen("auth", (data) => {
      console.log("AUTH HUB", data);
      switch (data.payload.event) {
        case "signIn":
          setAuthenticated(true);
          break;
        case "signOut":
          setAuthenticated(false);
          setGoalsSet(false);
          break;
        default:
          break;
      } 
    });
  }, [userId]);

  const contextValue = {
    userId,
    goalsSet,
    setGoalsSet,
    goalsUpdated,
    setGoalsUpdated
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading && <View />}
      {!loading && !authenticated && <Authentication />}
      {!loading && authenticated && (!goalsSet  || !goalsUpdated) && <GoalSetting />}
      {!loading && authenticated && goalsSet  && goalsUpdated && <AppNavigator />}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
