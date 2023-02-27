import React from 'react'

const ReferenceCube = () => {
  return (
    <p>
      F is the side that is facing you
      B is the side facing away from you (the opposite of F)
      R is the side facing your right
      L is the side facing your left
      U is the top face (up)
      D is the bottom face (down)
      With these moves, turn the specified side one time (90 degrees) clockwise
      When the move is followed by an apostrophe ('), turn it one time (90 degrees) counter clockwise
      If the move has a 2 next to it, turn the specified face two times (180 degrees) clockwise,
      Also if the move has a 2 and an apostrophe ('), turn it two times (180 degrees) counter clockwise
    </p>
  )
}

export default ReferenceCube
