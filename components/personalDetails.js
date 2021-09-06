import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Text, } from "react-native";

import { globalStyles } from "../shared/global";
import FormGroup from "../components/formGroup";
import CustomButton from "../components/customButton";
import SectionTitle from "./sectionTitle";
import { Input, Label } from "native-base";
const detailsSchema = yup.object({
  occupation: yup
    .string("Occupation must be in letters.")
    .min(3, "Occupation must more than 3 characters.")
    .required("Occupation is required."),
  phoneNumber: yup
    .string()
    .min(3, "Phone Number must more than 3 characters.")
    .required("Phone Number is required."),
  emailAddress: yup
    .string("Email Address must be in letters.")
    .min(3, "Email Address must more than 3 characters.")
    .required("Email Address is required.")
    .test("is-valid-emailAddress", "Invalid Email Address", (val) => {
      return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    }),
  nextOfKin: yup
    .string("Next of kin name must be in letters.")
    .min(4, "Next of kin Name must more than 4 characters.")
    .required("Next of kin Name is required."),
  lga: yup.string().required("Local Govt. Name is required.")
});
const PersonalDetails = ({ onSubmit, userDetails }) => {
  const { occupation, phoneNumber, emailAddress, nextOfKin } = userDetails;

  return (
    <>
      <SectionTitle color="#aaa" title="Personal Details" />
      <Formik
        initialValues={{
          occupation: occupation ? occupation : "",
          phoneNumber: phoneNumber ? phoneNumber : "",
          emailAddress: emailAddress ? emailAddress : "",
          nextOfKin: nextOfKin ? nextOfKin : ""
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(props) => (
          <>
            <FormGroup>
              <Label style={globalStyles.label}>Occupation</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("occupation")}
                value={props.values.occupation}
              />
              {props.errors.occupation ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.occupation && props.errors.occupation}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Phone Number</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("phoneNumber")}
                value={props.values.phoneNumber}
                keyboardType="phone-pad"
              />

              {props.errors.phoneNumber ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.phoneNumber && props.errors.phoneNumber}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Email Address</Label>
              <Input
                style={globalStyles.formControl}
                keyboardType="email-address"
                onChangeText={props.handleChange("emailAddress")}
                value={props.values.emailAddress}
              />

              {props.errors.emailAddress ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.emailAddress && props.errors.emailAddress}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Next of Kin</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("nextOfKin")}
                value={props.values.nextOfKin}
              />

              {props.errors.nextOfKin ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.nextOfKin && props.errors.nextOfKin}
                </Text>
              ) : null}
            </FormGroup>

            <FormGroup>
              <CustomButton
                spinOnClick={true}
                rounded
                title="Continue"
                onPress={props.handleSubmit}
              />
            </FormGroup>
          </>
        )}
      </Formik>
    </>
  );
};
export default PersonalDetails;
