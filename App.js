import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadAssets = (images) =>
  images.map((image) => {
    if (typeof image === "string") return Image.prefetch(image);
    else return Asset.loadAsync(image);
  });

export default function App() {
  const [ready, setReady] = useState(false);

  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadAssets([
      require("./bg.jpeg"),
      "https://d33wubrfki0l68.cloudfront.net/b152eb4214943f96e83c4babde026b12221e68f1/a20c2/img/oss_logo.png",
    ]);

    await Promise.all([...fonts, ...images]);
  };
  const onFinish = () => setReady(true);

  if (!ready)
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.log}
      />
    );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello RN!!</Text>
    </View>
  );
}
