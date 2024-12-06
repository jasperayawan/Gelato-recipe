import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Card, Paragraph } from 'react-native-paper';

const SavedRecipes = () => {
  const savedRecipes = [
    {
      id: '1',
      name: 'Dark Chocolate Gelato',
      image: 'https://example.com/chocolate.jpg',
      saved: '2023-11-01',
    },
    {
      id: '2',
      name: 'Strawberry Sorbet',
      image: 'https://example.com/strawberry.jpg',
      saved: '2023-10-28',
    },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Saved Recipes</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {savedRecipes.map((recipe) => (
          <Card key={recipe.id} style={styles.card}>
            <Card.Cover source={{ uri: recipe.image }} />
            <Card.Content>
              <Paragraph>{recipe.name}</Paragraph>
              <Paragraph style={styles.date}>Saved on {recipe.saved}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  title: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    width: 200,
    marginHorizontal: 8,
    marginLeft: 16,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});

export default SavedRecipes;