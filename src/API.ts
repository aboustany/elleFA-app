/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

// https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/#enable-queries-mutations-and-subscriptions

export type CreateUserInput = {
  id?: string | null,
  userGoalsId?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userGoalsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  goals?: UserGoals | null,
  createdAt: string,
  updatedAt: string,
  userGoalsId?: string | null,
};

export type UserGoals = {
  __typename: "UserGoals",
  id: string,
  user?: User | null,
  medications?: Array< string > | null,
  conditions: string,
  reproductiveHealth: string,
  urinationPain: boolean,
  uirationBowelPain: boolean,
  uritationDiarrheaConstipation: boolean,
  urinationBloating: boolean,
  menstruationLongPeriods: boolean,
  menstruationHeavyPeriods: boolean,
  pelvicPain: boolean,
  createdAt: string,
  updatedAt: string,
  userGoalsUserId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  userGoalsId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserGoalsInput = {
  id?: string | null,
  medications?: Array< string > | null,
  conditions: string,
  reproductiveHealth: string,
  urinationPain: boolean,
  uirationBowelPain: boolean,
  uritationDiarrheaConstipation: boolean,
  urinationBloating: boolean,
  menstruationLongPeriods: boolean,
  menstruationHeavyPeriods: boolean,
  pelvicPain: boolean,
  userGoalsUserId?: string | null,
};

export type ModelUserGoalsConditionInput = {
  medications?: ModelStringInput | null,
  conditions?: ModelStringInput | null,
  reproductiveHealth?: ModelStringInput | null,
  urinationPain?: ModelBooleanInput | null,
  uirationBowelPain?: ModelBooleanInput | null,
  uritationDiarrheaConstipation?: ModelBooleanInput | null,
  urinationBloating?: ModelBooleanInput | null,
  menstruationLongPeriods?: ModelBooleanInput | null,
  menstruationHeavyPeriods?: ModelBooleanInput | null,
  pelvicPain?: ModelBooleanInput | null,
  and?: Array< ModelUserGoalsConditionInput | null > | null,
  or?: Array< ModelUserGoalsConditionInput | null > | null,
  not?: ModelUserGoalsConditionInput | null,
  userGoalsUserId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserGoalsInput = {
  id: string,
  medications?: Array< string > | null,
  conditions?: string | null,
  reproductiveHealth?: string | null,
  urinationPain?: boolean | null,
  uirationBowelPain?: boolean | null,
  uritationDiarrheaConstipation?: boolean | null,
  urinationBloating?: boolean | null,
  menstruationLongPeriods?: boolean | null,
  menstruationHeavyPeriods?: boolean | null,
  pelvicPain?: boolean | null,
  userGoalsUserId?: string | null,
};

export type DeleteUserGoalsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userGoalsId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserGoalsFilterInput = {
  id?: ModelIDInput | null,
  medications?: ModelStringInput | null,
  conditions?: ModelStringInput | null,
  reproductiveHealth?: ModelStringInput | null,
  urinationPain?: ModelBooleanInput | null,
  uirationBowelPain?: ModelBooleanInput | null,
  uritationDiarrheaConstipation?: ModelBooleanInput | null,
  urinationBloating?: ModelBooleanInput | null,
  menstruationLongPeriods?: ModelBooleanInput | null,
  menstruationHeavyPeriods?: ModelBooleanInput | null,
  pelvicPain?: ModelBooleanInput | null,
  and?: Array< ModelUserGoalsFilterInput | null > | null,
  or?: Array< ModelUserGoalsFilterInput | null > | null,
  not?: ModelUserGoalsFilterInput | null,
  userGoalsUserId?: ModelIDInput | null,
};

export type ModelUserGoalsConnection = {
  __typename: "ModelUserGoalsConnection",
  items:  Array<UserGoals | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserGoalsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  medications?: ModelSubscriptionStringInput | null,
  conditions?: ModelSubscriptionStringInput | null,
  reproductiveHealth?: ModelSubscriptionStringInput | null,
  urinationPain?: ModelSubscriptionBooleanInput | null,
  uirationBowelPain?: ModelSubscriptionBooleanInput | null,
  uritationDiarrheaConstipation?: ModelSubscriptionBooleanInput | null,
  urinationBloating?: ModelSubscriptionBooleanInput | null,
  menstruationLongPeriods?: ModelSubscriptionBooleanInput | null,
  menstruationHeavyPeriods?: ModelSubscriptionBooleanInput | null,
  pelvicPain?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserGoalsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserGoalsFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type CreateUserGoalsMutationVariables = {
  input: CreateUserGoalsInput,
  condition?: ModelUserGoalsConditionInput | null,
};

export type CreateUserGoalsMutation = {
  createUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};

export type UpdateUserGoalsMutationVariables = {
  input: UpdateUserGoalsInput,
  condition?: ModelUserGoalsConditionInput | null,
};

export type UpdateUserGoalsMutation = {
  updateUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};

export type DeleteUserGoalsMutationVariables = {
  input: DeleteUserGoalsInput,
  condition?: ModelUserGoalsConditionInput | null,
};

export type DeleteUserGoalsMutation = {
  deleteUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserGoalsQueryVariables = {
  id: string,
};

export type GetUserGoalsQuery = {
  getUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};

export type ListUserGoalsQueryVariables = {
  filter?: ModelUserGoalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserGoalsQuery = {
  listUserGoals?:  {
    __typename: "ModelUserGoalsConnection",
    items:  Array< {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    goals?:  {
      __typename: "UserGoals",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        createdAt: string,
        updatedAt: string,
        userGoalsId?: string | null,
      } | null,
      medications?: Array< string > | null,
      conditions: string,
      reproductiveHealth: string,
      urinationPain: boolean,
      uirationBowelPain: boolean,
      uritationDiarrheaConstipation: boolean,
      urinationBloating: boolean,
      menstruationLongPeriods: boolean,
      menstruationHeavyPeriods: boolean,
      pelvicPain: boolean,
      createdAt: string,
      updatedAt: string,
      userGoalsUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userGoalsId?: string | null,
  } | null,
};

export type OnCreateUserGoalsSubscriptionVariables = {
  filter?: ModelSubscriptionUserGoalsFilterInput | null,
};

export type OnCreateUserGoalsSubscription = {
  onCreateUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};

export type OnUpdateUserGoalsSubscriptionVariables = {
  filter?: ModelSubscriptionUserGoalsFilterInput | null,
};

export type OnUpdateUserGoalsSubscription = {
  onUpdateUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};

export type OnDeleteUserGoalsSubscriptionVariables = {
  filter?: ModelSubscriptionUserGoalsFilterInput | null,
};

export type OnDeleteUserGoalsSubscription = {
  onDeleteUserGoals?:  {
    __typename: "UserGoals",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      goals?:  {
        __typename: "UserGoals",
        id: string,
        medications?: Array< string > | null,
        conditions: string,
        reproductiveHealth: string,
        urinationPain: boolean,
        uirationBowelPain: boolean,
        uritationDiarrheaConstipation: boolean,
        urinationBloating: boolean,
        menstruationLongPeriods: boolean,
        menstruationHeavyPeriods: boolean,
        pelvicPain: boolean,
        createdAt: string,
        updatedAt: string,
        userGoalsUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userGoalsId?: string | null,
    } | null,
    medications?: Array< string > | null,
    conditions: string,
    reproductiveHealth: string,
    urinationPain: boolean,
    uirationBowelPain: boolean,
    uritationDiarrheaConstipation: boolean,
    urinationBloating: boolean,
    menstruationLongPeriods: boolean,
    menstruationHeavyPeriods: boolean,
    pelvicPain: boolean,
    createdAt: string,
    updatedAt: string,
    userGoalsUserId?: string | null,
  } | null,
};
