import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function MatchDetailsScreen({ route, navigation }) {
  const { match } = route.params;
  const [selectedSeats, setSelectedSeats] = useState(0);

  const handleBooking = () => {
    if (selectedSeats === 0) {
      Alert.alert('Erreur', 'Veuillez sélectionner au moins un siège');
      return;
    }
    
    navigation.navigate('BookingConfirmation', {
      match,
      seats: selectedSeats,
      totalPrice: selectedSeats * parseInt(match.price)
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.matchHeader}>
        <Text style={styles.matchTitle}>{match.homeTeam} vs {match.awayTeam}</Text>
        <Text style={styles.matchDate}>{match.date} - {match.time}</Text>
        <Text style={styles.venue}>{match.venue}</Text>
      </View>

      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Détails du Match</Text>
        <Text style={styles.price}>Prix par billet: {match.price}</Text>
        <Text style={styles.availability}>Places disponibles: {match.availableSeats}</Text>
      </View>

      <View style={styles.bookingSection}>
        <Text style={styles.sectionTitle}>Réservation</Text>
        <View style={styles.seatSelector}>
          <TouchableOpacity 
            style={styles.seatButton}
            onPress={() => selectedSeats > 0 && setSelectedSeats(selectedSeats - 1)}
          >
            <Text style={styles.seatButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.seatCount}>{selectedSeats}</Text>
          <TouchableOpacity 
            style={styles.seatButton}
            onPress={() => selectedSeats < match.availableSeats && setSelectedSeats(selectedSeats + 1)}
          >
            <Text style={styles.seatButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>Total: {selectedSeats * parseInt(match.price)}€</Text>
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={handleBooking}
        >
          <Text style={styles.bookButtonText}>Réserver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  matchHeader: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },
  matchTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  matchDate: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  venue: {
    fontSize: 16,
    color: '#fff',
  },
  detailsSection: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 5,
  },
  availability: {
    fontSize: 16,
    color: '#4CAF50',
  },
  bookingSection: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  seatSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  seatButton: {
    backgroundColor: '#2196F3',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  seatCount: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});