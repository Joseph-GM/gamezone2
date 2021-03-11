import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';




const AboutStack = createStackNavigator();

export default function Aboutscreen({navigation}) {
    return (
        <AboutStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 100,
                },
                headerTintColor: '#444',
            }}
        >
            <AboutStack.Screen 
                name="About" 
                component={About}
                options={{
                    headerTitle: ()=> <Header navigation={navigation} title='About GameZone'/>,
                }}
            />
            
        </AboutStack.Navigator>
    );
} 