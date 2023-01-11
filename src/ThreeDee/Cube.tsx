import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import BaseTheme from '../themes/BaseTheme'
import './Cube.css'

const Cube = () => {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let scene = new THREE.Scene()
        let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        mountRef.current?.appendChild(renderer.domElement)
        let geometry = new THREE.BoxGeometry(1, 1, 1)
        let material = new THREE.MeshBasicMaterial({ vertexColors: true })

        const positionAttribute = geometry.getAttribute('position')
        let currCube: string[] = [ BaseTheme.colors.red, BaseTheme.colors.blue, BaseTheme.colors.yellow ]
        let colors: number[] = []
        let color = new THREE.Color()
        while (currCube.length < 6) {
            currCube.push('#000000')
        }
        currCube.forEach((col) => {
            color.set(col)
            colors.push(color.r, color.g, color.b)
            colors.push(color.r, color.g, color.b)
            colors.push(color.r, color.g, color.b)
            colors.push(color.r, color.g, color.b)
            colors.push(color.r, color.g, color.b)
            colors.push(color.r, color.g, color.b)
        })
        console.log('COLORS', colors)

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
        let cube = new THREE.Mesh(geometry, material)

        scene.add(cube)
        camera.position.z = 5

        const animate = () => {

            requestAnimationFrame(animate)

            cube.rotation.x += 0.02
            cube.rotation.y += 0.02

            renderer.render(scene, camera)

        }
        animate()

        return () => { mountRef.current?.removeChild(renderer.domElement) }
    }, [])

    return <div ref={mountRef}></div>
}

export default Cube
