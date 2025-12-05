import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "../styles/cardDetailsStyles";

export default function CardDetails({ route, navigation }) {
  const { user, balance } = route.params;

  const [selectedColor, setSelectedColor] = useState("#38033bff");

  const colorOptions = [
    "#38033bff",
    "#6EC9E0", "#37A866", "#1E66F5", "#F3A43B",
    "#F46A3D", "#D8A6FF", "#E62F3E", "#F4C542",
    "#9B9B9B", "#000000", "#0A0A0A", "#0C3C78",
    "#4D2FB3", "#FF3DCB"
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Card Color</Text>

      <Text style={styles.description}>
        Please select a color to differentiate your card and organize them better.
      </Text>

      
      <View style={[styles.cardPreview, { backgroundColor: selectedColor }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardName}>{user?.name}</Text>
          <Text style={styles.cardType}>BonPay Card</Text>
        </View>

        <View style={styles.cardNumberRow}>
          <Text style={styles.cardNumber}>2423 3581 9503 2412</Text>
          <Text style={styles.cardCvv}>CVV 776</Text>
        </View>

        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardBalanceLabel}>Your Balance</Text>
            <Text style={styles.cardBalance}>${balance}</Text>
          </View>
          <Text style={styles.cardVisa}>Visa</Text>
        </View>
      </View>

      
      <View style={styles.colorsContainer}>
        {colorOptions.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorCircle, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>


   <TouchableOpacity
    style={styles.confirmButton}
    onPress={() => {
    alert("Color changed successfully!");

    navigation.goBack(); 

   
    route.params?.onColorChange(selectedColor);
    }}
>
   <Text style={styles.confirmText}>Confirm</Text>
  </TouchableOpacity>

    </ScrollView>
  );
}