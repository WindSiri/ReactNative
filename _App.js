import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

 

// import RandomUserScreen from './components/RandomUserScreen';
// import FlatList_Example1 from './components/FlatList_Example1';
//import FlatList_HeaderFooter from './components/FlatList_HeaderFooter';
import FlatListAPI from './components/FlatListAPI';
import News from './components/News';
import ProductScreen from './components/ProductScreen';
 

export default function App() {

  return (

    <View style={styles.container}>

      {/* {<RandomUserScreen/>} */}
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
      {/* <FlatListAPI/> */}
      {/* <News /> */}
      {/* <ProductScreen /> */}

     
 

    </View>

  );

}

 

const styles = StyleSheet.create({

  container:{

     flex:1,  

     justifyContent:'left',    

     alignItems:'left' ,

     padding:5,

     margin:10

  }

 })