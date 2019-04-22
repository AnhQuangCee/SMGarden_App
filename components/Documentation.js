import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
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

export default class Documentation extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.documentBg} source={require("../assets/images/Document_Background.png")}>
                    <View style={styles.title}>
                        <Text style={{textAlign:'center', fontSize: 24}}>Rau cai</Text>
                    </View>
                </ImageBackground>
                <View style={styles.content}>
                    <ScrollView>
                        <Text style={{fontSize:16, paddingHorizontal: 30, textAlign:'justify'}}>Bacon ipsum dolor amet buffalo ball tip swine pig fatback. Pork belly ham hock landjaeger brisket ball tip hamburger. Sausage leberkas drumstick pork hamburger cow. Brisket t-bone hamburger buffalo. Capicola shoulder pig chicken short ribs rump drumstick chuck swine pork loin ground round ball tip shankle doner.
                        Turducken jowl biltong, landjaeger andouille fatback short ribs cow. Pork chop porchetta pork sausage frankfurter shoulder short loin kielbasa corned beef meatball bacon boudin burgdoggen pastrami tri-tip. Pig short ribs beef ribs cupim. Tri-tip jowl shoulder picanha meatball swine. Ham leberkas bacon pork, tongue picanha boudin ribeye tenderloin chuck shankle rump prosciutto landjaeger shoulder. Ham meatball kevin leberkas, capicola salami drumstick boudin ribeye pork loin. Fatback ground round porchetta, pork belly cow doner shoulder jowl.
                        Ribeye pork loin swine biltong, salami ball tip pancetta cow doner sirloin picanha tongue bresaola pork tenderloin. Rump shank tri-tip landjaeger turkey, kielbasa biltong jerky short loin brisket hamburger picanha pork chop cow beef. Shoulder jerky bacon spare ribs, pork belly beef t-bone tail pork chop beef ribs tri-tip kevin. Sirloin leberkas kevin short ribs buffalo meatball prosciutto. Boudin t-bone short ribs sausage venison beef ribs kevin bresaola pastrami strip steak frankfurter tail beef brisket salami. Picanha kielbasa leberkas pastrami beef strip steak pork chop flank ribeye andouille cow prosciutto biltong. Porchetta doner chicken shankle tenderloin, landjaeger pork ground round pork loin.
                        Jerky cow meatloaf biltong pork beef ribs landjaeger prosciutto ham hock. Jerky turkey tenderloin sausage pork bresaola. Pork jowl ribeye, shoulder ground round turducken capicola flank spare ribs ham chuck. Tail doner short loin filet mignon flank pork chop leberkas kielbasa, porchetta landjaeger biltong sausage buffalo.
                        Ground round bresaola pork chop, tenderloin sausage filet mignon andouille strip steak drumstick cow flank. Picanha meatball short ribs, ribeye doner tongue t-bone venison. Leberkas filet mignon jowl, meatball chuck kevin pork chop doner sausage bresaola buffalo fatback cow kielbasa pork. Rump shankle sirloin burgdoggen leberkas. Meatball buffalo tail pork kielbasa capicola tri-tip venison hamburger leberkas alcatra turducken flank rump. Sirloin doner chicken, bacon meatball prosciutto capicola burgdoggen shank pork belly tri-tip pork ribeye. Pork belly ground round filet mignon short ribs pork loin frankfurter fatback swine porchetta shoulder sirloin doner corned beef sausage cupim.</Text>
                    </ScrollView>
                </View>
            </View>

        )
    };
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
    },
    documentBg:{
        flex: 3,
        height: null,
        width: null,
        resizeMode: 'cover',
        backgroundColor:'cyan',
        position:'relative',
    },

    title:{
        paddingTop: 28,
        backgroundColor:'white',
        height: 80,
        width: 300,
        position:'absolute',
        bottom: 0,
        left: 25,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    content:{
        flex: 7,
        backgroundColor:'white',
    },
});