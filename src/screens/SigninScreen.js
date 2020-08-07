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
import firebase from '../firebase/firebase'
 
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
    performAuth=()=>{
        const isValidEmail=validateEmailAddress()
        const isValidPassword=validatePasswordField()
        if(isValidEmail&&isValidPassword){
            setEmailError('')
            setPasswordError('')
            registration(email,password)
        }

    }
    registration=(email,password)=>{
        try{
            setIsLoading(true)
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                setIsLoading(false)
                Alert.alert('Logged In')
            }).catch((error)=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=>{
                    setIsLoading(false)
                    Alert.alert('Create A new user')
                })
                .catch((error)=>{
                    setIsLoading(false)
                    console.log('eror')
                    Alert.alert(error.message)

                })
            })
        }
        catch(error){
            setIsLoading(false)
            Alert.alert(error.message)
        }
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
                         <Button title={String.Join} onPress={performAuth} isLoadin={isLoading} />
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