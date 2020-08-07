import React from 'react'
import {TouchableWithoutFeedback,Keyboard, Image} from 'react-native'
const DissmissKeyboard=({children})=>(
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)
export default DissmissKeyboard 

