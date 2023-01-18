import styled from 'styled-components'
import { Color } from '../../../types/themes.types'
import Square from './Square'
import { FaceProps } from '../../../types/nav.types'

const StyledFace = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 51px;
  width: 51px;
  background-color: cyan;
  /*transform: skew(-45deg);*/
`

const Face = ({ theme, colors }: FaceProps) => {

  return (
    <StyledFace>
      {
        colors.map((color: Color, i: number) => {
          return <Square key={`${i}-${color}`} theme={theme} color={color} />
        })
      }
    </StyledFace>)
}

export default Face
