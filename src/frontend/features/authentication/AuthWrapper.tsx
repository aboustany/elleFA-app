import { View, Text } from "react-native";
import { Amplify, Hub, Auth,API ,graphqlOperation} from "aws-amplify";
import React, { createContext, useEffect, useState } from "react";
import Authentication from "./AuthenticationStack";
import GoalSetting from "../goalSetting/GoalSettingStack";
import AppNavigator from "../screens/AppNavigator";
import config from "../../../aws-exports.js";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "../../../API";
import { getUser } from "../../../graphql/queries"
Amplify.configure(config);

type Props = {
  children: React.ReactNode;
};

export const context = createContext(null);

const AuthWrapper = (props: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [goalsSet, setGoalsSet] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("AUTH WRAPPER");
    Auth.currentAuthenticatedUser()
      .then(async(user) => {
        console.log("AUTHENTICATED USER", user);
        setAuthenticated(true);
        setLoading(false);

        const graphQLUser = await API.graphql<GraphQLQuery<GetUserQuery>>(graphqlOperation(getUser,{input:{id:user.userSub}}));
        setGoalsSet(!!graphQLUser.data.getUser.goals)
        console.log("Goals already set", !!graphQLUser.data.getUser.goals)
        
        // TO BE DEFINED: method for checking if intial goals are set

        // checkIfGoalsSet(user)
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
  }, []);
  if (loading) return <View />;
  if (!authenticated) return <Authentication />;
  if (!goalsSet) {
    console.log("Goals not set");
    return (
      <context.Provider value={{ setGoalsSet }}>
        <GoalSetting />
      </context.Provider>
    );
  }
  return <AppNavigator />;
};

export default AuthWrapper;
