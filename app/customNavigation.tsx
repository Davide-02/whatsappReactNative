import React from 'react';
import ChatScreen from "../app/chat";
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../app/(tabs)/index";

const Stack = createStackNavigator();

export const FirstScreenNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            />
        </Stack.Navigator>
    )
}