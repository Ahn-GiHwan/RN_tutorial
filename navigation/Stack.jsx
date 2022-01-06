import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, Button } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>One</Text>
    <Button title="Go Three!" onPress={() => navigate("Three")} />
  </TouchableOpacity>
);
const ScreenTwo = () => (
  <View>
    <Text>Two</Text>
  </View>
);
const ScreenThree = ({ navigation: { navigate } }) => (
  <View>
    <Text>Three</Text>
    <Button title="Go TV" onPress={() => navigate("Tabs", { screen: "TV" })} />
  </View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen
        name="Two"
        component={ScreenTwo}
        options={{ title: "ss" }}
      />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};

export default Stack;
