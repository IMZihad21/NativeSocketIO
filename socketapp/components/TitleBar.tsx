import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simple Chat App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f50b5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
