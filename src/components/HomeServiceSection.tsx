import { motion } from 'framer-motion';
import { Home, ExternalLink } from 'lucide-react';
import { homeServices } from '../data/services';
import { openWhatsApp } from '../utils/whatsapp';

export default function HomeServiceSection() {
  return (
    <section
      id="home-service"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2d1a0d 0%, #3D2B1F 50%, #4a2c18 100%)' }}
    >
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)' }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'rgba(201,169,110,0.3)',
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: 'rgba(201,169,110,0.12)',
              border: '1px solid rgba(201,169,110,0.3)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Home size={14} style={{ color: '#E8C98A' }} />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase" style={{ color: '#E8C98A' }}>
              Home Service
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4 text-white">
            Layanan{' '}
            <span className="shimmer-text">Home Service</span>
          </h2>
          <p className="text-lg font-outfit font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Petugas profesional datang langsung ke rumah Anda.
          </p>

          <motion.div
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.7), transparent)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { step: '01', label: 'Booking via WA' },
            { step: '02', label: 'Jadwal Dikonfirmasi' },
            { step: '03', label: 'Tim Datang ke Rumah' },
            { step: '04', label: 'Bersih & Selesai' },
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-3">
              <div
                className="flex items-center gap-3 px-4 py-2.5 rounded-full"
                style={{
                  background: 'rgba(201,169,110,0.1)',
                  border: '1px solid rgba(201,169,110,0.25)',
                }}
              >
                <span className="text-xs font-outfit font-bold" style={{ color: '#C9A96E' }}>
                  {item.step}
                </span>
                <span className="text-xs font-outfit font-medium text-white">{item.label}</span>
              </div>
              {i < 3 && (
                <div className="hidden sm:block w-6 h-px" style={{ background: 'rgba(201,169,110,0.3)' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative rounded-3xl overflow-hidden"
              style={{ border: '1px solid rgba(201,169,110,0.2)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                borderColor: 'rgba(201,169,110,0.5)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,10,3,0.85) 0%, rgba(26,10,3,0.2) 60%, transparent 100%)',
                  }}
                />

                {/* Badge */}
                {service.badge && (
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-outfit font-semibold"
                    style={{
                      background: 'rgba(201,169,110,0.9)',
                      color: '#1a0a03',
                    }}
                  >
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div
                className="p-5"
                style={{ background: 'rgba(61,43,31,0.6)', backdropFilter: 'blur(20px)' }}
              >
                <h3 className="text-lg font-outfit font-bold text-white mb-2">{service.name}</h3>
                <p className="text-sm font-outfit font-light leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {service.description}
                </p>

                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-outfit font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => openWhatsApp(service.whatsappMessage)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Booking Sekarang
                  </motion.button>

                  <motion.a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{
                      background: 'rgba(201,169,110,0.15)',
                      border: '1px solid rgba(201,169,110,0.3)',
                      color: '#C9A96E',
                    }}
                    whileHover={{ scale: 1.08, background: 'rgba(201,169,110,0.25)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
