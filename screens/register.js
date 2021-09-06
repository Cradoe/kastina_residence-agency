import React, { useState, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { globalStyles, storeData, CONSTANTS } from "../shared/global";
import {
  Container,
  Content,
  Text,
  View,
  Button,
  Card,
  CardItem,
  Body,
  Thumbnail
} from "native-base";
import BackgroundImage from "../components/backgoundImage";
import BasicDetailsForm from "../components/basicDetails";
import BirthDetailsRegistration from "../components/birthDetailsRegistration";
import PersonalDetails from "../components/personalDetails";
import UploadImage from "../components/uploadImage";
import PreviewUserDetails from "../components/previewUserDetails";
import BackHeader from "../components/backHeader";

const Register = ( { navigation } ) => {
  const [ currentStep, setCurrentStep ] = useState( 1 );
  const [ userDetails, setUserDetails ] = useState( {} );

  const handleSubmit = ( values ) => {
    setUserDetails( {
      ...userDetails,
      ...values
    } );

    let step = currentStep;
    if ( step >= 1 && step < 5 ) {
      setCurrentStep( step + 1 );
    }
  };
  const handleGoPrevious = () => {
    let step = currentStep;
    if ( step === 5 ) {
      setCurrentStep( 1 );
      return;
    }
    if ( step > 1 && step <= 5 ) {
      setCurrentStep( step - 1 );
    }
  };
  const registerUser = () => {
    let localUri = userDetails.passport;
    let filename = localUri.split( "/" ).pop();

    let match = /\.(\w+)$/.exec( filename );
    let type = match ? `image/${match[ 1 ]}` : `image`;

    let formData = new FormData();
    formData.append( "passport", { uri: localUri, name: filename, type } );
    formData.append( "action", "registerAccount" );
    formData.append( "data", JSON.stringify( userDetails ) );

    fetch( CONSTANTS.serverApiUrl, {
      method: "POST",
      body: formData,
      header: {
        "content-type": "multipart/form-data"
      }
    } )
      .then( async ( data ) => {
        const response = await data.json();
        if ( response.status === 200 && response.success === true ) {
          setUserDetails( {
            ...userDetails,
            regNo: response.regNo
          } );
        } else {
          Alert.alert( "Registration Failed!", response.message );
          console.log( response.message );
        }
      } )
      .catch( ( error ) => {
        Alert.alert(
          "Registration Failed!",
          "Unable to retrieve data from server."
        );
        console.log( error );
      } );
  };

  const navigateToHome = ( userDetails ) => {
    navigation.dispatch(
      CommonActions.reset( {
        index: 1,
        routes: [ { name: "Home", params: userDetails } ]
      } )
    );
  };
  useEffect( () => {
    if ( userDetails.regNo ) {
      Alert.alert(
        "Holla!",
        ` Your registration number is ${userDetails.regNo}. Keep it safe.`
      );
      storeData( "userData", userDetails );
      setTimeout( () => {
        navigateToHome( userDetails );
      }, 1000 );
    }
  }, [ userDetails ] );
  return (
    <Container>
      <Content>
        <BackgroundImage
          source={require( "../assets/images/lagos-bg-5.jpg" )}
          height={200}
          headerSize={0}
        >
          <View style={[ globalStyles.bgOverlay ]}>
            <BackHeader navigation={navigation} />
            <View style={{ height: "80%" }}>
              <View style={{ alignItems: "center" }}>
                <Thumbnail
                  rounded
                  source={require( "../assets/images/logo.jpg" )}
                />
              </View>
            </View>
          </View>
        </BackgroundImage>

        <View style={styles.curvedCard}>
          <Card style={globalStyles.br10}>
            <CardItem style={[ globalStyles.br10, { width: "100%" } ]}>
              <Body style={[ globalStyles.br10, { width: "100%" } ]}>
                {currentStep === 1 ? (
                  <BasicDetailsForm
                    userDetails={userDetails}
                    onSubmit={handleSubmit}
                  />
                ) : currentStep === 2 ? (
                  <BirthDetailsRegistration
                    userDetails={userDetails}
                    onSubmit={handleSubmit}
                  />
                ) : currentStep === 3 ? (
                  <PersonalDetails
                    userDetails={userDetails}
                    onSubmit={handleSubmit}
                  />
                ) : currentStep === 4 ? (
                  <UploadImage
                    userDetails={userDetails}
                    onUpload={handleSubmit}
                  />
                ) : (
                  <PreviewUserDetails
                    onConfirmed={registerUser}
                    onBack={handleGoPrevious}
                    userDetails={userDetails}
                  />
                )}
              </Body>
            </CardItem>
          </Card>
          {currentStep === 1 ? (
            <View style={[ globalStyles.flexRow, globalStyles.spaceAround ]}>
              <Text style={{ color: "#aaa", marginRight: 10 }}>
                Have an account?{" "}
              </Text>
              <Button
                transparent
                small
                onPress={() => {
                  navigation.navigate( "Login" );
                }}
              >
                <Text>Click here to Login</Text>
              </Button>
            </View>
          ) : null}
        </View>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create( {
  curvedCard: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 40,
    top: -20,
    width: "100%",
    paddingTop: 50
  },
  welcomeText: {
    fontFamily: "nunito-bold",
    fontSize: 25,
    marginBottom: 20
  }
} );
export default Register;
