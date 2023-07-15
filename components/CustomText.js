import { View, Text } from 'react-native'
import React from 'react'

const Name = ({fName,lName}) =>{
    return(
        <View>
           <Text> Your First Name is {fName}! and Last name is {lName}</Text>
        </View>
    )


}

const CustomText = () => {
  return (
    <View>
      <Name fName= "Navin" lName="Siripankaew"/>
      <Name fName= "Chanisorn" lName="Bussabadhan"/>
    </View>
  )
}

export default CustomText