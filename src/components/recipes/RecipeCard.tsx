import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Recipe } from '../../types';
import { Rating } from '../common/Rating';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { formatTime } from '../../utils/formatters';

interface RecipeCardProps {
  recipe: Recipe;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

const RecipeCard = ({ recipe, onFavorite, isFavorite = false }: RecipeCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RecipeDetail', { recipe })}
      activeOpacity={0.8}
    >
      <Card style={styles.card}>
        <Card.Cover source={{ uri: recipe.images[0] }} />
        <Card.Content>
          <View style={styles.header}>
            <Text style={styles.title}>{recipe.name}</Text>
            <IconButton
              icon={isFavorite ? 'heart' : 'heart-outline'}
              onPress={onFavorite}
              iconColor={isFavorite ? '#FF6B6B' : '#666'}
            />
          </View>
          <Text style={styles.description}>{recipe.description}</Text>
          <View style={styles.details}>
            <DifficultyBadge level={recipe.difficultyLevel} />
            <Rating value={recipe.rating} readonly size={16} />
          </View>
          <View style={styles.timeInfo}>
            <Text style={styles.time}>
              Prep: {formatTime(recipe.prepTime)}
            </Text>
            <Text style={styles.time}>
              Churn: {formatTime(recipe.churnTime)}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  description: {
    marginVertical: 8,
    color: '#666',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  timeInfo: {
    flexDirection: 'row',
    marginTop: 8,
  },
  time: {
    marginRight: 16,
    color: '#666',
    fontSize: 12,
  },
});

export default RecipeCard;