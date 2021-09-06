import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { FontAwesome } from "@expo/vector-icons";
import SectionTitle from "./sectionTitle";
import FormGroup from "./formGroup";
import CustomButton from "./customButton";
import { globalStyles } from "../shared/global";

const UploadImage = ({ onUpload, userDetails }) => {
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");

        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      }
    }
    await Permissions.askAsync(Permissions.CAMERA);
  };
  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        setPassport(result.uri);
      }
    } catch (E) {
      console.log(E);
    }
  };
  const [passport, setPassport] = useState(
    userDetails.passport ? userDetails.passport : null
  );

  const saveImageToServer = () => {
    onUpload({ passport: passport });
  };
  getPermissionAsync();

  return (
    <>
      <SectionTitle color="#aaa" title="Passport" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center",width:'100%' }}>
        {!passport && (
          <FontAwesome
            name="user"
            size={150}
            color="#aaa"
            style={{ marginBottom: 30 }}
          />
        )}
        {passport && (
          <>
            <Image
              source={{ uri: passport }}
              style={{ width: 150, height: 150, marginBottom: 30 }}
            />
            <FormGroup>
              <CustomButton small rounded title="Save Image" onPress={saveImageToServer} />
            </FormGroup>
          </>
        )}

        <FormGroup>
          <View style={[globalStyles.flexRow, { justifyContent: "center" }]}>
            <CustomButton small rounded title="Pick from Gallery" onPress={_pickImage} />
          </View>
        </FormGroup>
      </View>
    </>
  );
};
export default UploadImage;
