import React from 'react'; 
import { Button, View, Text } from 'react-native'; 

class Home extends React.Component {
    static navigationOptions = {
        title : 'Home ISAFE'
    };

    render(){
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button
                    title = "Go to Profile Screen"
                    onPress={ () => this.props.navigation.navigate("ProfileRoute")}
                />


            </View>
        );
    }
}

export default Home; 