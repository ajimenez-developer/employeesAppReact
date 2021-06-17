import React from 'react';
import { ButtonContainer } from './Button.styles';

interface Props {
    text: string
    onClick?: () => void
    isSecondary?: boolean
    asCloseIcon?: boolean
    disabled?: boolean
}

interface State {
    secondary: boolean
}

class Button extends React.Component<Props, State> {

  state: State = {
    secondary: this.props.isSecondary ? this.props.isSecondary : false
  }
    render() {
        return (
            <ButtonContainer 
                onClick={this.props.onClick} 
                isSecondary={this.state.secondary}
                asCloseIcon={this.props.asCloseIcon ? true : false}
                disabled={this.props.disabled ? true : false} >
                <span>{this.props.text}</span>
            </ButtonContainer>
        )
    }
}

export default Button;