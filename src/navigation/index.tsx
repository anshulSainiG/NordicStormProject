// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntialScreen from '../screens/intial_screen';
import Login from '../screens/login_screen';
import Signup from '../screens/sign_up_screen';
import AboutYourSelf from '../screens/about_youself_screen';
import SelectMeasurement from '../screens/select_measurement_system';
import SelectYourTrainingGoals from '../screens/select_your_goals';
import TimesPerWeek from '../screens/times_per_week';
import TypicallyWorkout from '../screens/typically_workout';
import Dashboardscreen from '../screens/dashboard_screen';
import Dashboard from '../screens/dasboard';

export type RootstackParamList = {
    IntialScreen: undefined;
    Login: undefined;
    Signup: undefined
    AboutYourSelf: { name: string }
    SelectMeasurement: undefined;
    SelectYourTrainingGoals: undefined;
    TimesPerWeek: undefined;
    TypicallyWorkout: undefined;
    Dashboardscreen: undefined;
    Dashboard: { email: string, password: string };
}

const RootStack = createNativeStackNavigator<RootstackParamList>();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <RootStack.Screen name="IntialScreen" component={IntialScreen} />
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen name="Signup" component={Signup} />
                <RootStack.Screen name="AboutYourSelf" component={AboutYourSelf} />
                <RootStack.Screen name="SelectMeasurement" component={SelectMeasurement} />
                <RootStack.Screen name="SelectYourTrainingGoals" component={SelectYourTrainingGoals} />
                <RootStack.Screen name="TimesPerWeek" component={TimesPerWeek} />
                <RootStack.Screen name="TypicallyWorkout" component={TypicallyWorkout} />
                <RootStack.Screen name="Dashboardscreen" component={Dashboardscreen} />
                <RootStack.Screen name="Dashboard" component={Dashboard} />

            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;