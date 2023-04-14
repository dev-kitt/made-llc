import React from "react"
import styled from "styled-components"
import { CardSizer } from "../cardSizer"
import madeTM from "../../assets/made.png"

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`

const MediumText = styled.span`
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
`

const SmallText = styled.span`
  text-align: left;
  font-size: 13px;
  color: var(--color-primary);
  font-weight: 900;
  text-transform: uppercase;
`

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BuyButton = styled.a`
  padding: 10px 16px;
  background-color: var(--color-bg);
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: var(--color-primary-variant);
    border: 3px solid var(--color-primary-variant);
  }
`

const MadeLogo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 18px;
  }
`

export function CardDetails(props) {
  return (
    <DetailsContainer>
      <SmallText>Kitt, LLC</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>Software Development</MediumText>
        <MediumText>🖥️🐿️</MediumText>
      </SpacedHorizontalContainer>
      <CardSizer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <SmallText>Keep [IT] Together</SmallText>
        <BuyButton href='../../assets/kitt-resume.docx' >₰_KITT</BuyButton>
      </SpacedHorizontalContainer>
      <MadeLogo>
        <img src={madeTM} alt="nft" />
      </MadeLogo>
    </DetailsContainer>
  )
}
