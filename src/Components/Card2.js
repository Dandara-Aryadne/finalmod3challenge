import React from "react"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`
const Container = styled.section`
 border: solid blue;
`

export default function Card2(){

    return(
        <>
        <Container>
            <GlobalStyle/>
            <div>
                <h2></h2>
                <h1></h1>
                <h2></h2>
            </div>
            <div>
                <img/>
            </div>
            <div>
                <h3></h3>
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </Container>
        </>
    )
}