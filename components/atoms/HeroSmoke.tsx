"use client";
import { Smoke } from "react-smoke";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const HeroSmoke = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 5, delay: 2.5 }}
      // exit={{ opacity: 0 }}
      className="absolute right-0 bottom-40 w-full h-full"
    >
      <Canvas camera={{ fov: 50, position: [0, 0, 1400], far: 600 }}>
        <Suspense fallback={null}>
          <Smoke
            color={new THREE.Color("#fff")}
            opacity={0.3}
            density={50}
            enableWind={true}
            windDirection={[-1, 1, 0]}
            windStrength={[0.5, 0.5, 0]}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default HeroSmoke;
