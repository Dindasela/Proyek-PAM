import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity, Image, fontWeight, TextInput } from 'react-native';

const Search = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('AudioList.js')}>
                <Image
                    style={{width: 15, height:20, marginLeft: 15, marginTop: 10}}
                    source={require('../../assets/back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.listennow} >Search Mr.Sound</Text>
            <View style = {styles.box}>
                {/* <Text style = {styles.subtitle}>Nama</Text> */}
                    <View style = {styles.inputbox}>
                        <TextInput
                        // value={}
                        // onChangeText={() => set_nama(nama)}
                        placeholder={'Search'}
                        style={styles.input}
                        />
                        <Image 
                        style={{width: 20, height:20, marginLeft:275, marginTop: -21}}
                        source = {require('../../assets/searchicon.png')}></Image>
                    </View>
                </View>
            {/* <Image
                    style={{width:345, height:43, marginLeft: 20, marginTop: 30}}
                    source={require('../../assets/search.png')}
            /> */}
            <Text style={styles.judul_search} >Pencarian Terkini</Text>
            <Image
                    style={{width:340, height:70, marginLeft: 20, marginTop: 30}}
                    source={require('../../assets/pencarian.png')}
            />
            <Image
                    style={{width:340, height:70, marginLeft: 20, marginTop: 30}}
                    source={require('../../assets/pencarian.png')}
            />
            <Image
                    style={{width:340, height:70, marginLeft: 20, marginTop: 30}}
                    source={require('../../assets/pencarian.png')}
            />
            <Image
                    style={{width:340, height:70, marginLeft: 20, marginTop: 30}}
                    source={require('../../assets/pencarian.png')}
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
    },
    judul_search: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 16,
        fontWeight:500,
    },
    inputbox:{
        borderRadius: 10,
        backgroundColor: '#EF9A5D',
        marginTop: 20,
        width: 300,
    },
    box:{
        alignItems: 'center'
    }
})

export default Search;