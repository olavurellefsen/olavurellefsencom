import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"

const IndexPage = () => (
  <Layout>
    <BackgroundSection>
      <SEO title="Home" />
      <Container>
        <Heading>Hi, I am Ólavur Ellefsen, entrepreneur from the Faroe Islands.</Heading>
        <Intro>
          I build businesses to improve and benefit the local community and the world.
          Email me at olavur@ellefsen.fo, call me on +298 556600, or connect
          with me on{" "}
          <ExternalLink href="https://twitter.com/olavur">Twitter</ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://linkedin.com/in/olavurellefsen">
            LinkedIn
          </ExternalLink>
          .
        </Intro>
      </Container>
    </BackgroundSection>
  </Layout>
)

const Container = styled.div`
  padding: 10vh 20vw;
  text-align: center;
  color: black;
`

const Heading = styled.h1`
  margin: 0;
  padding: 0 0 20px 0;
  font-family: EB Garamond;
  font-weight: 700;
`

const Intro = styled.div`
  margin: 0;
  padding: 10px;
  font-family: EB Garamond;
  font-weight: 400;
  font-size: 24px;
`

const ExternalLink = styled.a`
  color: black;
`

export default IndexPage
