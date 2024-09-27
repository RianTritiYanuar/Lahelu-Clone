/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { TabView } from "react-native-tab-view";
import { FlashList } from "@shopify/flash-list";
import Post from "@/components/organisms/Post";
import { Colors } from "@/constants/Colors";
import { Post as PostType } from "@/constants/Types";

interface Props {
  loading: boolean;
  posts: PostType[];
  onScrollBeginDrag?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onEndReached?: () => void;
}

const MemeTabView: React.FC<Props> = ({
  loading,
  posts,
  onScrollBeginDrag,
  onEndReached,
}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "fresh", title: "Fresh" },
    { key: "trending", title: "Trending" },
  ]);

  const HomeRoute = () => (
    <FlashList
      data={posts}
      estimatedItemSize={50}
      keyExtractor={(item) => {
        return item.id.toString();
      }}
      renderItem={({ item }) => (
        <Post key={`${item.id}-${item.username}`} post={item} />
      )}
      onScrollBeginDrag={onScrollBeginDrag}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() =>
        loading && (
          <ActivityIndicator
            color={Colors.tint}
            style={{ marginVertical: 6 }}
          />
        )
      }
    />
  );

  const BlankRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  );

  const renderTabBar = (props: any) => {
    return (
      <View style={styles.container}>
        {props.navigationState.routes.map((route, i) => {
          const isActive = index === i;
          const textColor = isActive ? Colors.tint : Colors.text;
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabContainer}
              onPress={() => setIndex(i)}
            >
              <Text style={[styles.title, { color: textColor }]}>
                {route.title}
              </Text>
              {isActive && <View style={styles.underline} />}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => {
        switch (route.key) {
          case "home":
            return HomeRoute();
          case "fresh":
            return BlankRoute();
          case "trending":
            return BlankRoute();
        }
      }}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      swipeEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.background,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.gray,
  },
  tabContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
  },
  title: { fontSize: 12, fontWeight: "700" },
  underline: {
    height: 2,
    backgroundColor: Colors.tint,
    width: "100%",
    marginTop: 10,
  },
});

export default MemeTabView;
