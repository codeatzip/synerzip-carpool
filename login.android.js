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
    this.validateFields = this.validateFields.bind(this)
    this.validateSynerzipDomain = this.validateSynerzipDomain.bind(this)
    this.showAlert = this.showAlert.bind(this)
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
        
       <TextInput ref= "username" style={styles.textinput} onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
        placeholder="Username"/>
       <TextInput  ref= "password" style={styles.textinput} onChangeText={(password) => this.setState({password})}
                   value={this.state.password}
                   secureTextEntry={true} placeholder="Password"/>
       <Text style={{fontSize:11, marginLeft:200, color: '#ffffff'}}>Forgot password?</Text>
        <TouchableNativeFeedback
        onPress={this.onPressButton.bind(this)}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{margin: 10, width:100, backgroundColor: '#1769ff'}}>
        <Text style={{margin: 10, textAlign: 'center', color: '#ffffff'}}>Login</Text>
      </View>
    </TouchableNativeFeedback>
   </View>
    );
  }


  onPressButton(){
    let validateFieldsResult = this.validateFields()
    if(validateFieldsResult.result){
      Actions.showHomeView()
    }else {
      this.showAlert(validateFieldsResult.title, validateFieldsResult.message)
    }
  }

  validateFields(){
    let email = this.state.username.toLowerCase();
    let password = this.state.password
    if(email.length>0 && password.length>0) {
      var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
      if (re.test(email)) {
        if (email.indexOf('@synerzip.com', email.length - '@synerzip.com'.length) !== -1) {
          return {"result": true}
        } else {
          return {"result": false, title:'', 'message': 'Email must be a synerzip e-mail address (your.name@synerzip.com).'}
        }
      } else {
        return {"result": false, title:'', 'message': 'Not a valid e-mail address.'}

      }
    }
    else {
      return {"result": false, title:'', 'message': 'Email and password are required to continue'}
    }
  }

  validateSynerzipDomain(){
    let username = this.state.username
    var idx = username.lastIndexOf('@');
    if (idx > -1 && username.slice(idx) === 'synerzip.com') {
      return true
    } else {
    return false
    }
}

  showAlert(title, message){
    Alert.alert(
        title,
        message,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ])
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