import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TagButton from "@/components/atoms/TagButton";
import ReactionButton from "@/components/atoms/ReactionButton";
import { Comment, Tag } from "@/constants/Types";
import { Colors } from "@/constants/Colors";

interface Props {
  tags: Tag[];
  upVotes: number;
  comments: Comment[];
}

const PostFooter: React.FC<Props> = ({ tags, upVotes, comments }) => {
  return (
    <View style={styles.container}>
      {/* Tags */}
      <FlatList
        horizontal
        data={tags}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        renderItem={({ item, index }) => (
          <View
            key={`${item.label}-${index}`}
            style={styles.tagButtonContainer}
          >
            <TagButton label={item.label} type={item.type} />
          </View>
        )}
      />
      {/* Reaction Buttons */}
      <View style={styles.reactionsContainer}>
        <View style={styles.leftSideReactionContainer}>
          <ReactionButton
            rounded="left"
            color={Colors.tint}
            icon="arrow-up"
            iconColor={Colors.background}
            label={upVotes > 0 ? upVotes?.toString() : null}
            labelColor={Colors.background}
          />
          <ReactionButton
            rounded="right"
            icon="arrow-down"
            style={styles.downVoteStyle}
          />
          <ReactionButton
            icon="chatbox-ellipses-outline"
            label={comments?.length > 0 ? comments?.length?.toString() : null}
          />
        </View>
        <View style={styles.rightSideReactionContainer}>
          <ReactionButton icon="share-social-outline" />
        </View>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: { padding: 12 },
  flatListStyle: { paddingBottom: 12 },
  tagButtonContainer: { marginRight: 6 },
  reactionsContainer: { flexDirection: "row" },
  leftSideReactionContainer: { flex: 2, flexDirection: "row" },
  downVoteStyle: { marginRight: 10 },
  rightSideReactionContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});
