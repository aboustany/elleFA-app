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
          __typename
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
        treatments
        createdAt
        updatedAt
        userGoalsUserId
        __typename
      }
      dailyLog {
        items {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userGoalsId
      __typename
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
          __typename
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
        treatments
        createdAt
        updatedAt
        userGoalsUserId
        __typename
      }
      dailyLog {
        items {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userGoalsId
      __typename
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
          __typename
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
        treatments
        createdAt
        updatedAt
        userGoalsUserId
        __typename
      }
      dailyLog {
        items {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userGoalsId
      __typename
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
          treatments
          createdAt
          updatedAt
          userGoalsUserId
          __typename
        }
        dailyLog {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userGoalsId
        __typename
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
      treatments
      createdAt
      updatedAt
      userGoalsUserId
      __typename
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
          treatments
          createdAt
          updatedAt
          userGoalsUserId
          __typename
        }
        dailyLog {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userGoalsId
        __typename
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
      treatments
      createdAt
      updatedAt
      userGoalsUserId
      __typename
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
          treatments
          createdAt
          updatedAt
          userGoalsUserId
          __typename
        }
        dailyLog {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userGoalsId
        __typename
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
      treatments
      createdAt
      updatedAt
      userGoalsUserId
      __typename
    }
  }
`;
export const createDailyLog = /* GraphQL */ `
  mutation CreateDailyLog(
    $input: CreateDailyLogInput!
    $condition: ModelDailyLogConditionInput
  ) {
    createDailyLog(input: $input, condition: $condition) {
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
          treatments
          createdAt
          updatedAt
          userGoalsUserId
          __typename
        }
        dailyLog {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userGoalsId
        __typename
      }
      createdAt
      userDailyLogId
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      treatmentLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        startingIntervention
        endingIntervention
        hormonalContraceptives
        fertilityTreatment
        dietaryChange
        medication
        vitaminsAndSupplements
        createdAt
        updatedAt
        treatmentLogDailyLogId
        __typename
      }
      mentalHealthLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        mood
        anxiety
        irritable
        anger
        sadness
        happiness
        excitement
        createdAt
        updatedAt
        mentalHealthLogDailyLogId
        __typename
      }
      lifestyleLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        exercise
        productivityLoss
        alcohol
        energy
        createdAt
        updatedAt
        lifestyleLogDailyLogId
        __typename
      }
      updatedAt
      dailyLogSymptomLogId
      dailyLogTreatmentLogId
      dailyLogMentalHealthLogId
      dailyLogLifestyleLogId
      __typename
    }
  }
`;
export const updateDailyLog = /* GraphQL */ `
  mutation UpdateDailyLog(
    $input: UpdateDailyLogInput!
    $condition: ModelDailyLogConditionInput
  ) {
    updateDailyLog(input: $input, condition: $condition) {
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
          treatments
          createdAt
          updatedAt
          userGoalsUserId
          __typename
        }
        dailyLog {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userGoalsId
        __typename
      }
      createdAt
      userDailyLogId
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      treatmentLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        startingIntervention
        endingIntervention
        hormonalContraceptives
        fertilityTreatment
        dietaryChange
        medication
        vitaminsAndSupplements
        createdAt
        updatedAt
        treatmentLogDailyLogId
        __typename
      }
      mentalHealthLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        mood
        anxiety
        irritable
        anger
        sadness
        happiness
        excitement
        createdAt
        updatedAt
        mentalHealthLogDailyLogId
        __typename
      }
      lifestyleLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        exercise
        productivityLoss
        alcohol
        energy
        createdAt
        updatedAt
        lifestyleLogDailyLogId
        __typename
      }
      updatedAt
      dailyLogSymptomLogId
      dailyLogTreatmentLogId
      dailyLogMentalHealthLogId
      dailyLogLifestyleLogId
      __typename
    }
  }
