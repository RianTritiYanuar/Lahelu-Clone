import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Avatar from "@/components/atoms/Avatar";
import Icon from "@/components/atoms/Icon";

interface Props {
  username: string;
  avatarImageURL: string;
  formattedCreatedAt: string;
  caption: string;
}

const PostHeader: React.FC<Props> = ({
  username,
  avatarImageURL,
  formattedCreatedAt,
  caption,
}) => {
  return (
    <View style={styles.container}>
      {/* Username Row */}
      <View style={styles.firstRowContainer}>
        <View style={styles.usernameContainer}>
          <Avatar style={styles.avatar} imageURL={avatarImageURL} />
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.formattedCreatedAt}>• {formattedCreatedAt}</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Icon name="ellipsis-horizontal" size={18} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Caption Row */}
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: { padding: 12 },
  firstRowContainer: { flexDirection: "row", marginBottom: 8 },
  usernameContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: { marginRight: 6 },
  username: { fontSize: 10, fontWeight: "bold", marginRight: 4 },
  formattedCreatedAt: { fontSize: 10, fontWeight: "300" },
  optionsContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  caption: { fontWeight: "700", fontSize: 16 },
});
