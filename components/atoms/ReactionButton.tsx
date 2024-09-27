/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { StyleProp, StyleSheet, Text } from "react-native";
import BaseButton from "@/components/atoms/BaseButton";
import Icon from "@/components/atoms/Icon";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const getBorderRadius = (rounded?: string) => {
  switch (rounded) {
    case "right":
      return { borderTopRightRadius: 6, borderBottomRightRadius: 6 };
    case "left":
      return { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 };
    default:
      return { borderRadius: 6 };
  }
};

interface Props {
  rounded?: "right" | "left" | "all";
  icon?: keyof typeof Ionicons.glyphMap;
  label?: string | null | undefined;
  color?: string;
  iconColor?: string;
  labelColor?: string;
  style?: StyleProp<any>;
  onPress?: (e: any) => void;
}

const ReactionButton: React.FC<Props> = ({
  rounded,
  icon,
  label,
  color,
  iconColor,
  labelColor,
  style,
  onPress,
}) => {
  const buttonBorderRadius = getBorderRadius(rounded);
  return (
    <BaseButton
      onPress={onPress}
      style={[
        styles.container,
        buttonBorderRadius,
        style,
        {
          borderColor: color ?? Colors.gray,
          backgroundColor: color ?? Colors.background,
        },
      ]}
    >
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={iconColor ?? Colors.black}
          style={{ marginRight: label ? 4 : 0 }}
        />
      )}
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
    </BaseButton>
  );
};

export default ReactionButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.background,
  },
});
