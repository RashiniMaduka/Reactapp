import React from 'react'
import {TouchableOpacity,StyleSheet,Text, ActivityIndicator, View} from 'react-native'
import Color from '../utils/Color'
import { color } from 'react-native-reanimated'
const Button = (props)=>{
 const {title='Enter',style={},textStyle={},onPress,isLoading}=props
 const loader=()=>{
     return(
         <ActivityIndicator animating={isLoading}/>
     )
 }
 const button = () =>{
     return(
     <TouchableOpacity onPress={onPress}  style={[styles.button,style]}> 
     <Text style={[styles.text,textStyle]}>{title}</Text>
     </TouchableOpacity>
     
 )
 }
 return (
     <View style ={[styles.text,textStyle]}>
         {isLoading ? loader() : button()}
     </View>
 )
}
const styles=StyleSheet.create({
    button:{
        display:'flex',
        height:50,
        borderRadius:5,
        paddingRight:20,
        paddingLeft:20,
        backgroundColor:Color.uaStudioGreen,
        shadowColor:color.uaStudioGreen,
        shadowOpacity:0.4,
        shadowOffset:{height:10,wodth:10},
        shadowRadius:20

    },
    text:{
       fontSize:16,
       textTransform:'uppercase',
       color:Color.white
    }
})
export default Button