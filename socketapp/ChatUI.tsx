import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import TitleBar from "@socketapp/components/TitleBar";
import ChatList from "@socketapp/components/ChatList";
import ChatInput from "./components/ChatInput";
import { io } from "socket.io-client";
let socket: any;

const ChatUI: React.FC = () => {
  const [messages, setMessages] = React.useState<any[]>([]);
  React.useEffect(() => {
    socket = io("http://13.51.225.77/socketio");

    socket.on("updateMessage", (msg: { msg: String; userId: Number }) => {
      setMessages((messages: any) => [...messages, msg]);
    });

    socket.on("newMember", (msg: { msg: String }) => {
      setMessages((messages: any) => [...messages, msg]);
    });

    socket.on("exitMember", (msg: { msg: String }) => {
      setMessages((messages: any) => [...messages, msg]);
    });

    // Clean up the socket connection when the component unmountss
    return () => socket.disconnect();
  }, []);
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
