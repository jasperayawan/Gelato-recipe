import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');

export const FeaturedRecipes = () => {
  const featuredRecipes = [
    {
      id: '1',
      name: 'Classic Pistachio',
      image: 'https://example.com/pistachio.jpg',
      difficulty: 'intermediate',
    },
    {
      id: '2',
      name: 'Dark Chocolate',
      image: 'https://example.com/chocolate.jpg',
      difficulty: 'beginner',
    },
    {
      id: '3',
      name: 'Stracciatella',
      image: 'https://example.com/stracciatella.jpg',
      difficulty: 'advanced',
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {featuredRecipes.map((recipe) => (
        <Card key={recipe.id} style={styles.card}>
          <Card.Cover source={{ uri: recipe.image }} style={styles.image} />
          <Card.Content>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.difficulty}>{recipe.difficulty}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  card: {
    width: width * 0.7,
    marginRight: 16,
    elevation: 4,
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  difficulty: {
    color: '#666',
    marginTop: 4,
  },
});