`;
export const deleteDailyLog = /* GraphQL */ `
  mutation DeleteDailyLog(
    $input: DeleteDailyLogInput!
    $condition: ModelDailyLogConditionInput
  ) {
    deleteDailyLog(input: $input, condition: $condition) {
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
          treatments
          createdAt
          updatedAt
          userGoalsUserId
          __typename
        }
        dailyLog {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userGoalsId
        __typename
      }
      createdAt
      userDailyLogId
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      treatmentLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        startingIntervention
        endingIntervention
        hormonalContraceptives
        fertilityTreatment
        dietaryChange
        medication
        vitaminsAndSupplements
        createdAt
        updatedAt
        treatmentLogDailyLogId
        __typename
      }
      mentalHealthLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        mood
        anxiety
        irritable
        anger
        sadness
        happiness
        excitement
        createdAt
        updatedAt
        mentalHealthLogDailyLogId
        __typename
      }
      lifestyleLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        exercise
        productivityLoss
        alcohol
        energy
        createdAt
        updatedAt
        lifestyleLogDailyLogId
        __typename
      }
      updatedAt
      dailyLogSymptomLogId
      dailyLogTreatmentLogId
      dailyLogMentalHealthLogId
      dailyLogLifestyleLogId
      __typename
    }
  }
`;
export const createMentalHealthLog = /* GraphQL */ `
  mutation CreateMentalHealthLog(
    $input: CreateMentalHealthLogInput!
    $condition: ModelMentalHealthLogConditionInput
  ) {
    createMentalHealthLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      mood
      anxiety
      irritable
      anger
      sadness
      happiness
      excitement
      createdAt
      updatedAt
      mentalHealthLogDailyLogId
      __typename
    }
  }
`;
export const updateMentalHealthLog = /* GraphQL */ `
  mutation UpdateMentalHealthLog(
    $input: UpdateMentalHealthLogInput!
    $condition: ModelMentalHealthLogConditionInput
  ) {
    updateMentalHealthLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      mood
      anxiety
      irritable
      anger
      sadness
      happiness
      excitement
      createdAt
      updatedAt
      mentalHealthLogDailyLogId
      __typename
    }
  }
`;
export const deleteMentalHealthLog = /* GraphQL */ `
  mutation DeleteMentalHealthLog(
    $input: DeleteMentalHealthLogInput!
    $condition: ModelMentalHealthLogConditionInput
  ) {
    deleteMentalHealthLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      mood
      anxiety
      irritable
      anger
      sadness
      happiness
      excitement
      createdAt
      updatedAt
      mentalHealthLogDailyLogId
      __typename
    }
  }
`;
export const createTreatmentLog = /* GraphQL */ `
  mutation CreateTreatmentLog(
    $input: CreateTreatmentLogInput!
    $condition: ModelTreatmentLogConditionInput
  ) {
    createTreatmentLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      startingIntervention
      endingIntervention
      hormonalContraceptives
      fertilityTreatment
      dietaryChange
      medication
      vitaminsAndSupplements
      createdAt
      updatedAt
      treatmentLogDailyLogId
      __typename
    }
  }
`;
export const updateTreatmentLog = /* GraphQL */ `
  mutation UpdateTreatmentLog(
    $input: UpdateTreatmentLogInput!
    $condition: ModelTreatmentLogConditionInput
  ) {
    updateTreatmentLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      startingIntervention
      endingIntervention
      hormonalContraceptives
      fertilityTreatment
      dietaryChange
      medication
      vitaminsAndSupplements
      createdAt
      updatedAt
      treatmentLogDailyLogId
      __typename
    }
  }
`;
export const deleteTreatmentLog = /* GraphQL */ `
  mutation DeleteTreatmentLog(
    $input: DeleteTreatmentLogInput!
    $condition: ModelTreatmentLogConditionInput
  ) {
    deleteTreatmentLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      startingIntervention
      endingIntervention
      hormonalContraceptives
      fertilityTreatment
      dietaryChange
      medication
      vitaminsAndSupplements
      createdAt
      updatedAt
      treatmentLogDailyLogId
      __typename
    }
  }
