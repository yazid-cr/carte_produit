import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function BookingConfirmationScreen({ route, navigation }) {
  const { match, seats, totalPrice } = route.params;

  const handleDone = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Réservation Confirmée!</Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.matchTitle}>{match.homeTeam} vs {match.awayTeam}</Text>
          <Text style={styles.detail}>Date: {match.date}</Text>
          <Text style={styles.detail}>Heure: {match.time}</Text>
          <Text style={styles.detail}>Lieu: {match.venue}</Text>
          <Text style={styles.detail}>Nombre de places: {seats}</Text>
          <Text style={styles.totalPrice}>Total payé: {totalPrice}€</Text>
        </View>

        <Text style={styles.reference}>
          Référence de réservation: {Math.random().toString(36).substring(7).toUpperCase()}
        </Text>

        <TouchableOpacity 
          style={styles.doneButton}
          onPress={handleDone}
        >
          <Text style={styles.doneButtonText}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  matchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2196F3',
  },
  reference: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});