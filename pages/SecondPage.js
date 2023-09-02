import { View, Text, Button } from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>This is Second Page of the App</Text>
      <Text>{'\n'}</Text>
      <Button 
      title='Go Back'
      onPress={()=>navigation.goBack()}
      />
      <Button 
      title='Go to SecondPage...again'
      onPress={()=>navigation.push('SecondPage')}
      />

      <Button 
      title='Go to First Page'
      onPress={()=>navigation.navigate('FirstPage')}
      />

    <Button 
      title='Go to Third Page'
      onPress={()=>navigation.navigate('ThirdPage')}
      />
    </View>
  )
}

export default SecondPage