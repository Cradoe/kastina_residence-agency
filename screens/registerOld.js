import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ImageBackground
} from "react-native";

import { globalStyles, storeData, CONSTANTS } from "../shared/global";

import Constants from "expo-constants";
import { CommonActions } from "@react-navigation/native";
import BasicDetailsForm from "../components/basicDetails";
import BirthDetailsRegistration from "../components/birthDetailsRegistration";
import PersonalDetails from "../components/personalDetails";
import UploadImage from "../components/uploadImage";
import PreviewUserDetails from "../components/previewUserDetails";

const Register = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = (values) => {
    setUserDetails({
      ...userDetails,
      ...values
    });

    let step = currentStep;
    if (step >= 1 && step < 5) {
      setCurrentStep(step + 1);
    }
  };
  const handleGoPrevious = () => {
    let step = currentStep;
    if (step === 5) {
      setCurrentStep(1);
      return;
    }
    if (step > 1 && step <= 5) {
      setCurrentStep(step - 1);
    }
  };
  const registerUser = () => {
    let details = {
      action: "registerAccount",
      ...userDetails
    };

    fetch(CONSTANTS.serverApiUrl, {
      method: "POST",
      body: JSON.stringify(details)
    })
      .then(async (data) => {
        const response = await data.json();
        if (response.status === 200 && response.success === true) {
          setUserDetails({
            ...userDetails,
            regNo: response.regNo
          });
        } else {
          Alert.alert("Registration Failed!", response.message);
          console.log(response.message);
        }
      })
      .catch((error) => {
        Alert.alert(
          "Registration Failed!",
          "Unable to retrieve data from server."
        );
        console.log(error);
      });
  };

  const navigateToHome = (userDetails) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home", params: userDetails }]
      })
    );
  };
  useEffect(() => {
    if (userDetails.regNo) {
      Alert.alert("Holla!",` Your registration number is ${userDetails.regNo}. Keep it safe.`);
      storeData("userData", userDetails);
      setTimeout(()=>{
        navigateToHome(userDetails);
      },1000)
    }
  }, [userDetails]);

  return (
       <SafeAreaView style={styles.pageWrapper}>
      <ImageBackground
        source={require("../assets/images/lagos-bg-5.jpg")}
        style={globalStyles.backgroundImage}
      >
         <View style={globalStyles.overlay}>
      <ScrollView
            style={{ flex: 1, height: "100%" }}
            contentContainerStyle={{ justifyContent: "center" }}
          >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          
            {currentStep === 1 ? (
              <BasicDetailsForm
                userDetails={userDetails}
                onSubmit={handleSubmit}
              />
            ) : currentStep === 2 ? (
              <BirthDetailsRegistration
                userDetails={userDetails}
                onSubmit={handleSubmit}
              />
            ) : currentStep === 3 ? (
              <PersonalDetails
                userDetails={userDetails}
                onSubmit={handleSubmit}
              />
            ) : currentStep === 4 ? (
              <UploadImage userDetails={userDetails} onUpload={handleSubmit} />
            ) : (
              <PreviewUserDetails
                onConfirmed={registerUser}
                onBack={handleGoPrevious}
                userDetails={userDetails}
              />
            )}
            {currentStep === 1 ? (
              <View style={[globalStyles.flexRow, globalStyles.spaceAround]}>
                <Text style={{color:"#aaa"}}>Have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={[globalStyles.textBold,{color:'#aaa'}]}>Click here to Login</Text>
                </TouchableOpacity>
              </View>
            ) : null}
         
        </View>
      </TouchableWithoutFeedback>
      </ScrollView></View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1
  },
  formContainer: {
    marginTop: 70,
    flex: 1,
    padding: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
    minHeight: Math.round(Dimensions.get('window').height) - 100 - Constants.statusBarHeight
  }
});
export default Register;
