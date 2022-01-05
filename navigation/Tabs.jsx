import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { Button, Text } from "react-native";
import { useColorScheme } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarLabelStyle: {
    //     color: "black",
    //   },
    //   tabBarActiveTintColor: isDark ? "pink" : "white",
    //   tabBarStyle: {
    //     backgroundColor: isDark ? "black" : "skyblue",
    //   },
    //   headerStyle: {
    //     backgroundColor: isDark ? "black" : "white",
    //   },
    //   headerTitleStyle: {
    //     color: isDark ? "white" : "black",
    //   },
    // }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabelStyle: {
            color: "red",
          },
          tabBarBadge: 3,
          headerLeft: () => (
            <Button
              title="<"
              onPress={() => {
                alert("Go Back!");
              }}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "film" : "inbox"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "tv-outline" : "tv"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarBadge: "NEW",
          headerStyle: {
            backgroundColor: "red",
          },
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "search" : "circle"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
