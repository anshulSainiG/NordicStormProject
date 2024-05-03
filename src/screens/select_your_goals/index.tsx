import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import BaseTextField from '../../componets/base_text_filed'
import BaseButton from '../../componets/base_button';
import PhoneTextField from '../../componets/phone_text_field';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BaseText from '../../componets/base_text';
import BaseTextInput from '../../componets/base_text_input';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';

const SelectYourTrainingGoals = (props: NativeStackScreenProps<RootstackParamList, "SelectYourTrainingGoals">) => {
    const [gendermodal, setGenderModal] = React.useState<boolean>(false);
    const [dropDownMenu, setDropDownMenu] = React.useState<boolean>(false);
    const [selectedGender, setSelectedGender] = React.useState("Gender");
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([])
    console.log("====>", selectedGoals);

    const [isPressed, setisPresses] = useState(false)
    const { handleGoals } = useContext(AppContext)
    handleGoals(selectedGoals.join(""))
    const gaols = ["Loose Weight", "Improve Cardio", "Improve Balance and Body Control", "Rather not say"];

    const handleGoalSelect = (goal: string) => {
        console.log(goal, "====goal");

        setIsSelected(true);
        setisPresses(true)
        setSelectedGoals((prevGoals) => {
            return [...prevGoals, goal]
            console.log(...prevGoals, goal, "------prevGoals")
        });
    };
    const handler = () => {
        if (isSelected && selectedGoals.length > 0) {
            props.navigation.navigate("TimesPerWeek");
        } else {
            Alert.alert("Error", "Please select at least one option.", [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
        }
    };



    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Select your Training goals</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>Steps 3 of 5</Text>
                </View>

                {gaols.map((goal, index) => (
                    <BaseTextInput key={index} label={goal} presshandler={() => handleGoalSelect(goal)} isPressed={selectedGoals.includes(goal)} />
                ))}







                <BaseButton width={154} height={54} backkgroundColor={'black'} borderRadius={20} label={"Next"} top={50} left={120} color={"white"} pressHandler={handler}



                />
            </View>

        </ImageBackground>

    )
}

export default SelectYourTrainingGoals

