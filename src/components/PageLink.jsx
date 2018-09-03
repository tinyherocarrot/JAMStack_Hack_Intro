import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'

const PageLink = ({ children, to }) => {
    return (
        <div style={{height: "20px", float: "right"}}>
            <StyledLink to={to}>{children}</StyledLink>
        </div>
    )
}

export default PageLink

const StyledLink = styled(Link)`

    /* border-bottom: 5px solid #7a6b8c; */
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
    color: black;
    margin: 7px;
    text-decoration: none;
    transition-property: color;
    transition-duration: .1s;
    transition-timing-function: ease-in-out; 
    position: relative;

    &::after {
        content: "";
        z-index: -1;
        padding-right: 100%;
        margin-left: -100%;
        outline: solid #7a6b8c;
        position: absolute;
        bottom: -0.3em;
        left: 100%;
        background: #7a6b8c;
        transition: height 2s ease-in-out;
    }

    &:hover {
        color: white;
        &::after { 
            height: 100%;
        }
    }

`
const linkhover = keyframes`
    from {
        height: 0%;
    }

    to {
        height: 100%
    }
`;

// - - - - - - - - - - - - 

// // Define our button, but with the use of props.theme this time
// const Button = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;

//   /* Color the border and text with theme.main */
//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
// `;

// // We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
// Button.defaultProps = {
//   theme: {
//     main: "palevioletred"
//   }
// }


// render(
//   <div>
//     <Button>Normal</Button>

//     <ThemeProvider theme={theme}>
//       <Button>Themed</Button>
//     </ThemeProvider>
//   </div>
// );