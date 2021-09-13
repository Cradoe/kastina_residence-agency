import React, { useState, useEffect } from "react";
import { StyleSheet, Alert, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { globalStyles, getData } from "../shared/global";
import {
  Card,
  Container,
  Content,
  CardItem,
  Body,
  Text,
  View,
  Title,
  Footer
} from "native-base";
import MainHeader from "../components/mainHeader";
import HomeBanner from "../components/homeBannerCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackgroundImage from "../components/backgoundImage";
import HomeTouchableCard from "../components/HomeTouchableCard";

import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import FooterTabs from "../components/footerTab";
const Home = ( { route, navigation } ) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState( false );
  const [ userDetails, setUserDetails ] = useState( {} );

  const checkIfLoggedIn = () => {
    getData( "userData" )
      .then( ( userData ) => {
        if ( userData ) {
          setIsLoggedIn( true );
          setUserDetails( {
            ...userData
          } );
        } else {
          setIsLoggedIn( false );
        }
      } )
      .catch( ( error ) => {
        Alert.alert( "Opps!", "Something went wrong" );
        console.log( error );
      } );
  };

  useEffect( () => {
    checkIfLoggedIn();
  }, [] );

  return (
    <Container>
      <MainHeader noBack />
      <Content>
        <BackgroundImage
          source={require( "../assets/images/lagos-bg-3.jpg" )}
          height="100%"
          resizeMode="cover"
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0,.5)"
            }}
          >
            <HomeBanner />
            <View style={[ globalStyles.container ]}>
              <HomeTouchableCard
                bgColor="#ebd1e3"
                title="Card Status"
                caption="Check the validity of your citizenship card."
                icon={<FontAwesome name="id-card" size={35} color="#333" />}
                onPress={() => navigation.navigate( "CardStatus", userDetails )}
              />
              <HomeTouchableCard
                bgColor="#eee"
                title="Katsina News"
                caption="Stay Updated with happenings in Katsina"
                imageSource={require( "../assets/images/lagos.png" )}
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.katsinastate.gov.ng/category/news/"
                  )
                }
              />
              <HomeTouchableCard
                bgColor="#dbdbad"
                title="About Us"
                caption="Find out what Katsina State Residents Registration Agency is."
                imageSource={require( "../assets/images/icon.png" )}
                onPress={() => navigation.navigate( "About" )}
              />
              <HomeTouchableCard
                bgColor="#d1d4eb"
                title="Verify Card"
                caption="Verify a citizen card with reg no."
                icon={<FontAwesome5 name="check" size={35} color="#333" />}
                onPress={() => navigation.navigate( "VerifyCard" )}
              />
              <HomeTouchableCard
                title="Renew Card"
                caption="Apply for a new citizenship card online."
                imageSource={require( "../assets/images/cards.jpg" )}
                onPress={() => navigation.navigate( "RenewCard" )}
                bgColor="#faeade"
              />
              <HomeTouchableCard
                title="Our Centres"
                caption="Find out the nearest centre"
                icon={
                  <FontAwesome5 name="map-marked-alt" size={35} color="#333" />
                }
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.katsinastate.gov.ng/"
                  )
                }
                bgColor="#daf7e8"
              />
              <HomeTouchableCard
                title="Benefits"
                caption="See reasons why you need to be registered"
                imageSource={require( "../assets/images/benefit-icon.png" )}
                onPress={() => navigation.navigate( "Benefits" )}
                bgColor="#e8dfed"
              />
              <HomeTouchableCard
                title="F.A.Q"
                caption="Check answers to frequently asked questions."
                icon={
                  <MaterialCommunityIcons
                    name="frequently-asked-questions"
                    size={35}
                    color="#333"
                  />
                }
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.katsinastate.gov.ng/contact/"
                  )
                }
                bgColor="#f2d8dd"
              />
            </View>
          </View>
        </BackgroundImage>
      </Content>
      <FooterTabs
        activeScreen="Home"
        userDetails={userDetails}
        navigation={navigation}
      />
    </Container>
  );
};
const styles = StyleSheet.create( {
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
} );
export default Home;
