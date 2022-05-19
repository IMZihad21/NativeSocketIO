import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import TitleBar from "@socketapp/components/TitleBar";
import ChatList from "@socketapp/components/ChatList";

const ChatUI = () => {
  return (
    <View style={styles.container}>
      <TitleBar />
      <ChatList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatUI;
