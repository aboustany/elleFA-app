/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      goals {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
        }
        isDiagnosed
        workingWith
        medications
        conditions
        reproductiveHealth
        urinationPain
        urinationBowelPain
        urinationDiarrheaConstipation
        urinationBloating
        menstruationLongPeriods
        menstruationHeavyPeriods
        pelvicPain
        createdAt
        updatedAt
        userGoalsUserId
      }
      createdAt
      updatedAt
      userGoalsId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        goals {
          id
          isDiagnosed
          workingWith
          medications
          conditions
          reproductiveHealth
          urinationPain
          urinationBowelPain
          urinationDiarrheaConstipation
          urinationBloating
          menstruationLongPeriods
          menstruationHeavyPeriods
          pelvicPain
          createdAt
          updatedAt
          userGoalsUserId
        }
        createdAt
        updatedAt
        userGoalsId
      }
      nextToken
    }
  }
`;
export const getUserGoals = /* GraphQL */ `
  query GetUserGoals($id: ID!) {
    getUserGoals(id: $id) {
      id
      user {
        id
        goals {
          id
          isDiagnosed
          workingWith
          medications
          conditions
          reproductiveHealth
          urinationPain
          urinationBowelPain
          urinationDiarrheaConstipation
          urinationBloating
          menstruationLongPeriods
          menstruationHeavyPeriods
          pelvicPain
          createdAt
          updatedAt
          userGoalsUserId
        }
        createdAt
        updatedAt
        userGoalsId
      }
      isDiagnosed
      workingWith
      medications
      conditions
      reproductiveHealth
      urinationPain
      urinationBowelPain
      urinationDiarrheaConstipation
      urinationBloating
      menstruationLongPeriods
      menstruationHeavyPeriods
      pelvicPain
      createdAt
      updatedAt
      userGoalsUserId
    }
  }
`;
export const listUserGoals = /* GraphQL */ `
  query ListUserGoals(
    $filter: ModelUserGoalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
        }
        isDiagnosed
        workingWith
        medications
        conditions
        reproductiveHealth
        urinationPain
        urinationBowelPain
        urinationDiarrheaConstipation
        urinationBloating
        menstruationLongPeriods
        menstruationHeavyPeriods
        pelvicPain
        createdAt
        updatedAt
        userGoalsUserId
      }
      nextToken
    }
  }
`;
