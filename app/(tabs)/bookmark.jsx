import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full px-4 my-6">
      <Text className="text-3xl font-psemibold text-white">Bookmark</Text>
    </SafeAreaView>
  );
};

export default Bookmark;
