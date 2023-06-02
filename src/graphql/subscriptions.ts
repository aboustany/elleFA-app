/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      goals {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
        }
        medications
        conditions
        reproductiveHealth
        urinationPain
        uirationBowelPain
        uritationDiarrheaConstipation
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      goals {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
        }
        medications
        conditions
        reproductiveHealth
        urinationPain
        uirationBowelPain
        uritationDiarrheaConstipation
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      goals {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
        }
        medications
        conditions
        reproductiveHealth
        urinationPain
        uirationBowelPain
        uritationDiarrheaConstipation
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
export const onCreateUserGoals = /* GraphQL */ `
  subscription OnCreateUserGoals(
    $filter: ModelSubscriptionUserGoalsFilterInput
  ) {
    onCreateUserGoals(filter: $filter) {
      id
      user {
        id
        goals {
          id
          medications
          conditions
          reproductiveHealth
          urinationPain
          uirationBowelPain
          uritationDiarrheaConstipation
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
      medications
      conditions
      reproductiveHealth
      urinationPain
      uirationBowelPain
      uritationDiarrheaConstipation
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
export const onUpdateUserGoals = /* GraphQL */ `
  subscription OnUpdateUserGoals(
    $filter: ModelSubscriptionUserGoalsFilterInput
  ) {
    onUpdateUserGoals(filter: $filter) {
      id
      user {
        id
        goals {
          id
          medications
          conditions
          reproductiveHealth
          urinationPain
          uirationBowelPain
          uritationDiarrheaConstipation
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
      medications
      conditions
      reproductiveHealth
      urinationPain
      uirationBowelPain
      uritationDiarrheaConstipation
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
export const onDeleteUserGoals = /* GraphQL */ `
  subscription OnDeleteUserGoals(
    $filter: ModelSubscriptionUserGoalsFilterInput
  ) {
    onDeleteUserGoals(filter: $filter) {
      id
      user {
        id
        goals {
          id
          medications
          conditions
          reproductiveHealth
          urinationPain
          uirationBowelPain
          uritationDiarrheaConstipation
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
      medications
      conditions
      reproductiveHealth
      urinationPain
      uirationBowelPain
      uritationDiarrheaConstipation
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
