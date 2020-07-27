import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"
import Venture from "../components/Venture"

const IndexPage = () => (
  <Layout>
    <BackgroundSection id="top">
      <SEO title="Home" />
      <Container>
        <Heading>
          Hi, I am Ólavur Ellefsen, a software engineer and{" "}
          <Highlight>entrepreneur</Highlight> from the Faroe Islands.
        </Heading>
        <Intro>
          I strive to build businesses and institutions that strengthen the
          Faroese community and make the world a better place. Connect with me
          on{" "}
          <ExternalLink href="https://twitter.com/olavur">Twitter</ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://linkedin.com/in/olavurellefsen">
            LinkedIn
          </ExternalLink>
          .
        </Intro>
        <ButtonContainer>
          <StyledLink to="/#ventures">My work</StyledLink>
        </ButtonContainer>
        <ProjectsContainer id="ventures">
          <ButtonContainer>
            <StyledLink to="/#top">up</StyledLink>
          </ButtonContainer>
          <Heading>My work</Heading>
          <Venture />
        </ProjectsContainer>
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
  font-family: Source Sans Pro;
  font-size: 48px;
  font-weight: 900;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
`

const Highlight = styled.span`
  color: #00a050;
`

const Intro = styled.div`
  margin: 0;
  padding: 0px;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 1024px) {
    font-size: 16px;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 10px;
  }
`

const ExternalLink = styled.a`
  color: black;
`

const ButtonContainer = styled.div`
  margin: 40px 0;
`

const StyledLink = styled(Link)`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  padding: 10px 30px;
  margin: 40px 0;
  background-color: transparent;
  border: 1px solid white;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`

const ProjectsContainer = styled.div`
  margin-top: 70vh;
  padding: 40px 0 1600px 0;
`

export default IndexPage
