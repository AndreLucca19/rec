import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Card({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.placeholder} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 150,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10,
    },
    placeholder: {
        flex: 1,
        backgroundColor: '#ccc',
        borderRadius: 8,
    },
});