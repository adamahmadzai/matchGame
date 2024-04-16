import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Constants } from "expo-constants";
import Card from "./Card";

export default GameBoard = () => {
  const [cards, setCards] = useState([
    [
      { name: "one", isFlipped: false },
      { name: "two", isFlipped: false },
      { name: "three", isFlipped: false },
      { name: "four", isFlipped: false },
    ],
    [
      { name: "five", isFlipped: false },
      { name: "six", isFlipped: false },
      { name: "seven", isFlipped: false },
      { name: "eight", isFlipped: false },
    ],
    [
      { name: "1", isFlipped: false },
      { name: "2", isFlipped: false },
      { name: "3", isFlipped: false },
      { name: "4", isFlipped: false },
    ],
    [
      { name: "5", isFlipped: false },
      { name: "6", isFlipped: false },
      { name: "7", isFlipped: false },
      { name: "8", isFlipped: false },
    ],
  ]);
  const handleFlip = (i, j) => {
    let copyOfCards = [...cards];
    copyOfCards[i][j].isFlipped = !copyOfCards[i][j].isFlipped;
    setCards(copyOfCards);
  };

  return (
    <>
      {cards.map((row, i) => {
        return (
          <View key={i} style={styles.row}>
            {row.map((cardVal, j) => {
              return (
                <TouchableOpacity
                  key={j}
                  style={styles.card}
                  onPress={() => handleFlip(i, j)}
                  value={cardVal.name}
                >
                  <Card value={cardVal.name} isFlipped={cardVal.isFlipped} />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
  },
  card: {
    backgroundColor: "cornsilk",
    flex: 1,
    margin: 3,
  },
});
