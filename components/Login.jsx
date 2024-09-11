import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.imageContainer}
        source={require("./../assets/images/login_1.jpg")}
      />

      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 20, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's Find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning & repair
          </Text>{" "}
          Services
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Best app to find services near you which deliver you a professional
          service
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ textAlign: "center", fontSize: 15, color: Colors.PRIMARY }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    height: "80%",
    marginTop: -60,
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 25,
  },
});
