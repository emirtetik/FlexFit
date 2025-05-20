import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRightLine = {
  hidden: (i: number) => ({
    x: 200,
    y: i * 80,
    rotate: -40,
    opacity: 0,
  }),
  visible: (i: number) => ({
    x: 0,
    y: i * 80,
    rotate: -20,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const fadeInRightBg = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 0.2,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

const fadeInRightBgSecondary = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.7 },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center px-12 z-10">
      <motion.div
        className="z-10 md:max-w-xl max-w-md text-white pl-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <h1 className="md:text-5xl text-3xl  leading-tight font-bebas">
          Harekete Geç <br />
          <span className="text-secondary font-bebas">FLEXFIT ile</span>
        </h1>
        <p className="md:text-base text-sm font-mont text-gray-400 max-w-32 md:max-w-xl">
          Gücünü esnekliğe dönüştür.
        </p>
      </motion.div>

      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              variants={fadeInRightLine}
              className="absolute w-[300px] h-[2px] bg-gradient-to-r from-white to-transparent opacity-50"
              style={{
                transform: `rotate(-20deg)`,
                right: `${i * 20}px`,
              }}
            />
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRightBg}
            className="absolute w-[200px] h-[300px] bg-gradient-to-tr from-third to-transparent transform rotate-[-20deg] right-[80px] top-[30%] rounded-xl shadow-2xl shadow-secondary"
            style={{ opacity: 0.2 }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRightBgSecondary}
            className="absolute w-[100px] h-[200px] bg-gradient-to-tr from-secondary to-transparent transform rotate-[-20deg] right-[200px] top-[50%] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
