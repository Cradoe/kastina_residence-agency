import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert
} from "react-native";
import * as yup from "yup";
import { globalStyles, CONSTANTS } from "../shared/global";
import SectionTitle from "../components/sectionTitle";
import FormGroup from "../components/formGroup";
import CustomButton from "../components/customButton";
import { Formik } from "formik";

import { Container, Content, Label, Input } from "native-base";
import BackgroundImage from "../components/backgoundImage";
import MainHeader from "../components/mainHeader";
const detailsSchema = yup.object({
  cardRegNo: yup
    .string("Registration Number must be in letters.")
    .min(3, "Registration Number must be more than 3 characters.")
    .required("Registration Number is required.")
});
const VerifyCard = ({ route,navigation }) => {
  const handleSubmit = (values) => {
    let details = {
      action: "verifyCard",
      ...values
    };
    fetch(CONSTANTS.serverApiUrl, {
      method: "POST",
      body: JSON.stringify(details)
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          if (data.status === 200 && data.success === true) {
            Alert.alert(data.message);
            console.log(data.message);
          } else {
            Alert.alert("Failed!", data.message);
            console.log(data.message);
          }
        } else {
          Alert.alert("Opps!", "Unable to retrieve data from server.");
        }
      })
      .catch((error) => {
        Alert.alert(
          "No Internet Access!",
          "Unable to retrieve data from server."
        );
        console.log(error);
      });
  };

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
            <SectionTitle color="#aaa" title="Verify Card" />
            <View style={{ alignItems: "center" }}>
              <Formik
                validationSchema={detailsSchema}
                initialValues={{ cardRegNo: "" }}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {(props) => (
                  <>
                    <FormGroup>
                      <Label style={globalStyles.label}>
                        Registration Number
                      </Label>

                      <Input
                        style={globalStyles.formControl}
                        onChangeText={props.handleChange("cardRegNo")}
                        value={props.values.cardRegNo}
                      />
                      <Text style={globalStyles.errorText}>
                        {props.touched.cardRegNo && props.errors.cardRegNo}
                      </Text>
                    </FormGroup>
                    <FormGroup>
                      <CustomButton
                        rounded
                        spinOnClick={true}
                        title="Check"
                        onPress={props.handleSubmit}
                      />
                    </FormGroup>
                  </>
                )}
              </Formik>
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
    backgroundColor: "rgba(0,0,0,.6)",
    flex: 1,
    padding: 20,
    paddingTop: 40
  }
});
export default VerifyCard;
