import styled from "styled-components";
import { colors } from "../../../const/colors";

export const ModalContainer = styled.div`
  background-color: rgba(51, 51, 51, .8);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;    
  z-index: 99;
`

export const ModalWrapper= styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    width: 90%;
    max-width: 36rem;
    margin: 5vh auto;
    position: relative;
    border: 5px solid ${colors.auxilary};
    box-sizing: border-box;
    
    @media (min-width: 479px) {
      width: 100%;
      margin: 20vh auto;
    }

    /* @media (min-width: 768px) {
      width: 18rem;
    } */

`


export const ModalHeader = styled.div`
    padding: 2rem 0;
    border-bottom: 2px solid ${colors.auxilary};
    width: 100%;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    background-color: ${colors.primary};
    color: ${colors.white};
`
