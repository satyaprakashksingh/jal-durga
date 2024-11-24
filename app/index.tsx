import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {FloatingAction} from "react-native-floating-action";



const App = () => {

  return (<SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* <ScrollView style={styles.scrollView}></ScrollView> */}
      <FloatingAction
        actions={[]}
        onPressMain={() => {
        
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
    color: 'red'
  },
});

export default App;
