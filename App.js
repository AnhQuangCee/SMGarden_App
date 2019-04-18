import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import ChooseOptions from './components/ChooseOptions';
import Automation from './components/Automation';
import ControlsByHands from './components/ControlsByHands';


export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   {/* <Login/> */}
      //   {/* <ChooseOptions/> */}
      //   {/* <Automation/> */}
      //   <ControlsByHands/>
      // </View>
      <Router navigationBarStyle={{ backgroundColor: '#155E63'}} titleStyle={{color:'white'}}>
        <Scene key="root">
          <Scene
            key="Login"
            component={Login}
            title="Login"
            hideNavBar={true}
          />
          <Scene
            key="ChooseOptions"
            component={ChooseOptions}
            title="ChooseOptions"
            tintColor= '#fff'
            navBarTintColor= '#fff'
            navBarButtonImageColor= '#fff'
          />
          <Scene
            key="Automation"
            component={Automation}
            title="Automation"
            tintColor= '#fff'
            navBarTintColor= '#fff'
            navBarButtonImageColor= '#fff'
          />
          <Scene
            key="ControlsByHands"
            component={ControlsByHands}
            title="ControlsByHands"
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

