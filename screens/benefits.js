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

const Benefits = ( { navigation } ) => {
  return (
    <Container>
      <MainHeader navigation={navigation} />
      <Content>
        <BackgroundImage
          source={require( "../assets/images/lagos-bg-5.jpg" )}
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
              <SectionTitle color="#fff" title="The Benefits" />
            </View>
          </View>
        </BackgroundImage>
        <View style={styles.curvedCard}>
          <View>
            <Paragraph>
              {`\u25CF`}Allows Government to determine the overall resources
              required to formulate and implement policies, projects and
              programs, when the number of people to cater for is known.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Allows for proper allocation of resources to the
              appropriate sectors of the economy that meet the needs of the
              residents of the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Assist in market allocation within the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Identifies the number and placement of hospitals,
              schools, libraries and books needed in the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Identifies the number of teachers, doctors and nurses
              required to meet the needs of the populace.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Enables the State Government to classify neighborhoods
              within the State and determine the population thresholds for
              certain facilities and utilities provided by the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Help analyze and identify areas for urban regeneration
              and actions to be taken.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Enhances the ability of the Government to plan for sport
              and recreational centers across the State and properly place
              adequate staff numbers in facilities such as coaches and trainers.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Aids the service delivery strategy of Katsina State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Ensures that the Agricultural Strategies of Katsina State
              Government meet the needs and demands of the residents of the
              State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Ensures adequate provision of public goods for the rural
              and urban population in terms of logistics, transportation and
              market institutions.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Assist the State to eradicate poverty.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Facilitates better traffic management, when the numbers
              of potential commuters are known.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Helps determine the most appropriate transportation
              system suitable for different parts of the State - such as rail,
              buses, cars, ferries.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Ensures the most appropriate location of motor parks,
              bus-stops, jetties and terminus across the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Improves the health facility provision of the state by
              determining the appropriate number of health facilities required,
              their localities, appropriate staff levels, equipment and
              furniture.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Enables the Ministry of Health to assess the different
              health needs of different parts of the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Assist in determining the most appropriate and effective
              refuse collection system for the residents of the state and the
              amount of waste equipment and refuse collectors required for any
              specified locality within the State.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Population data will assist the State to effectively
              plan and implement disaster management strategies.
            </Paragraph>
            <Paragraph>
              {`\u25CF`}Allows for the determination of type and grading of
              roads, so that the design of the road transportation system is
              durable and appropriate to the usage.
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
    paddingHorizontal: 20,
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
export default Benefits;
