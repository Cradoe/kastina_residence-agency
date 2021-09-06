import React from "react";
import { StyleSheet, Image, WebBrowser } from "react-native";

import { globalStyles } from "../shared/global";
import {
  Card,
  CardItem,
  Body,
  Text,
  View,
  Title
} from "native-base";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

const HomeTouchableCard = (props) => {

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Card style={{ backgroundColor: props.bgColor ? props.bgColor : "#fff" }}>
        <CardItem style={globalStyles.bgTransparent}>
          <Body
            style={[
              globalStyles.flexRow,
              globalStyles.spaceBetween,
              { paddingHorizontal: 0 }
            ]}
          >
            <View style={{ paddingRight: 10,maxWidth:'85%' }}>
              <Title style={globalStyles.titleText}>{props.title}</Title>
              <Text style={globalStyles.captionText}>{props.caption}</Text>
            </View>
            {props.imageSource ? (
              <Image
                resizeMode="contain"
                style={{ width: "15%", height: 50}}
                source={props.imageSource}
              />
            ) : null}
            {props.icon ? props.icon : null}
          </Body>
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>
  );
};
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
  sectionCard: {
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 10
  },
  smallCardContainer: {
    height: 100,
    width: "28%",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default HomeTouchableCard;
