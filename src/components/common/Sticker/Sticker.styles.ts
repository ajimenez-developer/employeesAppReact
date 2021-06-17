import styled from "styled-components";
import { colors } from "../../../const/colors";

export const StickerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  `

export const LabelSticker = styled.span`
  position: relative;
  color: ${colors.auxilary};
  background-color: rgb(153, 23, 60, 0.1);
  border-radius: 0.3rem;
  display: block;
  height: 3em;
  width: 90%;
  padding: 1.5rem 1em 0 1em;
  margin: 3em auto;
  font-weight: bold;
  -moz-box-shadow:5px 5px 7px rgba(33,33,33,1);
  -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  text-align: center;
  line-height: 1.5rem;
`