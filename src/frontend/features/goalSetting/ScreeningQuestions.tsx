import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
import { ScrollView, Switch, View, Text, TouchableOpacity, Animated, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SignOutButton from '../../components/SignOutButton';
import awsconfig from '../../../aws-exports';
import { AuthContext } from "../authentication/AuthContext";
import { updateUserGoals } from '../../../graphql/mutations';
import { UpdateUserGoalsMutation } from '../../../API';
import { GraphQLQuery } from "@aws-amplify/api";
Amplify.configure(awsconfig);

export default function ScreeningQuestions({navigation}) {
    const { userId } = useContext(AuthContext);

    type QuestionSwitchState = {
        [key: string]: boolean;
    }   
        
    const urination_questions = [
        'I experience painful urination.',
        'I experience painful bowel movements.',
        'I experience constipation or diarrhea.',
        'I experience bloating.',
    ];

    const menstruation_questions = [
        'I experience long periods.',
        'I experience heavy periods.',
    ];

    const pelvic_questions = [
        'I experience pelvic pain.',
    ];

    const initState = () => {
        let initialState = {};
      
        urination_questions.forEach((question, index) => {
          initialState[`urination${index + 1}`] = false;
        });
      
        menstruation_questions.forEach((question, index) => {
          initialState[`menstruation${index + 1}`] = false;
        });
      
        pelvic_questions.forEach((question, index) => {
          initialState[`pelvic${index + 1}`] = false;
        });
      
        return initialState;
    };

    const [switchState, setSwitchState] = useState<QuestionSwitchState>( initState() );


    const handleSwitchChange = (questionKey, newValue) => {
        setSwitchState({...switchState, [questionKey]: newValue});
    };
    
    const handleNext = async () => {
        console.log(switchState);

        const medicalHistoryDetails = {
            id: userId, 
            urinationPain: switchState.urination1,
            urinationBowelPain: switchState.urination2,
            urinationDiarrheaConstipation: switchState.urination3,
            urinationBloating: switchState.urination4,
            menstruationLongPeriods: switchState.menstruation1,
            menstruationHeavyPeriods: switchState.menstruation2,
            pelvicPain: switchState.pelvic1,
        };

        const createdGoals = await API.graphql<GraphQLQuery<UpdateUserGoalsMutation>>(
          graphqlOperation(updateUserGoals, {
            input:
              medicalHistoryDetails 
          })
        ).catch(e => {
          console.error('GraphQL error: ', e);
        });


        navigation.navigate('TrackingQuestions')
    }

        return (
            <View style={styles.container}>
            
            <LinearGradient 
                colors={['rgba(141, 128, 227, 0.6)', '#ffffff']}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '120%'}}
            />

            <ScrollView style={styles.scrollContainer}>

            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={32} color="rgba(189, 166, 218, 1)"/>
                </TouchableOpacity>
                <Text style={styles.header}>Screening Questions</Text>
            </View>
           
           
           <Text style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Urination</Text>
            </Text>

            {urination_questions.map((question, index) => (
                <View key={"urination" + index} style={styles.questionSection}>
                    <Text style={styles.question}>{question}</Text>
                    <Ionicons name="information-circle-outline" size={24} color="black" />
                    <Switch
                        style={styles.switch}
                        value={switchState[`urination${index + 1}`]}
                        onValueChange={(newValue) => handleSwitchChange(`urination${index + 1}`, newValue)}
                    />
                </View>
            ))}
            
            <Text style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Menstruation</Text>
            </Text>

            {menstruation_questions.map((question, index) => (
                <View key={"menstruation" + index} style={styles.questionSection}>
                    <Text style={styles.question}>{question}</Text>
                    <Ionicons name="information-circle-outline" size={24} color="black" />
                    <Switch
                        style={styles.switch}
                        value={switchState[`menstruation${index + 1}`]}
                        onValueChange={(newValue) => handleSwitchChange(`menstruation${index + 1}`, newValue)}
                    />
                </View>
            ))}
            
            <Text style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Pelvic</Text>
            </Text>

            {pelvic_questions.map((question, index) => (
                <View key={"pelvic" + index} style={styles.questionSection}>
                    <Text style={styles.question}>{question}</Text>
                    <Ionicons name="information-circle-outline" size={24} color="black" />
                    <Switch
                        style={styles.switch}
                        value={switchState[`pelvic${index + 1}`]}
                        onValueChange={(newValue) => handleSwitchChange(`pelvic${index + 1}`, newValue)}
                    />
                </View>
            ))}
        </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Done</Text>
                </TouchableOpacity>
          </View>
        
        </View>
        );
  
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        flex: 1
    },
    headerContainer: {
        position: 'relative',
        alignItems: 'center',
        marginTop: 90,
    },
    header: {
        fontSize: 35,
        fontFamily: 'DMSerifDisplay',
        fontWeight: '400',
    },
    backButton: {
        position: 'absolute',  
        left: 10,  
        top: -15,
    },
    subtitleContainer: {
        alignSelf: 'flex-start',
        marginLeft: 19,
        marginTop: 40,
        paddingHorizontal: 10,
        height: 30,
        backgroundColor: '#BDA6DA',
        borderRadius: 58,
        justifyContent: 'center',
    },
    subtitle: {
        fontFamily: 'Almarai',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        letterSpacing: 0.03,
        color: '#000000',
        justifyContent: 'center'
    },
    questionSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    switch: {
        marginLeft: 20,
    },
    question: {
        flex: 1,  
        marginRight: 10,
    },
    nextButton: {
        height: 40,
        width: 150,
        backgroundColor: '#F7D7E3',
        padding: 7,
        borderRadius: 58,
        marginTop: 18,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        alignSelf: 'center',
        marginBottom: 10,
      },
    nextButtonText:{
        fontSize: 19,
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Almarai',
    },
    bottomContainer: {
        padding: 20,
        justifyContent: 'flex-end',
        
    },
});
