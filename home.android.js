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
  BackAndroid,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import MapView from 'react-native-maps';

import {Actions} from 'react-native-router-flux';


class HomeView extends Component {

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


       <MapView
    region={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
 
        <TouchableNativeFeedback
        onPress={this.createRideButton}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Create ride</Text>
      </View>
    </TouchableNativeFeedback>

     <TouchableNativeFeedback
        onPress={this.searchRideButton}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Search ride</Text>
      </View>
    </TouchableNativeFeedback>

   </View>
    );
  }

    createRideButton(){
      Actions.showCreateRideView()
  }

   searchRideButton(){
      Actions.showSearchRideView()
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

export default HomeView
