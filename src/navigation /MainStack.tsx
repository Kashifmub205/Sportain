import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { GetStarted } from '../screens/GetStarted';
import { WhatsNext } from '../screens/WhatsNext';
import { Features } from '../screens/Features';

const Stack = createNativeStackNavigator();
export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LandingPage" component={GetStarted} />
            <Stack.Screen name="WhatsNext" component={WhatsNext} />
            <Stack.Screen name="Features" component={Features} />

        </Stack.Navigator>
    );
};
