import { View, Text } from "react-native";
import { Amplify, Hub, Auth, API, graphqlOperation } from "aws-amplify";
import React, { createContext, useEffect, useState } from "react";
import Authentication from "./AuthenticationStack";
import GoalSetting from "../goalSetting/GoalSettingStack";
import AppNavigator from "../screens/AppNavigator";
import config from "../../../aws-exports";
import { AuthContext } from "./AuthContext";
import { GraphQLQuery } from "@aws-amplify/api";
import { GetUserQuery } from "../../../API";
import { getUser, getUserGoals } from "../../../graphql/queries";
Amplify.configure(config);

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = (props: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [goalsSet, setGoalsSet] = useState<boolean>(false);
  const [goalsUpdated, setGoalsUpdated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<String>("");

  useEffect(() => {
    console.log("Goals already set? ", goalsSet);
  }, [goalsSet]);

  useEffect(() => {
    console.log("Goals updated? ", goalsUpdated);
  }, [goalsUpdated]);

  const fetchUserGoals = async (userSub: string) => {
    try {
      const graphQLUser = await API.graphql<GraphQLQuery<GetUserQuery>>(
        graphqlOperation(getUser, {
          id: userSub,
        })
      );

      console.log("GRAPH QL USER:", graphQLUser);

      setGoalsSet(!!graphQLUser.data.getUser.goals);
      setGoalsUpdated(!!graphQLUser.data.getUser.goals);
    } catch (err) {
      console.error("Error finding graphQL User:", err);
    }
  };

  useEffect(() => {
    console.log("AUTH WRAPPER");
    Auth.currentAuthenticatedUser()
      .then(async (user) => {
        console.log("AUTHENTICATED USER", user);

        const userSub = user.attributes.sub;
        setUserId(userSub);
        console.log("Setting user id:", userSub);

        setLoading(true);
        setAuthenticated(true);
        await fetchUserGoals(userSub);
        setLoading(false);
      })
      .catch((err) => {
        setAuthenticated(false);
        setLoading(false);
      });

    Hub.listen("auth", async (data) => {
      console.log("AUTH HUB", data);
      switch (data.payload.event) {
        case "signIn":
          setAuthenticated(true);
          setLoading(true);
          const newUserId = data.payload.data.username;
          setUserId(newUserId);
          await fetchUserGoals(newUserId);
          setLoading(false);
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

  const contextValue = {
    userId,
    goalsSet,
    setGoalsSet,
    goalsUpdated,
    setGoalsUpdated,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading && <View />}
      {!loading && !authenticated && <Authentication />}
      {!loading && authenticated && (!goalsSet || !goalsUpdated) && (
        <GoalSetting />
      )}
      {!loading && authenticated && goalsSet && goalsUpdated && (
        <AppNavigator />
      )}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
