import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Movies = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate("Stack", { screen: "Three" })}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/* <View > */}
      <Text>Movie</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default Movies;
