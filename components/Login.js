import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
    Button,
    CheckBox,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alret,
  } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
// import Checkox from 'react-native-custom-checkbox';

import { white } from 'ansi-colors';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            check:false
        }
    }
    
    CheckBoxTest(){
        this.setState({
            check: !this.state.check
        })
    }

  render() {
    return (
        <ImageBackground style={styles.container} source={require("../assets/images/Background.png")}>
            <View style={styles.header}>
            <FontAwesome
                style={styles.iconRocket}
                name="rocket"
                size={60}
                color={'white'}
            />
            <Text style={styles.textRocket}>Smart Garden</Text>
            </View>
            {/* end header */}

            <View style={styles.inputField}>
            <View style={styles.textInputContainer}>
                <FontAwesome
                    style={styles.iconUser}
                    name="user"
                    size={30}
                    color={'#1C868D'}
                />
                <TextInput style={styles.textInput} placeholder=" Username">
                </TextInput>
            </View>
            <View style={styles.textInputContainer}>
                <FontAwesome
                    style={styles.iconUser}
                    name="unlock-alt"
                    size={30}
                    color={'#1C868D'}
                />
                <TextInput style={styles.textInput} placeholder=" Password" secureTextEntry={true} />
            </View>
            <View style={styles.rememberCheckboxContainer}>
                <CheckBox style={styles.rememberCheckbox} value={this.state.check} onChange={()=>this.CheckBoxTest()}/>
                <Text style={styles.rememberText}>Remember password</Text>
            </View>
            {/* end Remember Checkbox*/}
            
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnLogin} onPress={()=>Actions.ChooseOptions()}>
                    <Text style={{color:'white', textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
            </View>
            {/* end Login Button*/}

            <View style={styles.socialNetworkContainer}>
                <View style={styles.socialNetwork}>
                    <FontAwesome
                        style={styles.iconUser}
                        name="facebook-f"
                        size={30}
                        color={'white'}
                    />
                </View>
                <View style={styles.socialNetwork}>
                    <FontAwesome
                        style={styles.iconUser}
                        name="twitter"
                        size={30}
                        color={'white'}
                    />
                </View>
                <View style={styles.socialNetwork}>
                    <FontAwesome
                        style={styles.iconUser}
                        name="github"
                        size={30}
                        color={'white'}
                    />
                </View>
            </View>
            {/* end Login with social network */}
            </View>
            {/* end inputField */}

            <View style={styles.footer}>
                <Text style={styles.sinupText}>Already have an account?</Text>
            </View>
            {/* end footer */}
        </ImageBackground>
    );
  }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        height:'100%',
        width:'100%',
    },
     //Header
    header: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    //InputField
    inputField: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInputContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'black',
        flexDirection:'row',
    },
    textInput: {
        width: 280,
        height: 50,
    },
    iconUser:{
        paddingTop: 8,
        paddingLeft: 10,
    },
    rememberCheckboxContainer:{
        flexDirection:'row',
        alignItems:'baseline',
        width:'100%',
        marginLeft: 40, 
    },
    rememberCheckbox:{
        marginTop: 10,
    },
    rememberText:{
        paddingBottom: 5,
        color: 'white',
    },
    btnLogin:{
        marginTop: 15,
        marginLeft: 28,
        marginRight: 28,
        flex: 1,
        height: 50,
        backgroundColor:'#1C868D',
        justifyContent:'center',
        borderRadius: 50,
        borderColor: 'white',
    },
    socialNetworkContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    socialNetwork:{
        height: 50,
        width: 50,
        backgroundColor:'#1C868D',
        borderRadius: 50,
        margin: 10,
        marginTop: 20,
    },
    //Footer
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    sinupText:{
        color: 'white',
    },
    iconRocket: {
        textAlign: 'center',
    },
    textRocket: {
        textAlign: 'center',
        color: 'white',
    },
});