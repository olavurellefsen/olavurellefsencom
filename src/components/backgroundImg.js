import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundImg = ({ fileName, gradient }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: allFile(
          filter: { relativeDirectory: { eq: "backgrounds" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.placeholderImage.edges.find(
        ({ node }) => node.relativePath === "backgrounds/" + fileName
      ).node
      if (!image) {
        return null
      }
      const overlayGradient = `linear-gradient(rgba(0, 0, 0, ${gradient.from}), rgba(0,0, 0, ${gradient.to}))`
      const imageData = image.childImageSharp.fluid
      return (
        <StyledBackground>
          <BackgroundImage fluid={[overlayGradient, imageData]} />
        </StyledBackground>
      )
    }}
  />
)

const StyledBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: auto;
  background-color: transparent;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center 155%, center, center;
  color: #fff;  
`

export default BackgroundImg
