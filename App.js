import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, View } from "react-native";

export default function App() {
  const [ready, setReady] = useState(false);

  const startLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
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