/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableNativeFeedback,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class LoginView extends Component {
  constructor(){
    super()
    this.state ={
      username:'',
      password:''
    }
  }
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.welcome}>
          welcome to carpool app!
        </Text> 
        <Text style={styles.instructions}>
          To get started, Please sign-in with your Synerzip mail id
        </Text>
        
       <TextInput style={styles.textinput} onChange={this.handleUserNameChange.bind(this)}
        value={this.state.username}  placeholder="Username"/>
       <TextInput style={styles.textinput} onChange={this.handlePasswordChange.bind(this)} 
       value={this.state.password}  secureTextEntry={true} placeholder="Password"/>
       <Text style={{fontSize:11, marginLeft:200, color: '#ffffff'}}>Forgot password?</Text>
        <TouchableNativeFeedback
        onPress={this.onPressButton}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Login</Text>
      </View>
    </TouchableNativeFeedback>
   </View>
    );
  }

  handleUserNameChange(e){
    this.setState({
      username:e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password:e.target.value
    })
  }

  onPressButton(){
    if(this.validateEmail){
      if(this.validateSynerzipDomain){
        Actions.showHomeView()
      }else{
        this.showAlert('Please login with Synerzip mail id only')
        }
    }else {
      this.showAlert('Your email id is incorrect')
    }
  }

  showAlert(message){
     Alert.alert(
            'Email incorrect',
            message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')}
            ])
  }

  validateEmail(){
    var x = this.state.username
    var atpos = x.indexOf("@");
     var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
  }

  validateSynerzipDomain(){
    var idx = this.state.username.lastIndexOf('@');
    if (idx > -1 && emailAddress.slice(idx) === 'synerzip.com') {
      return true
    }else{
    return false
    }
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

export default LoginView