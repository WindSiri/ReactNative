import { View, Text,Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({route, navigation}) => {
  //2. get the Param
  const{itemId,otherParam} = route.params ;
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>{'\n'}</Text>
      <Button 
      title='Go to Details...again'
      onPress={()=>
        navigation.push('Details',{
          itemId : Math.floor(Math.random()*100),
          otherParam: 'Anything you want here'
        })}
      />

      <Button 
      title='Go to Home'
      onPress={()=>navigation.navigate('Home')}
      />

<Button 
      title='Go Back'
      onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

export default DetailsScreen