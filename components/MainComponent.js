import React, { Component } from 'react'; 
import { DetailScreen, ThirdScreen } from '../screenNames'; 

import Button from 'react-native-button'; 
import { 
    Text, 
    View, 
    ActivityIndicator, 
    Alert
} from 'react-native'; 

export default class MainComponent extends Component {
    static navigationOptions = ({navigation}) => {
        const { params = { } } = navigation.state; 
        let headerTitle = 'Main';
        let headerTitleStyle = { color : 'green', backgroundColor:'red'};
        let headerRight = (<Button
            containerStyle={{
                margin: 5,
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'red'
            }}
            onPress = {
                () => {
                    params.onSave();
                }
            }
        >Save</Button>);
        let headerBackTitle = "Back";
        let headerLeft = (<Button>Back</Button>)
        return {headerTitle, headerTitleStyle, headerRight, headerLeft, headerBackTitle }
    }; 

    _onSave(){
        if(this.props.navigation.state.params.isSaving == true ){
            return ; 
        }
        this.props.navigation.setParams({
            isSaving: true 
        });
        // set true, it means that if the value is true, you are prepared to do other tasks 
        setInterval( () => {
            this.props.navigation.setParams({ isSaving : false })
        }, 3000)
    }

    componentDidMount(){
        this.props.navigation.setParams({
            onSave : this._onSave.bind(this),
            isSaving : false
        })
    }

    render(){
        const { navigation } = this.props; 
        let dataSendToDetail = {
            name : "Star Wars ",
            releaseYear : 1977
        }; 

        let mainView = (navigation.state.params && navigation.state.params.isSaving === true ) ? <ActivityIndicator /> : 
        <View style={{
            flex : 1,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: 'white'
            }}>
                This is Main Screen
            </Text>
            <Button
                containerStyle={{
                    padding: 10,
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor:'orange'
                }}

                style={{
                    fontSize:18,
                    color:'white'
                }}

                onPress = { () => {
                    //this.props.navigate(DetailScreen)
                    navigation.navigate(DetailScreen, dataSendToDetail)
                }}

                
            
            >
                Navigate to Detail 
            </Button>
                
            

            <Button
                containerStyle={{
                    padding: 10,
                    margin: 20,
                    width: 200,
                    height: 45,
                    borderRadius: 10,
                    backgroundColor:'orange'
                }}
                style={{ fontSize: 18,
                color:'white'}}

                onPress={ () => {
                    navigation.navigate("ThirdScreen")
                }}
            >
                Navigate to Third
            </Button>

            



        </View>
        return mainView; 
    }
}