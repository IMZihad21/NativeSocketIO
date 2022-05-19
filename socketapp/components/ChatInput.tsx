import {
  TouchableHighlight,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import React from "react";

const ChatInput = () => {
  const [text, setText] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.msgInput}
        onChangeText={(e) => setText(e)}
        value={text}
        placeholder="Message"
      />
      <TouchableHighlight style={styles.sendBtn} onPress={() => alert(text)}>
        <Text style={styles.sendBtnText}>Send</Text>
      </TouchableHighlight>
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
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sendBtn: {
    height: 60,
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
