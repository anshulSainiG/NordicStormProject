import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Dashboardscreen = () => {
    const { workouttypically, workoutweekly, datas, gender, selectedDate, height, weight, measurementSystem, goals } = useContext(AppContext);
    console.log("datas", datas);
    // console.log("datasworkout", datas.workoutMeasurement);


    const workoutWeekly = () => {
        if (workoutweekly === "1") {
            return <Text>"Once a week"</Text>;
        } else if (workoutweekly === "2") {
            return <Text>"3-5"</Text>;
        } else {
            return <Text>"3-5"</Text>;
        }
    };
    const workoutTypiclly = () => {
        if (workouttypically === "1") {
            return <Text>"Less than 15 mins"</Text>;
        } else if (workouttypically === "2") {
            return <Text>"15-30 mins"</Text>;
        } else {
            return <Text>"More than 30 mins"</Text>;
        }
    };
    const goal = () => {
        if (goals === "12") {
            return <Text>"Loose Weight"</Text>;
        } else if (goals === "13") {
            return <Text>"Improve cardio"</Text>;
        } else if (goals === "17") {
            return <Text>"Improove Balance and Body Control"</Text>;
        }
        else if (goals === "16") {

        }
        else if (goals === "17") {

        }
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>

            <Text style={{ color: "black" }}>name:{datas.name}</Text>
            <Text>selectedDate:email:{datas.email}</Text>
            <Text style={{ color: "black" }}>gender:{datas.gender}</Text>
            <Text>dob:{datas.dob}</Text>
            <Text>height:{datas.height}</Text>
            <Text>weight:{datas.weight}</Text>
            <Text>measurement:{measurementSystem == "1" ? "Metric(m, cm, km, kg)" : "Us Standard(li)"}</Text>
            <Text>goals:{datas.goal}</Text>
            <Text>workoutweekly:{workoutWeekly()}</Text>
            <Text>workouttypically:{workoutTypiclly()}</Text>
        </View>
    )
}

export default Dashboardscreen;
