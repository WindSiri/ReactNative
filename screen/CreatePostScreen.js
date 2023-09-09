import { View, Text, TextInput,Button } from 'react-native'
import React from 'react'

const CreatePostScreen = ({navigation}) => {

    const[postText,setPostText] = React.useState('')

  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <TextInput 
        multiline
        placeholder='Please say something about React Native'
        Style={{height:200, padding:10, backgroundColor:'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button 
        title='Done'
        //Pass and merge Params back to index screen
        onPress={()=>{
            navigation.navigate({
                name:'Index',
                params:{post: postText},
                merge : true
            })
        }}
      />
    </View>
  )
}

export default CreatePostScreen