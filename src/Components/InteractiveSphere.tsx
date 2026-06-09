"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= SUN ================= */
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
        emissive={new THREE.Color(0xff5a1f)}
        emissiveIntensity={1.6}
      />
    </Sphere>
  );
}

/* ================= STARS ================= */
function Stars() {
  const points = useRef<THREE.Points>(null!);

  const starPositions = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      const radius = 18 + Math.random() * 20;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[starPositions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

/* ================= SCENE ================= */
export default function InteractiveSun() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        background: "black",
        position: "absolute",
        inset: 0,
      }}
      gl={{
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 1);
      }}
    >
      {/* LIGHTS */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />

      {/* STARS (NEW) */}
      <Stars />

      {/* SUN */}
      <SunMesh />

      {/* BLOOM (TIGHTER GLOW) */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.6}
        />
      </EffectComposer>

      {/* CONTROLS */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
