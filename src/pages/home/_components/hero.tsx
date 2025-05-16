export default function Hero() {
  return (
    <section className="relative w-full h-screen  overflow-hidden flex items-center px-12 z-10">
      <div className="z-10 max-w-xl text-white pl-4">
        <h1 className="text-5xl  leading-tight font-bebas">
          Harekete Geç <br />
          <span className="text-secondary font-bebas">FLEXFIT ile</span>
        </h1>
        <p className="text-lg font-mont text-gray-300">
          Gücünü esnekliğe dönüştür. Performans senin elinde.
        </p>
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[300px] h-[2px] bg-gradient-to-r from-[#3CE49E] to-transparent opacity-60"
              style={{
                transform: `rotate(-20deg) translateY(${i * 80}px)`,
                right: `${i * 20}px`,
              }}
            />
          ))}

          <div className="absolute w-[200px] h-[300px] bg-gradient-to-tr from-[#4EF2A3]/30 to-transparent transform rotate-[-20deg] right-[80px] top-[30%] rounded-xl shadow-2xl shadow-green-400/20" />
          <div className="absolute w-[100px] h-[200px] bg-gradient-to-tr from-[#4EF2A3]/50 to-transparent transform rotate-[-20deg] right-[200px] top-[50%] rounded-xl" />
        </div>
      </div>
    </section>
  );
}
