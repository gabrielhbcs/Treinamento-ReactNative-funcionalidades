import React, {Component} from 'react'; 
import {Text, View, StyleSheet, TextInput, Button, Alert, FlatList, Image, TouchableOpacity, Vibration} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



class HomeScreen extends Component{
  render(){
    return(
      <View style={{flex: 1, padding: 10, backgroundColor: 'rgb(230,230,230)', flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
        <View style={{flexDirection: "row", marginVertical: 10,}}>
          <TouchableOpacity>
            <Image source={require('./images/camera.png')} style = {{marginHorizontal: 25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Vibrate')}>
            <Image source={require('./images/celular.png')} style = {{marginHorizontal: 25}}/>
          </TouchableOpacity>
        </View><View style={{flexDirection: "row", marginVertical: 10,}}>
          <TouchableOpacity>
            <Image source={require('./images/camera.png')} style = {{marginHorizontal: 25}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./images/celular.png')} style = {{marginHorizontal: 25}}/>
          </TouchableOpacity>
        </View>
        
        
      </View>
    );
  }

}

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppStack);