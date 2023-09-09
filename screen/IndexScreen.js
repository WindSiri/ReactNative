import { View, Text,Button } from 'react-native'
import React, { useEffect } from 'react'
import CreatePostScreen from './CreatePostScreen'

const IndexScreen = ({navigation, route}) => {

    React.useEffect(()=>{
        if(route.params?.post){
            //Post Updated,do something with "route.params.post"
            //for example, sent the post to the server
        }
    },[route.params?.post])

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Button 
      title = 'Create Post'
      onPress={()=>
        navigation.navigate('CreatePost')

      }
      />
      <Text style={{margin:10}}>Post: {route.params?.post}</Text>
    </View>
  )
}

export default IndexScreen