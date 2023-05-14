import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from "react-native";

const PlayList = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bodyContent}>
                    <View style={styles.cardLagu}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Image
                                style={{ width: 15, height: 20, marginTop: 20 }}
                                source={require('../../assets/back.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.teksAtas}>
                            <Text style={styles.teksJudul1}>Mix Santai</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.wrapLagu}>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/lagu-2000an.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >Last Child, Budi Doremi, </Text>
                                    <Text style={styles.penulis} >Dewa, dan banyak lagi</Text>
                                </View>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/indie.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >Last Child, Budi Doremi, </Text>
                                    <Text style={styles.penulis} >Dewa, dan banyak lagi</Text>
                                </View>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/English.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >Last Child, Budi Doremi, </Text>
                                    <Text style={styles.penulis} >Dewa, dan banyak lagi</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <View style={styles.teksAtas}>
                            <Text style={styles.teksJudul}>Pop Mr.Sound</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.wrapLagu}>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/LastChild.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >Single Last Child</Text>
                                </View>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/Vierra.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >Album Vierra</Text>
                                </View>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/SheilaOn7.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >Single SheilaOn7</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <View style={styles.teksAtas}>
                            <Text style={styles.teksJudul}>Ngaji Mr.Sound</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.wrapLagu}>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/Al-Fatihah.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >QS. Al-Fatihah - Pembuka</Text>
                                </View>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/An-Nas.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >QS. An-Nas - Umat Manusia</Text>
                                </View>
                                <View style={styles.Lagu}>
                                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={require('../../assets/Al-Ikhlas.png')}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.penulis} >QS. Al-Ikhlas - Ikhlas</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <View style={styles.teksAtas}>
                                <Text style={styles.AddNewPlaylist}>+ Add New Playlist</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    teksJudul: {
        fontSize: 20,
        fontWeight: 10,
        marginTop: 5,
    },
    teksJudul1: {
        fontSize: 20,
        fontWeight: 10,
        marginTop: 20,
    },
    text_keterangan: {
        fontWeight: 100,
        fontSize: 8,
    },
    bodyContent: {
        padding: 20,
    },
    teksAtas: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    AddNewPlaylist: {
        fontSize: 20,
        fontWeight: 10,
        marginTop: 20,
    },
    wrapLagu: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        // backgroundColor: 'red',
    },
    Lagu: {
        marginLeft: 10,
        flex: 1,
    },
    judul: {
        marginTop: 4,
        color: "#28A7CA",
        fontSize: 14,
        fontWeight: 700,
        top: 0,
        marginLeft: 3,
    },
    penulis: {
        color: "#969696",
        fontSize: 8,
        fontWeight: 400,
        marginLeft: 3,
    },

});

export default PlayList;