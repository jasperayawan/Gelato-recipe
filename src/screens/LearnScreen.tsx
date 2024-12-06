import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TutorialList from '../components/learn/TutorialList';
import HistorySection from '../components/learn/HistorySection';
import TipsSection from '../components/learn/TipsSection';

const LearnScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TutorialList />
      <HistorySection />
      <TipsSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default LearnScreen;