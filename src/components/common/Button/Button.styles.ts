import styled, { css } from "styled-components";
import { colors } from "../../../const/colors";

export const ButtonContainer = styled.button<{ isSecondary: boolean; asCloseIcon: boolean, disabled: boolean }>`
    width: 9.375rem;
    height: auto;
    font-size: 0.7rem;
    line-height: 1rem;
    font-weight: bold;
    border: 3px solid;
    background-color: ${p => p.isSecondary ? `${colors.secondary}` : `${colors.primary}`};
    border-color: ${p => p.isSecondary ? `${colors.secondary}` : `${colors.primary}`};
    cursor:  ${p => p.disabled ? 'not-allowed' : 'pointer'};
    opacity:  ${p => p.disabled ? 0.3 : 1};
    text-transform: uppercase;
    padding: 0.5rem  0.3125rem;
    margin: 1em;
    border-radius: 0.75rem;
    span {
        color: ${colors.white}
    }
        
    &:hover {
        background-color: ${colors.white};
        span {
            color: ${p => p.isSecondary ? `${colors.secondary}` : `${colors.primary}`};
        }
    }

    @media (min-width: 479px) {
        font-size: 0.7rem;
        padding: 0.625rem  0.3125rem;
    }

    @media (min-width: 768px) {
    }

    ${p => p.asCloseIcon && 
        css`
            position: absolute;
            top: 0;
            right: 0;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 0;
            padding: 0;
            margin: 0.75rem;
            border: 0;
            line-height: 1.5rem;

            &:hover {
                background-color: ${colors.secondary};
                span {
                    color: ${colors.white};
                }
            }

            span {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                right: 0;
            }
        `
    }
`