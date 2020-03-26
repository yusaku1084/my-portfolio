import React from "react"
import Works2 from "../components/Works2"
import Product from "../components/Product"
import "../components/reset.css"
import SubTitle from '../components/SubTitle'
import Back from '../components/Back'
import Footer from '../components/Footer'
import "../components/reset.css"


const SecondPage = () => {

  return (
    <>
      <Back />
      <SubTitle
        subtitle= "WORKS"
        exp= "制作実績など"
      />
      <Product />
      <Works2 />
      <Footer />
    </>
  )
}


export default SecondPage
