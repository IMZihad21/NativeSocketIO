import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const ChatList = ({ messages, isLoading, userID }: any) => {
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
          renderItem={({ item, index }) =>
            item.sender !== "server" ? (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  {
                    backgroundColor:
                      item.sender !== userID ? "#f0f0f0" : "#fff",
                    alignItems:
                      item.sender !== userID ? "flex-start" : "flex-end",
                  },
                ]}
              >
                <Text style={styles.messageText}>{item.msg}</Text>
                <Text style={styles.senderText}>
                  {item.sender !== userID ? item?.sender : "You"}
                </Text>
              </View>
            ) : (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  {
                    backgroundColor: "#70707040",
                    alignItems: "center",
                    marginBottom: 10,
                  },
                ]}
              >
                <Text style={styles.serverText}>{item.msg}</Text>
              </View>
            )
          }
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
  serverText: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default ChatList;
