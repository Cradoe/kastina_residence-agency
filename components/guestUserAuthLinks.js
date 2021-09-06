import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Card from "./card";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { globalStyles } from "../shared/global";
const GuestUserAuthLinks = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
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
          <Entypo name="login" size={35} color="#333" />
          <Text style={styles.itemTitle}>Login</Text>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
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
          <FontAwesome name="user-plus" size={35} color="#333" />
          <Text style={styles.itemTitle}>Register</Text>
        </Card>
      </TouchableOpacity>
    </>
  );
};

export default GuestUserAuthLinks;

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
