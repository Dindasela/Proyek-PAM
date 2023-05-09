import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { ImageBackground } from "react-native-web";

const Home = ({ navigation }) => {
  

    return(
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bodyContent}>
            {/* NavAtas */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="#373737" />
            </TouchableOpacity>
                <View style={styles.teksTitle}>
              <Text style={styles.teksDaftar} >Daftar Buku</Text>
              </View>
          </View>
           {/* NavAtas */}
          
          {/* Daftar Buku */}
          <View style={styles.daftarBuku}>
            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}
            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}

            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}

            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}

            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}

            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}

            {/* buku */}
            <View style={styles.wrap}>
            <View style={styles.wrapBuku}>
              <View style={styles.detailBuku}>
                <Image
                    style={{width: 70, height:96, borderRadius:5}}
                    source={require('../assets/buku1.png')}
                  />
                  <View style={styles.wrapDetail}>
                    <Text style={styles.judul} >Rentang Waktu</Text>
                    <Text style={styles.penulis} >Farah Via Rahmawati</Text>
                    <Image
                    style={{width: 83, height:15, borderRadius:5}}
                    source={require('../assets/rating.png')}/>
                    <Text style={styles.harga} >Rp. 70.000,-</Text>
                  </View>
              </View>
              <View style={styles.wrapBtn}>
                 <TouchableOpacity onPress={() => navigation.navigate('Lagu1')}>
                  <Text style={styles.btnDetail} >Rp. 70.000,-</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Text style={styles.tesgaris} >Rp. 70.000,-</Text>
            </View>
            {/* buku */}
          </View>
          {/* Daftar Buku */}
          
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
  header:{
    marginTop : 40,
    display : 'flex',
    flexDirection:'row',
    position:'relative',
    // backgroundColor: 'red',
  },
  buttonBack:{
    zIndex:99,
  },
  teksTitle:{
    display:'flex',
    alignItems:'center',
    // backgroundColor:'blue',
    width:"100%",
    position:'absolute',
  },
  teksDaftar:{
    color: "#071D2C",
    fontSize: 20,
    fontWeight : 700,
    marginLeft: 3,
  },
  btnDetail:{
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight : 700,
    backgroundColor:'#28A7CA',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius: 5,
  },

  // daftarBuku
  wrapBuku:{
    marginTop : 15,
    display : 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor: 'green',
  },
  detailBuku:{
    display : 'flex',
    flexDirection:'row',
    position:'relative',
    // backgroundColor: 'red',
  },
  wrapDetail:{
    marginLeft:10,
    // backgroundColor:'blue',
  },
  wrapBtn:{
    justifyContent:'flex-end',
    // backgroundColor:'yellow',
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
  harga:{
    color: "#071D2C",
    fontSize: 18,
    fontWeight : 700,
  },
  garisBuku:{
    marginTop: 10,
    height:1.5,
    backgroundColor:'##EBEBEB',
  },
  tesgaris:{
    marginTop: 10,
    backgroundColor:'#EBEBEB',
    height:1.5
  },
  // daftarBuku
    
});

export default Home;