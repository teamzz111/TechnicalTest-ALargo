import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

    const navigate = () => {
      navigation.navigate("List")
    }
    return(
      <Layout style = {styles.container} level='3'>
        <StatusBar barStyle="dark-content" backgroundColor={'#edf1f7'} />
        <Text category='h1' style = {styles.text}>GEO</Text>
        <Layout style={styles.topContainer}level='3' >
            <ImageBackground source={ require('../assets/artist.jpeg')} style={styles.image}   imageStyle={{ borderRadius: 8 }}>
              <TouchableOpacity>
                <View style = {styles.overlay}>
                  <Text style = {styles.colorSub} category='c1'>Top List of</Text>
                  <Text style = {styles.colorSub} category='h4'>Artists</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={ require('../assets/song.jpeg')} style={styles.image}   imageStyle={{ borderRadius: 8 }}>
              <TouchableOpacity onPress = {navigate}>
                <View style = {styles.overlay}>
                  <Text style = {styles.colorSub} category='c1'>Top List of</Text>
                  <Text style = {styles.colorSub} category='h4'>Tracks</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
        </Layout>
      </Layout>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 14,
  },
  overlay:{
    backgroundColor: 'rgba(23,63,95,0.6)',
    padding: 30,
    borderRadius: 8
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: 'red'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  text: {
    fontSize: 40,
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginTop: 15,
    elevation: 10
  },
  colorSub: {
    color: 'white'
  }
});

export default Home;