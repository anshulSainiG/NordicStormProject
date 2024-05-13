import { View, Text, ImageBackground, Alert } from 'react-native';
import React, { useContext, useEffect } from 'react';
import BaseTextField from '../../componets/base_text_filed';
import BaseButton from '../../componets/base_button';
import PhoneTextField from '../../componets/phone_text_field';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootstackParamList } from '../../navigation';
import { AppContext } from '../../context';

const Login = (props: NativeStackScreenProps<RootstackParamList, "Login">) => {
    const [emails, setEmails] = React.useState<string>("");
    const [passwords, setPasswords] = React.useState<string>("");
    const [secureText, setSecureText] = React.useState<boolean>(true);
    const [emailvalidation, setEmailValidation] = React.useState<string>("");
    const [passwordvalidation, setPasswordValidation] = React.useState<string>("");
    const { LoginIn } = useContext(AppContext);
    const [buttonDisable, setButtonDisable] = React.useState(true);

    useEffect(() => {
        setButtonDisable(emails.trim().length === 0 || passwords.trim().length === 0);
    }, [emails, passwords]);

    const SecureHandler = () => {
        setSecureText((prevSecureText) => !prevSecureText);
    };

    const emailValidation = (text: string) => {
        const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

        if (text.trim().length > 0) {
            if (!EMAIL_REGEX.test(text)) {
                setEmailValidation('Email must be in a valid email format(e.g.,username@gmail.com or username12@gmail.com).Please try again');
            } else {
                setEmailValidation('');
            }
        } else {
            setEmailValidation('');
        }
        setEmails(text.trim());
    };

    const PasswordValidation = (text: string): boolean => {
        const hasMinimumLength = text.length > 8;
        const hasLetter = /[a-zA-Z]/.test(text);
        const hasNumber = /\d/.test(text);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text);

        if (text.trim().length > 0) {
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

        setPasswords(text.trim());
        return hasMinimumLength && hasLetter && hasNumber && hasSpecialChar;
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <View style={{ height: "90%", width: "100%", backgroundColor: "white", marginTop: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Space Grotesk" }}>Log In</Text>
                </View>
                <View style={{ marginTop: 50, alignItems: "center" }}>
                    <BaseTextField secureText={false} placeholder={'Email address'} value={emails}
                        onChangeText={(text: string) => {
                            emailValidation(text);
                        }} height={50} width={343} borderwidth={1} validationText={emailvalidation} />
                    <View style={{ height: 20 }}></View>
                    <PhoneTextField secureText={secureText} placeholder={'Password'} value={passwords}
                        onChangeText={(text: string) => {
                            PasswordValidation(text);
                        }}
                        height={48} width={343} borderwidth={1} validationText={passwordvalidation} secureHandler={SecureHandler} />
                    <View style={{ height: 20 }}></View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                    <BaseButton
                        width={200}
                        height={54}
                        backgroundColor={'black'}
                        borderRadius={27}
                        label={"Log In"}
                        bottom={20}
                        buttonDisable={buttonDisable}
                        color={"white"}
                        pressHandler={() => {
                            if (PasswordValidation(passwords) && emailvalidation === "" && emails.trim().length > 0) {
                                LoginIn(emails, passwords);
                            } else if (passwords.trim().length === 0) {
                                Alert.alert("Password is empty");
                            } else if (emailvalidation === "") {
                                Alert.alert("Email is empty");
                            } else {
                                Alert.alert("Enter valid information");
                            }
                        }}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default Login;
