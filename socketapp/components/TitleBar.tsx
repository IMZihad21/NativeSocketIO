import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const TitleBar = ({ roomName, setRoomName, setModalVisible }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Socket Chat!</Text>
      <Pressable
        style={styles.sendBtn}
        onPress={() => {
          roomName ? setRoomName(false) : setModalVisible(true);
        }}
      >
        <Text style={styles.sendBtnText}>
          {roomName ? `Leave #${roomName}` : "Join Room"}
        </Text>
      </Pressable>
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
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  sendBtn: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnText: {
    color: "#3f50b5",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TitleBar;
