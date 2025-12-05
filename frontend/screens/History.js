import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "../styles/historyStyles";
import { getHistory } from "../services/api";

export default function History({ route, navigation }) {
  const { user } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await getHistory(user.id);
      if (error) throw new Error(error);
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const renderItem = ({ item }) => {
    const sent = item.sender === user.name;
    return (
      <View style={styles.item}>
        <Text style={styles.name}>
          {sent ? "To " + item.receiver : "From " + item.sender}
        </Text>
        <Text
          style={[
            styles.amount,
            { color: sent ? "#e53935" : "#43a047" },
          ]}
        >
          {sent ? "-" : "+"}${item.amount}
        </Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingCenter}>
        <ActivityIndicator size="large" />
        <Text>Getting data...</Text>
      </View>
    );
  }

  if (Error) {
    return (
      <View style={styles.loadingCenter}>
        <Text style={styles.errorText}>{Error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Transaction History</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>No transactions yet.</Text>
        }
      />
    </View>
  );
}
