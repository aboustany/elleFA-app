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
      nextToken
      __typename
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
      nextToken
      __typename
    }
  }
`;
export const getDailyLog = /* GraphQL */ `
  query GetDailyLog($id: ID!) {
    getDailyLog(id: $id) {
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
export const listDailyLogs = /* GraphQL */ `
  query ListDailyLogs(
    $filter: ModelDailyLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMentalHealthLog = /* GraphQL */ `
  query GetMentalHealthLog($id: ID!) {
    getMentalHealthLog(id: $id) {
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
export const listMentalHealthLogs = /* GraphQL */ `
  query ListMentalHealthLogs(
    $filter: ModelMentalHealthLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentalHealthLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTreatmentLog = /* GraphQL */ `
  query GetTreatmentLog($id: ID!) {
    getTreatmentLog(id: $id) {
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
export const listTreatmentLogs = /* GraphQL */ `
  query ListTreatmentLogs(
    $filter: ModelTreatmentLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTreatmentLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getLifestyleLog = /* GraphQL */ `
  query GetLifestyleLog($id: ID!) {
    getLifestyleLog(id: $id) {
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
export const listLifestyleLogs = /* GraphQL */ `
  query ListLifestyleLogs(
    $filter: ModelLifestyleLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLifestyleLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSymptomLog = /* GraphQL */ `
  query GetSymptomLog($id: ID!) {
    getSymptomLog(id: $id) {
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
export const listSymptomLogs = /* GraphQL */ `
  query ListSymptomLogs(
    $filter: ModelSymptomLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSymptomLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHeadSymptoms = /* GraphQL */ `
  query GetHeadSymptoms($id: ID!) {
    getHeadSymptoms(id: $id) {
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
export const listHeadSymptoms = /* GraphQL */ `
  query ListHeadSymptoms(
    $filter: ModelHeadSymptomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeadSymptoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBreastSymptoms = /* GraphQL */ `
  query GetBreastSymptoms($id: ID!) {
    getBreastSymptoms(id: $id) {
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
export const listBreastSymptoms = /* GraphQL */ `
  query ListBreastSymptoms(
    $filter: ModelBreastSymptomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBreastSymptoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBladderSymptoms = /* GraphQL */ `
  query GetBladderSymptoms($id: ID!) {
    getBladderSymptoms(id: $id) {
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
export const listBladderSymptoms = /* GraphQL */ `
  query ListBladderSymptoms(
    $filter: ModelBladderSymptomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBladderSymptoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBowelSymptoms = /* GraphQL */ `
  query GetBowelSymptoms($id: ID!) {
    getBowelSymptoms(id: $id) {
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
export const listBowelSymptoms = /* GraphQL */ `
  query ListBowelSymptoms(
    $filter: ModelBowelSymptomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBowelSymptoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPelvicSymptoms = /* GraphQL */ `
  query GetPelvicSymptoms($id: ID!) {
    getPelvicSymptoms(id: $id) {
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
export const listPelvicSymptoms = /* GraphQL */ `
  query ListPelvicSymptoms(
    $filter: ModelPelvicSymptomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPelvicSymptoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const dailyLogsByCreatedAt = /* GraphQL */ `
  query DailyLogsByCreatedAt(
    $createdAt: String!
    $sortDirection: ModelSortDirection
    $filter: ModelDailyLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dailyLogsByCreatedAt(
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const dailyLogByUserAndDate = /* GraphQL */ `
  query DailyLogByUserAndDate(
    $userDailyLogId: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDailyLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dailyLogByUserAndDate(
      userDailyLogId: $userDailyLogId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
