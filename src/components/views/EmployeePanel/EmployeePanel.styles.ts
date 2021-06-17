import styled from 'styled-components';
import { colors } from '../../../const/colors';

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-around;
  color: ${colors.baseDark};
  padding: 1rem;
`

export const ButtonsContainer = styled.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;

  flex-direction: column;
  padding: 0 1rem;

  @media (min-width: 479px) {
    flex-direction: row;
    padding: 2rem 1rem;
  }

  @media (min-width: 768px) {

  }
`

export const SearchContainer = styled.section`
  width: 100%;
  display: block;

  @media (min-width: 479px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
  }
`
export const LabelWrapper = styled.article`
  display: block;
  width: 12.5rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: inline-block;
  }
`

export const InputWrapper = styled.article`  
  display: block;
  width: 100%;
  box-sizing: border-box;

  
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(100% - 12.5rem);
    max-width: 22rem;
  }
`
