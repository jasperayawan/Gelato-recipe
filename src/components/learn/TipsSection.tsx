import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, List } from 'react-native-paper';

const TipsSection = () => {
  const tips = [
    'Always use fresh, high-quality ingredients',
    'Chill your base thoroughly before churning',
    'Don\'t over-churn your gelato',
    'Store at the proper temperature (-13°C to -11°C)',
    'Serve at slightly warmer temperature than ice cream',
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.sectionTitle}>Pro Tips</Title>
      <Card style={styles.card}>
        <Card.Content>
          {tips.map((tip, index) => (
            <List.Item
              key={index}
              title={tip}
              left={props => <List.Icon {...props} icon="star" />}
            />
          ))}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    marginHorizontal: 16,
  },
});

export default TipsSection;