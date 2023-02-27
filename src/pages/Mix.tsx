import { useEffect, useState } from 'react'
import ReferenceCube from './ReferenceCube'

const Cube = require('cubejs')

const Mix = () => {
  const solverInitialized = !!Cube.initSolver()
  const [ mixCube, setMixCube ] = useState('Generating scramble algorithm...')

  useEffect(() => {
    setMixCube(Cube.scramble())
  }, [ solverInitialized ])

  return (
    <>
      <h3>
        Mix: {mixCube}
      </h3>
      <ReferenceCube />
    </>
  )
}

export default Mix
