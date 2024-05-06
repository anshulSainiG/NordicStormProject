import { View, Text } from 'react-native'
import React from 'react'
type BaseTextProps = {
    label: string;
    width: number;
    height: number;
    borderWidth: number;
    dropDownMenu: boolean;


}


const BaseText = (props: BaseTextProps) => {
    return (
        <View style={{ width: props.width, height: props.height, borderWidth: props.borderWidth, alignSelf: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 16, color: "black", marginTop: 12, marginLeft: 16 }}>{props.label}</Text>
        </View>

    )
}

export default BaseText 