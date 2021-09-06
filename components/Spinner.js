import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, Dimensions } from "react-native";
import { CONSTANTS, globalStyles } from "../shared/global";
const Spinner = ({textContent})=>{
return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={CONSTANTS.primaryColor} />
      {textContent? <Text>{textContent}</Text> : null}
    </View>
)
}
export default Spinner;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0, 0, 0, 0.25)",
        position:"absolute",
        top:0,
        left:0,
        flex: 1,
        height:Dimensions.get("screen").height,
        width:Dimensions.get("screen").width,
        justifyContent: "center"     
    }
})