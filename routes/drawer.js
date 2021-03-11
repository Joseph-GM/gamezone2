import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './homeStack';
import Aboutscreen from './aboutStack';

const RootDrawer = createDrawerNavigator()

export default function Drawscreen() {
    return (
        <NavigationContainer>
            <RootDrawer.Navigator>
                    <RootDrawer.Screen name="Home" component={Homescreen} />
                    <RootDrawer.Screen name="About" component={Aboutscreen} />
            </RootDrawer.Navigator>
        </NavigationContainer>
    );
}