import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSearchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";

const Search = () => {
  const { query } = useLocalSearchParams();

  const { data: posts, refetch } = useAppwrite(() => getSearchPosts(query));

  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="Text-3xl text-white">{query}</Text>
    </SafeAreaView>
  );
};

export default Search;
