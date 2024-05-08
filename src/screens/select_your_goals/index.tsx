import React, { useContext, useState } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
import BaseButton from '../../componets/base_button';
import BaseTextInput from '../../componets/base_text_input';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';

const SelectYourTrainingGoals = (props: NativeStackScreenProps<RootstackParamList, "SelectYourTrainingGoals">) => {
    const { handleGoals } = useContext(AppContext);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    console.log("+++++++++", selectedGoals);
    selectedGoals.sort()


    handleGoals(selectedGoals.join())
    console.log("=====", handleGoals);


    const goals = [
        { id: 12, title: "Loose Weight" },
        { id: 13, title: "Improve Cardio" },
        { id: 14, title: "Improve Balance and Body Control" },
        { id: 16, title: "Rather not say" },
    ];

    const handleGoalSelect = (id: number) => {
        if (id === 16) {
            setSelectedGoals([])
        }



        else {
            const isSelected = selectedGoals.includes(id.toString());
            console.log("isselected", isSelected);

            let updatedGoals;
            if (isSelected) {
                updatedGoals = selectedGoals.filter(selectedGoal => selectedGoal !== id.toString());

            } else {
                updatedGoals = [...selectedGoals, id.toString()];
            }
            console.log("updated", updatedGoals)
            setSelectedGoals(updatedGoals);
        }
    };

    const handler = () => {
        if (selectedGoals.length > 0) {

            console.log("ggggdgdddd====>", selectedGoals);

            props.navigation.navigate("TimesPerWeek");
        } else {
            Alert.alert(
                "Error",
                "Please select at least one option.",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
        }
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>Select your Training goals</Text>
                    <Text style={{ color: "black", fontSize: 16, fontFamily: "Space Grotesk" }}>Steps 3 of 5</Text>
                </View>

                {goals.map((goal) => (
                    <BaseTextInput
                        key={goal.id}
                        label={goal.title}
                        presshandler={() => handleGoalSelect(goal.id)} // Passing id directly
                        isPressed={selectedGoals.includes(goal.id.toString())}
                    />
                ))}

                <View style={{ alignItems: "center", flex: 1 }}>
                    <BaseButton
                        width={200}
                        height={54}
                        backkgroundColor={'black'}
                        borderRadius={27}
                        label={"Next"}
                        color={"white"}
                        pressHandler={handler}
                        bottom={24}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

export default SelectYourTrainingGoals;
