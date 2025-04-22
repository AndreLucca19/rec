import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function TopRatedCard({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}></Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        height: '120%', 
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardTitle: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});