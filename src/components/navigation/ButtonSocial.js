import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import React from "react"
import Color from "../../constants/Colors"

export default function ButtonSocial(props) {
  const { title, imageType, color } = props
  let imageSource
  if (imageType === "facebook") {
    imageSource = require("../../assets/images/facebook.png")
  } else if (imageType === "google") {
    imageSource = require("../../assets/images/google.png")
  } else {
    imageSource = require("../../assets/images/twitter.png")
  }
  const buttonStyles = {
    backgroundColor: color,
  }
  return (
    <TouchableOpacity style={[styles.contentButton, buttonStyles]}>
      <View>
        <Image
          source={imageSource}
          style={[styles.image]}
        />
      </View>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 30,
    heigth: 50,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    color: Color.grisClaro,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
})
