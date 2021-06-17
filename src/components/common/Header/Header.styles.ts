import styled from 'styled-components';
import { colors } from '../../../const/colors';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 7.2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.3125rem solid ${colors.baseDark};
    color: ${colors.white};
    padding: 0;
    border-bottom: 0.3rem solid ${colors.primary};
    font-size: 1rem;
    font-weight: bold;
    background: ${colors.auxilary};

    @media (min-width: 479px) {
        font-size: 2rem;
    }

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`