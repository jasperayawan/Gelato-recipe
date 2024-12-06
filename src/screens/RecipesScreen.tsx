import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import RecipeList from '../components/recipes/RecipeList';
import RecipeFilters from '../components/recipes/RecipeFilters';

const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <RecipeFilters />
      <RecipeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default RecipesScreen;