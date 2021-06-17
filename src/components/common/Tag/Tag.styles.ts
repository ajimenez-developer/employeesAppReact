import styled from 'styled-components';
import { colors } from '../../../const/colors';

export const TagContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 0.75rem;
  padding-bottom: 0;
  box-sizing: border-box;
  flex-direction: column;
  align-content: center;
  color: ${colors.white};
  flex-direction: row;
  a {
    color: ${colors.white};
    text-decoration: none;
  }
`

export const TextTag = styled.p`
  line-height: 1.2rem;
  padding-top: 0.0;
  padding-bottom: 0.75rem;
`

export const Icon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1rem;
`
