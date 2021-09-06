import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../shared/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SectionTitle = ({ align, title,color }) => {
  return (
    <View style={{ marginVertical: 10,alignItems:"center",width:'100%' }}>
      <Text style={[globalStyles[align ? align : "textCenter"], styles.title,{color: color ? color : '#000'}]}>
        {title}
      </Text>
      <MaterialCommunityIcons
        style={[globalStyles[align ? align : "textCenter"]]}
        name="ray-start-end"
        size={24}
        color={color ? color : '#000'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "nunito-black",
    fontSize: 24,
    letterSpacing: 1
  }
});

export default SectionTitle;
