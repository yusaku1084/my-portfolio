import React from 'react'
import styled from 'styled-components'
import output01 from '../images/output01.svg'
import output02 from '../images/output02.svg'
import output03 from '../images/output03.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Works2 = () => (
  <WorksWrapper>
    <Box>
      <WorksContent
        href="page-2"
        src={output01}
        alt="実績1"
        site="RIXIS SP"
        cording="design / Sketch"
      />
      <WorksContent
        href="page-3"
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
    <Link href={props.href} >
      <WorksImg><img src={props.src} alt={props.alt} width="275" height="275" /></WorksImg>    
      <TextBold>{props.site}</TextBold>
      <Text>{props.cording}</Text>
      <FontAwesomeIcon icon={faAngleLeft} size="2x" />
    </Link>
  </Content>
)


const WorksWrapper = styled.div`
  background-color: #f7f7f7;
  padding-top: 120px;
  padding-bottom: 267px;
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

const Link = styled.a`
  color: #000;
  width: 100%;
  height: 275px;
  display: block;
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