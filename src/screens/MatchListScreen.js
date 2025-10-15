import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const matchesData = [
  {
    id: '1',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    date: '2025-10-20',
    time: '20:45',
    venue: 'Santiago Bernabéu',
    price: '150€',
    availableSeats: 250
  },
  {
    id: '2',
    homeTeam: 'PSG',
    awayTeam: 'Manchester City',
    date: '2025-10-25',
    time: '21:00',
    venue: 'Parc des Princes',
    price: '130€',
    availableSeats: 180
  },
];

const MatchCard = ({ match, onPress }) => (
  <TouchableOpacity 
    style={styles.matchCard}
    onPress={onPress}
  >
    <Text style={styles.matchTitle}>{match.homeTeam} vs {match.awayTeam}</Text>
    <Text style={styles.matchInfo}>{match.date} - {match.time}</Text>
    <Text style={styles.matchVenue}>{match.venue}</Text>
    <Text style={styles.matchPrice}>Prix: {match.price}</Text>
    <Text style={styles.seatsAvailable}>Places disponibles: {match.availableSeats}</Text>
  </TouchableOpacity>
);

export default function MatchListScreen({ navigation }) {
  const handleMatchPress = (match) => {
    navigation.navigate('MatchDetails', { match });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={matchesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MatchCard
            match={item}
            onPress={() => handleMatchPress(item)}
          />
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 10,
  },
  matchCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchInfo: {
    fontSize: 16,
    color: '#666',
  },
  matchVenue: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  matchPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 5,
  },
  seatsAvailable: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 5,
  },
});