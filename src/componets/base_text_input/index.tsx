import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
type BaseTextInput = {
    label: string;
    presshandler: () => void;
    isPressed?: boolean;
    isSelected?: boolean

}

const BaseTextInput = (props: BaseTextInput) => {
    return (
        <TouchableOpacity style={{ width: 360, height: 50, borderWidth: 2, alignSelf: "center", marginTop: 30, flexDirection: "row", justifyContent: "center", borderRadius: 20, borderColor: props.isPressed ? "red" : "black" }} onPress={props.presshandler}>
            <Text style={{ fontSize: 20, color: "black", marginTop: 5, marginLeft: 10 }}>{props.label}</Text>

        </TouchableOpacity>


    )
}

export default BaseTextInput