`;
export const createLifestyleLog = /* GraphQL */ `
  mutation CreateLifestyleLog(
    $input: CreateLifestyleLogInput!
    $condition: ModelLifestyleLogConditionInput
  ) {
    createLifestyleLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      exercise
      productivityLoss
      alcohol
      energy
      createdAt
      updatedAt
      lifestyleLogDailyLogId
      __typename
    }
  }
`;
export const updateLifestyleLog = /* GraphQL */ `
  mutation UpdateLifestyleLog(
    $input: UpdateLifestyleLogInput!
    $condition: ModelLifestyleLogConditionInput
  ) {
    updateLifestyleLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      exercise
      productivityLoss
      alcohol
      energy
      createdAt
      updatedAt
      lifestyleLogDailyLogId
      __typename
    }
  }
`;
export const deleteLifestyleLog = /* GraphQL */ `
  mutation DeleteLifestyleLog(
    $input: DeleteLifestyleLogInput!
    $condition: ModelLifestyleLogConditionInput
  ) {
    deleteLifestyleLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      exercise
      productivityLoss
      alcohol
      energy
      createdAt
      updatedAt
      lifestyleLogDailyLogId
      __typename
    }
  }
`;
export const createSymptomLog = /* GraphQL */ `
  mutation CreateSymptomLog(
    $input: CreateSymptomLogInput!
    $condition: ModelSymptomLogConditionInput
  ) {
    createSymptomLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      headSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        headaches
        nausea
        dizziness
        brainFog
        createdAt
        updatedAt
        headSymptomsSymptomLogId
        __typename
      }
      breastSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        breastSoreness
        createdAt
        updatedAt
        breastSymptomsSymptomLogId
        __typename
      }
      bladderSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        urinationPain
        incontinence
        bloodInUrine
        createdAt
        updatedAt
        bladderSymptomsSymptomLogId
        __typename
      }
      bowelSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        stoolType
        bowelMovementPain
        bloodInStool
        createdAt
        updatedAt
        bowelSymptomsSymptomLogId
        __typename
      }
      pelvicSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        painWithSex
        lowLibido
        dischargeSmell
        dischargeThick
        dischargeColor
        bacterialVaginosis
        yeastInfection
        urinaryTractInfection
        periodSpotting
        padsPerDay
        periodBloodColor
        createdAt
        updatedAt
        pelvicSymptomsSymptomLogId
        __typename
      }
      createdAt
      updatedAt
      symptomLogHeadSymptomsId
      symptomLogBreastSymptomsId
      symptomLogBladderSymptomsId
      symptomLogBowelSymptomsId
      symptomLogPelvicSymptomsId
      symptomLogDailyLogId
      __typename
    }
  }
`;
export const updateSymptomLog = /* GraphQL */ `
  mutation UpdateSymptomLog(
    $input: UpdateSymptomLogInput!
    $condition: ModelSymptomLogConditionInput
  ) {
    updateSymptomLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      headSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        headaches
        nausea
        dizziness
        brainFog
        createdAt
        updatedAt
        headSymptomsSymptomLogId
        __typename
      }
      breastSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        breastSoreness
        createdAt
        updatedAt
        breastSymptomsSymptomLogId
        __typename
      }
      bladderSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        urinationPain
        incontinence
        bloodInUrine
        createdAt
        updatedAt
        bladderSymptomsSymptomLogId
        __typename
      }
      bowelSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        stoolType
        bowelMovementPain
        bloodInStool
        createdAt
        updatedAt
        bowelSymptomsSymptomLogId
        __typename
      }
      pelvicSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        painWithSex
        lowLibido
        dischargeSmell
        dischargeThick
        dischargeColor
        bacterialVaginosis
        yeastInfection
        urinaryTractInfection
        periodSpotting
        padsPerDay
        periodBloodColor
        createdAt
        updatedAt
        pelvicSymptomsSymptomLogId
        __typename
      }
      createdAt
      updatedAt
      symptomLogHeadSymptomsId
      symptomLogBreastSymptomsId
      symptomLogBladderSymptomsId
      symptomLogBowelSymptomsId
      symptomLogPelvicSymptomsId
      symptomLogDailyLogId
      __typename
    }
  }
