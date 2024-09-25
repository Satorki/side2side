import { Smoke } from "react-smoke";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

const HeroScreenSmoke = () => {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 1400], far: 6000 }}>
      <Suspense fallback={null}>
        <Smoke
          color={new THREE.Color("#3e3ac4")}
          opacity={0.2}
          density={10}
          enableWind={true}
          windDirection={[-1, 1, 0]}
          windStrength={[0.5, 0.5, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroScreenSmoke;
