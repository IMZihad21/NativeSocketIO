import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Root from "@socketapp/ChatUI";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Root />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
