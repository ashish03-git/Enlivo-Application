

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionic from "react-native-vector-icons/Ionicons";
import Home from './Home'
import Search from './Search'
import Upload from './Upload'
import Reels from './Reels'
import Profile from './Profile'

const Tab = createBottomTabNavigator()

function MainTabs() {



  return (
    <>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor:"#e91e63"
        }}
      >
        <Tab.Screen
          name='Home'
          options={{
            tabBarLabel:"Home",
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Ionic name="home" color={color} size={size}/>
            )
          }}
          component={Home}
        />
        <Tab.Screen
          name='Search'
          options={{
            tabBarLabel:"Search",
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Ionic name="search-circle-sharp" color={color} size={size}/>
            )
          }}
          component={Search}
        />
        <Tab.Screen
          name='Upload'
          options={{
            tabBarLabel:"Upload",
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Ionic name="cloud-upload" color={color} size={size}/>
            )
          }}
          component={Upload}
        />
        <Tab.Screen
          name='Reels'
          options={{
            tabBarLabel:"Reels",
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Ionic name="play-circle" color={color} size={size}/>
            )
          }}
          component={Reels}
        />
        <Tab.Screen
          name='Profile'
          options={{
            tabBarLabel:"Profile",
            headerShown:false,
            tabBarIcon:({color,size})=>(
              <Ionic name="person-circle-sharp" color={color} size={size}/>
            )
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  )
}




export default MainTabs