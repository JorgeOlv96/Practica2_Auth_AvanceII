import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import HomeScreen from "../../../screen/HomeScreen"
import FavoritesScreen from "../../../screen/FavoritesScreen"
import AccountScreen from "../../../screen/AccountScreen"
import SettingsScreen from "../../../screen/SettingsScreen"
import Awesomefrom from "react-native-vector-icons/FontAwesome"
import { styles } from "./TabNavigation.styles.js"
import RickAndMortyAPI from "../../../api/RickAndMortyAPI"
import { Image } from "react-native"


export default function TabNavigation() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
       name="Account"
       component={AccountScreen}
       options={{
         title: "Mi cuenta",
        }}
      />
      <Tab.Screen

      name="Home"
      component={RickAndMortyAPI}
      options={{
        title: "Ricknicio",
        tabBarIcon: () => <Image
              source={require('../../../assets/images/logo-button.png')}
              style={{ width: 80, height: 80, marginBottom: 40 }}
        />  


        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favoritos",
        }}
      />


     
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      /> */}

    </Tab.Navigator> 
 
 )
}



const setIcon = (route, routeStatus) => {
  let iconName = ""
  let color = "#58b14a"
  if (routeStatus.focused) {
    color = "#58b14a"
  }
  if (route.name === "Home") {
    iconName = "home"
  } else if (route.name === "Settings") {
    iconName = "cog"
  } else if (route.name === "Favorites") {
    iconName = "heart"
  } else if (route.name === "Account") {
    iconName = "user"
  }
  return (
    <Awesomefrom
      name={iconName}
      size={24}
      color={color}
      style={styles.icon}
    />
  )
}
