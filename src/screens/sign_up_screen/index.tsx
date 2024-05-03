import { View, Text, ImageBackground, Alert } from 'react-native'
import React, { useContext } from 'react'
import BaseTextField from '../../componets/base_text_filed'
import BaseButton from '../../componets/base_button';
import PhoneTextField from '../../componets/phone_text_field';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';

const Signup = (props: NativeStackScreenProps<RootstackParamList, "Signup">) => {


    const [confirmPassword, setConfirmPassword] = React.useState<string>("");
    const [secureText, setSecureText] = React.useState<boolean>(true);
    const [confirmSecureText, setConfirmSecureText] = React.useState<boolean>(false);
    const [namevalidation, setNameValidation] = React.useState<string>("")
    const [emailvalidation, setEmailValidation] = React.useState<string>("")
    const [passwordvalidation, setPasswordValidation] = React.useState<string>("")
    const { SignUp, datas, LoginIn, names, nameHandler, emailHandler, emails, passwordHandler, passwords } = useContext(AppContext)
    console.log("data", datas);
    console.log("fgffhfhf=>......", emails, names, passwords);


    const SecureHandler = () => {
        console.log("Before toggle:", secureText);

        setSecureText((prevSecureText) => !prevSecureText);

        console.log("After toggle:", secureText);
    };



    const confirmSecureHandler = () => {
        setConfirmSecureText(!confirmSecureText);
    }
    const nameValidation = (text: string) => {
        if (text.length === 1) {
            setNameValidation('Please enter your fullname');
        } else if (text.length == 2) {
            setNameValidation('Name should be more than 2 characters');
        } else if (text.length >= 50) {
            setNameValidation('Name should be less than 50 characters');
        } else {
            setNameValidation('');
        }
    };
    const emailValidation = (text: string) => {
        const EMAIL_REGEX = /^[A-Za-z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (text.length > 0) {
            if (!EMAIL_REGEX.test(text)) {
                setEmailValidation('Invalid email format');
                console.log('Invalid email format');
            } else {
                setEmailValidation('');
            }
        } else {
            setEmailValidation('');
        }
    };



    const PasswordValidation = (text: string): boolean => {
        const hasMinimumLength = text.length > 8;
        const hasLetter = /[a-zA-Z]/.test(text);
        const hasNumber = /\d/.test(text);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text)
        if (text.length > 0) {



            if (!hasMinimumLength) {
                setPasswordValidation("Password must be at least 8 characters long.");
            } else if (!hasLetter) {
                setPasswordValidation("Password must contain at least one letter.");
            } else if (!hasNumber) {
                setPasswordValidation("Password must contain at least one number.");
            } else if (!hasSpecialChar) {
                setPasswordValidation("Password must contain at least one special charcters.");
            } else {
                setPasswordValidation("");
            }
        }
        else {
            setPasswordValidation("")
        }

        console.log("pass", passwordvalidation);
        return hasMinimumLength && hasLetter && hasNumber;
    };


    // const navigationHandler = () => {
    //     if (!nameValidation && !PasswordValidation && !emailValidation) {
    //         console.log("fullfilled");
    //     }
    //     else {

    //     }
    // }





    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Sign up</Text>
                    <Text style={{ color: "black", fontSize: 20 }}>Create a new account</Text>
                </View>
                <View style={{ marginTop: 50, marginLeft: 25 }}>
                    <BaseTextField secureText={false} placeholder={'Full Name'} value={names}
                        onChangeText={(text: string) => {
                            nameHandler(text);
                            nameValidation(text);
                        }} height={50} width={343} borderwidth={1} validationText={namevalidation} />
                    <View style={{ height: 20 }}></View>
                    <BaseTextField secureText={false} placeholder={'Email address'} value={emails}
                        onChangeText={(text: string) => {
                            emailHandler(text)
                            emailValidation(text)
                        }} height={50} width={343} borderwidth={1} validationText={emailvalidation} />
                    <View style={{ height: 20 }}></View>
                    <PhoneTextField secureText={secureText} placeholder={'Password'} value={passwords}
                        onChangeText={(text: string) => {
                            passwordHandler(text)
                            PasswordValidation(text)
                        }}
                        height={50} width={343} borderwidth={1} validationText={passwordvalidation} secureHandler={SecureHandler} />
                    <View style={{ height: 20 }}></View>
                </View>
                <BaseButton width={154} height={54} backkgroundColor={'black'} borderRadius={20} label={"Sign Up"} top={200} left={120} color={"white"}
                    pressHandler={() => {
                        if (PasswordValidation(passwords)) {

                            props.navigation.navigate("AboutYourSelf", {
                                name: names
                            })
                        }
                        else {
                            Alert.alert("enter the field")
                        }
                    }}

                />
            </View>
        </ImageBackground>
    )
}

export default Signup
