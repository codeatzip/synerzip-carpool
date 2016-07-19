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
  Alert,
  TextInput,
  TouchableNativeFeedback,
  BackAndroid,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';


class SearchRideView extends Component {
  componentDidMount() {
    this.androidBackHandler = this.onBackPressed.bind(this);
    BackAndroid.addEventListener('hardwareBackPress', this.androidBackHandler);
  }

  /*
  Pops out the current active component
  */
  onBackPressed() {
    {Actions.pop()}
    return true;
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.androidBackHandler);
  }
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.welcome}>
          Search ride
        </Text> 
        <Text style={styles.instructions}>
          Drivers in your route
        </Text>
<View style ={styles.sameline}>
        <Text style={{marginTop: 20, color: '#ffffff'}}>Jitesh Lalwani</Text>
         <TouchableNativeFeedback
        onPress={this.requestRide.bind(this,'Jitesh Lalwani')}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Request ride</Text>
      </View>
    </TouchableNativeFeedback> 
    </View>
 <View style ={styles.sameline}>
        <Text style={{marginTop: 20, color: '#ffffff'}}>Dipesh Rane</Text>
         <TouchableNativeFeedback
        onPress={this.requestRide.bind(this,'Dipesh Rane')}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Request ride</Text>
      </View>
    </TouchableNativeFeedback> 
    </View>
      
   </View>
    );
  }

   requestRide(name){

    Alert.alert(
            'Confirmation',
            'Are you sure you want to request a ride with ' +name + '?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )
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

export default SearchRideView