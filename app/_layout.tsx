import {Stack} from "expo-router";

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
      <Stack.Screen name="index" options={{title: 'Dashboard'}} />
      <Stack.Screen name="/about" options={{title: 'About'}} />
      <Stack.Screen name="/linkDevice" options={{title: 'Link Device', presentation: "formSheet"}}/>
    </Stack>
  );
}
