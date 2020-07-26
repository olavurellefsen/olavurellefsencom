import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "traelanipa.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
          title="gbitest"
          id="gbitest"
          role="img"
          aria-label="gbitest"
        >
          {children}
        </BackgroundImage>
      </StyledWrapper>
    </StyledFullScreenWrapper>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
`

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`

const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`

export default StyledBackgroundSection