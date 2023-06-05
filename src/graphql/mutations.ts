/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserGoals = /* GraphQL */ `
  mutation CreateUserGoals(
    $input: CreateUserGoalsInput!
    $condition: ModelUserGoalsConditionInput
  ) {
    createUserGoals(input: $input, condition: $condition) {
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
export const updateUserGoals = /* GraphQL */ `
  mutation UpdateUserGoals(
    $input: UpdateUserGoalsInput!
    $condition: ModelUserGoalsConditionInput
  ) {
    updateUserGoals(input: $input, condition: $condition) {
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
export const deleteUserGoals = /* GraphQL */ `
  mutation DeleteUserGoals(
    $input: DeleteUserGoalsInput!
    $condition: ModelUserGoalsConditionInput
  ) {
    deleteUserGoals(input: $input, condition: $condition) {
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
