import React, { Component } from 'react';
import {View, 
        TextInput, 
        StyleSheet,
        Text,
        Image,
        TouchableOpacity,
    } from 'react-native';

export default class ChooseOptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleCropSelections}>
          <Text style={{color: '#155E63', fontSize: 30, textAlign:'center',}}>Crop selections</Text>
          <Text style={{color:'#155E63', fontSize: 18, textAlign:'center',}}>Choose one in four options below</Text>
        </View>
        {/*end header*/}

        <View style={styles.bodyCropSelections1}>
            <TouchableOpacity style={styles.btnImage}>
                <Image style={styles.Automation} source={require("../assets/images/Automation.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnImage}>
                <Image style={styles.Automation} source={require("../assets/images/ControlByHands.png")}></Image>
            </TouchableOpacity>
        </View>

        <View style={styles.bodyCropSelections2}>
            <TouchableOpacity style={styles.btnImage}>
                <Image style={styles.Automation} source={require("../assets/images/Documentation.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnImage}>
                <Image style={styles.Automation} source={require("../assets/images/Settings.png")}></Image>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        height: '100%',
        width: '100%',
    },

    //header
    titleCropSelections:{
        flex: 3,
        flexDirection:'column',
        justifyContent:'center',
    },

    //body
    bodyCropSelections1:{
        flex: 3,
        flexDirection:'row',
    },
    btnImage:{
        flex:1,
        margin: 10,
    },
    Automation:{
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },
    bodyCropSelections2:{
        flex: 3,
        flexDirection:'row',
    },

    //footer
    footer:{
      flex:1,
    }
});
