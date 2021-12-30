import React from "react"
import styled from "styled-components"
import VentureImage from "./VentureImage"

const Venture = () => (
  <Container>
    <VentureBox href="https://tokni.com">
      <VentureImage fileName="tokni.png" title="Tøkni" />
      <VentureDescription>
        {" "}
        <CompanyStyle>TØKNI</CompanyStyle>
        <br />
        Role: <RoleStyle>Founder and CEO</RoleStyle>
        <br />
        Mission: Creating engaging learning experiences online and in classrooms around the world.
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
        Mission: Enabling the Faroese knowledge society with higher education,
        research and public service.
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
        Mission: Providing customized software solutions and being a
        key player in shaping the digital future of the Faroe Islands.
      </VentureDescription>
    </VentureBox>
    <VentureBox href="https://oceanrainforest.com">
      <VentureImage fileName="oceanrainforest.png" title="Ocean Rainforest" />
      <VentureDescription>
        {" "}
        <CompanyStyle>OCEAN RAINFOREST</CompanyStyle>
        <br />
        Role: <RoleStyle>Co-founder and Chairman of the Board</RoleStyle>
        <br />
        Mission: Improve the wellbeing of people by growing seaweed while making a unique contribution to a blue regeneration on our planet
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
