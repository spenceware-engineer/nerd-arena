import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './Cube.css'

const Cube = () => {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let scene = new THREE.Scene()
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        mountRef.current?.appendChild(renderer.domElement)
        let geometry = new THREE.BoxGeometry(1, 1, 1)
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        let cube = new THREE.Mesh(geometry, material)

        scene.add(cube)
        camera.position.z = 5

        renderer.render(scene, camera)

        return () => { mountRef.current?.removeChild(renderer.domElement) }
    }, [])

    return <div ref={mountRef}></div>
}

export default Cube
