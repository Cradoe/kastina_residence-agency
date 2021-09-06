import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Text, Picker } from "react-native";

import { globalStyles } from "../shared/global";
import FormGroup from "./formGroup";
import CustomButton from "./customButton";
import SectionTitle from "./sectionTitle";
import { Input,  Label } from "native-base";

const detailsSchema = yup.object({
  firstName: yup
    .string("First Name must be in letters.")
    .min(3, "First Name must more than 3 characters.")
    .required("First Name is required."),
  middleName: yup
    .string("Middle Name must be in letters.")
    .min(3, "Middle Name must more than 3 characters.")
    .required("Middle Name is required."),
  lastName: yup
    .string("Last Name must be in letters.")
    .min(3, "Last Name must more than 3 characters.")
    .required("Last Name is required."),
  gender: yup
    .string("Gender must be in letters.")
    .min(4, "Gender must more than 4 characters.")
    .required("Gender is required.")
});
const BasicDetailsForm = ({ onSubmit, userDetails }) => {
  const { firstName, middleName, lastName, gender } = userDetails;

  return (
    <>
      <SectionTitle color="#aaa" title="REGISTER" />

      <Formik
        validationSchema={detailsSchema}
        initialValues={{
          firstName: firstName ? firstName : "",
          middleName: middleName ? middleName : "",
          lastName: lastName ? lastName : "",
          gender: gender ? gender : ""
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(props) => (
          <>
            <FormGroup>
              <Label style={globalStyles.label}>First Name</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("firstName")}
                value={props.values.firstName}
              />
              {props.errors.firstName ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.firstName && props.errors.firstName}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Middle Name</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("middleName")}
                value={props.values.middleName}
              />
              {props.errors.middleName ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.middleName && props.errors.middleName}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Last Name</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
              />
              {props.errors.lastName ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.lastName && props.errors.lastName}
                </Text>
              ) : null}
            </FormGroup>

            <FormGroup>
              <Label style={globalStyles.label}>Gender</Label>
              <Picker
                style={globalStyles.formControl}
                mode="dropdown"
                prompt={"Select"}
                itemStyle={{ backgroundColor: "grey" }}
                selectedValue={props.values.gender}
                onValueChange={(itemValue) =>
                  props.setFieldValue("gender", itemValue)
                }
              >
                <Picker.Item label="Select your Gender" value={null} key={0} />
                <Picker.Item label="Male" value="Male" key={1} />
                <Picker.Item label="Female" value="Female" key={2} />
              </Picker>
              {props.errors.gender ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.gender && props.errors.gender}
                </Text>
              ) : null}
            </FormGroup>

            <FormGroup>
              <CustomButton
                spinOnClick={true}
                rounded
                title="Register"
                onPress={props.handleSubmit}
              />
            </FormGroup>
          </>
        )}
      </Formik>
    </>
  );
};
export default BasicDetailsForm;
