import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

 

// import RandomUserScreen from './components/RandomUserScreen';
// import FlatList_Example1 from './components/FlatList_Example1';
//import FlatList_HeaderFooter from './components/FlatList_HeaderFooter';
import FlatListAPI from './components/FlatListAPI';
import News from './components/News';
 

export default function App() {

  return (

    <View style={styles.container}>

      {/* {<RandomUserScreen/>} */}
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
    {/* <FlatListAPI/> */}
    <News />
 

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