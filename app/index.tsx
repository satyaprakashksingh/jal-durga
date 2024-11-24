import React from "react";
import {StyleSheet, Text, ScrollView, Alert} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {FloatingAction} from "react-native-floating-action";
import { useRouter } from 'expo-router';


const App = () => {
    const router = useRouter();
  return (<SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.scrollView}></ScrollView>
      <FloatingAction
        actions={[]}
        onPressMain={() => {
            router.push('/newDeviceRegistration')
        }}
        showBackground={false}
        animated={false}
      />
    </SafeAreaView>
  </SafeAreaProvider>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFD5EC",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F2FA",
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default App;
