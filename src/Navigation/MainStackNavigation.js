import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignInScreen from '../screens/SigninScreen'
import GroupScreen from '../screens/GroupScreen'
import AddGroupScreen from '../screens/AddGroupScreen'
import ChatScreen from '../screens/ChatScreen'

const Stack=createStackNavigator()
function ChatFlow(){
    return(
        <NavigationContainer>
            <Stack.Navigator name="chat">
                <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options= {{headerShow:false}}
                />
                <Stack.Screen
                name="GroupScreen"
                component={GroupScreen}
                options={{title:"Groups"}}
                />
                <Stack.Screen
                name="Add Group Screen"
                component={AddGroupScreen}
                options={{title:"Add Group"}}
                />
                <Stack.Screen
                name="Chat Screen"
                component={ChatScreen}
               options={{title:"Add Chat"}}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MainStackNavigator(){
    return(
        ChatFlow()
    )
}
export default MainStackNavigator