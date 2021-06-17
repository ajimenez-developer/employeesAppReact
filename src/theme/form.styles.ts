import { Field } from 'formik';
import styled from 'styled-components';
import { colors } from '../const/colors';

export const FormContainer = styled.article`
  width: calc(100% - 2rem);
  margin: 1em;
  padding: 1em;
  box-sizing: border-box;
  border: 1px solid ${colors.baseLight};
`

export const Label = styled.label`
  margin-top: 1rem;
  width: 100%;
  box-sizing: border-box;
  display: block;
  color: ${colors.auxilary};
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Input = styled(Field)`
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

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid ${colors.auxilary};
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: ${colors.white};
    border: 1px solid ${colors.auxilary};
    box-shadow: 0 0 0px 1000px ${colors.white} inset;
    -webkit-box-shadow: 0 0 0px 1000px ${colors.white} inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${colors.auxilary};
  }  
`

export const ContainerButtonsForm = styled.article`
  display: block;
  text-align: right;
  margin-top: 2rem;
`

export const ButtonForm = styled.button<{ isSecondary?: boolean, disabled?: boolean }>`
  border: 1px solid ${props => props.isSecondary ? `${colors.secondary}` : `${colors.primary}`};
  padding: 0.5rem;
  color: ${props => props.isSecondary ? `${colors.white}` : `${colors.primary}`};
  background: ${props => props.isSecondary ? `${colors.secondary}` : `${colors.white}`};
  text-transform: uppercase;
  font-weight: bold;
  margin: 1rem 0 0 1rem;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};;


  &:hover {
    color: ${colors.white};
    background: ${props => props.isSecondary ? `${colors.secondary}` : `${colors.primary}`};
  }

`

export const InlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`