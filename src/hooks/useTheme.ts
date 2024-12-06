import { useContext } from 'react';
import { Theme } from '@react-navigation/native';
import { theme } from '../theme';

export const useTheme = () => {
  return theme;
};