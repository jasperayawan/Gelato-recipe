import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import RecipeCard from './RecipeCard';
import { LoadingIndicator } from '../common/LoadingIndicator';
import { useRecipes } from '../../hooks/useRecipes';

const RecipeList = () => {
  const { recipes, loading } = useRecipes();

  if (loading) {
    return <LoadingIndicator message="Loading recipes..." />;
  }

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard
          recipe={item}
          onFavorite={() => {/* Handle favorite */}}
          isFavorite={false}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default RecipeList;