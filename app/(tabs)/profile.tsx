// app/(tabs)/profile.tsx - Profile/Registration Screen
import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';

export default function ProfileScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Registration data:', { email, password, lastName, firstName });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ThemedView style={styles.header}>
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.logo}
                />
                <ThemedText style={styles.headerTitle}>FirstMobileApp</ThemedText>
            </ThemedView>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ThemedText style={styles.screenTitle}>Реєстрація</ThemedText>

                <ThemedView style={styles.form}>
                    <ThemedText style={styles.label}>Електронна пошта</ThemedText>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <ThemedText style={styles.label}>Пароль</ThemedText>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <ThemedText style={styles.label}>Пароль (ще раз)</ThemedText>
                    <TextInput
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <ThemedText style={styles.label}>Прізвище</ThemedText>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                    />

                    <ThemedText style={styles.label}>Ім'я</ThemedText>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <ThemedText style={styles.buttonText}>Зареєструватися</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ScrollView>

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
    scrollContainer: {
        flexGrow: 1,
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    form: {
        padding: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    footer: {
        padding: 10,
        textAlign: 'center',
        color: '#888',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
});