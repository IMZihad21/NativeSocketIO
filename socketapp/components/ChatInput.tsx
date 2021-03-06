import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const ChatInput = ({ sendMsg }: any) => {
  const [text, setText] = React.useState<string>("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim() === "") return;
    sendMsg(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.msgInput}
        blurOnSubmit={false}
        onChangeText={(e) => setText(e)}
        onSubmitEditing={onSubmit}
        value={text}
        keyboardType="default"
        placeholder="Message"
      />
      <Pressable style={styles.sendBtn} onPress={onSubmit}>
        <Text style={styles.sendBtnText}>Send</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  msgInput: {
    height: 50,
    fontSize: 18,
    fontWeight: "600",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sendBtn: {
    height: 50,
    width: 80,
    backgroundColor: "#3f50b5",
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChatInput;
