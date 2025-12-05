import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/welcomeStyles";

export default function Welcome2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/fast.png")}
        style={styles.illustration}
      />

      <Text style={styles.title}>Easy, Fast & Trusted</Text>

      <Text style={styles.subtitleSmall}>
        Fast money transfer and guaranteed safe{"\n"}
        transactions with others.
      </Text>

      <View style={styles.dots}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Welcome3")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
