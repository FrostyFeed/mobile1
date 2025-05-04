// app/(tabs)/index.tsx - Main News Screen
import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';

// Sample news data
const newsData = [
  { id: '1', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '2', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '3', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '4', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '5', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '6', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '7', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
  { id: '8', title: 'Заголовок новини', date: 'Дата новини', shortText: 'Короткий текст новини' },
];

// News Item Component
const NewsItem = ({ }) => (
  <ThemedView style={styles.newsItem}>
    <View style={styles.newsImagePlaceholder}>
      <ThemedText style={styles.placeholderText}>Image</ThemedText>
    </View>
    <View style={styles.newsContent}>
      <ThemedText style={styles.newsTitle}></ThemedText>
      <ThemedText style={styles.newsDate}></ThemedText>
      <ThemedText></ThemedText>
    </View>
  </ThemedView>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.logo}
        />
        <ThemedText style={styles.headerTitle}>FirstMobileApp</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedText style={styles.screenTitle}>Новини</ThemedText>
        <FlatList
          data={newsData}
          renderItem={() => <NewsItem />}
          keyExtractor={item => item.id}
          style={styles.newsList}
        />
      </ThemedView>

      <ThemedText style={styles.footer}>Прізвище ім'я та по-батькові, група</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    position: 'absolute',
    left: 15,
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  newsList: {
    flex: 1,
  },
  newsItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 8,
  },
  newsImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  placeholderText: {
    color: '#888',
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  newsDate: {
    color: '#888',
    fontSize: 12,
    marginVertical: 2,
  },
  footer: {
    padding: 10,
    textAlign: 'center',
    color: '#888',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});