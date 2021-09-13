import React from "react";
import { View, StyleSheet, Image, Alert, Text } from "react-native";
import govBannerImage from "../assets/images/gov-banner-holder.jpg";
import { Card } from "native-base";
import { CONSTANTS } from "../shared/global";
const HomeBanner = () => {
  return (
    <Card>
      <View style={[ styles.banner, { backgroundColor: "#C2CDDF" } ]}>
        <View style={[ styles.innerView, { maxWidth: "30%" } ]}>
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: 108 }}
            source={require( "../assets/images/lagos.png" )}
          />
          <Text style={styles.caption}>Katsina State Government</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create( {
  banner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "auto"
  },
  innerView: {
    flex: 1,
    paddingLeft: 10
  },
  caption: {
    fontSize: 12,
    textAlign: "center"
  }
} );

export default HomeBanner;
