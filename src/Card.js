import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default Card = ({ name, onPress, isFlipped }) => {
  return (
    <View>
      {isFlipped ? (
        <Text>{name}</Text>
      ) : (
        <Image style={styles.card} source={require("./blackCardBack.jpg")} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 168,
  },
});
