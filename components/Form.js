import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';


const Form = () => {
    const [ayu, setAyu] = useState(42);

    const Puem = () => {
    setAyu(a=a+1)
    }

    const[name, setName] = useState('');

  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Enter Name'                      
            style = {styles.textInputStyle}
            value={name}
            onChangeText={(value)=>{setName(value)}}
        />
        <Button 
        title='Increment Age'
        onPress={Puem}/>
        <Text>Hello,{name}. You are {ayu}</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15
    }
})