`;
export const deleteSymptomLog = /* GraphQL */ `
  mutation DeleteSymptomLog(
    $input: DeleteSymptomLogInput!
    $condition: ModelSymptomLogConditionInput
  ) {
    deleteSymptomLog(input: $input, condition: $condition) {
      id
      dailyLog {
        id
        user {
          id
          createdAt
          updatedAt
          userGoalsId
          __typename
        }
        createdAt
        userDailyLogId
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        treatmentLog {
          id
          startingIntervention
          endingIntervention
          hormonalContraceptives
          fertilityTreatment
          dietaryChange
          medication
          vitaminsAndSupplements
          createdAt
          updatedAt
          treatmentLogDailyLogId
          __typename
        }
        mentalHealthLog {
          id
          mood
          anxiety
          irritable
          anger
          sadness
          happiness
          excitement
          createdAt
          updatedAt
          mentalHealthLogDailyLogId
          __typename
        }
        lifestyleLog {
          id
          exercise
          productivityLoss
          alcohol
          energy
          createdAt
          updatedAt
          lifestyleLogDailyLogId
          __typename
        }
        updatedAt
        dailyLogSymptomLogId
        dailyLogTreatmentLogId
        dailyLogMentalHealthLogId
        dailyLogLifestyleLogId
        __typename
      }
      headSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        headaches
        nausea
        dizziness
        brainFog
        createdAt
        updatedAt
        headSymptomsSymptomLogId
        __typename
      }
      breastSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        breastSoreness
        createdAt
        updatedAt
        breastSymptomsSymptomLogId
        __typename
      }
      bladderSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        urinationPain
        incontinence
        bloodInUrine
        createdAt
        updatedAt
        bladderSymptomsSymptomLogId
        __typename
      }
      bowelSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        stoolType
        bowelMovementPain
        bloodInStool
        createdAt
        updatedAt
        bowelSymptomsSymptomLogId
        __typename
      }
      pelvicSymptoms {
        id
        symptomLog {
          id
          createdAt
          updatedAt
          symptomLogHeadSymptomsId
          symptomLogBreastSymptomsId
          symptomLogBladderSymptomsId
          symptomLogBowelSymptomsId
          symptomLogPelvicSymptomsId
          symptomLogDailyLogId
          __typename
        }
        painWithSex
        lowLibido
        dischargeSmell
        dischargeThick
        dischargeColor
        bacterialVaginosis
        yeastInfection
        urinaryTractInfection
        periodSpotting
        padsPerDay
        periodBloodColor
        createdAt
        updatedAt
        pelvicSymptomsSymptomLogId
        __typename
      }
      createdAt
      updatedAt
      symptomLogHeadSymptomsId
      symptomLogBreastSymptomsId
      symptomLogBladderSymptomsId
      symptomLogBowelSymptomsId
      symptomLogPelvicSymptomsId
      symptomLogDailyLogId
      __typename
    }
  }
`;
export const createHeadSymptoms = /* GraphQL */ `
  mutation CreateHeadSymptoms(
    $input: CreateHeadSymptomsInput!
    $condition: ModelHeadSymptomsConditionInput
  ) {
    createHeadSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      headaches
      nausea
      dizziness
      brainFog
      createdAt
      updatedAt
      headSymptomsSymptomLogId
      __typename
    }
  }
