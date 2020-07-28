import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const VentureImage = ({ fileName, title = "" }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: allFile(
          filter: { relativeDirectory: { eq: "ventures" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 360, quality: 80) {
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
        ({ node }) => node.relativePath === "ventures/" + fileName
      ).node
      if (!image) {
        return null
      }
      const imageData = image.childImageSharp.fluid
      return (
        <StyledImage
          fluid={imageData}
          title={title}
        />
      )
    }}
  />
)

export const StyledImage = styled(Img)`
  width: 360px;
  height: 240px;
  border-radius: 6px;
  @media (max-width: 370px) {
  {
    width: 318px;
    height: 212px;
  }
`

export default VentureImage
