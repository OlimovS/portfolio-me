import { useGLTF } from "@react-three/drei";

// function Model(props) {
//     const { scene } = useGLTF('')
//     return <primitive object={scene} {...props} />
//   }
export function Airplane(props) {
  //   const { position } = useControls({ position: { x: 0, z: 0 } });
  //   useFrame((...args) => {
  //     console.log(args);
  //   });
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/helicopter/model.gltf"
  );
  //   console.log(scene);
  return <primitive name="farm" object={scene} {...props} />;
}
