import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import output01 from '../images/output01.png'
import output02 from '../images/output02.png'
/*import output03 from '../images/output03.svg'*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Works2 = () => (
  <WorksWrapper>
    <Box>
      <WorksContent
        href="/page-2"
        src={output01}
        alt="実績1"
        site="RIXIS SP"
        cording="design / Sketch"
      />
      <WorksContent
        href="/page-3"
        src={output02}
        alt="実績2"
        site="袴美人サイト"
        cording="design / Sketch"
      />
    </Box>
  </WorksWrapper>
)

export default Works2

const WorksContent = props => (
  <Content>
    <Link2 to={props.href} >
      <WorksImg><img src={props.src} alt={props.alt} width="275" height="275" /></WorksImg>    
      <TextBold>{props.site}</TextBold>
      <Text>{props.cording}</Text>
      <Icon icon={faAngleLeft} size="2x" />
    </Link2>
  </Content>
)


const WorksWrapper = styled.div`
  background-color: #f7f7f7;
  padding-top: 120px;
  padding-bottom: 267px;
`


const Link2 = styled(Link)`
  color: transparent;
  width: 100%;
  height: 275px;
  display: block;
`


const Box = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  width: auto;
  max-width: 580px;
  margin: 0 auto;
`

const Content = styled.div`
  width: 275px;
  text-align: center;
`



const WorksImg = styled.div`
  overflow: hidden;
  background: url(${props => props.src});
  background-size: cover;
  width: 275px;
  height: 275px;
  position: relative;
  transition: all 0.3s ease 0s;
  &:before{
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: inherit;
    filter: blur(4px);
  }
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1875em);
  }
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding-top: 0;
  margin-bottom: 53px;
  color:#000;
`

const TextBold = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 24px;
  color: #000;
`

const Icon = styled(FontAwesomeIcon)`
  color: #000;
`