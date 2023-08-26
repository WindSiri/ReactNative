import{
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList
} from 'react-native'

import React ,{useState,useEffect} from 'react'
import { RefreshControl } from 'react-native-web';

const FlatListAPI = () => {

    const [refreshing, setRefreshing] = useState(true);
    const[dataSource,setDataSource] = useState([]);

useEffect(()=>{
    getData();
},[]);

    //service to get the data from the server to render

const getData = async() => {
    await  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((responseJson)=>{
        setDataSource(responseJson);
        setRefreshing(false);
    }).catch((error)=>{
        console.error(error);
    })
};

const getItem = (item) =>{
    //Function for click on items
    alert ('id : '+item.id+' Title : '+item.title)
}

const itemView = ({item})=>{
    return(
        <Text style = {styles.itemStyle}
                onPress={()=>getItem(item)}>
            {item.title}
        </Text>
    )
};



const ItemSeparatorView = () =>{
    return(
        <View style={{height: 0.5,width:'100%',backgroundColor:'#c8c8c8'}}/>
    )
};

const onRefresh = () =>{
    //Clear old data of the list
    setDataSource([]);
    //Call the service to get latest data from the server
    getData();
}

  return (
    <SafeAreaView style={{flex:1}}>
        <View style = {styles.container}>
            {refreshing? <ActivityIndicator /> : null}
            <FlatList 
                data={dataSource}
                keyExtractor={(index)=>index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={itemView}
                refreshControl={
                    <RefreshControl 
                        refreshing = {refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    </SafeAreaView>
  )
}

export default FlatListAPI

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
    },
    itemStyle:{
        fontSize: 20,
        padding:10
    }

})