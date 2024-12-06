import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

interface RatingProps {
  value: number;
  size?: number;
  readonly?: boolean;
  onRate?: (rating: number) => void;
}

export const Rating = ({ value, size = 20, readonly = false, onRate }: RatingProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      {stars.map((star) => (
        <IconButton
          key={star}
          icon={star <= value ? 'star' : 'star-outline'}
          size={size}
          iconColor={star <= value ? '#FFD700' : '#999'}
          onPress={() => !readonly && onRate?.(star)}
          disabled={readonly}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});