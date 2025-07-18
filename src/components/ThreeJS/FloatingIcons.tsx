import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const FloatingIcon = ({ 
  position, 
  color 
}: { 
  position: [number, number, number]; 
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

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
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
        
        <FloatingIcon position={[-3, 2, 0]} color="#3B82F6" />
        <FloatingIcon position={[3, -1, 0]} color="#06B6D4" />
        <FloatingIcon position={[0, 3, -2]} color="#A855F7" />
        <FloatingIcon position={[-2, -2, 1]} color="#EC4899" />
        <FloatingIcon position={[4, 1, -1]} color="#F59E0B" />
      </Canvas>
    </div>
  );
};