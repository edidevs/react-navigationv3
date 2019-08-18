import React, { Component } from 'react'; 
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import Home from './src/screens/Home'; 
import Profile from './src/screens/Profile'; 

const Project = createStackNavigator({
    HomeView : {
        screen : Home
    },
    ProfileRoute : {
        screen : Profile
    }

}); 

export default createAppContainer(Project); 