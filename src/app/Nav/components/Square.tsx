import styled, { useTheme } from 'styled-components'
import BaseTheme from '../../../themes'
import { SquareProps } from '../../../types/nav.types'

const StyledDiv = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 3px;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 1px;
  background-color: ${({ theme, color }: SquareProps) => {
    return theme.colors[ color ]
  }}
`

const Square = ({ color }: SquareProps) => {
  const theme = BaseTheme
  return (
    <StyledDiv color={color} theme={theme} />
  )
}

export default Square
