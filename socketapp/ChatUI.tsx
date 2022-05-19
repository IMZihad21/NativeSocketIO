import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import TitleBar from "@socketapp/components/TitleBar";

const ChatUI = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <TitleBar />
      {isLoading ? (
        <View style={styles.centerAlign}>
          <ActivityIndicator size="large" color="#707070" />
        </View>
      ) : (
        <Text>Hello World</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerAlign: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatUI;
