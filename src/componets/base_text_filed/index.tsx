import { View, TextInput, Text } from 'react-native'
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
    right?: React.ReactNode;
    validationText?: string;
}

const BaseTextField = (props: BaseTextFieldProps) => {
    return (
        <View>
            <TextInput

                secureTextEntry={props.secureText}
                placeholderTextColor={"black"}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={{ height: props.height, width: props.width, borderWidth: props.borderwidth, borderRadius: props.borderRadius, color: "black" }}


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
