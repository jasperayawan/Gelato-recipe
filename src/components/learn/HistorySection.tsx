import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HistorySection = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.sectionTitle}>History of Gelato</Title>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>
            Gelato's origins date back to the 16th century in Florence, Italy. The Medici family 
            commissioned famous artist and architect Bernardo Buontalenti to create a special 
            dessert for a grand feast. This led to the creation of the first gelato, 
            marking the beginning of this beloved Italian treat.
          </Paragraph>
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

export default HistorySection;