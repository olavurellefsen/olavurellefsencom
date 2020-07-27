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
        <Heading>
          Hi, I am Ólavur Ellefsen, a software engineer and entrepreneur from
          the Faroe Islands.
        </Heading>
        <Intro>
          I strive to build businesses and institutions that strengthen the local
          community and make the world a better place. Connect with
          me on{" "}
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
  padding: 7vh 20vw;
  text-align: center;
  color: black;
`

const Heading = styled.h1`
  margin: 0;
  padding: 0 0 20px 0;
  font-family: Nunito Sans;
  font-size: 48px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
`

const Intro = styled.div`
  margin: 0;
  padding: 0px;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 1024px) {
    font-size: 18px;
    background-color: rgb(255,255,255,0.5);
  }
`

const ExternalLink = styled.a`
  color: black;
`

export default IndexPage
