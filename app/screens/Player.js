import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Player = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('AudioList.js')}>
                <Image
                    style={{width: 15, height:20, marginLeft: 15, marginTop: 10}}
                    source={require('../../assets/back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.listennow} >Listen Now</Text>
            <Image
                    style={{width:314, height:409, marginLeft: 45, marginTop: 10, }}
                    source={require('../../assets/listen.png')}
            />
            <Text style={styles.judul} >Paris</Text>
            <Text style={styles.artis} >Baco Exu De Blues</Text>
            <Image
                    style={{width:330, height:30, marginLeft: 30, marginTop: 10 }}
                    source={require('../../assets/play.png')}
            />
            <Image
                    style={{width:235, height:110, marginLeft: 85, marginTop: 10 }}
                    source={require('../../assets/pause.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        fontSize: 100,
    },
    listennow: {
        fontWeight: 700,
        fontSize: 20,
        marginTop: -25,
        alignItems: 'center',
        textAlign: 'center'
    },
    judul: {
        fontSize: 25,
        fontWeight: 500,
        marginLeft: 30,
        marginTop: 10,
    },
    artis: {
        fontSize: 15,
        fontWeight: 400,
        marginLeft: 30,
    }
})



export default Player;