import { ImageBackground } from "react-native";
import React from "react";

const BackgroundImage = (props) => {
  return (
    <ImageBackground
      resizeMode={props.resizeMode ? props.resizeMode : 'cover'}
      style={[
        props.style,
        {
          height: props.height,
          width: null
        }
      ]}
      source={props.uri ? { uri: props.uri } : props.source}
    >
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
