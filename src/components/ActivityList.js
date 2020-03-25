import React from 'react'
import styled from 'styled-components'
import ColumnTitle from './ColumnTitle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import interest01 from '../images/interest01.jpg'
import interest02 from '../images/interest02.jpg'
import interest03 from '../images/interest03.jpg'

const CareerList01 = () => (
  <List>
    <Content>
      <Icon icon={faAddressBook} color="#C4C4C4" />
      <ColumnTitle title="BLOG" />
    </Content>
    <Content>
    <Icon icon={faAddressBook} color="#C4C4C4" /><ColumnTitle title="EDUCATION" />
      <Items>
              <Item>
                <Img src={interest01} />
                <TextBold3>Anime・Manga</TextBold3>
              </Item>
              <Item>
                <Img src={interest03} />
                <TextBold3>Game</TextBold3>
              </Item>
              <Item>
                <Img src={interest02} />
                <TextBold3>Fashion</TextBold3>
              </Item>
            </Items>
            
    </Content>
  </List>
)

const CareerList = () => (
  <>
    <CareerList01 />
  </>
)

export default CareerList

const List = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
  justify-content: space-between;
`

const Content = styled.div`
  width: 100%;
  padding-left: 25px;
  position: relative;
`


const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 17px;
  top: 13px;
`

const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
`

const Border = styled.div`
  margin-top: 19px;
  margin-bottom: -8px;
  border-left: 1px solid #C4C4C4;  
`

const TextDetail = styled.div`
  padding-left: 25px;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`

const TextBold = styled(Text)`
  position: relative;
  font-weight: bold;
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 8px;
    left: -28px;
    width: 5px;
    height: 5px;
    background: #C4C4C4;
    border-radius: 50%;
    margin: 3px 0;

  }
`

const TextBold2 = styled(TextBold)`
&::before {
  left: -27.2px;
}
`

const SkillText = styled(Text)`
  padding-left: 25px;
  font-size: 14px;
  width: 20%;
  min-width: 110px;
`

const Dots = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin: 10px 3% 0 5%;
  width: 15%;

`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #C4C4C4;
  border-radius: 50%;  
  margin-right: 6px;
`

const GDot = styled(Dot)`
  background: #00A1AB;
`

const SkillComment = styled(SkillText)`
  width: 70%;
  max-width: 270px;
  font-weight: 500;
  padding-left: 0;
`

const Items = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
`

const Item = styled.div`
  width: 50%;
  text-align: center;
`

const Img = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`

const TextBold3 = styled.p`
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px
`