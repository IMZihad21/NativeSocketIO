import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import TitleBar from "@socketapp/components/TitleBar";
import ChatList from "@socketapp/components/ChatList";
import ChatInput from "./components/ChatInput";

const ChatUI = () => {
  return (
    <View style={styles.container}>
      <TitleBar />
      <ChatList />
      <ChatInput />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatUI;
