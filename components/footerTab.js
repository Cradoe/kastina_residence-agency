import React from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
const FooterTabs = ({ navigation, userDetails,activeScreen }) => {
  return (
    <Footer>
      <FooterTab style={{ backgroundColor: "rgb(255,255,255)" }}>
        <Button
          onPress={() => navigation.navigate("Home")}
          active={activeScreen == "Home" ? true : false}
        >
          <Icon active={activeScreen == "Home" ? true : false} name="home" />
        </Button>
        <Button
          active={activeScreen == "Account" ? true : false}
          onPress={() => navigation.navigate("Account", userDetails)}
        >
          <Icon
            active={activeScreen == "Account" ? true : false}
            name="home"
            name="person"
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default FooterTabs;
