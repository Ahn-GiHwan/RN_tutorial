import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { useColorScheme } from "react-native";
import Stack from "./navigation/Stack";

export default function App() {
  const [assets] = useAssets([require("./bg.jpeg")]);
  const [loaded] = useFonts(Ionicons.font);

  const isDark = useColorScheme() === "dark";

  if (!assets || !loaded) return <AppLoading />;

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {/* <Tabs /> */}
      <Stack />
    </NavigationContainer>
  );
}
