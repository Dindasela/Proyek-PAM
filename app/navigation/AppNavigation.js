import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import PlayList from "../screens/PlayList";
import Search from "../screens/Search";
import Player from "../screens/Player";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return(
  <Tab.Navigator>
    <Tab.Screen name="AudioList" component={AudioList} options={{tabBarIcon:({size,color})=>(<Feather name="headphones" size={size} color={color} />)}} />
    <Tab.Screen name="Player" component={Player} options={{tabBarIcon:({size,color})=>(<Feather name="play-circle" size={size} color={color} />)}} />
    <Tab.Screen name="Search" component={Search} options={{tabBarIcon:({size,color})=>(<Feather name="search" size={size} color={color} />)}}/>
    <Tab.Screen name="PlayList" component={PlayList} options={{tabBarIcon:({size,color})=>(<MaterialIcons name="library-music" size={size} color={color} />)}} />
  </Tab.Navigator>
  );
}

export default AppNavigation;