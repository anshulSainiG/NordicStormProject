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
            <Text style={{ fontSize: 20, color: "black", marginTop: 5, marginLeft: 10 }}>{props.label}</Text>
        </View>

    )
}

export default BaseText 