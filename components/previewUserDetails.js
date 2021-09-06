import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView
} from "react-native";
import { globalStyles } from "../shared/global";
import SectionTitle from "./sectionTitle";
import Hr from "./Hr";
import FormGroup from "./formGroup";
import CustomButton from "./customButton";
const PreviewUserDetails = ({ userDetails, onConfirmed, onBack }) => {
  const {
    firstName,
    lastName,
    middleName,
    gender,
    dob,
    address,
    nameOfFather,
    nameOfMother,
    lga,
    occupation,
    phoneNumber,
    emailAddress,
    nextOfKin,
    passport
  } = userDetails;

  return (
    <>
      <SectionTitle color="#aaa" title="Confirm Your Data" />
      <View style={{ width: "100%" }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
            width: "100%"
          }}
        >
          <Image
            style={globalStyles.profilePicture}
            source={{ uri: passport }}
          />
        </View>

        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Fullname:{" "}
            <Text
              style={{ color: "#aaa" }}
            >{`${firstName} ${middleName} ${lastName}`}</Text>
          </Text>
        </View>

        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Gender: <Text style={{ color: "#aaa" }}>{gender}</Text>
          </Text>
        </View>

        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Email Address: <Text style={{ color: "#aaa" }}>{emailAddress}</Text>
          </Text>
        </View>

        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Phone Number: <Text style={{ color: "#aaa" }}>{phoneNumber}</Text>
          </Text>
        </View>

        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Date Of Birth: <Text style={{ color: "#aaa" }}>{dob}</Text>
          </Text>
        </View>
        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Address: <Text style={{ color: "#aaa" }}>{address}</Text>
          </Text>
        </View>

        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Father's Name: <Text style={{ color: "#aaa" }}>{nameOfFather}</Text>
          </Text>
        </View>
        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Mother's Name: <Text style={{ color: "#aaa" }}>{nameOfMother}</Text>
          </Text>
        </View>
        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />

        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Local Govt.: <Text style={{ color: "#aaa" }}>{lga}</Text>
          </Text>
        </View>
        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#ccc" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Occupation: <Text style={{ color: "#aaa" }}>{occupation}</Text>
          </Text>
        </View>

        <Hr style={{ borderStyle: "dotted", borderBottomColor: "#eee" }} />
        <View style={[globalStyles.flexRow, styles.listItem]}>
          <Text style={{ color: "#aaa" }}>
            Next of Kin: <Text style={{ color: "#aaa" }}>{nextOfKin}</Text>
          </Text>
        </View>
      </View>
      <FormGroup>
        <CustomButton
          spinOnClick={true}
          title="I have confirmed the data"
          onPress={onConfirmed}
        />
      </FormGroup>
      <FormGroup>
        <CustomButton
          style={{ backgroundColor: "#00B386" }}
          title="There's a mistake"
          onPress={onBack}
        />
      </FormGroup>
    </>
  );
};
export default PreviewUserDetails;

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10
  }
});
