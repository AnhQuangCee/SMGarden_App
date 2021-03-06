import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import ChooseOptions from './components/ChooseOptions';
import Automation from './components/Automation';
import Automation2 from './components/Automation2';
import ControlsByHands from './components/ControlsByHands';
import ControlsByHands2 from './components/ControlsByHands2';
import RegisterModal from './components/RegisterModal';
import Documentation from './components/Documentation';


export default class App extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#155E63'}} titleStyle={{color:'white'}}>
        <Scene>
          <Scene
            key="Login"
            component={Login}
            title="Login"
            hideNavBar={true}
          />
          {/* end Scene Login */}
          <Scene
            key="ChooseOptions"
            component={ChooseOptions}
            title="ChooseOptions"
            tintColor= '#fff'
            navBarTintColor= '#fff'
            navBarButtonImageColor= '#fff'
          />
          {/* end Scene ChooseOptions */}

          <Scene
            key="root"
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            labelStyle={{ fontSize: 16, marginBottom: 15 }}
            title="Controls By Hands"
            tintColor= '#fff'
            navBarTintColor= '#fff'
            navBarButtonImageColor= '#fff'
          >
            {/* Khay A */}
            <Scene
                key="ControlsByHands"
                component={ControlsByHands}
                title="Khay A"
                hideNavBar={true}
              />

            {/* Khay B */}
            <Scene
                key="ControlsByHands2"
                component={ControlsByHands2}
                title="Khay B"
                hideNavBar={true}
              />
            
          </Scene> 
          {/* end Scene ControlsByHands  */}

          <Scene
            key="root2"
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            labelStyle={{ fontSize: 16, marginBottom: 15 }}
            title="Automation"
            tintColor= '#fff'
            navBarTintColor= '#fff'
            navBarButtonImageColor= '#fff'
          >
            {/* Khay A */}
            <Scene
                key="Automation"
                component={Automation}
                title="Khay A"
                hideNavBar={true}
              />

            {/* Khay B */}
            <Scene
                key="Automation2"
                component={Automation2}
                title="Khay B"
                hideNavBar={true}
              />
          </Scene>  
          {/* end Scene Automation */}

          <Scene  
              key="modal"
              component={RegisterModal}
              title="Modal"
              direction="vertical"
              hideNavBar
          />
          {/* end Scene RegisterModal */}

          <Scene
              key="Documentation"
              component={Documentation}
              title="Documentation"
              tintColor= '#fff'
              navBarTintColor= '#fff'
              navBarButtonImageColor= '#fff'
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

