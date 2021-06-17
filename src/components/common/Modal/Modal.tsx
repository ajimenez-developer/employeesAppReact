import React from 'react';
import Button from '../Button/Button';
import { ModalContainer, ModalHeader, ModalWrapper } from './Modal.styles';

interface Props {
  title: string
  show?: boolean
  children?: any  
  onClose: () => void
}

interface State {
  showModalState: boolean
}

class Modal extends React.Component<Props, State> {
  render() {
    const { onClose } = this.props
      return (
        <ModalContainer>
          <ModalWrapper>
              <ModalHeader>
                <h3>{this.props.title}</h3> 
                <Button isSecondary asCloseIcon text={'X'} onClick={onClose} />
              </ModalHeader>
              {this.props.children}
          </ModalWrapper>
        </ModalContainer>
      )
  }

  isOpenModal = () => {
    this.setState({
      showModalState: true
    })
  };
}

export default Modal;