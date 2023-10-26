import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"

import { CanvasLoader } from "../Loader"

interface IBallCanvas {
  icon: string
}

function Ball({ icon }: IBallCanvas) {
  const decal = useTexture(icon)
  return (
    <Float speed={0.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 1]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#6e80e7'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export function BallCanvas({ icon }: IBallCanvas) {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

