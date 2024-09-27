/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Image, StyleProp } from "react-native";

interface Props {
  size?: number;
  imageURL: string;
  style?: StyleProp<any>;
}

const Avatar: React.FC<Props> = ({ size = 24, imageURL, style }) => {
  return (
    <Image
      style={[{ width: size, height: size, borderRadius: 50 }, style]}
      source={{
        uri: imageURL,
      }}
    />
  );
};

export default Avatar;
