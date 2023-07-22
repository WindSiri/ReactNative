import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useState } from 'react'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native'

const Login = () => {
    const[textInputName, setTextInputName] = useState('');
    const[textInputEmail, setTextInputEmail] = useState('');
    
    const checkTextInput = () => {
        if(!textInputName.trim()){
            alert('Please Enter Name');
            return;
        }
        else if(!textInputEmail.trim()){
            alert('Please Enter Email');
            return;
        }
        else
            alert('Success')
            return;
        }
    

  return (
    <View>
      <TextInput
            placeholder='Enter Name'                      
            style = {styles.textInputStyle}
            value={textInputName}
            onChangeText={(value)=>{setTextInputName(value)}}
      />
      <Text>{'\n'}</Text>
      <TextInput
            placeholder='Enter Email'                      
            value={textInputEmail}
            style = {styles.textInputStyle}
            onChangeText={(value)=>{setTextInputEmail(value)}}
      />
      <Text>{'\n\n'}</Text>
      <Button 
            title='Submit'
            onPress={checkTextInput}/>
    </View>
  )
}

export default Login

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