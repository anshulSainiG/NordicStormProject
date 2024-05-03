import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Background = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <Text>index</Text>
        </ImageBackground>
    )
}

export default Background
