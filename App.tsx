import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Root from "@socketapp/ChatUI";

export default function App() {
  return (
    <View style={styles.container}>
      <Root />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
