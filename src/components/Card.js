import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';


export default function Cards(props) {
    const {characters } = props;

    const goToPersonaje = () =>{
      props.navigation.navigate('InformationRM', { characters })
    }
  return (
    <TouchableOpacity onPress={goToPersonaje}>
      <Card.Title
        title={characters.name}
        subtitle={characters.species}
        titleStyle={{ fontSize: 18}}
        left={(props) => (
          <Avatar.Image
            source={{ uri: characters.image }}
            style={{ width: 380, height: 64 }}
    />
  )}
     right={(props) => (
       <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
  )}
  style={{
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}
/>

    </TouchableOpacity>
  )
}