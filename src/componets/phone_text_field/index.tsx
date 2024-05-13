import { View, TextInput, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type BaseTextFieldProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    height: number;
    width: number;
    borderwidth: number;
    borderRadius?: number;
    secureText: boolean;
    validation?: boolean;
    validationText: string;
    secureHandler?: () => void;

}

const PhoneTextField = (props: BaseTextFieldProps) => {
    const colorScheme = useColorScheme();
    const borderColor = colorScheme == "dark" ? "grey" : "black"

    return (
        <View>
            <View style={{ height: props.height, width: props.width, borderWidth: props.borderwidth, borderRadius: props.borderRadius, flexDirection: "row", justifyContent: "space-between", borderColor: borderColor }}>
                <TextInput
                    // placeholderTextColor={"#040404"}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureText}
                    style={{ color: "black", width: "90%" }}
                />

                <TouchableOpacity onPress={props.secureHandler} style={{ alignSelf: "center", marginRight: 10 }}>
                    <FontAwesome name={props.secureText ? "eye-slash" : "eye"} size={22} color="black" />
                </TouchableOpacity>


            </View>
            {
                props.validationText ?
                    <Text style={{ color: "red", fontSize: 15 }}>{props.validationText}</Text>
                    : null
            }
        </View>
    )
}

export default PhoneTextField
