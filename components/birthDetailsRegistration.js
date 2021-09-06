import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Text, Picker } from "react-native";

import { globalStyles } from "../shared/global";
import FormGroup from "../components/formGroup";
import CustomButton from "../components/customButton";
import SectionTitle from "./sectionTitle";
import { Input, Label } from "native-base";

const detailsSchema = yup.object({
  dob: yup
    .string("Date of Birth must be in letters.")
    .min(3, "Date of Birth must more than 3 characters.")
    .required("Date of Birth is required."),
  address: yup
    .string("Address must be in letters.")
    .min(3, "Address must more than 3 characters.")
    .required("Address is required."),
  nameOfFather: yup
    .string("Father's Name must be in letters.")
    .min(3, "Father's Name must more than 3 characters.")
    .required("Father's Name is required."),
  nameOfMother: yup
    .string("Mother's Name must be in letters.")
    .min(4, "Mother's Name must more than 4 characters.")
    .required("Mother's Name is required."),
  lga: yup
    .string("Local Govt. must be in letters.")
    .min(2, "Local Govt. Name must more than 2 characters.")
    .required("Local Govt. Name is required.")
});

const BirthDetailsRegistration = ({ onSubmit, userDetails }) => {
  const { dob, address, lga, nameOfFather, nameOfMother } = userDetails;

  return (
    <>
      <SectionTitle color="#aaa" title="Birth Details" />
      <Formik
        validationSchema={detailsSchema}
        initialValues={{
          dob: dob ? dob : "",
          address: address ? address : "",
          lga: lga ? lga : "",
          nameOfFather: nameOfFather ? nameOfFather : "",
          nameOfMother: nameOfMother ? nameOfMother : ""
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(props) => (
          <>
            <FormGroup>
              <Label style={globalStyles.label}>Date of Birth</Label>
              
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("dob")}
                placeholder="e.g 31/02/1992"
                value={props.values.dob}
              />
              {props.errors.dob ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.dob && props.errors.dob}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Address</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("address")}
                multiline={true}
                value={props.values.address}
              />

              {props.errors.address ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.address && props.errors.address}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Father's Name</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("nameOfFather")}
                value={props.values.nameOfFather}
              />

              {props.errors.nameOfFather ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.nameOfFather && props.errors.nameOfFather}
                </Text>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label style={globalStyles.label}>Mother's Name</Label>
              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange("nameOfMother")}
                value={props.values.nameOfMother}
              />

              {props.errors.nameOfMother ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.nameOfMother && props.errors.nameOfMother}
                </Text>
              ) : null}
            </FormGroup>

            <FormGroup>
              <Label style={globalStyles.label}>Local govt. of birth</Label>
              <Picker
                style={globalStyles.formControl}
                mode="dropdown"
                prompt={"Select"}
                itemStyle={{ backgroundColor: "grey" }}
                selectedValue={props.values.lga}
                onValueChange={(itemValue) =>
                  props.setFieldValue("lga", itemValue)
                }
              >
                <Picker.Item label="Select" value={null} key={0} />
                <Picker.Item label="Agege" value="Agege" key={1} />
                <Picker.Item
                  label="Ajeromi-Ifelodun"
                  value="Ajeromi-Ifelodun"
                  key={2}
                />
                <Picker.Item label="Alimosho" value="Alimosho" key={3} />
                <Picker.Item
                  label="Amuwo-odofin"
                  value="Amuwo Odofin"
                  key={4}
                />
                <Picker.Item label="Apapa" value="Apapa" key={5} />
                <Picker.Item label="Badagry" value="Badagry" key={6} />
                <Picker.Item label="Epe" value="Epe" key={7} />
                <Picker.Item label="Eti-osa" value="Eti Osa" key={8} />
                <Picker.Item label="Ibeju-lekki" value="Ibeju Lekki" key={9} />
                <Picker.Item label="Ifako-Ijaye" value="Ifako/Ijaye" key={10} />
                <Picker.Item label="Ikeja" value="Ikeja" key={11} />
                <Picker.Item label="Ikorudu" value="Ikorudu" key={12} />
                <Picker.Item label="Kosofe" value="Kosofe" key={13} />
                <Picker.Item
                  label="Lagos Island"
                  value="Lagos Island"
                  key={14}
                />
                <Picker.Item
                  label="Lagos Mainland"
                  value="Lagos Mainland"
                  key={15}
                />
                <Picker.Item label="Mushin" value="Mushin" key={16} />
                <Picker.Item label="Ojo" value="Ojo" key={17} />
                <Picker.Item
                  label="Oshodi-Isolo"
                  value="Oshodi/Isolo"
                  key={18}
                />
                <Picker.Item label="Shomolu" value="Shomolu" key={19} />
                <Picker.Item label="Surulere" value="Surulere" key={20} />
              </Picker>

              {props.errors.lga ? (
                <Text style={globalStyles.errorText}>
                  {props.touched.lga && props.errors.lga}
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
export default BirthDetailsRegistration;
