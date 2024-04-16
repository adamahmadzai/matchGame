import * as React from "react"
import { Text, View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import GameBoard from "./src/GameBoard"



export default function App() {
  return (
    
      <View style={styles.container}>
        <Text style = {styles.text}>Match Game</Text>
        <Text style = {styles.instructions}>Flip cards to find matching cards</Text>
        <Text style = {styles.instructions}>2 points for a match, -1 for a miss</Text>
        <GameBoard/>
        <Text style = {styles.text}>Score Area</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
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
  text: {
    margin: 1,
    fontWeight: "bold",
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    flex: 0.2,
    paddingTop: 15,
  },
  instructions:{
    textAlign: "center",
  },
});
