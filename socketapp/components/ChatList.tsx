import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatList = () => {
  const [messages, setMessages] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: "Hello World",
          user: {
            _id: 1,
            name: "John Doe",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          id: 2,
          text: "Hello World",
          user: {
            _id: 2,
            name: "Jane Doe",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.centerAlign}>
          <ActivityIndicator size="large" color="#707070" />
        </View>
      ) : (
        messages.map((message: any) => (
          <View key={message.id} style={styles.messageContainer}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centerAlign: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  messageText: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ChatList;
