export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: string;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  dietaryRestrictions: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  prepTime: number;
  churnTime: number;
  servings: number;
  nutrition: NutritionInfo;
  images: string[];
  rating: number;
  reviews: Review[];
  author: string;
  isTraditional: boolean;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Instruction {
  step: number;
  description: string;
  image?: string;
  video?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface User {
  id: string;
  username: string;
  favorites: string[];
  collections: Collection[];
}