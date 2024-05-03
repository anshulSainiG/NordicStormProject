import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useRoute } from '@react-navigation/native'

const Dashboard = () => {
    const route = useRoute();
    const { email, password } = route.params
    console.log("name,email", route.params)




    return (
        <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "black" }}>email:{email}</Text>
            <Text style={{ color: "black", fontSize: 20 }}>password:{password}</Text>


        </View>
    )
}

export default Dashboard