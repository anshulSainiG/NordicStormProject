import { View, TextInput, Text, TouchableOpacity } from 'react-native'
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
    return (
        <View>
            <View style={{ height: props.height, width: props.width, borderWidth: props.borderwidth, borderRadius: props.borderRadius, flexDirection: "row", justifyContent: "space-between" }}>
                <TextInput
                    // placeholderTextColor={"#040404"}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureText}
                    style={{ color: "black" }}
                />
                {
                    props.secureText ? (

                        <TouchableOpacity onPress={props.secureHandler} style={{ alignSelf: "center", marginRight: 10 }}>
                            <FontAwesome name="eye-slash" size={22} color="black" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={props.secureHandler} style={{ marginRight: 10, alignSelf: "center" }}>
                            <FontAwesome name="eye" size={22} color="black" />
                        </TouchableOpacity>
                    )
                }

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
