import React from "react"
import styled from "styled-components"

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`

function CardSizer(props) {
  const { direction } = props

  if (direction === "horizontal") return <HorizontalMargin {...props} />
  else {
    return <VerticalMargin {...props} />
  }
}

CardSizer.defaultProps = {
  direction: "horizontal",
}

export { CardSizer }
