import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";

const Btn = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Title = styled.Text`
  color: blue;
  font-size: 20px;
  font-weight: 800;
`;

const Movies = ({ navigation: { navigate } }) => {
  return (
    <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
      <Title>Movie</Title>
    </Btn>
  );
};

export default Movies;
