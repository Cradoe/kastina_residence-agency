import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useInterval } from "../hooks/useInterval";

const Header = ( props ) => {
  const date = new Date();
  const leadingZero = ( val ) => {
    if ( val.toString().length === 1 ) {
      return "0" + val.toString();
    } else {
      return val;
    }
  };
  const [ sec, setSec ] = useState( date.getSeconds() );
  const [ min, setMin ] = useState( date.getMinutes() );
  const [ hr, setHr ] = useState( date.getHours() );
  const [ timePeriod, setTimePeriod ] = useState(
    date.getHours() >= 12 ? "PM" : "AM"
  );

  useInterval( () => {
    if ( sec === 59 ) {
      setSec( 1 );
      if ( min == 59 ) {
        setMin( 1 );
        setHr( hr + 1 );
        // if (date.getHours() >= 12) {
        //   setTimePeriod("PM");
        // } else {
        //   setTimePeriod("AM");
        // }
      } else {
        setMin( min + 1 );
      }
    } else {
      setSec( sec + 1 );
    }
  }, 1000 );
  return (
    <>
      <View style={styles.header}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "70%"
          }}
        >
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require( "../assets/images/LOGO-Katsina.jpg" )}
          />
          <Text style={styles.logoSubTitle}>
            Lagos State Residence Registraion Agency
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: "25%"
          }}
        >
          <Text
            style={[
              styles.logoSubTitle,
              { textAlign: "left", fontFamily: "TickingTimebombBB" }
            ]}
          >{`${date.getDate()}/${date.getMonth() + 1
            }/${date.getFullYear()}`}</Text>
          <Text
            style={[
              styles.logoSubTitle,
              { textAlign: "right", fontFamily: "TickingTimebombBB" }
            ]}
          >{`${leadingZero( hr )}:${leadingZero( min )}:${leadingZero( sec )}`}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create( {
  header: {
    width: "100%",
    height: "100%"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#333",
    letterSpacing: 1
  },
  headerImage: {
    width: "100%",
    height: 30
  },
  logoSubTitle: {
    color: "#fff",
    fontFamily: "nunito-regular",
    fontSize: 11
  }
} );
export default Header;
