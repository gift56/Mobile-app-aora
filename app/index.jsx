import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="w-full flex items-center justify-center">
      <Text className="text-2xl">Aora</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        Profile
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
