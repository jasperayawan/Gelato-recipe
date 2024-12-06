import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UserProfile from '../components/profile/UserProfile';
import SavedRecipes from '../components/profile/SavedRecipes';
import UserCollections from '../components/profile/UserCollections';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <UserProfile />
      <SavedRecipes />
      <UserCollections />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ProfileScreen;