import React,{useState,useEffect} from 'react'
import {StyleSheet,View,Text,Alert,SafeAreaView,Image,KeyboardAvoidingView} from 'react-native'
import Button from '../components/Button'
import EmailTextField from '../components/EmailTextField'
import Color from '../utils/Color'
import Images from '../Const/Images'
import Constants from '../Const/Constant'
import DismissKeyboard from '../components/DismissKeyboard'
import Utillity from '../utils/Utillity'
import String from '../Const/String'
 
import DissmissKeyboard from '../components/DismissKeyboard'
import PasswordTextField from '../components/PasswordTextField'
function SignInScreen(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const [isLoading,setIsLoading]=useState('')
    validateEmailAddress=()=>{
        const isValidEmail=Utillity.isEmailValid(email)
        isValidEmail ? setEmailError(''): setEmailError(String.InvalidEmailAddress)
        return isValidEmail
    }
    validatePasswordField=()=>{
        const isValidField=Utillity.isValidField(password)
        isValidField ? setPasswordError('') : setPasswordError(String.PasswordFieldEmpty)
        return isValidField
    }
    return(
         <DissmissKeyboard>
             <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                 <View>
                     <SafeAreaView>
                         {/* <Image style={styles.logo} source={Images.logo}></Image> */}
                         <EmailTextField 
                         term={email}
                         error={emailError}
                         placeHolder={String.EmailPlaceHolder}
                         onTermChange={newEmail=>setEmail(newEmail)}
                         onValidateEmailAddress={validateEmailAddress}
                         />
                         <PasswordTextField
                         term={password}
                         error={passwordError}
                         placeHolder={String.PasswordPlaceHolder}
                         OnTermChange={newPassword=>{setPassword(newPassword)}}
                         onValidatePasswordField={validatePasswordField}
                         />
                         <Button title={String.Join}  />
                     </SafeAreaView>
                 </View>
             </KeyboardAvoidingView>
         </DissmissKeyboard>
    )
}
const styles=StyleSheet.create({
     logo:{
         alignSelf:'center',
         margin:0.01 * Constants.screenHeight
     },
     container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:Color.theme
     }
})
export default SignInScreen