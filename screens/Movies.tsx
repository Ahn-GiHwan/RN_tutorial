import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  /* color: blue; */
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

const Movies: React.FC<NativeStackScreenProps<any,"Movies">> = ({ navigation: { navigate } }) => {
  return (
    <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
      <Title>Movie!</Title>
    </Btn>
  );
};

export default Movies;
