import React from "react"
import styled from "styled-components"
import VentureImage from "./VentureImage"

const Venture = () => (
  <Container>
    <VentureBox href="https://nemlia.com">
      <VentureImage fileName="nemlia.png" title="Nemlia" />
      <VentureDescription>
        <CompanyStyle>NEMLIA</CompanyStyle>
        <br />
        Role: <RoleStyle>CEO</RoleStyle>
        <br />
        Mission: Using technology to improve the quality of life for seniors.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://globetracker.com">
      <VentureImage fileName="globetracker.png" title="Globe Tracker" />
      <VentureDescription>
        {" "}
        <CompanyStyle>GLOBE TRACKER</CompanyStyle>
        <br />
        Role: <RoleStyle>Chairman of the Board</RoleStyle>
        <br />
        Mission: Remotely monitor and manage supply chain assets end-to-end.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://setur.fo/en">
      <VentureImage
        fileName="setur.png"
        title="University of the Faroe Islands"
      />
      <VentureDescription>
        {" "}
        <CompanyStyle>UNIVERSITY OF THE FAROE ISLANDS</CompanyStyle> <br />
        Role: <RoleStyle>Chairman of the Board</RoleStyle>
        <br />
        Mission: Providing higher education, research and public service for the
        benefit of the Faroese society.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://tokni.com">
      <VentureImage fileName="tokni.png" title="Tøkni" />
      <VentureDescription>
        {" "}
        <CompanyStyle>TØKNI</CompanyStyle>
        <br />
        Role: <RoleStyle>Founder and owner</RoleStyle>
        <br />
        Mission: Providing quality software solutions.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://klintra.com">
      <VentureImage fileName="klintra.png" title="Klintra" />
      <VentureDescription>
        {" "}
        <CompanyStyle>KLINTRA</CompanyStyle>
        <br />
        Role: <RoleStyle>Co-founder & Chairman of the Board</RoleStyle>
        <br />
        Mission: A cutting edge provider of customized software solutions and a
        key player in shaping the digital future of the Faroe Islands.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://oceanrainforest.com">
      <VentureImage fileName="oceanrainforest.png" title="Ocean Rainforest" />
      <VentureDescription>
        {" "}
        <CompanyStyle>OCEAN RAINFOREST</CompanyStyle>
        <br />
        Role: <RoleStyle>Co-founder and Board Member</RoleStyle>
        <br />
        Mission: Cultivating sustainable Nordic seaweed in pristine ocean
        waters, improving people’s wellbeing and making a unique contribution to
        our blue planet.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://tilmelding.fo">
      <VentureImage fileName="tilmelding.png" title="Tilmelding" />
      <VentureDescription>
        {" "}
        <CompanyStyle>Tilmelding</CompanyStyle>
        <br />
        Role: <RoleStyle>Principal</RoleStyle>
        <br />
        Mission: Providing a complete online ticketing system for event
        organisers.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://gaman.fo">
      <VentureImage fileName="gaman.png" title="Gaman" />
      <VentureDescription>
        {" "}
        <CompanyStyle>GAMAN</CompanyStyle>
        <br />
        Role: <RoleStyle>Co-founder</RoleStyle>
        <br />
        Mission: Creating the first professional games development studio in the
        Faroe Islands.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://kt.fo">
      <VentureImage
        fileName="ktfo.png"
        title="Faroese IT Industry Association"
      />
      <VentureDescription>
        {" "}
        <CompanyStyle>FAROESE IT INDUSTRY ASSOCIATION</CompanyStyle> <br />
        Role: <RoleStyle>Board Member</RoleStyle>
        <br />
        Mission: Enabling the IT industry to be a significant contributor to the
        Faroese economy.
      </VentureDescription>
    </VentureBox>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15vw;
`

const VentureBox = styled.a`
  margin: 20px;
  width: 360px;
  background: rgb(255, 255, 255, 0.7);
  padding: 0;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`

const VentureDescription = styled.div`
  margin: 20px 0;
  padding: 20px;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: black;
`

const CompanyStyle = styled.span`
  font-weight: 700;
`

const RoleStyle = styled.span`
  font-weight: 700;
`

export default Venture
