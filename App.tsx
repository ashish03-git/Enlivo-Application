import React from 'react'
import Login from './Component/Login'
import Registration from './Component/Registration'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Component/MainTabs'
import MainTabs from './Component/MainTabs'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
function App() {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Registration' component={ Registration} options={{headerShown:false}}/>
          <Stack.Screen name='MainTabs' component={ MainTabs }  options={{headerShown:false}} />
        </Stack.Navigator>
       
      </NavigationContainer>

    </>
  )
}


export default App