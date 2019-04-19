import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput, TouchableOpacity, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
  
export default class RegisterModal extends Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

    render(){
        return(
          <ImageBackground style={styles.container} source={require("../assets/images/Background.png")}>
            <View style={style=styles.createAccountContainer}>
                <View style={styles.header}>
                    {/* <Image source={require("../assets/images/server.png")}></Image> */}
                    <Text>Create Account</Text>
                </View>
                {/* end header */}

                <View style={styles.body}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Full name"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Password"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Confirm Password"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                {/* end body */}

                <View style={styles.footer}>
                    <Button
                        onPress={()=>Actions.modal()}
                        title="Register"
                        color="#841584"
                    />
                </View>
                {/* end footer */}
            </View>
          </ImageBackground>
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    createAccountContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height: 500,
        width: 300,
        borderRadius: 8,
        marginTop: 20,
    },
    header:{
        flex: 2,
    },
    body:{
        flex: 4,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex: 3,
    },
});