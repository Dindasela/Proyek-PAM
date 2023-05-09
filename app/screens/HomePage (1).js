import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground } from "react-native-web";

const Home = ({ navigation }) => {
  
    return(
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bodyContent}>
          <View style={styles.homeProfile}>
            <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 55, height:55, borderRadius:10}}
                    source={require('../assets/profileHome.png')}
                  />
              </TouchableOpacity>
                <View style={styles.teksProfile}>
              <Text style={styles.selamatProfile} >Selamat Datang</Text>
              <Text style={styles.namaProfile} >Gabriela Putri</Text>
              </View>
          </View>
          <View style={styles.buboHome}>
              <Text style={styles.bubo} >BuBoo</Text>
              <Text style={styles.buboSub} >Jelajahi Dunia Pengetahuan dengan Mudah</Text>
          </View>
          
          {/* Jelajahi Buku */}
          <View style={styles.cardBuku}>
            <View style={styles.teksAtas}>
              <Text style={styles.jelajahi} >Jelajahi Buku</Text>
              <Text style={styles.lihat} >Lihat Selengkapnya</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapBuku}>
              <View style={styles.Buku}>
              <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 142, height:210, borderRadius:10}}
                    source={require('../assets/buku1.png')}
                  />
              </TouchableOpacity>
              <Text style={styles.judul} >Rentang Waktu</Text>
              <Text style={styles.penulis} >Farah Via Rahmawati</Text>
              </View>
              <View style={styles.buku}>
              <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 142, height:210, borderRadius:10}}
                    source={require('../assets/buku2.png')}
                  />
              </TouchableOpacity>
              <Text style={styles.judul} >Si Anak Pintar</Text>
              <Text style={styles.penulis} >Tere Liye</Text>
              </View>
              <View style={styles.buku}>
              <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 142, height:210, borderRadius:10}}
                    source={require('../assets/buku3.png')}
                  />
              </TouchableOpacity>
              <Text style={styles.judul} >Home Sweet Loan</Text>
              <Text style={styles.penulis} >Almira Bastari</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          {/* Sedang Trending */}
          <View style={styles.cardBuku}>
            <View style={styles.teksAtas}>
              <Text style={styles.jelajahi} >Sedang Trending</Text>
              <Text style={styles.lihat} >Lihat Selengkapnya</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapBuku}>
              <View style={styles.Buku}>
              <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 142, height:210, borderRadius:10}}
                    source={require('../assets/buku1.png')}
                  />
              </TouchableOpacity>
              <Text style={styles.judul} >Rentang Waktu</Text>
              <Text style={styles.penulis} >Farah Via Rahmawati</Text>
              </View>
              <View style={styles.buku}>
              <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 142, height:210, borderRadius:10}}
                    source={require('../assets/buku2.png')}
                  />
              </TouchableOpacity>
              <Text style={styles.judul} >Si Anak Pintar</Text>
              <Text style={styles.penulis} >Tere Liye</Text>
              </View>
              <View style={styles.buku}>
              <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 142, height:210, borderRadius:10}}
                    source={require('../assets/buku3.png')}
                  />
              </TouchableOpacity>
              <Text style={styles.judul} >Home Sweet Loan</Text>
              <Text style={styles.penulis} >Almira Bastari</Text>
              </View>
            </View>
            </ScrollView>
          </View>
          </View>
          </ScrollView>
          

          {/* Navbar Bawah */}
          <View style={styles.navBawah}>
            <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 27, height:27}}
                    source={require('../assets/btnHome.png')}
                  />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 27, height:27}}
                    source={require('../assets/btnCari.png')}
                  />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 27, height:27}}
                    source={require('../assets/btnBeli.png')}
                  />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Image
                    style={{width: 21, height:27}}
                    source={require('../assets/btnProfil.png')}
                  />
              </TouchableOpacity>
          </View>
        </View>
        

        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#F6F6FC',
    // overflow: "hidden",
    // padding: 20,
    backgroundColor: '#FCFCFC'
    // alignItems: "center",
  },
  bodyContent: {
    padding: 20,
  },
  navBawah:{
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 15,
    display : 'flex',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    elevation: 20,
    // backgroundColor: 'red',
  },
  homeProfile:{
    marginTop : 40,
    display : 'flex',
    flexDirection:'row',
    // backgroundColor: 'red',
  },
  teksProfile:{
    // backgroundColor : 'blue',
    marginLeft: 5
  },
  selamatProfile:{
    color: "#0E0E0E",
    fontSize: 15,
    fontWeight : 700,
    top: 0,
  },
  namaProfile:{
    color: "#0E0E0E",
    fontSize: 25,
    fontWeight : 700,
    top: 0,
  },
  bubo:{
    color: "#28A7CA",
    fontSize: 38,
    letterSpacing: 7,
    fontWeight : 700,
    top: 0,
  },
  buboSub:{
    color: "#28A7CA",
    fontSize: 8,
    fontWeight : 700,
    top: 0,
    marginLeft: 3,
  },
  buboHome:{
    marginTop: 20,
  },
  teksAtas:{
    marginTop: 20,
    display : 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  jelajahi:{
    color: "#0E0E0E",
    fontSize: 22,
    fontWeight : 700,
    top: 0,
    marginLeft: 3,
  },
  lihat:{
    color: "#28A7CA",
    fontSize: 10,
    fontWeight : 700,
    marginLeft: 3,
  },
  judul:{
    marginTop: 4,
    color: "#28A7CA",
    fontSize: 14,
    fontWeight : 700,
    top: 0,
    marginLeft: 3,
  },
  penulis:{
    color: "#969696",
    fontSize: 10,
    fontWeight : 400,
    marginLeft: 3,
  },
  wrapBuku:{
    marginTop: 10,
    display : 'flex',
    flexDirection:'row',
    // backgroundColor: 'red',
  },
  buku:{
    marginLeft: 10,
  }
    
});

export default Home;