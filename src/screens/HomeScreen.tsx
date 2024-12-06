import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Searchbar } from 'react-native-paper';
import { FeaturedRecipes } from '../components/FeaturedRecipes';
import { CategoryGrid } from '../components/CategoryGrid';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        placeholder="Search recipes..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />

      <Text style={styles.sectionTitle}>Featured Recipes</Text>
      <FeaturedRecipes />

      <Text style={styles.sectionTitle}>Categories</Text>
      <CategoryGrid />

      <Card style={styles.tipCard}>
        <Card.Content>
          <Text style={styles.tipTitle}>Tip of the Day</Text>
          <Text>For the smoothest gelato, ensure your base is properly chilled before churning.</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 16,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    color: '#2c3e50',
  },
  tipCard: {
    margin: 16,
    backgroundColor: '#fff3e0',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ff6b6b',
  },
});

export default HomeScreen;