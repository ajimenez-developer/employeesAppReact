import React from "react";
import { sentence } from "../../../const/texts";
import { HeaderContainer } from './Header.styles';

class Header extends React.Component {
  render() {
      return (
        <HeaderContainer>
        <h1>{sentence.titleApp}</h1>
        </HeaderContainer>
      )
  }
}

export default Header;