import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyData from "../../components/EmptyData";
import { useState } from "react";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-psemibold">Efe</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-9 h-10"
                />
              </View>
            </View>
            <SearchInput placeholder="Search for a video topic" />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Trending Videos
              </Text>
              <Trending posts={[{ id: 10 }, { id: 20 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyData
            title="No Videos Found"
            subtitle="Be the first to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </SafeAreaView>
  );
};

export default Home;
