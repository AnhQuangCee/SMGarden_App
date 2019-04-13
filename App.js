import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import ChooseOptions from './components/ChooseOptions';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Login/> */}
        <ChooseOptions/>
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

