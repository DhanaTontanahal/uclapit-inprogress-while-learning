import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const { user, isLoading } = useUser();

  return (
    user && (
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: user?.imageUrl }}
              style={{
                width: 45,
                height: 45,
                borderRadius: 99,
              }}
            />
            <View>
              <Text style={{ color: Colors.WHITE, fontFamily: "outfit-bold" }}>
                Welcome
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 15,
                  fontFamily: "outfit-reg",
                }}
              >
                {user?.firstName}
              </Text>
            </View>
          </View>
          <Ionicons name="bookmark-outline" size={27} color={Colors.WHITE} />
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput style={styles.textInput} placeholder="Search" />
          <FontAwesome
            style={styles.searchBtn}
            name="search"
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  searchBtn: { backgroundColor: Colors.WHITE, borderRadius: 8, padding: 10 },
  profileContainer: { display: "flex", flexDirection: "row", gap: 10 },
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textInput: {
    fontFamily: "outfit-reg",
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
});
