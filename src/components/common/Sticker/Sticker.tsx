import React from 'react';
import Button from '../Button/Button';
import { StickerInfo } from './Sticker.models';
import { LabelSticker, StickerContainer } from './Sticker.styles';

interface Props {
  infoSticker: StickerInfo
  onClose: () => void
}


class Sticker extends React.Component<Props> {
  render() {
    const { onClose, infoSticker } = this.props
    return (
      <StickerContainer>
        <LabelSticker>
          {infoSticker.name+' '+infoSticker.message}
          <Button isSecondary asCloseIcon text={'X'} onClick={onClose} />
        </LabelSticker>
      </StickerContainer>
    )
  }
}

export default Sticker;