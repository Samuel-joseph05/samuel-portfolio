import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Sphere, Box, Torus } from "@react-three/drei";
import { Mesh } from "three";

const FloatingIcon = ({ 
  position, 
  geometry, 
  color 
}: { 
  position: [number, number, number]; 
  geometry: "sphere" | "box" | "torus";
  color: string;
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case "sphere":
        return <Sphere args={[0.5, 32, 32]} />;
      case "box":
        return <Box args={[0.8, 0.8, 0.8]} />;
      case "torus":
        return <Torus args={[0.5, 0.2, 16, 32]} />;
      default:
        return <Sphere args={[0.5, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      <GeometryComponent />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
};

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
        
        <FloatingIcon position={[-3, 2, 0]} geometry="sphere" color="#3B82F6" />
        <FloatingIcon position={[3, -1, 0]} geometry="box" color="#06B6D4" />
        <FloatingIcon position={[0, 3, -2]} geometry="torus" color="#A855F7" />
        <FloatingIcon position={[-2, -2, 1]} geometry="sphere" color="#EC4899" />
        <FloatingIcon position={[4, 1, -1]} geometry="box" color="#F59E0B" />
      </Canvas>
    </div>
  );
};