`;
export const updateHeadSymptoms = /* GraphQL */ `
  mutation UpdateHeadSymptoms(
    $input: UpdateHeadSymptomsInput!
    $condition: ModelHeadSymptomsConditionInput
  ) {
    updateHeadSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      headaches
      nausea
      dizziness
      brainFog
      createdAt
      updatedAt
      headSymptomsSymptomLogId
      __typename
    }
  }
`;
export const deleteHeadSymptoms = /* GraphQL */ `
  mutation DeleteHeadSymptoms(
    $input: DeleteHeadSymptomsInput!
    $condition: ModelHeadSymptomsConditionInput
  ) {
    deleteHeadSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      headaches
      nausea
      dizziness
      brainFog
      createdAt
      updatedAt
      headSymptomsSymptomLogId
      __typename
    }
  }
`;
export const createBreastSymptoms = /* GraphQL */ `
  mutation CreateBreastSymptoms(
    $input: CreateBreastSymptomsInput!
    $condition: ModelBreastSymptomsConditionInput
  ) {
    createBreastSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      breastSoreness
      createdAt
      updatedAt
      breastSymptomsSymptomLogId
      __typename
    }
  }
`;
export const updateBreastSymptoms = /* GraphQL */ `
  mutation UpdateBreastSymptoms(
    $input: UpdateBreastSymptomsInput!
    $condition: ModelBreastSymptomsConditionInput
  ) {
    updateBreastSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      breastSoreness
      createdAt
      updatedAt
      breastSymptomsSymptomLogId
      __typename
    }
  }
`;
export const deleteBreastSymptoms = /* GraphQL */ `
  mutation DeleteBreastSymptoms(
    $input: DeleteBreastSymptomsInput!
    $condition: ModelBreastSymptomsConditionInput
  ) {
    deleteBreastSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      breastSoreness
      createdAt
      updatedAt
      breastSymptomsSymptomLogId
      __typename
    }
  }
`;
export const createBladderSymptoms = /* GraphQL */ `
  mutation CreateBladderSymptoms(
    $input: CreateBladderSymptomsInput!
    $condition: ModelBladderSymptomsConditionInput
  ) {
    createBladderSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      urinationPain
      incontinence
      bloodInUrine
      createdAt
      updatedAt
      bladderSymptomsSymptomLogId
      __typename
    }
  }
`;
export const updateBladderSymptoms = /* GraphQL */ `
  mutation UpdateBladderSymptoms(
    $input: UpdateBladderSymptomsInput!
    $condition: ModelBladderSymptomsConditionInput
  ) {
    updateBladderSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      urinationPain
      incontinence
      bloodInUrine
      createdAt
      updatedAt
      bladderSymptomsSymptomLogId
      __typename
    }
  }
`;
export const deleteBladderSymptoms = /* GraphQL */ `
  mutation DeleteBladderSymptoms(
    $input: DeleteBladderSymptomsInput!
    $condition: ModelBladderSymptomsConditionInput
  ) {
    deleteBladderSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      urinationPain
      incontinence
      bloodInUrine
      createdAt
      updatedAt
      bladderSymptomsSymptomLogId
      __typename
    }
  }
`;
export const createBowelSymptoms = /* GraphQL */ `
  mutation CreateBowelSymptoms(
    $input: CreateBowelSymptomsInput!
    $condition: ModelBowelSymptomsConditionInput
  ) {
    createBowelSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      stoolType
      bowelMovementPain
      bloodInStool
      createdAt
      updatedAt
      bowelSymptomsSymptomLogId
      __typename
    }
  }
`;
export const updateBowelSymptoms = /* GraphQL */ `
  mutation UpdateBowelSymptoms(
    $input: UpdateBowelSymptomsInput!
    $condition: ModelBowelSymptomsConditionInput
  ) {
    updateBowelSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      stoolType
      bowelMovementPain
      bloodInStool
      createdAt
      updatedAt
      bowelSymptomsSymptomLogId
      __typename
    }
  }
