import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
type BaseButtonProps = {
    width: number;
    height: number;
    backkgroundColor: string;
    borderRadius: number
    label: string,
    left?: number;
    color: string;
    pressHandler: () => void;
    top?: number
    bottom?: number
}

const BaseButton = (props: BaseButtonProps) => {
    return (

        <TouchableOpacity style={{
            width: props.width,
            height: props.height,
            top: props.top,
            left: props.left,
            // borderWidth: 2,
            backgroundColor: props.backkgroundColor,
            borderRadius: props.borderRadius,
            bottom: props.bottom,




        }} onPress={props.pressHandler}>
            <Text style={{ color: props.color, fontSize: 16, paddingTop: 12, fontWeight: "600", fontFamily: "Space Grotesk", alignSelf: "center" }}>
                {props.label}
            </Text>
        </TouchableOpacity>

    )
}

export default BaseButton