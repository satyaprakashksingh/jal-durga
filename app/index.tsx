import React, {useRef, useState} from "react";
import {StyleSheet, ScrollView} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {FloatingAction} from "react-native-floating-action";
import LinkDeviceForm from "@/components/LinkDeviceForm";
import {BottomSheetModal} from '@gorhom/bottom-sheet';



const App = () => {
    const [showBottomSheet, setShowBottomSheet] = useState(false)
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handleAction = ()=>{
        bottomSheetModalRef?.current?.expand()
    }
  return (<SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* <ScrollView style={styles.scrollView}></ScrollView> */}
      <FloatingAction
        actions={[]}
        onPressMain={() => {
            setShowBottomSheet(true)
            }}
        showBackground={false}
        animated={false}
      />
      
      {showBottomSheet && <LinkDeviceForm ref={bottomSheetModalRef}/>}
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
