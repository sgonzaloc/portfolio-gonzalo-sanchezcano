import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

function FluidBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: -999,
        pointerEvents: "none",
      }}
      eventSource={document.body}
    >
      <EffectComposer>
        <Fluid
          fluidColor="blue"
          backgroundColor="white"
          showBackground={true}
          blend={10}
          intensity={8}
          force={5}
          distortion={1}
          radius={0.1}
          curl={10}
          swirl={10}
          velocityDissipation={0.99}
          densityDissipation={0.98}
          pressure={0.9}
          rainbow={false}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default FluidBackground;
