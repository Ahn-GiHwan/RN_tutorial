import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { Button, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: "black",
        },
        tabBarActiveTintColor: "pink",
        tabBarStyle: {
          backgroundColor: "skyblue",
        },
      }}
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
        }}
      />
      <Tab.Screen name="TV" component={Tv} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarBadge: "NEW",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
