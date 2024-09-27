import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";

interface Props {
  imageURL: string;
}

const ImageMeme: React.FC<Props> = ({ imageURL }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    Image.getSize(imageURL, (width, height) => {
      const aspectRatio = height / width;
      setImageSize({
        width: screenWidth,
        height: screenWidth * aspectRatio,
      });
    });
  }, [imageURL]);

  return (
    <Image
      source={{ uri: imageURL }}
      style={{
        width: imageSize.width,
        height: imageSize.height,
      }}
      resizeMode="contain"
    />
  );
};

export default ImageMeme;
