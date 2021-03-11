import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const HomeStack = createStackNavigator();

export default function Homescreens({navigation}) {
    return (
            <HomeStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#eee',
                        height: 100,
                    },
                    headerTintColor: '#444',
                }}
            >
                <HomeStack.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        headerTitle: ()=> <Header navigation={navigation} title='GameZone'/>, 
                    }}
                />
                 <HomeStack.Screen 
                    name="ReviewDetails" 
                    component={ReviewDetails}
                    options={{
                        title:"Review Details", 
                    }}
                />
            </HomeStack.Navigator>
    );
} 