import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AudioProvider from "./app/context/AudioProvider";
import AppNavigator from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <AudioProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </AudioProvider>
  );
}

