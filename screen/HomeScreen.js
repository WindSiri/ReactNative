import { View, Text,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({route,navigation}) => {
    const {itemId} = route.params;
    return(
        <View>
            <Text>Home Screen</Text>
            <Text>Initial Param : itemId - {itemId}{'\n'}</Text>
            <Button 
            title='Update param'
            onPress={() => navigation.setParams({
                itemId: Math.floor(Math.random()*100)
            })}
            />
        </View>
    )
}

export default HomeScreen