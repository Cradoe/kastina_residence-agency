import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Card from "./card";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { globalStyles } from "../shared/global";
const LoggedUserHomeSectionLink = ({ navigation, userDetails }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Account", userDetails)}
        style={styles.smallCardContainer}
      >
        <Card
          style={[
            styles.smallCard,
            {
              backgroundColor: "skyblue"
            }
          ]}
        >
          <FontAwesome name="user" size={35} color="#333" />
          <Text style={styles.itemTitle}>Profile</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CardStatus", userDetails)}
        style={styles.smallCardContainer}
      >
        <Card
          style={[
            styles.smallCard,
            {
              backgroundColor: "#05CD51"
            }
          ]}
        >
          <FontAwesome name="id-card" size={35} color="#333" />
          <Text style={styles.itemTitle}>Card Status</Text>
        </Card>
      </TouchableOpacity>
    </>
  );
};

export default LoggedUserHomeSectionLink;

const styles = StyleSheet.create({
  smallCard: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  itemTitle: {
    fontSize: 15,
    marginTop: 5
  },
  smallCardContainer: {
    height: 100,
    width: "28%",
    justifyContent: "center",
    alignItems: "center"
  }
});
