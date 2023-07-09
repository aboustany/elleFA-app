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
export const onCreateDailyLog = /* GraphQL */ `
  subscription OnCreateDailyLog($filter: ModelSubscriptionDailyLogFilterInput) {
    onCreateDailyLog(filter: $filter) {
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
export const onUpdateDailyLog = /* GraphQL */ `
  subscription OnUpdateDailyLog($filter: ModelSubscriptionDailyLogFilterInput) {
    onUpdateDailyLog(filter: $filter) {
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
export const onDeleteDailyLog = /* GraphQL */ `
  subscription OnDeleteDailyLog($filter: ModelSubscriptionDailyLogFilterInput) {
    onDeleteDailyLog(filter: $filter) {
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
export const onCreateMentalHealthLog = /* GraphQL */ `
  subscription OnCreateMentalHealthLog(
    $filter: ModelSubscriptionMentalHealthLogFilterInput
  ) {
    onCreateMentalHealthLog(filter: $filter) {
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
export const onUpdateMentalHealthLog = /* GraphQL */ `
  subscription OnUpdateMentalHealthLog(
    $filter: ModelSubscriptionMentalHealthLogFilterInput
  ) {
    onUpdateMentalHealthLog(filter: $filter) {
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
export const onDeleteMentalHealthLog = /* GraphQL */ `
  subscription OnDeleteMentalHealthLog(
    $filter: ModelSubscriptionMentalHealthLogFilterInput
  ) {
    onDeleteMentalHealthLog(filter: $filter) {
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
export const onCreateTreatmentLog = /* GraphQL */ `
  subscription OnCreateTreatmentLog(
    $filter: ModelSubscriptionTreatmentLogFilterInput
  ) {
    onCreateTreatmentLog(filter: $filter) {
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
export const onUpdateTreatmentLog = /* GraphQL */ `
  subscription OnUpdateTreatmentLog(
    $filter: ModelSubscriptionTreatmentLogFilterInput
  ) {
    onUpdateTreatmentLog(filter: $filter) {
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
export const onDeleteTreatmentLog = /* GraphQL */ `
  subscription OnDeleteTreatmentLog(
    $filter: ModelSubscriptionTreatmentLogFilterInput
  ) {
    onDeleteTreatmentLog(filter: $filter) {
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
export const onCreateLifestyleLog = /* GraphQL */ `
  subscription OnCreateLifestyleLog(
    $filter: ModelSubscriptionLifestyleLogFilterInput
  ) {
    onCreateLifestyleLog(filter: $filter) {
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
export const onUpdateLifestyleLog = /* GraphQL */ `
  subscription OnUpdateLifestyleLog(
    $filter: ModelSubscriptionLifestyleLogFilterInput
  ) {
    onUpdateLifestyleLog(filter: $filter) {
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
export const onDeleteLifestyleLog = /* GraphQL */ `
  subscription OnDeleteLifestyleLog(
    $filter: ModelSubscriptionLifestyleLogFilterInput
  ) {
    onDeleteLifestyleLog(filter: $filter) {
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
export const onCreateSymptomLog = /* GraphQL */ `
  subscription OnCreateSymptomLog(
    $filter: ModelSubscriptionSymptomLogFilterInput
  ) {
    onCreateSymptomLog(filter: $filter) {
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
export const onUpdateSymptomLog = /* GraphQL */ `
  subscription OnUpdateSymptomLog(
    $filter: ModelSubscriptionSymptomLogFilterInput
  ) {
    onUpdateSymptomLog(filter: $filter) {
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
export const onDeleteSymptomLog = /* GraphQL */ `
  subscription OnDeleteSymptomLog(
    $filter: ModelSubscriptionSymptomLogFilterInput
  ) {
    onDeleteSymptomLog(filter: $filter) {
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
export const onCreateHeadSymptoms = /* GraphQL */ `
  subscription OnCreateHeadSymptoms(
    $filter: ModelSubscriptionHeadSymptomsFilterInput
  ) {
    onCreateHeadSymptoms(filter: $filter) {
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
export const onUpdateHeadSymptoms = /* GraphQL */ `
  subscription OnUpdateHeadSymptoms(
    $filter: ModelSubscriptionHeadSymptomsFilterInput
  ) {
    onUpdateHeadSymptoms(filter: $filter) {
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
export const onDeleteHeadSymptoms = /* GraphQL */ `
  subscription OnDeleteHeadSymptoms(
    $filter: ModelSubscriptionHeadSymptomsFilterInput
  ) {
    onDeleteHeadSymptoms(filter: $filter) {
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
export const onCreateBreastSymptoms = /* GraphQL */ `
  subscription OnCreateBreastSymptoms(
    $filter: ModelSubscriptionBreastSymptomsFilterInput
  ) {
    onCreateBreastSymptoms(filter: $filter) {
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
export const onUpdateBreastSymptoms = /* GraphQL */ `
  subscription OnUpdateBreastSymptoms(
    $filter: ModelSubscriptionBreastSymptomsFilterInput
  ) {
    onUpdateBreastSymptoms(filter: $filter) {
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
export const onDeleteBreastSymptoms = /* GraphQL */ `
  subscription OnDeleteBreastSymptoms(
    $filter: ModelSubscriptionBreastSymptomsFilterInput
  ) {
    onDeleteBreastSymptoms(filter: $filter) {
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
export const onCreateBladderSymptoms = /* GraphQL */ `
  subscription OnCreateBladderSymptoms(
    $filter: ModelSubscriptionBladderSymptomsFilterInput
  ) {
    onCreateBladderSymptoms(filter: $filter) {
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
export const onUpdateBladderSymptoms = /* GraphQL */ `
  subscription OnUpdateBladderSymptoms(
    $filter: ModelSubscriptionBladderSymptomsFilterInput
  ) {
    onUpdateBladderSymptoms(filter: $filter) {
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
export const onDeleteBladderSymptoms = /* GraphQL */ `
  subscription OnDeleteBladderSymptoms(
    $filter: ModelSubscriptionBladderSymptomsFilterInput
  ) {
    onDeleteBladderSymptoms(filter: $filter) {
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
export const onCreateBowelSymptoms = /* GraphQL */ `
  subscription OnCreateBowelSymptoms(
    $filter: ModelSubscriptionBowelSymptomsFilterInput
  ) {
    onCreateBowelSymptoms(filter: $filter) {
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
export const onUpdateBowelSymptoms = /* GraphQL */ `
  subscription OnUpdateBowelSymptoms(
    $filter: ModelSubscriptionBowelSymptomsFilterInput
  ) {
    onUpdateBowelSymptoms(filter: $filter) {
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
export const onDeleteBowelSymptoms = /* GraphQL */ `
  subscription OnDeleteBowelSymptoms(
    $filter: ModelSubscriptionBowelSymptomsFilterInput
  ) {
    onDeleteBowelSymptoms(filter: $filter) {
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
export const onCreatePelvicSymptoms = /* GraphQL */ `
  subscription OnCreatePelvicSymptoms(
    $filter: ModelSubscriptionPelvicSymptomsFilterInput
  ) {
    onCreatePelvicSymptoms(filter: $filter) {
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
export const onUpdatePelvicSymptoms = /* GraphQL */ `
  subscription OnUpdatePelvicSymptoms(
    $filter: ModelSubscriptionPelvicSymptomsFilterInput
  ) {
    onUpdatePelvicSymptoms(filter: $filter) {
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
export const onDeletePelvicSymptoms = /* GraphQL */ `
  subscription OnDeletePelvicSymptoms(
    $filter: ModelSubscriptionPelvicSymptomsFilterInput
  ) {
    onDeletePelvicSymptoms(filter: $filter) {
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
