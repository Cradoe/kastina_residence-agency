import React from 'react'
import {
  Button,
  Header,
  Left,
  Icon,
  Right,
  Body,
  View,
  Text
} from "native-base";
import { StyleSheet, Image } from "react-native";
import { CONSTANTS, globalStyles } from '../shared/global';
const MainHeader = ( { navigation, noBack } ) => {
  return (
    <Header noShadow style={{ backgroundColor: CONSTANTS.primaryColor }}>
      {noBack ? null : (
        <Left>
          <Button
            transparent
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
      )}
      <Body style={globalStyles.centerCenter}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require( "../assets/images/logo.png" )}
        />
        <Text style={styles.logoSubTitle}>
          Katsina State Residence Registraion Agency
        </Text>

      </Body>
    </Header>
  );
}
export default MainHeader;

const styles = StyleSheet.create( {
  header: {
    width: "100%",
    height: "100%"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#333",
    letterSpacing: 1
  },
  headerImage: {
    width: "100%",
    height: 30
  },
  logoSubTitle: {
    color: "#fff",
    fontFamily: "nunito-regular",
    fontSize: 11
  }
} );