import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";

export default function App() {
  const [assets] = useAssets([require("./bg.jpeg")]);
  const [loaded] = useFonts(Ionicons.font);

  if (!assets || !loaded) return <AppLoading />;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello RN!!</Text>
    </View>
  );
}
