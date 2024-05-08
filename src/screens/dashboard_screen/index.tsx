import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../context";

const Dashboardscreen = () => {
    const { workouttypically, workoutweekly, datas, gender, selectedDate, height, weight, measurementSystem, goals } = useContext(AppContext);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    console.log("fffselected", selectedGoals);
    console.log("datas", datas);

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
        switch (goal) {
            case "12":
                return "Lose Weight";
            case "13":
                return "Improve Cardio";
            case "14":
                return "Improve Balance and Body Control";
            case "16":
                return "Rather not say";
            default:
                return "Unknown Goal";
        }
    };

    const workoutWeekly = () => {
        if (workoutweekly === "1") {
            return <Text>Once a week</Text>;
        } else if (workoutweekly === "2") {
            return <Text>3-5</Text>;
        } else {
            return <Text>3-5</Text>;
        }
    };

    const workoutTypically = () => {
        if (workouttypically === "1") {
            return <Text>Less than 15 mins</Text>;
        } else if (workouttypically === "2") {
            return <Text>15-30 mins</Text>;
        } else {
            return <Text>More than 30 mins</Text>;
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Text>name: {datas.name}</Text>
            <Text>selectedDate: {datas.email}</Text>
            <Text>gender: {datas.gender}</Text>
            <Text>dob: {datas.dob}</Text>
            <Text>height: {datas.height}</Text>
            <Text>weight: {datas.weight}</Text>
            <Text>measurement: {measurementSystem == "1" ? "Metric(m, cm, km, kg)" : "Us Standard(li)"}</Text>
            <Text>goals:</Text>
            {renderGoals()}
            <Text>workoutweekly: {workoutWeekly()}</Text>
            <Text>workouttypically: {workoutTypically()}</Text>
        </View>
    );
};

export default Dashboardscreen;
