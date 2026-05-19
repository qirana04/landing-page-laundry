import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const Bubble = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(201,169,110,0.2))',
      border: '1px solid rgba(255,255,255,0.4)',
    }}
    initial={{ opacity: 0, scale: 0, y: 20 }}
    animate={{
      opacity: [0, 0.8, 0.4, 0],
      scale: [0, 1, 1.2, 0.8],
      y: [20, -30, -60, -100],
    }}
    transition={{
      duration: 3.5,
      delay,
      ease: 'easeOut',
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
);

const Particle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: 'rgba(201,169,110,0.8)',
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [0, -80],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
      ease: 'easeOut',
    }}
  />
);

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'drum' | 'open' | 'reveal' | 'done'>('drum');
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('open'), 2800);
    const t2 = setTimeout(() => setPhase('reveal'), 4000);
    const t3 = setTimeout(() => {
      setPhase('done');
      setShow(false);
      onComplete();
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const bubbles = [
    { x: 35, y: 55, size: 8, delay: 0 },
    { x: 50, y: 65, size: 12, delay: 0.3 },
    { x: 62, y: 58, size: 6, delay: 0.6 },
    { x: 42, y: 70, size: 10, delay: 0.9 },
    { x: 55, y: 72, size: 7, delay: 0.4 },
    { x: 45, y: 60, size: 14, delay: 0.7 },
  ];

  const particles = Array.from({ length: 20 }, (_) => ({
    x: 20 + Math.random() * 60,
    y: 30 + Math.random() * 50,
    delay: Math.random() * 3,
  }));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a0f06 0%, #2d1a0d 40%, #3D2B1F 100%)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background ambient glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,169,110,0.15) 0%, transparent 70%)',
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Particles */}
          {particles.map((p, i) => (
            <Particle key={i} x={p.x} y={p.y} delay={p.delay} />
          ))}

          {/* Main washing machine drum */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={
              phase === 'drum'
                ? { scale: 1, opacity: 1 }
                : phase === 'open'
                ? { scale: 1.05, opacity: 1 }
                : { scale: 0.1, opacity: 0, y: -200 }
            }
            transition={
              phase === 'drum'
                ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                : phase === 'open'
                ? { duration: 0.6, ease: 'easeOut' }
                : { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }
          >
            {/* Outer drum ring */}
            <motion.div
              className="relative"
              style={{ width: 280, height: 280 }}
            >
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(201,169,110,0.8), rgba(232,201,138,0.4), rgba(160,120,64,0.8), rgba(201,169,110,0.8))',
                  padding: 3,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full" style={{ background: '#1a0f06' }} />
              </motion.div>

              {/* Second rotating ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  inset: 8,
                  border: '2px solid rgba(201,169,110,0.3)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner drum circle */}
              <div
                className="absolute rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  inset: 16,
                  background: 'radial-gradient(circle at 35% 35%, rgba(201,169,110,0.15) 0%, rgba(10,5,2,0.9) 60%, rgba(26,15,6,1) 100%)',
                  border: '1px solid rgba(201,169,110,0.2)',
                }}
              >
                {/* Water effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(100,180,255,0.12) 0%, transparent 100%)',
                    borderRadius: '0 0 50% 50% / 0 0 30px 30px',
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Drum holes pattern */}
                <motion.div
                  className="relative w-24 h-24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  {[0, 60, 120, 180, 240, 300].map((angle, _i) => (
                    <div
                      key={angle}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: 'rgba(201,169,110,0.4)',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateY(-36px) translate(-50%, -50%)`,
                        boxShadow: '0 0 8px rgba(201,169,110,0.6)',
                      }}
                    />
                  ))}
                  {/* Center circle */}
                  <div
                    className="absolute inset-0 m-auto w-6 h-6 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(201,169,110,0.8), rgba(160,120,64,0.4))',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 16px rgba(201,169,110,0.8)',
                    }}
                  />
                </motion.div>

                {/* Glow reflection */}
                <motion.div
                  className="absolute top-4 left-6 w-12 h-4 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    filter: 'blur(4px)',
                    transform: 'rotate(-25deg)',
                  }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>

              {/* Bubbles inside drum */}
              {bubbles.map((b, i) => (
                <Bubble key={i} x={b.x} y={b.y} size={b.size} delay={b.delay} />
              ))}
            </motion.div>
          </motion.div>

          {/* Opening door effect */}
          <AnimatePresence>
            {(phase === 'open' || phase === 'reveal') && (
              <motion.div
                className="absolute flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Clean items floating out */}
                {['👕', '🧸', '🛋️', '🏠', '✨'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0.8, 0],
                      scale: [0, 1.2, 1, 0.8],
                      x: [0, (i - 2) * 100],
                      y: [0, -80 - i * 20],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.12,
                      ease: 'easeOut',
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Brand reveal */}
          <AnimatePresence>
            {phase === 'reveal' && (
              <motion.div
                className="absolute text-center px-8"
                initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="text-sm font-outfit font-medium tracking-[0.4em] uppercase mb-3"
                  style={{ color: 'rgba(201,169,110,0.8)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Republik Laundry
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-6xl font-outfit font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Solusi Kebersihan{' '}
                  <span className="shimmer-text">Total</span>
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg font-outfit font-light"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Laundry Premium & Home Service Profesional
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #C9A96E, #E8C98A)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.5, ease: 'linear' }}
            />
          </motion.div>

          {/* Skip button */}
          <motion.button
            className="absolute bottom-8 right-8 text-xs font-outfit tracking-widest uppercase cursor-pointer"
            style={{ color: 'rgba(201,169,110,0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ color: 'rgba(201,169,110,1)' }}
            onClick={() => {
              setShow(false);
              onComplete();
            }}
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
