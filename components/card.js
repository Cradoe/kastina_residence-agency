import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
      <View style={styles.cardContent}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#ccc",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  },
  cardContent: {}
});
export default Card;
