import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ imageUrl, title }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 120,
        marginRight: 10,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
    },
    title: {
        padding: 5,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});