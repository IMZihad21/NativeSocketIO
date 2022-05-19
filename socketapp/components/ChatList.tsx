import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const tempMessages = {
  msg: "input",
  sender: "socket?.id",
};

const ChatList = () => {
  const [messages, setMessages] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      new Array(10).fill(tempMessages).forEach((msg) => {
        setMessages((messages: any) => [...messages, msg]);
      });
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
        <FlatList
          data={messages}
          style={{ flexGrow: 0 }}
          keyExtractor={(item) => item.msg}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  styles.messageContainer,
                  {
                    backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#fff",
                    alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                  },
                ]}
              >
                <Text style={styles.messageText}>{item.msg}</Text>
                <Text style={styles.senderText}>{item.sender}</Text>
              </View>
            );
          }}
        />
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
    border: "2px solid #707070",
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
    flex: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 20,
    fontWeight: "500",
  },
  senderText: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default ChatList;
