import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
