import styled, { css } from "styled-components";

export const StripesContainer = styled.div `
${css `
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: row;
}
`}

    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 30px 0;

    div {
        max-width: 1024px;
        height: 1px;
        width: 100%;
        background-color: ${props => props.theme.colors.yellow};
    }

    
`