import React, { Component } from 'react'; 
import { Button, View, Text } from 'react-native'; 

class Profile extends Component {
    static navigationOptions = {
        title : 'Profile'
    }; 

    render(){
        return (
            <View style={{
                flex : 1,
                alignItems : 'center',
                justifyContent: 'center'
            }}>

                <Button 
                    title = "Go to Home Screen"
                    onPress= { () => this.props.navigation.navigate('Home')}
                />

                

            </View>
        ); 
    }
}

export default Profile; 