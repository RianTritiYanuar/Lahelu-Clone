/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import BaseButton from "@/components/atoms/BaseButton";
import Icon from "@/components/atoms/Icon";

interface Props {
  type: string;
  label: string;
  onPress?: (e: any) => void;
}

const TagButton: React.FC<Props> = ({ type, label, onPress }) => {
  const isDonate = type === "donate";
  const color = isDonate ? Colors.background : Colors.text;
  const backgroundColor = isDonate ? Colors.yellow : Colors.background;
  const borderColor = isDonate ? Colors.yellow : Colors.gray;
  const paddingVertical = Platform.OS === "ios" ? 4 : 2;

  return (
    <BaseButton
      onPress={onPress}
      style={[
        styles.container,
        {
          paddingVertical: paddingVertical,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      {isDonate ? (
        <Icon
          name={"logo-bitcoin"}
          size={16}
          color={color}
          style={styles.icon}
        />
      ) : (
        <Text style={styles.hashtag}>#</Text>
      )}
      <Text
        style={[
          styles.text,
          {
            color: color,
          },
        ]}
      >
        {label}
      </Text>
    </BaseButton>
  );
};

export default TagButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    alignItems: "center",
  },
  icon: { marginRight: 4 },
  hashtag: { fontWeight: "700", marginRight: 4 },
  text: {
    fontSize: 12,
    fontWeight: "700",
  },
});
