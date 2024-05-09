import { View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import BaseTextField from '../../componets/base_text_filed'
import BaseButton from '../../componets/base_button';
import PhoneTextField from '../../componets/phone_text_field';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BaseText from '../../componets/base_text';
import BaseTextInput from '../../componets/expandable_lists';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';
import ExpandableList from '../../componets/expandable_lists';

const TypicallyWorkout = (props: NativeStackScreenProps<RootstackParamList, "TypicallyWorkout">) => {
    const { handleWorkoutTypically, SignUp, names, emails, passwords, measurementSystem, gender, height, selectedDate, weight, workoutweekly,
        status } = useContext(AppContext)
    console.log("meas===>", measurementSystem);
    console.log("=========>", status);



    const [gendermodal, setGenderModal] = React.useState<boolean>(false);
    const [dropDownMenu, setDropDownMenu] = React.useState<boolean>(false);
    const [selectedGender, setSelectedGender] = React.useState("Gender");
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([])
    const [isPressed, setisPresses] = useState<string>("")
    console.log("console", status);

    const WorkoutWeekly = ["Less than 15 mins", "15-30 mins", "More than 30 mins"]

    const handleGoalSelect = (id: string) => {


        setIsSelected(true);
        setisPresses(id)
        handleWorkoutTypically(id)
    };
    const handler = () => {
        if (isSelected) {
            SignUp(names, emails, passwords, measurementSystem, gender, height, selectedDate, weight, workoutweekly)

            if (status == "success") {
                props.navigation.navigate("Dashboardscreen");
            }

        } else {
            Alert.alert("Error", "Please select  one option.", [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
        }
    };



    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>How long do u typically</Text>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>prefer to workout?</Text>

                    <Text style={{ color: "black", fontSize: 16, fontFamily: "Space Grotesk" }}>Steps 5 of 5</Text>

                </View>

                {WorkoutWeekly.map((goal, index) => (
                    <ExpandableList key={index} label={goal} presshandler={() => handleGoalSelect((index + 1).toString())} isPressed={isPressed === (index + 1).toString()} />
                ))}







                <View style={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
                    <BaseButton width={200} height={48} backkgroundColor={'black'} borderRadius={27} label={"Get Started"} color={"white"} pressHandler={handler} bottom={24} />


                </View>
            </View>

        </ImageBackground>

    )
}

export default TypicallyWorkout

