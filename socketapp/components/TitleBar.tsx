import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export class TitleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Simple Chat App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f50b5",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#70707070",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default TitleBar;
