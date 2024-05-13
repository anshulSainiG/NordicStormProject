import { View, TextInput, Text, Appearance, useColorScheme } from 'react-native'
import React from 'react'

type BaseTextFieldProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    height: number;
    width: number;
    borderwidth?: number;
    borderRadius?: number;
    secureText: boolean;
    validationText?: string;
    left?: string;
    keyboardType?: any;

}

const BaseTextField = (props: BaseTextFieldProps) => {
    // const colorScheme = Appearance.getColorScheme();
    // const borderColor = colorScheme == "dark" ? "white" : "black"

    const colorScheme = useColorScheme();
    const borderColor = colorScheme == "dark" ? "grey" : "black"

    return (
        <View>
            <TextInput
                placeholderTextColor={"grey"}
                secureTextEntry={props.secureText}
                keyboardType={props.keyboardType}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={{ height: props.height, width: props.width, borderWidth: props.borderwidth, borderRadius: props.borderRadius, color: "black", marginLeft: props.left, borderColor: borderColor }}


            ></TextInput>


            {
                props.validationText ?
                    <Text style={{ color: "red" }}>{props.validationText}</Text>
                    : null
            }
        </View>
    )
}
export default BaseTextField
