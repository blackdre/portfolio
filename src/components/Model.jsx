import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

const Model = ({ path }) => {
  const group = useRef(); // Reference for the group
  const { scene, animations } = useGLTF(path); // Load GLTF with animations
  const mixer = useRef();

  // Set up the AnimationMixer and play animations
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip, group.current);
        action.play();
      });
    }

    // Cleanup animations on unmount
    return () => {
      mixer.current?.stopAllAction();
      mixer.current?.dispose();
    };
  }, [animations, scene]);

  // Update the AnimationMixer on every frame
  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
