// import React, { useEffect } from "react";
// import { Canvas, useThree } from "react-three-fiber";
// import { useLoader } from "react-three-fiber";
// import { Box3, Vector3, Euler, Matrix4 } from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { PointLight } from "three";

// function Model() {
//   const { scene } = useLoader(GLTFLoader, "/asset/Medusa.glb");
//   const { size } = useThree();

//   useEffect(() => {
//     const boundingBox = new Box3().setFromObject(scene);
//     const modelSize = boundingBox.getSize(new Vector3());
//     const centerOffset = modelSize.clone().multiplyScalar(0);

//     // Scale the model
//     const scale = new Vector3(1.5, 1.5, 1.5);
//     scene.scale.copy(scale);

//     // Position of the model
//     const desiredPosition = new Vector3(0, -10, 0); // (x, y, z)
//     scene.position.copy(desiredPosition);

//     // Rotate the model
//     const rotationAngle = Math.PI / 36; // rotation angle (45 degrees)
//     const modelRotation = new Euler(0, rotationAngle, 0);
//     scene.rotation.copy(modelRotation);

//     // Add a light source
//     const light = new PointLight(0xffffff, 1);
//     light.position.set(2, 8, 2);
//     scene.add(light);

//   }, [scene, size]);

//   return <primitive object={scene} />;
// }

// export default Model;

import React, { useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { Box3, Vector3, Euler, Matrix4 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointLight } from "three";

function Model() {
  const { scene } = useLoader(GLTFLoader, "/asset/Medusa.glb"); // Load the model using useLoader

  useEffect(() => {
    const boundingBox = new Box3().setFromObject(scene);
    const modelSize = boundingBox.getSize(new Vector3());
    const centerOffset = modelSize.clone().multiplyScalar(0);

    // Scale the model
    const scale = new Vector3(1, 1,1);
    scene.scale.copy(scale);

    // Position of the model
    const desiredPosition = new Vector3(0, -6, 0); // (x, y, z)
    scene.position.copy(desiredPosition);

    // Rotate the model
    const rotationAngle = Math.PI / 36; // rotation angle (45 degrees)
    const modelRotation = new Euler(0, rotationAngle, 0);
    scene.rotation.copy(modelRotation);

    // Add a light source
    const light = new PointLight(0xffffff, 1);
    light.position.set(2, 8, 2);
    scene.add(light);
  }, [scene]);

  return <primitive object={scene} />;
}

export default Model;
