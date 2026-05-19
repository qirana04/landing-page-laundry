import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown, Truck, Home } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/hero-laundry.jpg',
    label: 'Laundry Premium',
    tag: 'Pakaian & Tekstil',
  },
  {
    image: '/images/hero-cleaning.jpg',
    label: 'Home Service',
    tag: 'Sofa & Kasur',
  },
  {
    image: '/images/laundry-kiloan.jpg',
    label: '1 Pelanggan 1 Mesin',
    tag: 'Sistem Higienis',
  },
];

const FloatingParticle = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: 'rgba(201,169,110,0.4)',
      filter: 'blur(1px)',
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
          setIsTransitioning(false);
        }, 700);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const particles = [
    { x: 10, y: 20, size: 4, delay: 0 },
    { x: 85, y: 15, size: 6, delay: 0.5 },
    { x: 5, y: 70, size: 3, delay: 1 },
    { x: 90, y: 65, size: 5, delay: 0.3 },
    { x: 50, y: 8, size: 4, delay: 0.8 },
    { x: 70, y: 85, size: 3, delay: 1.2 },
    { x: 25, y: 90, size: 5, delay: 0.6 },
    { x: 78, y: 40, size: 3, delay: 0.9 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAF6EF 0%, #F5EDD8 50%, #FAF6EF 100%)' }}
    >
      {/* Particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} x={p.x} y={p.y} size={p.size} delay={p.delay} />
      ))}

      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div style={{ y, opacity }} className="relative z-10">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(201,169,110,0.12)',
                border: '1px solid rgba(201,169,110,0.3)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: '#C9A96E' }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase" style={{ color: '#C9A96E' }}>
                Premium Cleaning Service
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-[1.1] mb-6"
              style={{ color: '#3D2B1F' }}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Solusi Kebersihan{' '}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Total</span>
              </span>
              {': '}
              <br />
              <span className="font-light text-3xl md:text-4xl lg:text-5xl" style={{ color: '#6B4226' }}>
                Dari Pakaian Hingga
              </span>
              <br />
              <span className="font-light text-3xl md:text-4xl lg:text-5xl" style={{ color: '#6B4226' }}>
                Isi Rumah Anda.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-base md:text-lg font-outfit font-light leading-relaxed mb-8 max-w-lg"
              style={{ color: '#9A6B4B' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Layanan laundry premium dengan opsi antar-jemput, serta home service profesional langsung ke rumah Anda.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              {/* Primary CTA */}
              <motion.button
                className="relative group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-outfit font-semibold text-white overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A07840 100%)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(201,169,110,0.45)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const el = document.querySelector('#layanan');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #E8C98A 0%, #C9A96E 100%)' }}
                />
                <Truck size={18} className="relative z-10" />
                <span className="relative z-10">Pesan Antar-Jemput</span>
                {/* Ripple */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                  initial={{ scale: 0, opacity: 1 }}
                  whileTap={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="relative group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-outfit font-semibold overflow-hidden"
                style={{
                  color: '#3D2B1F',
                  background: 'rgba(255,255,255,0.8)',
                  border: '1.5px solid rgba(201,169,110,0.35)',
                  backdropFilter: 'blur(12px)',
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 32px rgba(201,169,110,0.2)',
                  borderColor: '#C9A96E',
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const el = document.querySelector('#home-service');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Home size={18} style={{ color: '#C9A96E' }} />
                <span>Booking Home Service</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { value: '1000+', label: 'Pelanggan Puas' },
                { value: '5+', label: 'Tahun Berpengalaman' },
                { value: '100%', label: 'Higienis' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-outfit font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-xs font-outfit" style={{ color: '#9A6B4B' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Slider */}
          <motion.div
            className="relative h-[480px] lg:h-[560px]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image frame */}
            <div
              className="relative h-full rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 32px 80px rgba(61,43,31,0.2), 0 8px 24px rgba(61,43,31,0.1)',
              }}
            >
              {heroSlides.map((slide, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    opacity: i === currentSlide ? 1 : 0,
                    scale: i === currentSlide ? 1 : 1.05,
                    filter: i === currentSlide ? 'blur(0px)' : 'blur(8px)',
                  }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                >
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(61,43,31,0.55) 0%, transparent 50%)',
                    }}
                  />
                </motion.div>
              ))}

              {/* Slide label */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xs font-outfit tracking-widest uppercase mb-1" style={{ color: 'rgba(232,201,138,0.9)' }}>
                  {heroSlides[currentSlide].tag}
                </div>
                <div className="text-xl font-outfit font-bold text-white">
                  {heroSlides[currentSlide].label}
                </div>
              </motion.div>

              {/* Slide indicators */}
              <div className="absolute top-5 right-5 flex gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className="h-1 rounded-full transition-all duration-500 cursor-pointer"
                    style={{
                      width: i === currentSlide ? 24 : 6,
                      background: i === currentSlide ? '#E8C98A' : 'rgba(255,255,255,0.4)',
                    }}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
            </div>

            {/* Floating feature cards */}
            <motion.div
              className="absolute -left-6 top-16 glass-card rounded-2xl px-4 py-3 shadow-premium"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: 'rgba(201,169,110,0.15)' }}>
                  🧺
                </div>
                <div>
                  <div className="text-xs font-outfit font-semibold" style={{ color: '#3D2B1F' }}>1 Pelanggan</div>
                  <div className="text-xs font-outfit" style={{ color: '#9A6B4B' }}>1 Mesin Cuci</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-28 glass-card rounded-2xl px-4 py-3 shadow-premium"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: 'rgba(201,169,110,0.15)' }}>
                  🚗
                </div>
                <div>
                  <div className="text-xs font-outfit font-semibold" style={{ color: '#3D2B1F' }}>Antar-Jemput</div>
                  <div className="text-xs font-outfit" style={{ color: '#9A6B4B' }}>Free 5 KM</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => {
          const el = document.querySelector('#layanan');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs font-outfit tracking-widest uppercase" style={{ color: '#C9A96E' }}>
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: '#C9A96E' }} />
      </motion.div>
    </section>
  );
}
