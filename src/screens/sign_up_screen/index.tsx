import React, { useContext, useEffect } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';

import BaseButton from '../../componets/base_button';
import PhoneTextField from '../../componets/phone_text_field';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';
import BaseTextField from '../../componets/base_text_filed';

const Signup = (props: NativeStackScreenProps<RootstackParamList, "Signup">) => {
    const [secureText, setSecureText] = React.useState<boolean>(true);
    const [namevalidation, setNameValidation] = React.useState<string>("");
    const [emailvalidation, setEmailValidation] = React.useState<string>("");
    const [passwordvalidation, setPasswordValidation] = React.useState<string>("");
    const [namehandler, setNamehandler] = React.useState<boolean>(false);
    const [emailhandler, setEmailhandler] = React.useState<boolean>(false);
    const { names, nameHandler, emailHandler, emails, passwordHandler, passwords } = useContext(AppContext);
    const [buttonDisable, setButtonDisable] = React.useState(true)

    const SecureHandler = () => {
        setSecureText((prevSecureText) => !prevSecureText);
    };


    useEffect(() => {
        setButtonDisable(names.length === 0 || passwords.length === 0 || emails.length === 0)

    }, [names, passwords, emails])

    const nameValidation = (text: string) => {
        if (text.length === 1) {
            setNameValidation('Please enter your fullname');
        } else if (text.length === 2) {
            setNameValidation('Name should be more than 2 characters');
        } else if (text.length >= 50) {
            setNameValidation('Name should be less than 50 characters');
        } else {
            setNameValidation('');
        }
        setNamehandler(text.trim().length > 0);
    };

    const emailValidation = (text: string) => {
        const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

        if (text.length > 0) {
            if (!EMAIL_REGEX.test(text)) {
                setEmailValidation('Email must be in a valid email format(e.g.,username@gmail.com or username12@gmail.com).Please try again');
            } else {
                setEmailValidation('');
            }
        } else {
            setEmailValidation('');
        }
        setEmailhandler(text.trim().length > 0)

    };

    const PasswordValidation = (text: string): boolean => {
        const hasMinimumLength = text.length > 8;
        const hasLetter = /[a-zA-Z]/.test(text);
        const hasNumber = /\d/.test(text);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text);

        if (text.length > 0) {
            if (!hasMinimumLength) {
                setPasswordValidation("Password must be at least 8 characters long.");
            } else if (!hasLetter) {
                setPasswordValidation("Password must contain at least one letter.");
            } else if (!hasNumber) {
                setPasswordValidation("Password must contain at least one number.");
            } else if (!hasSpecialChar) {
                setPasswordValidation("Password must contain at least one special character.");
            } else {
                setPasswordValidation("");
            }
        } else {
            setPasswordValidation("");
        }

        return hasMinimumLength && hasLetter && hasNumber && hasSpecialChar;
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover">
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>Sign up</Text>
                    <Text style={{ color: "black", fontSize: 16, fontFamily: "Space Grotesk" }}>Create a new account</Text>
                </View>
                <View style={{ marginTop: 50, marginLeft: 25 }}>
                    <BaseTextField secureText={false} placeholder={'Full Name'} value={names}
                        onChangeText={(text: string) => {
                            nameHandler(text);
                            nameValidation(text);
                        }} height={48} width={343} borderwidth={1} validationText={namevalidation} />
                    <View style={{ height: 20 }}></View>
                    <BaseTextField secureText={false} placeholder={'Email address'} value={emails}
                        onChangeText={(text: string) => {
                            emailHandler(text)
                            emailValidation(text)
                        }} height={48} width={343} borderwidth={1} validationText={emailvalidation} />
                    <View style={{ height: 20 }}></View>
                    <PhoneTextField secureText={secureText} placeholder={'Password'} value={passwords}
                        onChangeText={(text: string) => {
                            passwordHandler(text)
                            PasswordValidation(text)
                        }}
                        height={48} width={343} borderwidth={1} validationText={passwordvalidation} secureHandler={SecureHandler} />
                    <View style={{ height: 20 }}></View>
                </View>
                <View style={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
                    <BaseButton width={200} height={54} backgroundColor={'black'} borderRadius={27} label={"Sign Up"} bottom={68} color={"white"} buttonDisable={buttonDisable}
                        pressHandler={() => {
                            if (namehandler && PasswordValidation(passwords) && emailvalidation === "" && emailhandler) {
                                console.log("yes");


                                props.navigation.navigate("AboutYourSelf", {
                                    name: names
                                });
                            }

                        }}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

export default Signup;
