import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Chip, Searchbar } from 'react-native-paper';

const RecipeFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const categories = ['Fruit', 'Chocolate', 'Nuts', 'Dairy-Free', 'Traditional'];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search recipes..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {categories.map((category) => (
          <Chip
            key={category}
            selected={selectedCategory === category}
            onPress={() => setSelectedCategory(category === selectedCategory ? '' : category)}
            style={styles.chip}
          >
            {category}
          </Chip>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {difficulties.map((difficulty) => (
          <Chip
            key={difficulty}
            selected={selectedDifficulty === difficulty}
            onPress={() => setSelectedDifficulty(difficulty === selectedDifficulty ? '' : difficulty)}
            style={styles.chip}
          >
            {difficulty}
          </Chip>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 8,
  },
  searchBar: {
    margin: 16,
    marginBottom: 8,
  },
  filtersContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  chip: {
    marginRight: 8,
  },
});

export default RecipeFilters;