import styled from 'styled-components';
import { colors } from '../const/colors';

export const AppWrapper = styled.section` 
  min-height: calc(100% - 17.2rem);
`

export const Separator = styled.section`
  margin-top: 3rem;
  border-top: 3px solid ${colors.auxilary};
  padding-top: 1rem;
`

export const SelectOption = styled.select`
  background-color: ${colors.white};
  border: 1px solid ${colors.baseLight};
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.4rem 0.5rem;
  box-sizing: border-box;
  color: ${colors.auxilary};
`
export const InputGeneral = styled.input`
  background-color: ${colors.white};
  border: 1px solid ${colors.baseLight};
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.4rem 0.5rem;
  box-sizing: border-box;
  color: ${colors.auxilary};

  :disabled{
    cursor: not-allowed;
  }
`