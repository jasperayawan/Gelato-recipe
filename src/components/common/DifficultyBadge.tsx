import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

interface DifficultyBadgeProps {
  level: 'beginner' | 'intermediate' | 'advanced';
}

const difficultyColors = {
  beginner: '#4CAF50',
  intermediate: '#FF9800',
  advanced: '#F44336',
};

export const DifficultyBadge = ({ level }: DifficultyBadgeProps) => {
  return (
    <Chip
      style={[styles.chip, { backgroundColor: difficultyColors[level] }]}
      textStyle={styles.text}
    >
      {level}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
  },
});