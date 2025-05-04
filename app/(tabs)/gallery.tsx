// app/(tabs)/gallery.tsx - Photo Gallery Screen
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';

// Create a grid layout for the gallery
const galleryItems = Array(10).fill(null).map((_, index) => ({ id: index.toString() }));

// Gallery Item Component
const GalleryItem = () => (
    <ThemedView style={styles.galleryItem}>
    </ThemedView>
);

export default function GalleryScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ThemedView style={styles.header}>
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.logo}
                />
                <ThemedText style={styles.headerTitle}>FirstMobileApp</ThemedText>
            </ThemedView>

            <ThemedText style={styles.screenTitle}>Фотогалерея</ThemedText>

            <FlatList
                data={galleryItems}
                renderItem={({ item }) => <GalleryItem />}
                keyExtractor={item => item.id}
                numColumns={2}
                style={styles.gallery}
                contentContainerStyle={styles.galleryContent}
            />

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
    screenTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    gallery: {
        flex: 1,
    },
    galleryContent: {
        padding: 5,
    },
    galleryItem: {
        flex: 1,
        height: 120,
        margin: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    footer: {
        padding: 10,
        textAlign: 'center',
        color: '#888',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
});