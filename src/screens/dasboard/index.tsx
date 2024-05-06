import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useRoute } from '@react-navigation/native'

const Dashboard = () => {
    const route = useRoute();
    // const { email, password } = route.params
    // const abcd = {
    //     password: string,
    //     email: string,
    // }


    console.log("name,email", route.params)
    const { datas } = useContext(AppContext)
    console.log("dats", datas);

    return (
        <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "black" }}>name:{datas?.data?.firstName}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>email:{datas?.data?.email}</Text>
        </View>
    )
}

export default Dashboard