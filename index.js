/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
// import App from './App';

import {name as appName} from './app.json';

//cOMPONENTS 
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';

//Screen names 
// import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';

const AppComponent = createStackNavigator({
    MainScreen : {
        screen : MainComponent,
        
    },
    DetailScreen : {
        screen : DetailComponent,
        navigationOptions: {
            headerTitle: 'Detail'
        }
    },
    ThirdScreen : {
        screen : ThirdComponent,
        navigationOptions : {
            headerTitle: 'Third'
        }
    }
});

const App = createAppContainer(AppComponent);

AppRegistry.registerComponent(appName, () => App);
