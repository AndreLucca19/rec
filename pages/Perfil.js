import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Perfil = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Botão de Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#000" />
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            {/* Detalhes do Perfil */}
            <Image 
                source={{ uri: 'https://avatars.githubusercontent.com/u/157771933?v=4' }} 
                style={styles.profileImage} 
            />
            <Text style={styles.name}>Nome do Usuário</Text>
            <Text style={styles.description}>
                Esta é uma breve descrição sobre o usuário. Aqui você pode adicionar informações interessantes ou relevantes.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#000',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
});

export default Perfil;