"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function SunMesh() {
  const sunRef = useRef<THREE.Mesh>(null!);

  const texture = useTexture("/8k_sun.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    sunRef.current.rotation.y += delta * 0.1;
  });

  return (
    <Sphere ref={sunRef} args={[1.5, 64, 64]}>
      <meshStandardMaterial
        map={texture}
        emissive={new THREE.Color(0xff6600)}
        emissiveIntensity={2.2}
      />
    </Sphere>
  );
}

export default function InteractiveSun() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        background: "#ffffff",
        position: "absolute",
        inset: 0,
      }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Sun mesh */}
      <SunMesh />

      {/* Glow effect */}
      <EffectComposer>
        <Bloom
          intensity={1.8}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
