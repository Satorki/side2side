import { Smoke } from "react-smoke";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

const HeroWheelSmoke = () => {
  return (
    <Canvas camera={{ fov: 100, position: [0, 0, 1500], far: 6000 }}>
      <Suspense fallback={null}>
        <Smoke
          color={new THREE.Color("#e1ff00")}
          opacity={0.4}
          density={50}
          enableRotation={true}
          rotation={[0, 0, 0.4]}
          enableWind={true}
          windDirection={[1, 1, 0]}
          windStrength={[4, 4, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroWheelSmoke;
