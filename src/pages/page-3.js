import React from "react"
import PropTypes from "prop-types"
import Works3 from "../components/Works3"
import Product2 from "../components/Product2"
import "../components/reset.css"
import SubTitle from '../components/SubTitle'
import Back from '../components/Back'
import Footer from '../components/Footer'


const ThirdPage = () => {

  return (
    <>
      <Back />
      <SubTitle
        subtitle= "WORKS"
        exp= "制作実績など"
      />
      <Product2 />
      <Works3 />
      <Footer />
    </>
  )
}


ThirdPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThirdPage
