import React, { useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { Box3, Vector3, Euler, Matrix4 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PointLight, Group, AmbientLight } from "three"; // Import Group and AmbientLight from three.js

function Model() {
  const { scene } = useLoader(GLTFLoader, "/asset/ads.glb");
  const { size } = useThree();

  useEffect(() => {
    const optimizeModel = async () => {
      // Convert the model to GLTF format (if not already in GLTF)
      // Optimize the model's geometry
      // Compress the model's textures
      // These steps can be done using external tools like Blender or third-party libraries

      const boundingBox = new Box3().setFromObject(scene);
      const modelSize = boundingBox.getSize(new Vector3());
      const centerOffset = modelSize.clone().multiplyScalar(0);

      // Scale the model
      const scale = new Vector3(24, 24, 24);
      scene.scale.copy(scale);

      // Position of the model
      const desiredPosition = new Vector3(-120, -240, 20); // (x, y, z)
      scene.position.copy(desiredPosition);

      // Rotate the model parallel to the screen
      const rotationAngle = Math.PI/180; // rotation angle (45 degrees)
      const modelRotation = new Euler(0, 0, 0);
      scene.rotation.copy(modelRotation);

      // Add a dim light source on the left side
      const light = new PointLight(0xffffff, 0.3); // Dim light with intensity 0.3
      light.position.set(-10, 0, 0);
      scene.add(light);

      // Add an ambient light to provide overall illumination
      const ambientLight = new AmbientLight(0xffffff, 0.3); // Dim ambient light with intensity 0.3
      scene.add(ambientLight);
    };

    optimizeModel();
  }, [scene, size]);

  return (
    <group> {/* Wrap the primitive component with a group */}
      <primitive object={scene} />
    </group>
  );
}

export default Model;
