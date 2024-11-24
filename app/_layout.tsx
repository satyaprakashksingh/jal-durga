import {Stack} from "expo-router";
import {LABELS} from "@/constants/common";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FEF7FF",
        },
        headerTintColor: "#1D1B20",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{title: LABELS.DASHBOARD}} />
      <Stack.Screen name="/about" options={{title: LABELS.ABOUT}} />
    </Stack>
  );
}
