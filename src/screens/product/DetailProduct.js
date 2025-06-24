import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailProductScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.id}>ID: {item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  id: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default DetailProductScreen;
