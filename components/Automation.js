import React, { Component } from 'react';
import {View, 
        TextInput,
        StyleSheet,
        Text,
    } from 'react-native';
    
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from 'react-native-progress-circle';

export default class Automation extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            {/* end header */}
            <View style={styles.displayTitle}>
                <Text style={styles.automationTitle}>Automation</Text>
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
                    <View style={{backgroundColor:'red', flex:5}}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#FF7043"
                            shadowColor="#707070"
                            bgColor="#fff"
                            scale="2"
                        >
                        <Text style={{ fontSize: 18, color:'#FF7043' }}>{'30%'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={{backgroundColor:'cyan', flex:5}}>
                        <ProgressCircle
                            percent={50}
                            radius={50}
                            borderWidth={8}
                            color="#0277BD"
                            shadowColor="#707070"
                            bgColor="#fff"
                            size={120}
                        >
                        <Text style={{ fontSize: 18, color:'#0277BD' }}>{'50%'}</Text>
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
    header:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'orange',
    },

    //Display Infomation
    displayTitle:{
        flex:5,
        backgroundColor:'yellow',
    },
    automationTitle:{
        fontSize: 30,
        textAlign: 'center',
        color:'#155E63',
    },
    displayInfo:{
        flexDirection: 'row',
        marginLeft: 12,
        backgroundColor:'green',
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
        backgroundColor:'violet',
    }
});