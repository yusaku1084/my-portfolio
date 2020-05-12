import React from "react"
import PropTypes from "prop-types"
import Works from "./Works"
import "./reset.css"
import Sns from './sns'
import Header from './header'
import SubTitle from './SubTitle'
import Career from './Career'
import Activity from './Activity'
/*import styled from 'styled-components'*/
import Footer from '../components/Footer'

const Layout = () => {

  return (
    <>
      <Header/>
      <SubTitle
        subtitle= "WORKS"
        exp= "制作実績など"
      />
      <Works />
      <Career />
      <SubTitle
        subtitle= "ACTIVITY"
        exp= "活動"
      />
      <Activity />
      <Sns />
      <Footer />
    </>
  )
}

/*const Font = styled.div`
font-family: Roboto;
`*/

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
