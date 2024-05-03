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
}

const BaseButton = (props: BaseButtonProps) => {
    return (
        <View>
            <TouchableOpacity style={{
                width: props.width,
                height: props.height,
                top: props.top,
                left: props.left,
                // borderWidth: 2,
                backgroundColor: props.backkgroundColor,
                borderRadius: props.borderRadius


            }} onPress={props.pressHandler}>
                <Text style={{ color: props.color, fontSize: 20, textAlign: "center", paddingTop: 10, fontWeight: "600" }}>
                    {props.label}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BaseButton