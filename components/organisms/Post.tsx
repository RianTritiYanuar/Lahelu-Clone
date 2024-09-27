import React from "react";
import { View, StyleSheet } from "react-native";
import ImageMeme from "@/components/atoms/ImageMeme";
import PostHeader from "@/components/molecules/PostHeader";
import PostFooter from "@/components/molecules/PostFooter";
import { Post as PostType } from "@/constants/Types";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader
        username={post.username}
        formattedCreatedAt={post.createdAt}
        avatarImageURL={post.avatarImageURL}
        caption={post.caption}
      />
      <ImageMeme imageURL={post.imageURL} />
      <PostFooter
        tags={post.tags}
        upVotes={post.upVotes}
        comments={post.comments}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: { backgroundColor: "white", marginBottom: 6 },
});
