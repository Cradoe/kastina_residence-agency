import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import Expo, { Constants } from 'expo';
import DropdownAlert from 'react-native-dropdownalert';
import * as LocalAuthentication from 'expo-local-authentication';
import { FontAwesome5 } from '@expo/vector-icons';
export default class App extends Component {
  state = {
    compatible: false,
    result:{}
  };

  componentDidMount() {
    this.checkDeviceForHardware();
  }

  checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    this.setState({ compatible });
    if (!compatible) {
      this.showIncompatibleAlert();
    }
  };

  showIncompatibleAlert = () => {
    this.dropdown.alertWithType(
      'error',
      'Incompatible Device',
      'Current device does not have the necessary hardware to use this API.'
    );
  };

  checkForBiometrics = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      this.dropdown.alertWithType(
        'warn',
        'No Biometrics Found',
        'Please ensure you have set up biometrics in your OS settings.'
      );
    } else {
      this.handleLoginPress();
    }
  };

  handleLoginPress = () => {
    if (Platform.OS === 'android') {
      this.showAndroidAlert();
    } else {
      this.scanBiometrics();
    }
  };

  showAndroidAlert = () => {
    // this.dropdown.alertWithType(
    //     'info',
    //     'Fingerprint Scan!',
    //     'Place your finger over the touch sensor.'
    //   );
    this.scanBiometrics();
  };

  scanBiometrics = async () => {
    let result = await LocalAuthentication.authenticateAsync({
        promptMessage  : 'Biometric Scan.'
    });
    if (result.success) {
        this.setState({ result });
      this.dropdown.alertWithType(
        'success',
        'You are you!',
        'Bio-Authentication succeeded.'
      );
    } else {
      this.dropdown.alertWithType(
        'error',
        'Uh oh!',
        'Bio-Authentication failed or canceled.'
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FontAwesome5 name="fingerprint" size={100} color="white" />
        <TouchableOpacity
          onPress={
            this.state.compatible
              ? this.checkForBiometrics
              : this.showIncompatibleAlert
          }
          style={styles.button}>
          <Text style={styles.buttonText}>
            Capture
          </Text>
        </TouchableOpacity>
        {this.state.result ? (<Text>{JSON.parse(this.state.result)}</Text>) : null}
        <DropdownAlert
          ref={ref => (this.dropdown = ref)}
          closeInterval={5000}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    backgroundColor: '#C50E11',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.30)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    height: 128,
    width: 128,
  },
});