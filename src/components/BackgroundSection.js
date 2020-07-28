import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "traelanipa.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid
  return (
    <StyledFullScreenWrapper>
      <StyledWrapper>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          title="Olavur Ellefsen"
          id="olavurellefsen"
          role="img"
          aria-label="Olavur Ellefsen"
        >
          {children}
        </BackgroundImage>
      </StyledWrapper>
    </StyledFullScreenWrapper>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  &:before,
  &:after {
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  @media (hover: none) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    &:before,
    &:after {
      background-attachment: scroll;
      background-position: center top;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  place-content: start;
`

const StyledFullScreenWrapper = styled.div`
  width: 100%;
  display: flex;
`

export default StyledBackgroundSection
