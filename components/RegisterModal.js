import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput, TouchableOpacity, Button, Image } from 'react-native';
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
                    <Image style={styles.logo} source={require("../assets/images/SMGarden_Logo.png")}/>
                    <Text style={styles.title}>Create Account</Text>
                </View>
                {/* end header */}

                <View style={styles.body}>
                    <TextInput
                        style={{height: 40, borderBottomWidth: 1, borderBottomColor: '#BDBDBD', marginBottom: 20,}}
                        placeholder="Full name"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TextInput
                        style={{height: 40, borderBottomWidth: 1, borderBottomColor: '#BDBDBD', marginBottom: 20,}}
                        placeholder="Password"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <TextInput
                        style={{height: 40, borderBottomWidth: 1, borderBottomColor: '#BDBDBD', marginBottom: 20,}}
                        placeholder="Confirm Password"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                {/* end body */}

                <View style={styles.footer}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.registerBtn} onPress={() => Actions.pop()}>
                            <Text style={{color:'white', textAlign:'center',}}>Register</Text>
                        </TouchableOpacity>
                    </View>
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
        height: 450,
        width: 300,
        borderRadius: 8,
        marginTop: 20,
    },
    header:{
        flex: 3,
    },
    title:{
        flex: 1,
        fontSize: 16,
        marginTop: 5,
        color: '#BDBDBD',
    },
    logo:{
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'contain',
        marginTop: 40,
    },
    body:{
        flex: 4,
        flexDirection:'column',
        justifyContent:'center',
        width: 220,
    },
    registerBtn:{
        paddingTop: 13,
        marginTop: 20,
        width: 200,
        height: 50,
        backgroundColor:'#76B39D',
        borderRadius: 50,
        borderColor: 'white',
    },
    footer:{
        flex: 2,
    },
});