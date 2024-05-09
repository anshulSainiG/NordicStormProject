import React, { useContext, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../context";

const Dashboardscreen = () => {
    const { workouttypically, workoutweekly, datas, gender, selectedDate, height, weight, measurementSystem, goals } = useContext(AppContext);


    console.log("datas", datas);
    console.log("goals===>", goals);


    const renderGoals = () => {
        const goalsArray = goals.split(',').map(goal => goal.trim());
        console.log("goalsArray", goalsArray);

        return goalsArray.map((goal, index) => (
            <TouchableOpacity key={index} >
                <Text>{getGoalText(goal)}</Text>
            </TouchableOpacity>
        ));
    };



    const getGoalText = (goal: string) => {
        console.log("dggdgdd");

        switch (goal) {
            case "12":
                return "Lose Weight";
            case "13":
                return <Text style={{ color: "white" }}> "Improve Cardio"</Text>
            case "14":
                return <Text style={{ color: "white" }}>"Improve Balance and Body Control"</Text>
            default:
                return <Text style={{ color: "white" }}>"Unknown Goal"</Text>
        }
    };

    const workoutWeekly = () => {
        if (workoutweekly === "1") {
            return <Text style={{ color: "white" }}>Once a week</Text>;
        } else if (workoutweekly === "2") {
            return <Text style={{ color: "white" }}>3-5</Text>;
        } else {
            return <Text style={{ color: "white" }}>3-5</Text>;
        }
    };

    const workoutTypically = () => {
        if (workouttypically === "1") {
            return <Text style={{ color: "white" }}>Less than 15 mins</Text>;
        } else if (workouttypically === "2") {
            return <Text style={{ color: "white" }}>15-30 mins</Text>;
        } else {
            return <Text style={{ color: "white" }}>More than 30 mins</Text>;
        }
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require("../../assest/images/intial.png")}>
            <View style={{ alignItems: 'center', justifyContent: "center", flex: 1 }}>
                <Text style={{ color: "white" }}>name: {datas.name}</Text>
                <Text style={{ color: "white" }}>selectedDate: {datas.email}</Text>
                <Text style={{ color: "white" }}>gender: {datas.gender}</Text>
                <Text style={{ color: "white" }}>dob: {datas.dob}</Text>
                <Text style={{ color: "white" }}>height: {datas.height}</Text>
                <Text style={{ color: "white" }}>weight: {datas.weight}</Text>
                <Text style={{ color: "white" }}>measurement: {measurementSystem == "1" ? "Metric(m, cm, km, kg)" : "Us Standard(li)"}</Text>
                <Text style={{ color: "white" }}>goals:</Text>
                {renderGoals()}
                <Text style={{ color: "white" }}>workoutweekly: {workoutWeekly()}</Text>
                <Text style={{ color: "white" }}>workouttypically: {workoutTypically()}</Text>
            </View>
        </ImageBackground>
    );
};

export default Dashboardscreen;
