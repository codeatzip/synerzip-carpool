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
  BackAndroid,
  Alert,
  TouchableNativeFeedback,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class CreateRideView extends Component {

  constructor() {
    super()
    this.createRide = this.createRide.bind(this)
    this.confirmRide = this.confirmRide.bind(this)
    this.showAlert = this.showAlert.bind(this)
    this.emptyFunction = this.emptyFunction.bind(this)
  }

  componentDidMount() {
    this.androidBackHandler = this.onBackPressed.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPressed);
  }

  /*
  Pops out the current active component
  */
  onBackPressed() {
    Actions.pop()
    return true;
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.androidBackHandler);
  }

  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.welcome}>
          Create ride
        </Text> 
        <Text style={styles.instructions}>
          Enter source, destination and start time to create a ride
        </Text>
        
       <TextInput style={styles.textinput}  placeholder="Source"/>
       <TextInput style={styles.textinput} placeholder="Destination"/>
       <TextInput style={styles.textinput}  placeholder="Start time"/>
        <TouchableNativeFeedback
        onPress={this.createRide}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Create ride</Text>
      </View>
    </TouchableNativeFeedback>
   </View>
    );
  }

  createRide(){
    this.showAlert('','Please confirm that you want to create a ride', true, this.confirmRide, this.emptyFunction)
  }

  showAlert(title, message, cancelRequired, okFunctionName, cancelFunctionName){
    let options = []
    if(cancelRequired){
      options = [
            {text: 'OK', onPress: () => okFunctionName()},
            {text: 'Cancel', onPress: () => cancelFunctionName()}
          ]
    }else {
      options = [
            {text: 'OK', onPress: () => okFunctionName()},
          ]
    }
    Alert.alert(
        title,
        message,
        options)
  }

  confirmRide(){
    this.showAlert('','Ride created successfully', false, this.emptyFunction, this.emptyFunction)
  }

  emptyFunction(){

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

export default CreateRideView