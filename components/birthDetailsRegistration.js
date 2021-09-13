import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Text, Picker } from "react-native";

import { globalStyles } from "../shared/global";
import FormGroup from "../components/formGroup";
import CustomButton from "../components/customButton";
import SectionTitle from "./sectionTitle";
import { Input, Label } from "native-base";

const detailsSchema = yup.object( {
  dob: yup
    .string( "Date of Birth must be in letters." )
    .min( 3, "Date of Birth must more than 3 characters." )
    .required( "Date of Birth is required." ),
  address: yup
    .string( "Address must be in letters." )
    .min( 3, "Address must more than 3 characters." )
    .required( "Address is required." ),
  nameOfFather: yup
    .string( "Father's Name must be in letters." )
    .min( 3, "Father's Name must more than 3 characters." )
    .required( "Father's Name is required." ),
  nameOfMother: yup
    .string( "Mother's Name must be in letters." )
    .min( 4, "Mother's Name must more than 4 characters." )
    .required( "Mother's Name is required." ),
  lga: yup
    .string( "Local Govt. must be in letters." )
    .min( 2, "Local Govt. Name must more than 2 characters." )
    .required( "Local Govt. Name is required." )
} );

const BirthDetailsRegistration = ( { onSubmit, userDetails } ) => {
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
        onSubmit={( values ) => {
          onSubmit( values );
        }}
      >
        {( props ) => (
          <>
            <FormGroup>
              <Label style={globalStyles.label}>Date of Birth</Label>

              <Input
                style={globalStyles.formControl}
                onChangeText={props.handleChange( "dob" )}
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
                onChangeText={props.handleChange( "address" )}
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
                onChangeText={props.handleChange( "nameOfFather" )}
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
                onChangeText={props.handleChange( "nameOfMother" )}
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
                onValueChange={( itemValue ) =>
                  props.setFieldValue( "lga", itemValue )
                }
              >
                <Picker.Item label="Select" value={null} key={0} />
                <Picker.Item label="Kankia" value="Kankia" key={1} />
                <Picker.Item
                  label="Batagarawa"
                  value="Batagarawa"
                  key={2}
                />
                <Picker.Item label="Katsina" value="Katsina" key={3} />
                <Picker.Item
                  label="Dutsin-ma"
                  value="Dutsin-ma"
                  key={4}
                />
                <Picker.Item label="Charanchi" value="Charanchi" key={5} />
                <Picker.Item label="Mani" value="Mani" key={6} />
                <Picker.Item label="Batsari" value="Batsari" key={7} />
                <Picker.Item label="Faskari" value="Faskari" key={8} />
                <Picker.Item label="Sabuwa" value="Sabuwa" key={9} />
                <Picker.Item label="Kankara" value="Kankara" key={10} />
                <Picker.Item label="Daura" value="Daura" key={11} />
                <Picker.Item label="Rimi" value="Rimi" key={12} />
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
