import styled from 'styled-components';
import { colors } from '../../../const/colors';

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    border-top: 0.3125rem solid ${colors.primary};
    background: ${colors.auxilary};
    padding: 2rem;
    font-weight: bold;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export const FooterInfo = styled.article`
    color: ${colors.white};
    margin-bottom: 0.75rem;
`

export const FooterContact = styled.article`

`