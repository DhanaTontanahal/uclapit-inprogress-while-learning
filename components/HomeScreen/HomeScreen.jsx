import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
// import { useUser } from "@clerk/clerk-expo";
import Header from "./Header";
import Slider from "./Slider";

export default function HomeScreen() {
  const navigation = useNavigation();

  // const { user } = useUser();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Home",
      headerShown: false,
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "outfit-bold",
      },
    });
  }, [navigation]);

  return (
    <View>
      <Header />

      <Slider />
    </View>
  );
}
