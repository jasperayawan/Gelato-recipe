import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const TutorialList = () => {
  const tutorials = [
    {
      id: '1',
      title: 'Basic Gelato Base',
      description: 'Learn the fundamentals of creating a perfect gelato base.',
      image: 'https://example.com/gelato-base.jpg',
    },
    {
      id: '2',
      title: 'Proper Churning Techniques',
      description: 'Master the art of churning for the perfect texture.',
      image: 'https://example.com/churning.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.sectionTitle}>Tutorials</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} style={styles.card}>
            <Card.Cover source={{ uri: tutorial.image }} />
            <Card.Content>
              <Title>{tutorial.title}</Title>
              <Paragraph>{tutorial.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
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
    width: 300,
    marginHorizontal: 8,
    marginLeft: 16,
  },
});

export default TutorialList;