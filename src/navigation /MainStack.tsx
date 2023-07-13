import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { LandingPage } from '../screens/LandingPage';

const Stack = createNativeStackNavigator();
export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LandingPage" component={LandingPage} />

        </Stack.Navigator>
    );
};
