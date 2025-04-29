import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Filme({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#000" />
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            {/* Imagem do Filme */}
            <Image
                source={{ uri: 'https://via.placeholder.com/300x450' }}
                style={styles.image}
            />

            {/* Detalhes do Filme */}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Título do Filme</Text>
                <Text style={styles.description}>
                    Este é um exemplo de descrição do filme. Aqui você pode adicionar informações sobre a trama, elenco, diretor e outros detalhes relevantes.
                </Text>

                <Text style={styles.info}>Ano: 2025</Text>
                <Text style={styles.info}>Duração: 2h 15min</Text>
                <Text style={styles.info}>Gênero: Ação, Aventura</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#000',
    },
    image: {
        width: '100%',
        height: 450,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        color: '#555',
    },
    info: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
    },
});