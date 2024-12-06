import { Recipe } from '../types';

// Temporary mock data until we integrate with a backend
const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Pistachio Gelato',
    description: 'Authentic Italian pistachio gelato made with premium Sicilian pistachios',
    category: 'Nuts',
    difficultyLevel: 'intermediate',
    dietaryRestrictions: [],
    ingredients: [
      { name: 'Pistachios', amount: 200, unit: 'g' },
      { name: 'Milk', amount: 500, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
    ],
    instructions: [
      { step: 1, description: 'Toast and grind pistachios' },
      { step: 2, description: 'Heat milk and cream' },
    ],
    prepTime: 30,
    churnTime: 25,
    servings: 6,
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 22,
      fat: 18,
      sugar: 20,
    },
    images: ['https://example.com/pistachio.jpg'],
    rating: 4.8,
    reviews: [],
    author: 'Gelato Master',
    isTraditional: true,
  },
];

export const getRecipes = async (): Promise<Recipe[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRecipes), 1000);
  });
};