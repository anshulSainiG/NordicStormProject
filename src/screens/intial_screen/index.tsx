import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import BaseButton from '../../componets/base_button'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootstackParamList } from '../../navigation'

const IntialScreen = (props: NativeStackScreenProps<RootstackParamList, "IntialScreen">) => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")} resizeMode="cover" >
            <StatusBar backgroundColor={"rgba(178,124,251,255)"} />
            <View style={{ height: "90%", alignItems: 'center', justifyContent: "center" }}>
                <Image source={require("../../assest/images/group.png")} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <BaseButton width={154} height={54} backgroundColor={'white'} borderRadius={27} label={"Log in"} color={"black"} pressHandler={() => props.navigation.navigate("Login")} bottom={24} />
                {/* <View style={{ width: 19 }}></View> */}
                <BaseButton width={154} height={54} backgroundColor={'black'} borderRadius={27} label={"Sign Up"} color={"white"} pressHandler={() => props.navigation.navigate("Signup")} bottom={24} />
            </View>
        </ImageBackground>
    )
}

export default IntialScreen