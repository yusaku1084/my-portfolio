import React from "react"
import PropTypes from "prop-types"
import Works4 from "../components/Works4"
import Product3 from "../components/Product3"
import "../components/reset.css"
import SubTitle from '../components/SubTitle'
import Back from '../components/Back'
import Footer from '../components/Footer'


const FourthPage = () => {

  return (
    <>
      <Back />
      <SubTitle
        subtitle= "WORKS"
        exp= "制作実績など"
      />
      <Product3 />
      <Works4 />
      <Footer />
    </>
  )
}


FourthPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FourthPage
