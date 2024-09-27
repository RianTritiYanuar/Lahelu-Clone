/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TouchableOpacity, StyleSheet, StyleProp } from "react-native";
import { Colors } from "@/constants/Colors";

interface Props {
  children: React.ReactNode | React.ReactElement;
  style?: StyleProp<any>;
  onPress?: (e: any) => void;
}

const BaseButton: React.FC<Props> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.background,
  },
});
