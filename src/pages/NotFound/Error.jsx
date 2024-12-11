import Lottie from "lottie-react";
import React from "react";
import errorAnimationData from "../../assets/cat.json";

export default function Error() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <Lottie
          className="w-[150px]"
          animationData={errorAnimationData}
        ></Lottie>
        <h2 className="text-8xl font-mono text-red-600">404</h2>
        <p className="text-4xl font-mono">Not Found</p>
      </div>
    </div>
  );
}
