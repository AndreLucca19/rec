import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';
import TopRatedCard from '../components/TopRatedCard';

export default function Home({ navigation }) {
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} // Adiciona espaço extra no final
             // Garante que toques no teclado não bloqueiem a rolagem
                >
                    {/* Cabeçalho */}
                    <View style={styles.header}>
                    <Text style={styles.title}>Movies and Series</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Filme')}>
                        <Icon name="movie" size={28} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Icon name="person" size={28} color="#000" />
                        </TouchableOpacity>
                    </View>
                    </View>

                    {/* Barra de Pesquisa */}
            <TextInput style={styles.searchBar} placeholder="Search" />

            {/* Seção Horizontal */}
            <Text style={styles.sectionTitle}>Popular Movies</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                style={styles.horizontalScroll}
                contentContainerStyle={{ paddingHorizontal: 10 }} // Adiciona espaçamento nas laterais
            >
                <Card imageUrl="https://via.placeholder.com/150" title="Movie 1" />
                <Card imageUrl="https://via.placeholder.com/150" title="Movie 2" />
                <Card imageUrl="https://via.placeholder.com/150" title="Movie 3" />
                <Card imageUrl="https://via.placeholder.com/150" title="Movie 4" />
                <Card imageUrl="https://via.placeholder.com/150" title="Movie 5" />
            </ScrollView>

            {/* Seção Vertical */}
            <Text style={styles.sectionTitle}>Top Rated Movies</Text>
            <View style={styles.cardContainer}>
                <TopRatedCard imageUrl="https://via.placeholder.com/150" title="Top Movie 1" />
                <TopRatedCard imageUrl="https://via.placeholder.com/150" title="Top Movie 2" />
                <TopRatedCard imageUrl="https://via.placeholder.com/150" title="Top Movie 3" />
                <TopRatedCard imageUrl="https://via.placeholder.com/150" title="Top Movie 4" />
                <TopRatedCard imageUrl="https://via.placeholder.com/150" title="Top Movie 5" />
                <TopRatedCard imageUrl="https://via.placeholder.com/150" title="Top Movie 6" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 100, // Espaço extra no final
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchBar: {
        height: 35,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    horizontalScroll: {
        marginBottom: 0,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite que os cards quebrem para a próxima linha
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Garante alinhamento correto
        paddingHorizontal: 10, // Adiciona espaçamento nas laterais
    },
});
