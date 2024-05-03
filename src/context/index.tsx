import React, { createContext, ReactNode, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

interface AppContextType {
    isLoading: boolean;
    datas: {}
    login: {}
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
    status: string

    handleHeightChange: (newHeight: string) => void;
    handleWeightChange: (newWeight: string) => void;
    handleGenderChange: (gender: string) => void;
    handleDateChange: (date: string) => void;
    handleMeasurement: (id: string) => void;
    handleGoals: (id: string) => void;
    handleWorkout: (id: string) => void
    handleWorkoutTypically: (id: string) => void
    nameHandler: (text: string) => void;
    emailHandler: (text: string) => void;
    passwordHandler: (text: string) => void;

}

export const AppContext = createContext<AppContextType>({
    isLoading: false,
    datas: {},
    login: {},
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
    const [status, setStatus] = useState<string>("")
    const [login, setLogin] = useState({})
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [gender, setGender] = React.useState<string>("Gender")
    const [selectedDate, setSelectedDate] = React.useState<string>("Birthdate")
    const [measurementSystem, setMeasurementSystem] = React.useState<string>("")

    const [goals, setGoals] = React.useState<string>("")
    const [workoutweekly, setWorkoutweekly] = React.useState<string>("")
    const [workouttypically, setWorkouttypically] = React.useState<string>("")
    const [names, setNames] = React.useState<string>("");
    const [emails, setEmails] = React.useState<string>("");
    const [passwords, setPasswords] = React.useState<string>("");
    console.log("============>", workoutweekly);

    console.log("===abhi", datas);

    const handleDateChange = (date: string) => {
        setSelectedDate(date)
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
        console.log("handle measurement", measurementSystem);

        setMeasurementSystem(id)
    }

    const handleGoals = (id: string) => {
        setGoals(id)
    }
    const handleWorkout = (id: string) => {
        setWorkoutweekly(id)
    }

    const handleWorkoutTypically = (id: string) => {
        setWorkouttypically(id)
    }

    const nameHandler = (text: string) => {
        setNames(text)

    }
    const emailHandler = (text: string) => {
        setEmails(text)

    }
    const passwordHandler = (text: string) => {
        setPasswords(text)

    }





    const LoginIn = (emails: any, password: any) => {
        setLoading(true);
        axios.post(`https://qa-ns-api.debutinfotech.in/api/v4.2.0/login`, {
            email: emails,
            password: password,
            uniqueId: "",
            authToken: "",
            name: "s",
            gender: "Male",
            type: "d",
            deviceId: "1"
        })
            .then((res) => {
                console.log("logoin=====>", res)
                // const result = JSON.parse(res)
                const data = res.data.status;
                if (data !== "succees") {

                }
                console.log("res======pppp==>", data);


                setDatas(data);

            })
            .catch((error) => {
                console.log(error, "errr while submit data");
            })
            .finally(() => {
                setLoading(false);
                setDatas({})
            });
    };

    const SignUp = (fullName: any, emails: any, password: any) => {
        setLoading(true);
        console.log(fullName, emails, password, measurementSystem, workouttypically, "------------ppppppp-------")
        axios.post(`https://qa-ns-api.debutinfotech.in/api/v4.2.0/signup`, {
            name: fullName,
            email: emails,
            password: password,
            measurementSystem: measurementSystem,
            height: height,
            age: "",
            gender: gender,
            weight: weight,
            trainingGoal: "12",
            workoutFrequency: workoutweekly,
            workoutFrequencyType: "2",
            workoutDuration: workouttypically,
            referralCode: "",
            dob: selectedDate
        })
            .then((res) => {
                console.log("+++++++++++++++++++", res.config.data)
                const result = JSON.parse(res.config.data)

                setDatas(result);
                setStatus(res.data.status)
                    ;
            })
            .catch((error) => {
                console.log(error, "errr while submit data");
            })
            .finally(() => {
                setLoading(false);
            });
    };
    console.log("===>", datas);

    const contextValue: AppContextType = {
        isLoading,
        datas,
        LoginIn,
        SignUp,
        height,
        goals,
        handleHeightChange,
        weight,
        workoutweekly,
        measurementSystem,
        names,
        emails,
        passwords,
        status,
        login,
        handleWeightChange,
        handleGenderChange,
        gender,
        selectedDate,
        workouttypically,
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
