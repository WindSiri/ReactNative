import { View, Text, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const IncrementCounter = () => {

    const[age, setAge] = useState(23);

    const increment1 = () => {
        setAge(a=>a+1);
    }

    const increment3 = () => {
        setAge(a=>a+3);
    }
  return (
    <View>
      <Text style={{fontSize:24,fontStyle:'bold'}}>
        Your age: {age}</Text>
      <Text>{'\n\n'}</Text>
      <Button 
      title='+3'
      onPress={increment3}
      style = {StyleSheet.container}
      />
      <Text>{'\n\n'}</Text>
      <Button 
      title='+1'
      onPress={increment1}/>    
    </View>
  )
}

export default IncrementCounter
    const styles = StyleSheet.create({
        container:{
            paddingHorizontal:5
        }
    })

