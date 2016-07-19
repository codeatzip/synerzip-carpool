import React, { Component } from 'react'
import {Router, Route, Scene } from 'react-native-router-flux'
import LoginView from './login.android'
import HomeView from './home.android'
import CreateRideView from './create.ride.android'
import SearchRideView from './search.ride.android'


export default class RouterConfigComponent extends Component {
    render() {
        return (
            <Router hideNavBar={true}>
                <Scene hideNavBar={true} key="launch" component={LoginView} type="push"
                       initial={true} wrapRouter={true}/>
                <Scene key="showHomeView"
                       component={HomeView}
                       hideNavBar={true} type="push"/>
                <Scene key="showCreateRideView"
                       component={CreateRideView}
                       hideNavBar={true} type="push"/>
                <Scene key="showSearchRideView"
                       component={SearchRideView}
                       hideNavBar={true} type="push"/>
            </Router>
        );
    }
}
