import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, List } from 'react-native-paper';

const UserCollections = () => {
  const collections = [
    {
      id: '1',
      name: 'Summer Favorites',
      count: 12,
      icon: 'sun',
    },
    {
      id: '2',
      name: 'Chocolate Variations',
      count: 8,
      icon: 'food',
    },
    {
      id: '3',
      name: 'Quick & Easy',
      count: 5,
      icon: 'clock',
    },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.title}>My Collections</Title>
      {collections.map((collection) => (
        <List.Item
          key={collection.id}
          title={collection.name}
          description={`${collection.count} recipes`}
          left={props => <List.Icon {...props} icon={collection.icon} />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
          style={styles.listItem}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  listItem: {
    paddingHorizontal: 16,
  },
});

export default UserCollections;