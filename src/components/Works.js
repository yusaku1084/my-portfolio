import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import output01 from '../images/output01.svg'
import output02 from '../images/output02.svg'
import output03 from '../images/output03.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Works = () => (
  <WorksWrapper>
    <Box>
      <WorksContent
        href="/page-2"
        src={output01}
        alt="実績①"
        site="RIXIS SPsite"
        cording="design / Sketch"
      />
      <WorksContent
        href="/page-3"
        src={output02}
        alt="実績②"
        site="袴美人サイト"
        cording="design / Sketch"
      />
      <WorksContent
        href="/page-4"
        src={output03}
        alt="実績③"
        site="Portfolio"
        cording="cording / GatsbyJS"
      />
    </Box>
  </WorksWrapper>
)

export default Works

const WorksContent = props => (
  <Content>
    <Link2 to={props.href}>
      <WorksImg><img src={props.src} alt={props.alt} width="275" height="275" /></WorksImg>    
      <TextBold>{props.site}</TextBold>
      <Text>{props.cording}</Text>
      <FontAwesomeIcon icon={faAngleLeft} size="2x" />
    </Link2>
  </Content>
)



const Link2 = styled(Link)`
  color: #000;
  width: 100%;
  height: 275px;
  display: block;
`


const WorksWrapper = styled.div`
  margin: 75px 0 267px;
`

const Box = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  width: auto;
  max-width: 888px;
  margin: 0 auto;
`

const Content = styled.div`
  width: 275px;
  text-align: center;
`



const WorksImg = styled.div`
  width: 100%;
  height: 275px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding-top: 0;
  margin-bottom: 53px;
`

const TextBold = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 24px;
`