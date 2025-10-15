import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo-vert.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.schoolNameContainer}>
          <Text style={styles.schoolName}>Student Card App</Text>
          
          <Text style={styles.schoolName}>EMSI CENTRE</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>HABBACHI</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>Yazid</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    gap: 20, 
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },

  logo: {
    width: 100,
    height: 100,
  },

  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
  },

  info: {
    alignItems: 'flex-start',
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#1d1923ff',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#3969d0ff',
    fontWeight: 'bold',
  },
  
  
});