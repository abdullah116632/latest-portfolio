"use client"

import dynamic from "next/dynamic";
const AnimationLottie = dynamic(() => import("./animation-lottie"), { ssr: false });

const AnimationLottieClient = ({animationPath}) => {
  return (
    <div>
      <AnimationLottie animationPath={animationPath} />
    </div>
  );
}

export default AnimationLottieClient;
