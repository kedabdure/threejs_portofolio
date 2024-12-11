"use client";

import Loading from '@/components/Loading';
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '@/constants';
import Button from '@/components/Botton';
import DeveloperRoom from '@/components/DeveloperRoom';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen flex flex-col bg-black overflow-hidden" id='home'>
      <div className='c-space w-full h-full flex flex-col lg:flex-row items-center gap-5'>
        <div className=" flex flex-col items-center justify-center lg:items-start mt-32 sm:mt-36 lg:mt-40 gap-5">
          <p className="text-center font-medium text-white-700 font-generalsans">
            <span className="sm:text-2xl lg:text-2xl text-xl">
              Hi, I am Abdurehim <span className="waving-hand">👋</span>
            </span>
          </p>
          <p className='hero_tag head-text w-full lg:mx-w-[90%]'>Building Products, Shaping Brands</p>
          <div className="mt-10 lg:mt-32">
            <a href="#contact" className="w-fit">
              <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-60 h-14 border-" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[700px] h-[350px] md:h-[95vh]">
          <Canvas className="w-full h-full">
            <ambientLight intensity={1} />
            <directionalLight intensity={3} position={[0, 10, 5]} />
            <directionalLight intensity={3} position={[10, 10, -5]} />
            <directionalLight intensity={2} position={[0, 5, 10]} />
            <directionalLight intensity={1} position={[-10, -5, -10]} />
            <Suspense fallback={<Loading />}>
              <PerspectiveCamera makeDefault position={[0, 0, 26]} />
              <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
                target={[0, 0, 0]}
                autoRotate={true}
              />
              <Center>
                <DeveloperRoom
                  rotation={[0, 0, 0]}
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                />
              </Center>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;