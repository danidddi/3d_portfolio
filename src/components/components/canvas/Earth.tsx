import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Stars } from "@react-three/drei"
import { CanvasLoader } from "../Loader"

function Earth() {
  const earth = useGLTF('public/planet/scene.gltf')
  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 7, 12]} intensity={1024} color="#FFFFFF" />
      <Stars />
      <primitive
        object={earth.scene}
        scale={2}
        // rotation={[0.25, -0.2, -0.1]}
        position-y={0}
        rotation-y={0} />
    </mesh>
  )
}

export function EarthCanvas() {
  return (
    <Canvas
      shadows={true}
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, position: [-4, 3, 7] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}
