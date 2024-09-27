import React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import HomeHeader from "@/components/molecules/AppBar";
import MemeTabView from "@/components/organisms/MemeTabView";
import { Post } from "@/constants/Types";

interface Props {
  loading: boolean;
  posts: Post[];
  onScrollBeginDrag?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onEndReached?: () => void;
}

const HomeTemplate: React.FC<Props> = ({
  loading,
  posts,
  onScrollBeginDrag,
  onEndReached,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <MemeTabView
        loading={loading}
        posts={posts}
        onScrollBeginDrag={onScrollBeginDrag}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
};

export default HomeTemplate;

const styles = StyleSheet.create({ container: { flex: 1 } });
