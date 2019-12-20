import React, {Component} from 'react'; 
import {Text, View, StyleSheet, TextInput, Button, Alert, FlatList, Image, TouchableOpacity, Vibration} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { RNNotificationPackage } from 'react-native-notifications';


class VibrateScreen extends Component{
  render(){
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        
        <TouchableOpacity onPress = {() => Vibration.vibrate(200)}>
          <Image source = {require('./images/celular.png')} />
        </TouchableOpacity>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity onPressIn = {() => Vibration.vibrate([0, 10000], true)} onPressOut = {() => Vibration.cancel()}>
            <Image source = {require('./images/celularvibrafull.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPressIn = {() => Vibration.vibrate(200)}>
            <Image source = {require('./images/celularin.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class CameraScreen extends Component{
  render(){
    return(
      <View style = {{flex: 1,}}>
        <Text> oi </Text>
      </View>
    );
  }
}

class HomeScreen extends Component{
  render(){
    return(
      <View style={{flex: 1, padding: 10, flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
        <View style={{flexDirection: "row", marginVertical: 10,}}>
          <TouchableOpacity onPressIn = {() => this.props.navigation.navigate('Camera')}>
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
  Vibrate: { 
    screen: VibrateScreen,
    navigationOptions: {
      title: "Vibrate Screen",
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      title: "Camera Screen",
    },
  }
});

export default createAppContainer(AppStack);