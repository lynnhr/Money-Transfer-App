import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/welcomeStyles";

export default function Welcome3({ navigation }) {
  const finishOnboarding = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/cards.png")}
        style={styles.illustration}
      />

      <Text style={styles.title}>Color Your Cards</Text>

      <Text style={styles.subtitleSmall}>
        Provides better cards management when using multiple cards{"\n"}
        by using different colors for each payment method.
      </Text>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dotActive} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.button} onPress={finishOnboarding}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
