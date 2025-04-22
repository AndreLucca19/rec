import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';
import TopRatedCard from '../components/TopRatedCard'; 

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            {/* Header with Icon */}
            <View style={styles.header}>
                <Text style={styles.title}>Movies</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Filme')}>
                    <Icon name="movie" size={28} color="#000" />
                </TouchableOpacity>
            </View>

            <TextInput style={styles.searchBar} placeholder="Search" />

            {/* Popular Movies */}
            <Text style={styles.sectionTitle}>Popular Movies</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.horizontalScroll}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>

            {/* Top Rated Movies */}
            <Text style={styles.sectionTitle}>Top Rated Movies</Text>
            <View style={styles.cardContainer}>
                <TopRatedCard />
                <TopRatedCard />
                <TopRatedCard />
                <TopRatedCard />
                <TopRatedCard />
                <TopRatedCard />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    horizontalScroll: {
        marginBottom: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
