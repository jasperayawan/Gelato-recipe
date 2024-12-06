import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Text, Button } from 'react-native-paper';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={{ uri: 'https://example.com/user-avatar.jpg' }}
        style={styles.avatar}
      />
      <Title style={styles.name}>John Doe</Title>
      <Text style={styles.bio}>Gelato enthusiast and home chef</Text>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Recipes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>234</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>456</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>
      <Button mode="contained" style={styles.editButton}>
        Edit Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatar: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    color: '#666',
    marginVertical: 8,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
  },
  editButton: {
    marginTop: 16,
  },
});

export default UserProfile;