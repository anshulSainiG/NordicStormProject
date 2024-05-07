// AppContext.tsx
import React, { createContext, ReactNode, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface AppContextType {
    isLoading: boolean;
    datas: any;
    LoginIn: (email: string,
        password: string,
        uniqueId?: string,
        authToken?: string,
        name?: string,
        gender?: string,
        type?: string,
        deviceId?: string) => void;
    SignUp: (name: string, email: string,
        password: string,
        measurementSystem: string,
        height: string,
        age?: string,
        gender: string,
        weight: string,
        trainingGoal?: string,
        workoutFrequency: string,
        workoutFrequencyType?: string,
        workoutDuration: string) => void;
    selectedDate: string;
    weight: string;
    height: string;
    gender: string;
    measurementSystem: string;
    goals: string;
    workoutweekly: string;
    workouttypically: string;
    names: string;
    emails: string;
    passwords: string;
    status: string;

    handleHeightChange: (newHeight: string) => void;
    handleWeightChange: (newWeight: string) => void;
    handleGenderChange: (gender: string) => void;
    handleDateChange: (date: string) => void;
    handleMeasurement: (id: string) => void;
    handleGoals: (id: string) => void;
    handleWorkout: (id: string) => void;
    handleWorkoutTypically: (id: string) => void;
    nameHandler: (text: string) => void;
    emailHandler: (text: string) => void;
    passwordHandler: (text: string) => void;
}

export const AppContext = createContext<AppContextType>({
    isLoading: false,
    datas: {},

    status: "",
    LoginIn: () => { },
    SignUp: () => { },
    height: "",
    weight: "",
    gender: "",
    emails: "",
    selectedDate: "",
    passwords: "",
    names: "",
    measurementSystem: "",
    goals: "",
    workoutweekly: "",
    workouttypically: "",
    handleHeightChange: () => { },
    handleWeightChange: () => { },
    handleGenderChange: () => { },
    handleDateChange: () => { },
    handleMeasurement: () => { },
    handleGoals: () => { },
    handleWorkout: () => { },
    handleWorkoutTypically: () => { },
    nameHandler: () => { },
    emailHandler: () => { },
    passwordHandler: () => { }
});

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [datas, setDatas] = useState({});
    const [status, setStatus] = useState<string>("");
    // const [login, setLogin] = useState<{ [key: string]: any }>({});
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [gender, setGender] = useState<string>("Gender");
    const [selectedDate, setSelectedDate] = useState<string>("Birthdate");
    const [measurementSystem, setMeasurementSystem] = useState<string>("");
    const [goals, setGoals] = useState<string>("12");

    const [workoutweekly, setWorkoutweekly] = useState<string>("");
    const [workouttypically, setWorkouttypically] = useState<string>("");
    const [names, setNames] = useState<string>("");
    const [emails, setEmails] = useState<string>("");
    const [passwords, setPasswords] = useState<string>("");
    console.log("fghghfghhgggg========++++++", goals);


    // Initialize navigation using useNavigation hook
    const navigation = useNavigation();

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    }

    const handleGenderChange = (gender: string) => {
        setGender(gender);
    }

    const handleHeightChange = (newHeight: string) => {
        setHeight(newHeight);
    }

    const handleWeightChange = (newWeight: string) => {
        setWeight(newWeight);
    }

    const handleMeasurement = (id: string) => {
        setMeasurementSystem(id);
    }

    const handleGoals = (id: string) => {
        setGoals(id);
    }

    const handleWorkout = (id: string) => {
        setWorkoutweekly(id);
    }

    const handleWorkoutTypically = (id: string) => {
        setWorkouttypically(id);
    }

    const nameHandler = (text: string) => {
        setNames(text);
    }

    const emailHandler = (text: string) => {
        setEmails(text);
    }

    const passwordHandler = (text: string) => {
        setPasswords(text);
    }

    const LoginIn = (email: string, password: string) => {
        setLoading(true);
        axios.post(`https://qa-ns-api.debutinfotech.in/api/v4.2.0/login`, {
            email: email,
            password: password,
            uniqueId: "",
            authToken: "",
            name: "s",
            gender: "Male",
            type: "d",
            deviceId: "1"
        })
            .then((res) => {

                const data = res.data;
                if (data.status == "success") {
                    console.log("emails", emails, passwords);
                    navigation.navigate("Dashboard")
                }
                setDatas(data);
            })
            .catch((error) => {
                Alert.alert("User does not exist");
                console.log(error, "error while submitting data");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const SignUp = (name: string, email: string, password: string) => {
        console.log("measurement", measurementSystem);

        setLoading(true);
        axios.post(`https://qa-ns-api.debutinfotech.in/api/v4.2.0/signup`, {


            name: name,
            email: email,
            password: password,
            measurementSystem: measurementSystem,
            height: height,
            age: "",
            gender: gender,
            weight: weight,
            trainingGoal: goals,
            workoutFrequency: workoutweekly,
            workoutFrequencyType: "2",
            workoutDuration: workouttypically,
            referralCode: "",
            dob: selectedDate
        })
            .then((res) => {
                const result = JSON.parse(res.config.data);
                setDatas(result);
                setStatus(res.data.status);
                if (res.data.status == "success") {
                    console.log("emails", emails, passwords);
                    navigation.navigate("Dashboardscreen")
                }
            })
            .catch((error) => {
                Alert.alert("User Again SignUp");
                console.log(error, "error while submitting data");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const contextValue: AppContextType = {
        isLoading,
        datas,

        status,
        LoginIn,
        SignUp,
        height,
        weight,
        gender,
        emails,
        selectedDate,
        passwords,
        names,
        measurementSystem,
        goals,
        workoutweekly,
        workouttypically,
        handleHeightChange,
        handleWeightChange,
        handleGenderChange,
        handleDateChange,
        handleMeasurement,
        handleGoals,
        handleWorkout,
        handleWorkoutTypically,
        nameHandler,
        emailHandler,
        passwordHandler,
    };

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
};
