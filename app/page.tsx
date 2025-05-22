"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Download, CheckCircle, Smartphone } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animate based on mouse position
  useEffect(() => {
    controls.start({
      x: mousePosition.x * 15 - 7.5,
      y: mousePosition.y * 15 - 7.5,
      transition: { type: "spring", stiffness: 50 },
    })
  }, [mousePosition, controls])

  return (
    <main className="min-h-screen w-full overflow-hidden relative">
      {/* Sky Background with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image src="/images/bitabackground.png" alt="Sky background" fill priority className="object-cover" />
      </motion.div>

      {/* Animated clouds */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/30 rounded-full blur-3xl"
            style={{
              width: 100 + Math.random() * 200,
              height: 60 + Math.random() * 100,
              top: `${10 + i * 20}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
            initial={{ left: "-20%" }}
            animate={{ left: "120%" }}
            transition={{
              duration: 60 + Math.random() * 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 10,
            }}
          />
        ))}
      </div>

      {/* Floating islands in background */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-10"
          style={{
            top: `${15 + i * 20}%`,
            right: i % 2 === 0 ? `${5 + i * 10}%` : `${60 - i * 10}%`,
            opacity: 0.15 + i * 0.05,
            scale: 0.3 + i * 0.1,
          }}
          animate={{
            y: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: i % 2 === 0 ? [0, 2, 0] : [0, -2, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Image src="/images/floating-island.png" alt="Background island" width={200} height={200} />
        </motion.div>
      ))}

      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-300/70"
            style={{
              width: 3 + Math.random() * 5,
              height: 3 + Math.random() * 5,
            }}
            initial={{
              x: `${Math.random() * 100}vw`,
              y: -20,
            }}
            animate={{
              y: ["calc(-10vh)", "calc(110vh)"],
              x:
                i % 2 === 0
                  ? [`${Math.random() * 100}vw`, `${Math.random() * 20 + 90}vw`]
                  : [`${Math.random() * 100}vw`, `${Math.random() * 20}vw`],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none z-15">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-white/10"
            style={{
              width: 50 + i * 30,
              height: 50 + i * 30,
              left: `calc(50% - ${25 + i * 15}px)`,
              top: `calc(50% - ${25 + i * 15}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 lg:px-16 max-w-7xl mx-auto gap-8 py-12">
        {/* Left Side - BITA Icon */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
              rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <div className="relative">
              <Image src="/images/bitaicon.png" alt="BITA" width={400} height={400} className="drop-shadow-2xl" />

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 bg-amber-400/20 rounded-full blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Description */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Subtitle with animated underline */}
          <div className="relative">
            <motion.p
              className="text-xl text-white/90 font-medium inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              BITA terminolohiya sa pag kakabod
            </motion.p>
            <motion.div
              className="h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mt-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>

          {/* Description Card with glass effect */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/50"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Maligayang pagdating sa BITA! Ang aplikasyon na tutulong sa iyo na maintindihan ang mga terminolohiya sa
              pag-kakabod. Madali at simple lang ang paggamit nito para sa mga baguhan! Kaya tara na!
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {[
                "Komprehensibong listahan ng mga terminolohiya",
                "Kwento bawal levels",
                "Mini Games na nakakaengganyo",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Button with enhanced effects */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-y-4"
            >
              <a
                href="https://www.mediafire.com/file/8quubf05bortdiw/BITA.apk/file"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative inline-block w-full"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur-md"
                  animate={{
                    scale: isHovering ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  className="relative w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} className={isHovering ? "animate-bounce" : ""} />
                  Mag-download Ngayon
                </motion.button>
              </a>

              {/* Installation hint */}
              <motion.div
                className="flex items-center justify-center gap-2 text-white/80 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <Smartphone size={14} />
                <span>I-install ang APK file pagkatapos mag-download</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
