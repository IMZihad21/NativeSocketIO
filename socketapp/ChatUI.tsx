import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import TitleBar from "@socketapp/components/TitleBar";
import ChatList from "@socketapp/components/ChatList";
import ChatInput from "./components/ChatInput";
import { io } from "socket.io-client";
let socket: any;

const ChatUI: React.FC = () => {
  const [messages, setMessages] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setIsLoading(true);
    socket = io("http://13.51.225.77", {
      path: "/socketio/api/socket",
    });

    socket.on("updateMessage", (msg: { msg: String; userId: Number }) => {
      setMessages((messages: any) => [...messages, msg]);
    });

    socket.on("newMember", (msg: { msg: String }) => {
      setMessages((messages: any) => [...messages, msg]);
    });

    socket.on("exitMember", (msg: { msg: String }) => {
      setMessages((messages: any) => [...messages, msg]);
    });

    setIsLoading(false);
    // Clean up the socket connection when the component unmountss
    return () => socket.disconnect();
  }, []);

  const sendMsg = (message: any) => {
    const payload = {
      msg: message,
      sender: socket?.id,
      userId: socket?.id,
    };
    socket.emit("message", payload, (msg: { msg: String; userId: Number }) => {
      setMessages((messages: any) => [...messages, msg]);
    });
  };

  return (
    <View style={styles.container}>
      <TitleBar />
      <ChatList messages={messages} isLoading={isLoading} />
      <ChatInput sendMsg={sendMsg} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatUI;
