import { View, Text,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
             <Text>Home Screen</Text>
            {/* {<Text>Initial Param : itemId - {itemId}{'\n'}</Text> }
            <Button 
            title='Update param'
            onPress={() => navigation.setParams({
                itemId: Math.floor(Math.random()*100)
            })}
            />  */}
            <Text>{'\n'}</Text>
            <Button
                title='Go to Details'
                //1. Send the params
                onPress={()=>{navigation.navigate('Details',{
                itemId : 1088,
                otherParam: 'React Native App'
                })
            }}
            />
        </View>
    )
}

export default HomeScreen