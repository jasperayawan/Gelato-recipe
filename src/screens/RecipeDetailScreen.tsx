import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Chip, List, Divider } from 'react-native-paper';
import { Rating } from '../components/common/Rating';
import { DifficultyBadge } from '../components/common/DifficultyBadge';
import { formatTime } from '../utils/formatters';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: recipe.images[0] }} style={styles.image} />
        <Card.Content>
          <Text style={styles.title}>{recipe.name}</Text>
          <View style={styles.ratingContainer}>
            <Rating value={recipe.rating} readonly size={20} />
            <Text style={styles.ratingText}>{recipe.rating.toFixed(1)}</Text>
          </View>
          
          <View style={styles.badges}>
            <DifficultyBadge level={recipe.difficultyLevel} />
            {recipe.dietaryRestrictions.map((restriction) => (
              <Chip key={restriction} style={styles.chip}>{restriction}</Chip>
            ))}
          </View>

          <Text style={styles.description}>{recipe.description}</Text>

          <View style={styles.timeInfo}>
            <Text style={styles.timeText}>Prep Time: {formatTime(recipe.prepTime)}</Text>
            <Text style={styles.timeText}>Churn Time: {formatTime(recipe.churnTime)}</Text>
            <Text style={styles.timeText}>Servings: {recipe.servings}</Text>
          </View>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <List.Item
              key={index}
              title={`${ingredient.amount}${ingredient.unit} ${ingredient.name}`}
              left={props => <List.Icon {...props} icon="circle-small" />}
            />
          ))}

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.instructions.map((instruction) => (
            <List.Item
              key={instruction.step}
              title={instruction.description}
              left={props => (
                <View style={styles.stepNumber}>
                  <Text>{instruction.step}</Text>
                </View>
              )}
              style={styles.instruction}
            />
          ))}

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Nutrition Information</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.calories}</Text>
              <Text style={styles.nutritionLabel}>Calories</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.protein}g</Text>
              <Text style={styles.nutritionLabel}>Protein</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.carbs}g</Text>
              <Text style={styles.nutritionLabel}>Carbs</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.fat}g</Text>
              <Text style={styles.nutritionLabel}>Fat</Text>
            </View>
          </View>
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
  image: {
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#666',
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeText: {
    color: '#666',
  },
  divider: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instruction: {
    marginBottom: 8,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  nutritionItem: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 16,
  },
  nutritionValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default RecipeDetailScreen;