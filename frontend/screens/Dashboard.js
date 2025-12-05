import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { getBalance, getHistory } from "../services/api";
import styles from "../styles/dashboardStyles";

export default function Dashboard({ navigation, route }) {
  const user = route.params?.user;
  const userId = user?.id;

  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);


  const defaultColor = "#38033bff";
  const [cardColor, setCardColor] = useState(defaultColor);


  useEffect(() => {
    if (route.params?.updatedColor) {
      setCardColor(route.params.updatedColor);
    }
  }, [route.params?.updatedColor]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    if (!userId) return;

    const balRes = await getBalance(userId);
    const histRes = await getHistory(userId);

    if (balRes.data) setBalance(balRes.data.balance);
    if (histRes.data) setHistory(histRes.data);

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

    
      <View style={styles.headerRow}>
        <Text style={styles.welcome}>Welcome, {user?.name || "User"} 👋</Text>

        
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
              alert("Change profile coming soon!");
            }}
          >
            <Text style={styles.dropdownItem}>Change Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
              navigation.replace("Login");
            }}
          >
            <Text style={[styles.dropdownItem, styles.logoutText]}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={[styles.cardContainer, { backgroundColor: cardColor }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>BonPay Balance</Text>
          <Image source={require("../assets/image.png")} style={styles.cardLogo} />
        </View>

        <Text style={styles.cardAmount}>{balance}</Text>

        <View style={styles.cardFooter}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() =>
              navigation.navigate("CardDetails", {
                user,
                balance,
                onColorChange: (color) => setCardColor(color),
              })
            }
          >
            <Text style={styles.cardButtonText}>View Full Details</Text>
          </TouchableOpacity>
          <Text style={styles.visa}>Visa</Text>
        </View>
      </View>

     
          <View style={styles.actionsRow}>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => navigation.navigate("Send", { user })}
      >
        <Text style={styles.actionText}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Receive", { user })}
      >
        <Text style={styles.actionText}>Receive</Text>
      </TouchableOpacity>
    </View>


    <View style={styles.actionsRow}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("History", {user})}
      >
        <Text style={styles.actionText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate("Support")}
      >
        <Text style={styles.actionText}>Support</Text>
      </TouchableOpacity>
    </View>

   
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <TouchableOpacity
        style={[styles.actionButton, { width: 140 }]}
        onPress={() => navigation.navigate("Scan", { user })}
      >
        <Text style={styles.actionText}>Scan</Text>
      </TouchableOpacity>
    </View>
     
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      {history.length === 0 && (
        <Text style={styles.noHistory}>No transactions yet.</Text>
      )}

      {history.slice(0, 3).map((item, i) => {
        const senderId = item.sender_id ?? item.senderId;
        const isSent = senderId === userId;
        const icon = isSent ? "↗" : "↙";

        return (
          <View key={i} style={styles.transactionCard}>
            <Text style={styles.transactionText}>
              {icon} {isSent ? "Sent" : "Received"} {item.amount} USD
            </Text>
            <Text style={styles.transactionDate}>{item.created_at}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}