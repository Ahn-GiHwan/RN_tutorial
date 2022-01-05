import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

export default function App() {
  const [assets] = useAssets([require("./bg.jpeg")]);
  const [loaded] = useFonts(Ionicons.font);

  if (!assets || !loaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
