import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

import CustomSideBarMenu from './pages/App_CustomSideBarMenu'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function FirstDrawer(){
    return(
        <Stack.Navigator initialRouteName='FirstPage'
        screenOptions={{headerShown:false}}>
          <Stack.Screen name='FirstPage' component={FirstPage}/>
        </Stack.Navigator>
    )    
}

function SecondDrawer(){
    return(
      <Stack.Navigator
      initialRouteName='FirstPage'
        screenOptions={{headerShown:false}}>
      <Stack.Screen name='SecondPage' component={SecondPage}/>
    </Stack.Navigator>
    )
}



function MyDrawer(){
    return(
        <Drawer.Navigator
        screenOptions={{
          drawerStyle:{
            backgroundColor: '#FFF3BF'
          },
          headerTintColor: '#9A27C6',
          headerStyle:{
            backgroundColor:'#EDCEFF'
          }
        }} 
        drawerContent={(props)=><CustomSideBarMenu{...props}/>}
        
        
        >
            <Drawer.Screen name='FirstDrawer' component={FirstDrawer} options={{drawerLabel:'First Page Option'}}/>
            <Drawer.Screen name='SecondDrawer' component={SecondDrawer} options={{drawerLabel:'Second Page Option'}}/>
        </Drawer.Navigator>
    )
}

const App = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  )
}

export default App