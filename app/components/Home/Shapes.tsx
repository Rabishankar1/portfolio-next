"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
        </Suspense>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      rate: 0.3,
      geometry: new THREE.IcosahedronGeometry(3),
    },
    {
      position: [1, -0.75, 4],
      rate: 0.4,
      geometry: new THREE.ConeGeometry(0.5, 1, 32),
    },
    {
      position: [-1.4, 2, -4],
      rate: 0.6,
      geometry: new THREE.CapsuleGeometry(0.5, 1, 4, 8),
    },
    {
      position: [-0.8, -0.75, 5],
      rate: 0.5,
      geometry: new THREE.OctahedronGeometry(1),
    },
    {
      position: [1.6, 1.6, -4],
      rate: 0.7,
      geometry: new THREE.TorusGeometry(0.5, 0.25, 16, 100),
    },
  ];

  const materials: THREE.Material[] = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0 }),
    new THREE.MeshStandardMaterial({
      color: 0x273c75,
      roughness: 0,
      metalness: 1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x00a8ff,
      roughness: 0.1,
      metalness: 1,
    }),
  ];

  const soundEffects: HTMLAudioElement[] = [
    new Audio("/sounds/Bell.ogg"),
    new Audio("/sounds/footstep.ogg"),
    new Audio("/sounds/Glass.ogg"),
    new Audio("/sounds/Metal.ogg"),
    new Audio("/sounds/Mining.ogg"),
  ];

  return geometries.map(({ position, rate, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      soundEffects={soundEffects}
      geometry={geometry}
      materials={materials}
      rate={rate}
    />
  ));
}

function Geometry({ rate, position, geometry, materials, soundEffects }: any) {
  const meshRef: any = useRef(0);
  const [visible, setVisisble] = useState(false);

  const startingMaterial: any = getRandomMaterial();

  function getRandomMaterial(): THREE.Material {
    return gsap.utils.random(materials) as THREE.Material;
  }

  function handleClick(e: { object: any }) {
    const mesh = e.object;

    (gsap.utils.random(soundEffects) as HTMLAudioElement).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0,3)",
      yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisisble(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0,3)",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float
        speed={5 * rate}
        rotationIntensity={6 * rate}
        floatIntensity={5 * rate}
      >
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
