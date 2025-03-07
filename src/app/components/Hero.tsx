"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

// Loader component for the 3D canvas
const CanvasLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-white text-lg">Loading...</p>
    </div>
  );
};

// Hero component with 3D background
const Hero = () => {
  // 3D canvas component
  const renderComputersCanvas = () => (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#915eff" />
        </mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  );

  return (
    <section className="relative w-full h-[80vh] mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I&apos;m <span className="text-[#915EFF]">Jason Jiang</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I develop web applications, implement <br className="sm:block hidden" />
            machine learning models, exploring new technologies
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute inset-0 flex justify-end items-center">
        {renderComputersCanvas()}
      </div>
    </section>
  );
};

export default Hero; 