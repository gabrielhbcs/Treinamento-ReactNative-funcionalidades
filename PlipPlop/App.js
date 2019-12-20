import React, {Component} from 'react'; 
import {Text, View, StyleSheet, TextInput, Button, Alert, FlatList, Image, TouchableOpacity, Vibration} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class VibrateScreen extends Component{

  state = {
    pattern: [], 
    countMs: 0,   
    _gravacao: undefined,
    gravVibracao: false,
    gravStatic: false,
    gravando: false,
    apertando: false,
  }

  gravVib(){
    if(!this.apertando){
      this.comecaTimer();
    }
    Vibration.vibrate([0,1000], true);
    this.state.apertando = true;
  }

  gravSta(){
    if(this.state.apertando){
      this.comecaTimer(); 
    }
    Vibration.cancel();
    this.state.apertando = false;
  }

  comecaTimer(){
    if(this._gravacao){
      clearTimeout(this._gravacao);
    }
    this.state.pattern.push(this.state.countMs);
    this.state.countMs = 0;
    this._gravacao = setInterval(() => 
      {        
        this.setState({ countMs: this.state.countMs + 20 });
     }, 20);
    
  }

  cancelaGravacao(){
    clearTimeout(this._gravacao);
    //this.state.countMs = 0;    
    this.setState({countMs: 0});
    alert(JSON.stringify(this.state.pattern));
  }

  limpaPattern(){
    this.setState({pattern: [], countMs: 0});
  }


  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 4, justifyContent: "center", alignItems: "center", backgroundColor: 'black'}}>
          <TouchableOpacity style={{marginHorizontal: 5}} onPress = {() => Vibration.vibrate(200)}>
            <Image source = {require('./images/celular/celular.png')} />
          </TouchableOpacity>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginHorizontal: 5}} onPressIn = {() => Vibration.vibrate([0, 10000], true)} onPressOut = {() => Vibration.cancel()}>
              <Image source = {require('./images/celular/vibrafull.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 5}} onPressIn = {() => Vibration.vibrate(200)}>
              <Image source = {require('./images/celular/in.png')} />
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginHorizontal: 5}} onPressIn = {() => Vibration.vibrate(this.state.pattern)}>
              <Image source = {require('./images/celular/pat.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 5}} onPressIn = {() => Vibration.cancel()}>
              <Image source = {require('./images/celular/parapat.png')} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
          <TouchableOpacity onPressIn={() => this.gravVib()} onPressOut = {() => this.gravSta()}> 
            <Image source = {require('./images/celular/rec.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 10}} onPress = {() => this.cancelaGravacao}>
            <Image source = {require('./images/celular/stop.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 10}} onPress = {() => this.limpaPattern()}>
            <Image source = {require('./images/celular/clean.png')} />
          </TouchableOpacity>
          {/* <Button title = 'Start' onPressIn = {() => this.gravVib()} onPressOut = {() => this.gravSta()} />
          <Button title = 'Check' onPress = {() => this.cancelaGravacao()} />
          <Button title = 'Clear' onPress = {() => this.state.pattern = []}/> */}
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