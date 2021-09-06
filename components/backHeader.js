import React from 'react'
import {
  Button,
  Header,
  Left,
  Icon,
  Right
} from "native-base";
const BackHeader = ({navigation}) => {
    return (
      <Header noShadow transparent style={{ backgroundColor: "transparent" }}>
        <Left>
          <Button transparent onPress={()=>{navigation.goBack()}}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Right />
      </Header>
    );
}
export default BackHeader;