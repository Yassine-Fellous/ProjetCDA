import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [message, setMessage] = useState("Chargement...");
  
  useEffect(() => {
    fetch("http://192.168.1.32:8000/") // Remplace l'IP si besoin
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => {
      console.error("Erreur de connexion au backend :", error);
      setMessage("Erreur de connexion !");
    });
  }, []);
  
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      <Text style={{ fontSize: 24 }}>{message}</Text>
      <View style={{ marginTop: 20, gap: 10 }}>
        <TouchableOpacity 
          style={{
            backgroundColor: "#007BFF",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
            width: 200
          }}
          onPress={() => console.log("Connexion")}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            backgroundColor: "#28A745",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
            width: 200
          }}
          onPress={() => console.log("Inscription")}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
