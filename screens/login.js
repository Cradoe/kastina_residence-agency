import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import * as yup from "yup";
import { CommonActions } from "@react-navigation/native";
import { globalStyles, storeData, CONSTANTS } from "../shared/global";
import FormGroup from "../components/formGroup";
import CustomButton from "../components/customButton";
import { Formik } from "formik";
import {
  Container,
  Content,
  Text,
  View,
  Button,
  Input,
  CardItem,
  Card,
  Body,
  Thumbnail,
  Label
} from "native-base";
import BackgroundImage from "../components/backgoundImage";

const logoIcon = require( "../assets/images/logo.jpg" );
const detailsSchema = yup.object( {
  firstName: yup
    .string( "First Name must be in letters." )
    .min( 3, "First Name must more than 3 characters." )
    .required( "First Name is required." ),
  regNo: yup
    .string( "Registration Number must be in letters." )
    .min( 3, "Registration Number must be more than 3 characters." )
    .required( "Registration Number is required." )
} );

const Login = ( { navigation } ) => {
  const handleSubmit = ( values ) => {
    var myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );
    let details = {
      action: "login",
      ...values
    };
    fetch( CONSTANTS.serverApiUrl, {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify( details )
    } ).then( async ( response ) => {
      const data = await response.json();
      if ( data !== undefined ) {
        if ( data.status === 200 && data.success === true ) {
          let userDetails = JSON.parse( data.user );
          storeData( "userData", userDetails );
          navigateToHome( userDetails );
        } else {
          Alert.alert( "Login Failed!", data.message );
        }
      } else {
        Alert.alert( "Opps!", "Unable to retrieve data from server." );
      }
    } )
      .catch( ( error ) => {
        Alert.alert(
          "Login Failed!",
          "Unable to retrieve data from server." + error
        );
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
  return (
    <Container>
      <Content>
        <BackgroundImage
          source={require( "../assets/images/lagos-bg-2.jpg" )}
          height={180}
          headerSize={0}
        >
          <View style={[ globalStyles.bgOverlay ]}>
            <View
              style={{
                marginBottom: "20%",
                height: "80%",
                justifyContent: "flex-end"
              }}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Thumbnail rounded source={logoIcon} />
              </View>
              <View
                style={[ globalStyles.flexRow, globalStyles.justifySpaceAround ]}
              >
                <Button
                  style={{
                    borderBottomColor: CONSTANTS.primaryColor,
                    borderBottomWidth: 4
                  }}
                  transparent
                >
                  <Text style={globalStyles.textWhite}>Login</Text>
                </Button>
                <Button
                  onPress={() => {
                    navigation.navigate( "Register" );
                  }}
                  transparent
                >
                  <Text style={globalStyles.textWhite}>Sign Up</Text>
                </Button>
              </View>
            </View>
          </View>
        </BackgroundImage>
        <View style={styles.curvedCard}>
          <Card style={globalStyles.br10}>
            <CardItem style={globalStyles.br10}>
              <Body style={globalStyles.br10}>
                <Text style={styles.welcomeText}>Welome back!</Text>
                <Formik
                  validationSchema={detailsSchema}
                  initialValues={{ regNo: "", firstName: "" }}
                  onSubmit={( values ) => {
                    handleSubmit( values );
                  }}
                >
                  {( props ) => (
                    <>
                      <FormGroup>
                        <Label style={globalStyles.label}>
                          Registration Number
                        </Label>

                        <Input
                          style={globalStyles.formControl}
                          onChangeText={props.handleChange( "regNo" )}
                          value={props.values.regNo}
                        />
                        {props.errors.regNo ? (
                          <Text style={globalStyles.errorText}>
                            {props.touched.regNo && props.errors.regNo}
                          </Text>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <Label style={globalStyles.label}>First Name</Label>
                        <Input
                          style={globalStyles.formControl}
                          onChangeText={props.handleChange( "firstName" )}
                          value={props.values.firstName}
                        />
                        {props.errors.firstName ? (
                          <Text style={globalStyles.errorText}>
                            {props.touched.firstName && props.errors.firstName}
                          </Text>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <CustomButton
                          spinOnClick={true}
                          rounded
                          title="Login"
                          onPress={props.handleSubmit}
                        />
                      </FormGroup>
                    </>
                  )}
                </Formik>
              </Body>
            </CardItem>
          </Card>
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
export default Login;
