import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions
} from "react-native";

import { CommonActions } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles, CONSTANTS, deleteData } from "../shared/global";
import SectionTitle from "../components/sectionTitle";
import Hr from "../components/Hr";
import CustomButton from "../components/customButton";
import { Container, Content } from "native-base";
import MainHeader from "../components/mainHeader";
import BackgroundImage from "../components/backgoundImage";
import FooterTabs from "../components/footerTab";

const Account = ({ route, navigation }) => {
  const logout = () => {
    deleteData("userData").then(() => {
      navigateToLoginScreen();
    } );
  };
  const navigateToLoginScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Login" }]
      })
    );
  };
  const {
    regNo,
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    occupation,
    nextOfKin,
    address,
    passport
  } = route.params;

  useEffect(() => {
    if (
      regNo === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      emailAddress === undefined ||
      phoneNumber === undefined ||
      occupation === undefined ||
      nextOfKin === undefined ||
      address === undefined ||
      passport === undefined
    ) {
      navigation.navigate("Login");
    }
  }, [regNo]);
  return (
    <Container>
      <MainHeader navigation={navigation} />
      <Content>
        <BackgroundImage
          source={require("../assets/images/lagos-2.jpg")}
          height={150}
          headerSize={0}
        >
          <View style={[globalStyles.bgOverlay]}>
            <View
              style={{
                marginBottom: "20%",
                height: "80%",
                justifyContent: "center"
              }}
            ></View>
          </View>
        </BackgroundImage>
        <View style={styles.curvedPageContainer}>
          <View style={globalStyles.picContainer}>
            <Image
              style={globalStyles.profilePicture}
              source={{ uri: passport }}
            />
          </View>
          <SectionTitle color="#aaa" title={`${firstName} ${lastName}`} />
          <View style={[globalStyles.flexRow, styles.listItem]}>
            <FontAwesome
              name="check"
              size={18}
              color="#ccc"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.grayColor}>
              Reg. Number: <Text style={globalStyles.grayColor}>{regNo}</Text>
            </Text>
          </View>

          <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
          <View style={[globalStyles.flexRow, styles.listItem]}>
            <FontAwesome
              name="envelope"
              size={18}
              color="#ccc"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.grayColor}>
              Email Address:{" "}
              <Text style={globalStyles.grayColor}>{emailAddress}</Text>
            </Text>
          </View>

          <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
          <View style={[globalStyles.flexRow, styles.listItem]}>
            <FontAwesome
              name="phone"
              size={18}
              color="#ccc"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.grayColor}>
              Phone Number:{" "}
              <Text style={globalStyles.grayColor}>{phoneNumber}</Text>
            </Text>
          </View>

          <Hr style={{ borderStyle: "dashed", borderBottomColor: "#ccc" }} />
          <View style={[globalStyles.flexRow, styles.listItem]}>
            <FontAwesome
              name="briefcase"
              size={18}
              color="#ccc"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.grayColor}>
              Occupation:{" "}
              <Text style={globalStyles.grayColor}>{occupation}</Text>
            </Text>
          </View>

          <Hr style={{ borderStyle: "dashed", borderBottomColor: "#ccc" }} />
          <View style={[globalStyles.flexRow, styles.listItem]}>
            <FontAwesome
              name="user"
              size={18}
              color="#ccc"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.grayColor}>
              Next of Kin:{" "}
              <Text style={globalStyles.grayColor}>{nextOfKin}</Text>
            </Text>
          </View>
          <Hr style={{ borderStyle: "dashed", borderBottomColor: "#ccc" }} />
          <View style={[globalStyles.flexRow, styles.listItem]}>
            <FontAwesome
              name="map-marker"
              size={18}
              color="#ccc"
              style={{ marginRight: 10 }}
            />
            <Text style={globalStyles.grayColor}>
              Address: <Text style={globalStyles.grayColor}>{address}</Text>
            </Text>
          </View>
          <CustomButton
            rounded
            onPress={logout}
            title="Logout"
            spinOnClick={true}
          />
        </View>
      </Content>

      <FooterTabs
        activeScreen="Account"
        userDetails={route.params}
        navigation={navigation}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  curvedPageContainer: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    top: -20,
    width: "100%",
    paddingTop: 50
  },
  listItem: {
    padding: 8,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "flex-start"
  }
});
export default Account;
