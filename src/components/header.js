import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import heroImage from "../images/Rectangle.png"
import thumb from "../images/thumb.svg"

 const Headerbox = styled.header`
 background-image: url(${heroImage});
 background-repeat: no-repeat;
 background-size:  cover;
 background-position: center;
 width: 100%;
 height: 430px;
 margin: 0 auto;
 font-family: Roboto;
`

const Headerinner = styled.div`
width: 960px;
height: 350px;
margin: 0 auto;
padding-top: 74px;
position: relative;
`

const Headerleft = styled.div`
width: 275px;
height: 276px;
color: white;
float: left;
border: 1px solid rgba(255, 255, 255, 0.5);
box-sizing: border-box;
text-align: center;
z-index: 2;
position: absolute;
left: 0;
padding-top: 31px;
`

const Headerright = styled.div`
width: 612px;
height: 276px;
color:white;
float: right;
font-style: normal;
font-weight: normal;
`

const Line = styled.div`
position: absolute;
width: 960px;
height: 0px;
left: 0;
top: 169px;
border: 0.5px solid rgba(255, 255, 255, 0.5);
box-sizing: border-box;
z-index:1;
`

const Thumb = styled.img`
margin-bottom: 30px;
`

const Name1 = styled.p`
font-size: 24px;
height: 26px;
margin-bottom: 12px;
margin-top: 0;
`

const Career = styled.p`
font-size: 14px;
height: 26px;
margin-bottom: 19px;
`

const Des = styled.p`
font-size: 14px;
line-height: 28px;
height: 86px;
margin-bottom: 29px;
`

const Name2 = styled.p`
font-size: 16px;
font-weight: 500;
margin-bottom: 10px;
height: 25px;
`

const Tatd = styled.td`
font-size: 14px;
line-height: 28px;
padding-left: 20px;
width:auto;
`
const Tath = styled.td`
font-weight: bold;
font-size: 14px;
line-height: 28px;
width: 147px;
`


const Header = () => (
  <Headerbox>
    <Headerinner>
      <Headerleft>
        <Thumb src={thumb} alt="myimage" />
        <Name1>Yusaku Sogabe</Name1>
        <Career>Front Engineer</Career>
      </Headerleft>
      <Line></Line>
      <Headerright>
      <Des>デザインとコーディングの勉強をしています。
      <br /> 現在はJavaScriptの奥深さに悪戦苦闘中。
      </Des>
      <Name2>曽我部 祐作 : ソガベ ユウサク</Name2>
      <Table
       main = "性別"
       sub = "男性"
       />
       <Table
       main = "生年月日"
       sub = "1998年08月04日(21歳)"
       />
       <Table
       main = "現住所"
       sub = "兵庫県川西市"
       />
      </Headerright>
    </Headerinner>
  </Headerbox>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Table = (props) => (
  <table>
    <tbody>
        <tr>
            <Tath>{props.main}</Tath>
            <Tatd>{props.sub}</Tatd>
        </tr>
    </tbody>
  </table>
)

export default Header
