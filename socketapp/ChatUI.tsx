import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import TitleBar from "@socketapp/components/TitleBar";
import ChatList from "@socketapp/components/ChatList";
import ChatInput from "./components/ChatInput";
import { io } from "socket.io-client";
let socket: any;

export interface MessageType {
  msg: string;
  sender?: string;
  userId?: string;
}

const ChatUI: React.FC = () => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setIsLoading(true);
    socket = io("http://13.51.225.77", {
      path: "/socketio/api/socket",
    });

    socket.on("updateMessage", (msg: MessageType) => {
      setMessages((messages: MessageType[]) => [...messages, msg]);
    });

    socket.on("newMember", (msg: MessageType) => {
      setMessages((messages: MessageType[]) => [...messages, msg]);
    });

    socket.on("exitMember", (msg: MessageType) => {
      setMessages((messages: MessageType[]) => [...messages, msg]);
    });

    setIsLoading(false);
    // Clean up the socket connection when the component unmountss
    return () => socket.disconnect();
  }, []);

  const sendMsg = (message: string) => {
    const payload: MessageType = {
      msg: message,
      sender: socket?.id,
    };
    socket.emit("message", payload, (msg: MessageType) => {
      setMessages((messages: MessageType[]) => [...messages, msg]);
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#707070" />
      ) : (
        <>
          <TitleBar />
          <ChatList
            messages={messages}
            isLoading={isLoading}
            userID={socket?.id}
          />
          <ChatInput sendMsg={sendMsg} />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatUI;
