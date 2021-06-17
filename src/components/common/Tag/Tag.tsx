import React from "react";
import { Icon, TagContainer, TextTag } from "./Tag.styles";

interface Props {
  text: string
  icon: string
  link?: string
}

class Tag extends React.Component<Props> {
  render() {
    return (
      <TagContainer>
        <Icon src={this.props.icon}></Icon>
        <a href={this.props.link} target="__blank"><TextTag>{this.props.text}</TextTag></a>
      </TagContainer>
    )
  }
}

export default Tag;