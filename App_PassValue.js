import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CreatePostScreen from './screen/CreatePostScreen'
import IndexScreen from './screen/IndexScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       mode = 'model'
       screenOptions={{
        headerStyle:{
          backgroundColor:'#008b8b'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold',          
        }
       }}
      >
        <Stack.Screen name='Index' component={IndexScreen} options={{title:'MainPage'}}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>     
  )
}

export default App


