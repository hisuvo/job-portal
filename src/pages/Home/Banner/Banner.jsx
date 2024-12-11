import { motion } from "motion/react";

export default function Banner() {
  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex">
          <motion.img
            animate={{ y: [-50, -100, -50] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-[150px] rounded-lg shadow-2xl"
          />
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-[150px] rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
