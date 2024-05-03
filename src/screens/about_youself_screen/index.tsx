import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';
import BaseText from '../../componets/base_text';
import CalendarModal from '../../componets/calenders'; // Assuming CalendarModal is your static calendar modal component
import BaseButton from '../../componets/base_button';
import BaseTextField from '../../componets/base_text_filed';
import GenderModal from '../../componets/gender_modal';

const AboutYourSelf = (props: NativeStackScreenProps<RootstackParamList, "AboutYourSelf">) => {
    const route = useRoute();
    const { name } = route.params;
    const { datas, height, handleHeightChange, weight, handleWeightChange, handleGenderChange, gender, selectedDate, handleDateChange } = useContext(AppContext);

    console.log("datas", datas.name)

    const [gendermodal, setGenderModal] = React.useState<boolean>(false);
    const [calendermodal, setCalenderModal] = React.useState<boolean>(false);
    const [dropDownMenu, setDropDownMenu] = React.useState<boolean>(false);
    const [selectedGender, setSelectedGender] = React.useState("Gender");
    // const [selectedDate, setSelectedDate] = React.useState<string>("Birthdate");


    const handleDateSelect = (date: string) => {
        handleDateChange(date);
        setCalenderModal(false);
    };

    const handleGenderSelect = (text: string) => {
        console.log("text", text);

        handleGenderChange(text)
        setGenderModal(false);
    };
    const handler = () => {
        // Check if all fields are filled
        if (name && gender && selectedDate && height && weight) {
            props.navigation.navigate("SelectMeasurement");
        } else {
            // Notify user to fill all fields
            Alert.alert("Please fill all fields before proceeding.");
        }
    };


    return (


        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Tell us a bit about yourself</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>Steps 1 of 5</Text>
                </View>
                <BaseText label={name} width={350} height={50} borderWidth={1} dropDownMenu={dropDownMenu} />
                <View style={{ width: 350, height: 50, borderWidth: 1, alignSelf: "center", marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20, color: "black", marginTop: 5, marginLeft: 10 }}>{gender}</Text>
                    <TouchableOpacity onPress={() => setGenderModal(!gendermodal)}>
                        <AntDesign name="down" size={25} color="black" style={{ marginRight: 10, marginTop: 5 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: 350, height: 50, borderWidth: 1, alignSelf: "center", marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, color: "black" }}>{selectedDate}</Text>
                    <TouchableOpacity onPress={() => setCalenderModal(true)}>
                        <Image source={require("../../assest/images/calendaricon.png")} style={{ marginRight: 10, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 25, marginLeft: 20 }}>
                    <View style={{ width: "95%", height: 50, borderWidth: 1, flexDirection: 'row', borderColor: "black" }}>

                        <BaseTextField placeholder={"Height"} value={height} onChangeText={(text) => handleHeightChange(text)} height={50} width={320} secureText={false} />
                        <Text style={{ marginTop: 10, color: "black", fontWeight: "bold", fontSize: 18 }}>cm</Text>
                    </View>
                </View>
                <CalendarModal visible={calendermodal} onClose={() => setCalenderModal(false)} onSelectDate={handleDateSelect} />


                <GenderModal visible={gendermodal} onClose={() => setGenderModal(false)} onSelectDate={handleGenderSelect} />

                <View style={{ marginTop: 25, marginLeft: 20 }}>
                    <View style={{ width: "95%", height: 50, borderWidth: 1, flexDirection: 'row', borderColor: "black" }}>

                        <BaseTextField placeholder={"Weight"} value={weight} onChangeText={(text) => handleWeightChange(text)} height={50} width={320} secureText={false} />
                        <Text style={{ marginTop: 10, color: "black", fontWeight: "bold", fontSize: 18 }}>kg</Text>
                    </View>
                </View>

                <BaseButton width={154} height={54} backkgroundColor={'black'} borderRadius={20} label={"Next"} top={100} left={120} color={"white"} pressHandler={handler} />

            </View>
        </ImageBackground>



    );
};

export default AboutYourSelf;
