import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Card from "../components/Card"; 

export default function HomeScreen(props) {
    const { characters } = props;
    console.log('Characters', characters);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={characters}
                showsVerticalScrollIndicator={false}
                keyExtractor={(characters) => String(characters.id)} 
                renderItem={({ item }) => <Card characters={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
