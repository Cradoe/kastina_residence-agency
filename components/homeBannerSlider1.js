import React from "react";
import { View, Image, Text } from "react-native";
const SliderOne = (styles)=>{
    return (<View style={styles.banner}>
        <View style={[styles.innerView,{maxWidth:'30%'}]}>
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: 108, }}
          source={require("../assets/images/lagos.png")}
        />
        <Text style={styles.caption}>Centre of excellence</Text>
        </View>
        <View style={[styles.innerView,{width:'70%'}]}>
        {govBannerImage ? (
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: 108 }}
            source={{
              uri: `${CONSTANTS.serverImageStoragePath}${govBannerImage}`
            }}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: 108 }}
            source={require("../assets/images/gov-banner-holder.jpg")}
          />
        )}
        <Text style={styles.caption}>Gov. Babajide Sanwo-olu</Text>
      </View>
      </View>
      )
}
export default SliderOne;