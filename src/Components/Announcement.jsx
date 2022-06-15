import styled from "styled-components"
import React from 'react'

function Announcement() {
    const Container=styled.div` 
        height:30px;
        background-color:teal;
        color:white;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
    `
  return (
    <Container>
        Super Deal ! Free Shiping on Order Over $50
    </Container>
  )
}

export default Announcement
