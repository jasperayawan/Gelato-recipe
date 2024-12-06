import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const CategoryGrid = () => {
  const categories = [
    { name: 'Fruit', icon: 'fruit-cherries', color: '#FF6B6B' },
    { name: 'Chocolate', icon: 'food-croissant', color: '#4ECDC4' },
    { name: 'Nuts', icon: 'peanut', color: '#45B7D1' },
    { name: 'Dairy-Free', icon: 'leaf', color: '#96CEB4' },
    { name: 'Traditional', icon: 'flag', color: '#FFEEAD' },
    { name: 'Special', icon: 'star', color: '#D4A5A5' },
  ];

  return (
    <View style={styles.grid}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={[styles.category, { backgroundColor: category.color }]}
        >
          <MaterialCommunityIcons
            name={category.icon}
            size={32}
            color="white"
          />
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  category: {
    width: '45%',
    aspectRatio: 1,
    margin: '2.5%',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});