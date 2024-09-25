"use client";
import { Smoke } from "react-smoke";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const HeroWheelSmoke = () => {
  return (
    <div className="absolute overflow-hidden bottom-[4%] w-[10%] md:right-0 hidden md:block  h-[20%]">
      <Canvas camera={{ fov: 100, position: [0, 0, 1500], far: 6000 }}>
        <Suspense fallback={null}>
          <Smoke
            color={new THREE.Color("#fff")}
            opacity={0.4}
            density={50}
            enableWind={true}
            windDirection={[1, 1, 0]}
            windStrength={[4, 4, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroWheelSmoke;
