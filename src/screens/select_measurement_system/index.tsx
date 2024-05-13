import { View, Text, ImageBackground, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import BaseButton from '../../componets/base_button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootstackParamList } from '../../navigation'
import { AppContext } from '../../context'
import ExpandableList from '../../componets/expandable_lists'

const SelectMeasurement = (props: NativeStackScreenProps<RootstackParamList, "SelectMeasurement">) => {
    const { handleMeasurement } = useContext(AppContext);
    console.log("dsadggdf", handleMeasurement);

    const [isSelected, setIsSelected] = useState(false);
    const [isPressed, setIsPressed] = useState("");

    const WorkoutWeekly = ["Metric(m, cm, km, kg)", "Us Standard(li)"];

    const handleGoalSelect = (id: string) => {

        handleMeasurement(id);
        setIsSelected(true);
        setIsPressed(id);

    };

    const navigation = () => {
        if (isSelected) {
            props.navigation.navigate("SelectYourTrainingGoals");
        } else {
            Alert.alert("Error", "Please select  one option.");
        }
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>Select measurement system</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>Steps 2 of 5</Text>
                    {WorkoutWeekly.map((goal, index) => (
                        <ExpandableList key={index} label={goal} presshandler={() => handleGoalSelect((index + 1).toString())} isPressed={isPressed === (index + 1).toString()} />
                    ))}
                </View>
                <View style={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
                    <BaseButton width={200} height={54} backgroundColor={'black'} borderRadius={27} label={"Next"} color={"white"} pressHandler={navigation} bottom={24} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SelectMeasurement;
