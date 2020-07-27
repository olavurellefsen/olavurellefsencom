import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