`;
export const deleteBowelSymptoms = /* GraphQL */ `
  mutation DeleteBowelSymptoms(
    $input: DeleteBowelSymptomsInput!
    $condition: ModelBowelSymptomsConditionInput
  ) {
    deleteBowelSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      stoolType
      bowelMovementPain
      bloodInStool
      createdAt
      updatedAt
      bowelSymptomsSymptomLogId
      __typename
    }
  }
`;
export const createPelvicSymptoms = /* GraphQL */ `
  mutation CreatePelvicSymptoms(
    $input: CreatePelvicSymptomsInput!
    $condition: ModelPelvicSymptomsConditionInput
  ) {
    createPelvicSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      painWithSex
      lowLibido
      dischargeSmell
      dischargeThick
      dischargeColor
      bacterialVaginosis
      yeastInfection
      urinaryTractInfection
      periodSpotting
      padsPerDay
      periodBloodColor
      createdAt
      updatedAt
      pelvicSymptomsSymptomLogId
      __typename
    }
  }
`;
export const updatePelvicSymptoms = /* GraphQL */ `
  mutation UpdatePelvicSymptoms(
    $input: UpdatePelvicSymptomsInput!
    $condition: ModelPelvicSymptomsConditionInput
  ) {
    updatePelvicSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      painWithSex
      lowLibido
      dischargeSmell
      dischargeThick
      dischargeColor
      bacterialVaginosis
      yeastInfection
      urinaryTractInfection
      periodSpotting
      padsPerDay
      periodBloodColor
      createdAt
      updatedAt
      pelvicSymptomsSymptomLogId
      __typename
    }
  }
`;
export const deletePelvicSymptoms = /* GraphQL */ `
  mutation DeletePelvicSymptoms(
    $input: DeletePelvicSymptomsInput!
    $condition: ModelPelvicSymptomsConditionInput
  ) {
    deletePelvicSymptoms(input: $input, condition: $condition) {
      id
      symptomLog {
        id
        dailyLog {
          id
          createdAt
          userDailyLogId
          updatedAt
          dailyLogSymptomLogId
          dailyLogTreatmentLogId
          dailyLogMentalHealthLogId
          dailyLogLifestyleLogId
          __typename
        }
        headSymptoms {
          id
          headaches
          nausea
          dizziness
          brainFog
          createdAt
          updatedAt
          headSymptomsSymptomLogId
          __typename
        }
        breastSymptoms {
          id
          breastSoreness
          createdAt
          updatedAt
          breastSymptomsSymptomLogId
          __typename
        }
        bladderSymptoms {
          id
          urinationPain
          incontinence
          bloodInUrine
          createdAt
          updatedAt
          bladderSymptomsSymptomLogId
          __typename
        }
        bowelSymptoms {
          id
          stoolType
          bowelMovementPain
          bloodInStool
          createdAt
          updatedAt
          bowelSymptomsSymptomLogId
          __typename
        }
        pelvicSymptoms {
          id
          painWithSex
          lowLibido
          dischargeSmell
          dischargeThick
          dischargeColor
          bacterialVaginosis
          yeastInfection
          urinaryTractInfection
          periodSpotting
          padsPerDay
          periodBloodColor
          createdAt
          updatedAt
          pelvicSymptomsSymptomLogId
          __typename
        }
        createdAt
        updatedAt
        symptomLogHeadSymptomsId
        symptomLogBreastSymptomsId
        symptomLogBladderSymptomsId
        symptomLogBowelSymptomsId
        symptomLogPelvicSymptomsId
        symptomLogDailyLogId
        __typename
      }
      painWithSex
      lowLibido
      dischargeSmell
      dischargeThick
      dischargeColor
      bacterialVaginosis
      yeastInfection
      urinaryTractInfection
      periodSpotting
      padsPerDay
      periodBloodColor
      createdAt
      updatedAt
      pelvicSymptomsSymptomLogId
      __typename
    }
  }
`;
