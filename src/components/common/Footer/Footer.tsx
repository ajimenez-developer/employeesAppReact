import React from "react";
import Tag from "../Tag/Tag";
import linkedin from "../../../images/svg/linkedn.svg";
import mail from "../../../images/svg/mail.svg"
import { FooterContact, FooterContainer, FooterInfo } from "./Footer.styles";
import { sentence } from "../../../const/texts";

const urlLinkedIn :string = 'https://www.linkedin.com/in/antonio-jimenez-gallego-3b9a1052/'
class Footer extends React.Component {
  render() {
      return (
        <FooterContainer>
          <FooterInfo>{sentence.byMe}</FooterInfo>
          <FooterContact>
            <Tag text={'ajimenez.developer@gmail.com'} icon={mail} />
            <Tag text={'LinkedIn'} icon={linkedin} link={urlLinkedIn}/>
          </FooterContact>
        </FooterContainer>
      )
  }
}

export default Footer;