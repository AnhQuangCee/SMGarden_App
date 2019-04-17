import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import ChooseOptions from './components/ChooseOptions';
import Automation from './components/Automation';
import ControlsByHands from './components/ControlsByHands';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Login/> */}
        {/* <ChooseOptions/> */}
        {/* <Automation/> */}
        <ControlsByHands/>
      </View>
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

