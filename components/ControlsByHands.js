import React, { Component } from 'react';
import {View, 
        TextInput,
        StyleSheet,
        Text,
    } from 'react-native';
    
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from 'react-native-progress-circle';
import * as Progress from 'react-native-progress';

export default class ControlsByHands extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.displayTitle}>
                <Text style={styles.automationTitle}>Controls By Hands</Text>
                <View style={styles.displayInfo}>
                    <Text style={{fontSize: 18, color:'#155E63'}}>
                        <FontAwesome
                            style={{fontSize:18}}
                            name='info-circle'
                            color='#155E63'
                        />
                          Display infomation of systems
                    </Text>
                </View>
                {/* end Infomation Title */}

                <View style={styles.processBar}>
                    <View style={{flex:5 ,alignItems:'center',justifyContent:'center', flexDirection:'row'}}>
                        <ProgressCircle
                            percent={30}
                            radius={80}
                            borderWidth={8}
                            color="#FF7043"
                            shadowColor="#B8B8B8"
                            bgColor="#fff"
                        >
                        <Text style={{ fontSize: 30, color:'#FF7043' }}>{'30C'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={{flex:5 ,alignItems:'center',justifyContent:'center', flexDirection:'row'}}>
                        <ProgressCircle
                            percent={50}
                            radius={80}
                            borderWidth={8}
                            color="#0277BD"
                            shadowColor="#B8B8B8"
                            bgColor="#fff"
                        >
                        <Text style={{ fontSize: 30, color:'#0277BD' }}>{'80%'}</Text>
                        </ProgressCircle>
                    </View>
                </View>
                {/* end ProcessBar */}

                <View style={styles.rain}>
                    <Text style={{textAlign:"center"}}>
                    <FontAwesome
                        style={{fontSize: 18}}
                        name='info-circle'
                        color='#155E63'
                    />
                    Rain
                    </Text>
                </View>
                {/* end Rain */}
            </View> 
            {/* end Display Informations */}
            <View style={styles.settings}>
                    <View style={styles.displayInfo}>
                        <Text style={{fontSize: 18, color:'#155E63'}}>
                            <FontAwesome
                                style={{fontSize:18}}
                                name='cogs'
                                color='#155E63'
                            />
                            Settings
                        </Text>
                    </View>
                    {/* end Setting Title */}
            </View>
            {/* end Settings */}
            <View style={styles.pullCover}>
                <View style={styles.displayInfo}>
                    <Text style={{fontSize: 18, color:'#155E63'}}>
                        <FontAwesome
                            style={{fontSize:18}}
                            name='info-circle'
                            color='#155E63'
                        />
                          Pull cover
                    </Text>
                </View>
                <View style={{flex:1 ,alignItems:'center',justifyContent:'center', flexDirection:'row'}}>
                    <Progress.Bar progress={0.3} width={320} height={15} borderRadius={10} borderColor='#155E63' color='#155E63' />
                </View>
            </View>
            {/* end Pull Cover */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        width:'100%',
        height:'100%',
    },

    //Display Infomation
    displayTitle:{
        flex:5,
    },
    automationTitle:{
        fontSize: 30,
        textAlign: 'center',
        color:'#155E63',
    },
    displayInfo:{
        flexDirection: 'row',
        marginLeft: 12,
    },
    processBar:{
        flex:9,
        flexDirection: 'row',
    },
    rain:{
        flex:1,
    },
    //Settings
    settings:{
        flex: 3,
        backgroundColor:'brown',
    },
    
    //Pull cover
    pullCover:{
        flex:1,
    }
});