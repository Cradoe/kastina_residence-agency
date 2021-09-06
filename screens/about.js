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
import Paragraph from "../components/pararaph";
import MainHeader from "../components/mainHeader";
import SectionTitle from "../components/sectionTitle";
const logoIcon = require( "../assets/images/icon.png" );


const About = ( { navigation } ) => {
  return (
    <Container>
      <MainHeader navigation={navigation} />
      <Content>
        <BackgroundImage
          source={require( "../assets/images/lagos-bg-4.jpg" )}
          height={150}
          headerSize={0}
        >
          <View style={[ globalStyles.bgOverlay ]}>
            <View
              style={{
                marginBottom: "20%",
                height: "80%",
                justifyContent: "center"
              }}
            >

              <SectionTitle color="#fff" title="About Lasrra" />
            </View>
          </View>
        </BackgroundImage>
        <View style={styles.curvedCard}>
          <View>
            <Paragraph>
              Society has become more mobile and the information held
              electronically about persons and services by government agencies
              and other bodies have substantially increased. There is a growing
              need to integrate the residents of Kastina State into e-government
              initiatives to enable the services provided by government to be
              fully utilised and also provide an accurate picture for government
              policy and planning.
            </Paragraph>
            <Paragraph>
              The Kastina State Residents Registration Agency Bill was passed and
              signed into law on the 27th of June 2011.
            </Paragraph>

            <Paragraph>
              The law established LASRRA with the following functions:
            </Paragraph>
            <Paragraph>
              {`\u25CF`} To create a reliable database of all residents in Kastina
              State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`} To establish the relevant infrastructure for the
              creation of a residents information database.
            </Paragraph>
            <Paragraph>
              {`\u25CF`} To produce guidelines for data to be contained in the
              registration form.
            </Paragraph>
            <Paragraph>
              {`\u25CF`} To advice the government on mode of collecting data
              from the public.
            </Paragraph>
            <Paragraph>
              The data collected and collated by the Agency with the residency
              card issued would provide for a reliable method of authenticating
              and identifying residents. It will likewise avail the e-services
              facilities provided by the State.
            </Paragraph>
            <Paragraph>
              The Kastina State Residents Registration initiative has the
              potential to address key challenges facing e-government and other
              initiatives. Various e-government initiatives have been enabled to
              collect electronic data and each operates autonomous of each
              other. To provide a more accurate picture for government policies
              and planning, a link must be established between these various
              stores of data.
            </Paragraph>
          </View>
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
export default About;
