'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

import localFont from 'next/font/local'
import Spline from '@splinetool/react-spline'

const technor = localFont({
  src: '../app/fonts/Technor.woff',
  variable: '--font-technor',
  weight: '100 900'
});

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-fit px-4 py-1 bg-[#FFD700]/10 rounded-full text-[#FFD700] text-sm mb-6 flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#FFD700]"
                >
                  <path d="M100 45.3609H61.1987L88.6343 17.9254L82.0746 11.3657L54.6391 38.8013V0H45.3609V38.8013L17.9254 11.3657L11.3657 17.9254L38.8013 45.3609H0V54.6391H38.8013L11.3657 82.0746L17.9254 88.6343L45.3609 61.1987V100H54.6391V61.1987L82.0746 88.6343L88.6343 82.0746L61.1987 54.6391H100V45.3609Z" fill="currentColor" />
                </svg>
                FOR AGENCY OWNERS
              </div>
            </motion.div>
            <motion.h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              BUILD A POWERFUL AGENCY SITE WITH <span className={`text-[#FFD700] text-5xl md:text-6xl lg:text-7xl font-bold ${technor.className}`}>ProdInno</span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are committed to pushing the boundaries of what&apos;s possible.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700] h-12 px-6"
                onClick={() => {
                  window.open('https://www.sohamdatta.com', '_blank')
                }}>
                Get Started <span className="ml-2">→</span>
              </Button>
              <Button variant="outline" className="h-12 px-6"
                onClick={() => {
                  window.open('https://www.sohamdatta.com', '_blank')
                }}>
                Watch Video
              </Button>
            </motion.div>
            <motion.div
              className="mt-12 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  />
                ))}
              </div>
              <span className="text-gray-400 ml-2">30+ active members</span>
            </motion.div>
          </div>
          <div className="hidden lg:block relative h-[500px]">
            <Spline scene="https://prod.spline.design/nQVTiBYyKdaa7z6j/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}

