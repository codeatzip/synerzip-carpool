/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

class CreateRide extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.welcome}>
          Create Ride
        </Text> 
        <Text style={styles.instructions}>
          Please confirm source, destination and start time to create a ride
        </Text>
        
       <TextInput style={styles.textinput} password={true} placeholder="Username"/>
       <TextInput style={styles.textinput} password={true} placeholder="Password"/>
       <Text style={{fontSize:11, marginLeft:200, color: '#ffffff'}}>Forgot password?</Text>
        <TouchableNativeFeedback
        // onPress={this._onPressButton}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Login</Text>
      </View>
    </TouchableNativeFeedback>
    // <Text style={{color: '#ffffff', marginTop: 50}}>Don't have an account?</Text>
    //  <TouchableNativeFeedback
    //     background={TouchableNativeFeedback.SelectableBackground()}>
    //   <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
    //     <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Signup</Text>
    //   </View>
    // </TouchableNativeFeedback>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#125688',
  },
  sameline: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  textinput:{
    color: '#ffffff',
    width: 200
  }
});

AppRegistry.registerComponent('CreateRide', () => CreateRide);
