import { View, Text, ImageBackground, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import BaseTextField from '../../componets/base_text_filed'
import BaseButton from '../../componets/base_button';
import PhoneTextField from '../../componets/phone_text_field';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';

const Login = (props: NativeStackScreenProps<RootstackParamList, "Login">) => {
    const [names, setNames] = React.useState<string>("");
    const [emails, setEmails] = React.useState<string>("");
    const [passwords, setPasswords] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");
    const [secureText, setSecureText] = React.useState<boolean>(true);
    const [confirmSecureText, setConfirmSecureText] = React.useState<boolean>(false);
    const [namevalidation, setNameValidation] = React.useState<string>("")
    const [emailvalidation, setEmailValidation] = React.useState<string>("")
    const [passwordvalidation, setPasswordValidation] = React.useState<string>("")
    const { LoginIn, datas, setDatas } = useContext(AppContext)
    const [buttonDisable, setButtonDisable] = React.useState(false)
    const [emailhandler, setEmailhandler] = React.useState<boolean>(false);
    console.log("data=======+++++++++++++++>", datas);

    useEffect(() => {

    }, [])





    const SecureHandler = () => {
        console.log("Before toggle:", secureText);

        setSecureText((prevSecureText) => !prevSecureText);

        console.log("After toggle:", secureText);
    };





    const emailValidation = (text: string) => {


        const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

        if (text.length > 0) {
            if (!EMAIL_REGEX.test(text)) {
                setEmailValidation('Invalid email format');
            } else {
                setEmailValidation('');
            }
        } else {
            Alert.alert("enter the names")
            setEmailValidation('');
        }
        setButtonDisable(true)
        setEmailhandler(text.trim().length > 0)

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
        setButtonDisable(true)
        console.log("pass", passwordvalidation);
        return hasMinimumLength && hasLetter && hasNumber;
    };








    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>Log In</Text>
                    {/* <Text style={{ color: "black", fontSize: 20 }}>Create a new account</Text> */}
                </View>
                <View style={{ marginTop: 50, alignItems: "center" }}>

                    <BaseTextField secureText={false} placeholder={'Email address'} value={emails}
                        onChangeText={(text: string) => {
                            setEmails(text)
                            emailValidation(text)
                        }} height={50} width={343} borderwidth={1} validationText={emailvalidation} />
                    <View style={{ height: 20 }}></View>
                    <PhoneTextField secureText={secureText} placeholder={'Password'} value={passwords}
                        onChangeText={(text: string) => {
                            setPasswords(text)
                            PasswordValidation(text)
                        }}
                        height={48} width={343} borderwidth={1} validationText={passwordvalidation} secureHandler={SecureHandler} />
                    <View style={{ height: 20 }}></View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                    <BaseButton
                        width={200}
                        height={54}
                        backkgroundColor={'black'}
                        borderRadius={27}
                        label={"Log In"}
                        bottom={20}


                        color={"white"}
                        pressHandler={() => {
                            if (PasswordValidation(passwords) && emailvalidation === "" && emailhandler) {

                                LoginIn(emails, passwords);
                            } else if (passwords.length === 0) {
                                Alert.alert("Password is empty");
                            } else if (emailvalidation === "") {
                                Alert.alert("Email is empty");
                            }
                            else {
                                Alert.alert("Enter the valid information");
                            }
                        }}

                    />

                </View>



            </View>
        </ImageBackground>
    )
}

export default Login
