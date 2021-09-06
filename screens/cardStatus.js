import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { globalStyles, getData, storeData, CONSTANTS } from "../shared/global";
import SectionTitle from "../components/sectionTitle";
import { Container, Content } from "native-base";
import MainHeader from "../components/mainHeader";
import BackgroundImage from "../components/backgoundImage";

const CardStatus = ({ route,navigation }) => {
  const { regNo, passport, cardImage, cardStatus } = route.params;
  const [serverCardStatus, setServerCardStatus] = useState(cardStatus);
  const [serverCardImage, setServerCardImage] = useState(cardImage);
  const checkLocalStorageData = () => {
    if (
      cardImage === undefined ||
      cardImage === null ||
      cardStatus === "Pending"
    ) {
      checkServerForCard();
    }
  };
  const checkServerForCard = () => {
    fetch(CONSTANTS.serverApiUrl, {
      method: "POST",
      body: JSON.stringify({ action: "checkCardStatus", regNo: regNo })
    })
      .then(async (data) => {
        const response = await data.json();
        if (response.status === 200 && response.success === true) {
          let card = JSON.parse(response.card);
          setServerCardStatus(card.cardStatus);
          setServerCardImage(card.cardImage);

          saveDataToLocalStorage(card);
        } else {
          setServerCardStatus(response.message);
        }
      })
      .catch((error) => {
        Alert.alert("Network Error!", "Unable to retrieve data from server.");
        console.log(error);
      });
  };
  const saveDataToLocalStorage = (cardData) => {
    getData("userData")
      .then((userData) => {
        if (userData) {
          let userDetails = {
            ...userData,
            cardData
          };
          storeData("userData", userDetails);
        }
      })
      .catch((error) => {
        Alert.alert("Opps!", "Something went wrong");
        console.log(error);
      });
  };
  useEffect(() => {
    checkLocalStorageData();
  }, []);
  return (
    <Container>
      <MainHeader navigation={navigation} />
      <BackgroundImage
        source={require("../assets/images/card-box.jpg")}
        height="100%"
        resizeMode="cover"
      >
        <Content style={styles.overlay}>
          <View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={globalStyles.profilePicture}
                source={{ uri: passport }}
              />
            </View>
            <SectionTitle color="#aaa" title="My Card" />
            <View style={{ alignItems: "center" }}>
              {serverCardImage ? (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: serverCardImage }}
                />
              ) : (
                <FontAwesome name="id-card" size={200} color="#aaa" />
              )}
            </View>
            <View style={[styles.listItem]}>
              <Text style={globalStyles.grayColor}>
                {serverCardStatus ? serverCardStatus : "Checking..."}
              </Text>
            </View>
          </View>
        </Content>
      </BackgroundImage>
    </Container>
  );
};
const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,.8)",
    flex: 1,
    padding: 20,
    paddingTop: 40
  },
  listItem: {
    padding: 8,
    alignItems: "center",
    marginVertical: 10
  }
});
export default CardStatus;
