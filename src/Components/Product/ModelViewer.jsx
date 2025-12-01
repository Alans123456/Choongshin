"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [2, 0.5, 2], fov: 60 }}>
        {/* Better lighting */}
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={4} />

        {/* HDR environment lighting */}
        <Environment preset="sunset" />

        {/* Auto-center the model */}
        <Center>
          <Model scale={6} />
        </Center>

        <OrbitControls autoRotate autoRotateSpeed={1} enableDamping />
      </Canvas>
    </div>
  );
}

function Model(props) {
  const gltf = useGLTF("/3d-models/scene.gltf");
  return <primitive object={gltf.scene} {...props} />;
}

useGLTF.preload("/3d-models/scene.gltf");
