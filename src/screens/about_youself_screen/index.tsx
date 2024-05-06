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
                    <Text style={{
                        color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk"
                    }}>Tell us a bit about yourself</Text>
                    <Text style={{ color: "black", fontSize: 16, fontFamily: "Space Grotesk" }}>Steps 1 of 5</Text>
                </View>
                <BaseText label={name} width={343} height={48} borderWidth={1} dropDownMenu={dropDownMenu} />
                <View style={{ width: 343, height: 48, borderWidth: 1, alignSelf: "center", marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, color: "black", marginTop: 10, marginLeft: 16 }}>{gender}</Text>
                    <TouchableOpacity onPress={() => setGenderModal(!gendermodal)}>
                        <AntDesign name="down" size={15} color="black" style={{ marginRight: 10, marginTop: 18 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: 343, height: 48, borderWidth: 1, alignSelf: "center", marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 16, color: "black" }}>{selectedDate}</Text>
                    <TouchableOpacity onPress={() => setCalenderModal(true)}>
                        <Image source={require("../../assest/images/calendaricon.png")} style={{ marginRight: 10, marginTop: 15, height: 20, tintColor: "black" }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 25 }}>
                    <View style={{ width: 343, height: 48, borderWidth: 1, flexDirection: 'row', borderColor: "black", paddingLeft: 16, alignSelf: "center" }}>

                        <BaseTextField placeholder={"Height"} value={height} onChangeText={(text) => handleHeightChange(text)} height={48} width={300} secureText={false} />
                        <Text style={{ marginTop: 10, color: "black", fontWeight: "bold", fontSize: 16, fontFamily: "Space Grotesk" }}>cm</Text>
                    </View>
                </View>
                <CalendarModal visible={calendermodal} onClose={() => setCalenderModal(false)} onSelectDate={handleDateSelect} />


                <GenderModal visible={gendermodal} onClose={() => setGenderModal(false)} onSelectDate={handleGenderSelect} />

                <View style={{ marginTop: 25, alignSelf: "center" }}>
                    {/* <View style={{ width: "95%", height: 50, borderWidth: 1, flexDirection: 'row', borderColor: "black" }}> */}
                    <View style={{ width: 343, height: 48, borderWidth: 1, flexDirection: "row", paddingLeft: 16 }}>
                        <BaseTextField placeholder={"Weight"} value={weight} onChangeText={(text) => handleWeightChange(text)} height={48} width={300} secureText={false} />
                        <Text style={{ marginTop: 10, color: "black", fontWeight: "bold", fontSize: 16, fontFamily: "Space Grotesk" }}>kg</Text>
                    </View>
                </View>
                <View style={{ alignItems: "center", flex: 1 }}>

                    <BaseButton width={200} height={54} backkgroundColor={'black'} borderRadius={30} label={"Next"} bottom={24} color={"white"} pressHandler={handler} />
                </View>
            </View>
            {/* </View> */}
        </ImageBackground>



    );
};

export default AboutYourSelf;
