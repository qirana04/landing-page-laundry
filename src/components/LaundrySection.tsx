import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { laundryServices } from '../data/services';

export default function LaundrySection() {
  return (
    <section
      id="layanan"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FEFCF8 0%, #FAF6EF 50%, #FEFCF8 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: 'rgba(201,169,110,0.1)',
              border: '1px solid rgba(201,169,110,0.25)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} style={{ color: '#C9A96E' }} />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Layanan Laundry
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4" style={{ color: '#3D2B1F' }}>
            Layanan{' '}
            <span className="text-gradient-gold">Laundry</span>
          </h2>
          <p className="text-lg font-outfit font-light max-w-xl mx-auto" style={{ color: '#9A6B4B' }}>
            Perawatan terbaik untuk pakaian dan kebutuhan rumah Anda.
          </p>

          {/* Divider */}
          <motion.div
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: '🧺', text: '1 Pelanggan 1 Mesin' },
            { icon: '🌿', text: 'Deterjen Ramah Kulit' },
            { icon: '🚗', text: 'Antar-Jemput Tersedia' },
            { icon: '⚡', text: 'Express 24 Jam' },
          ].map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(201,169,110,0.2)',
                boxShadow: '0 2px 12px rgba(61,43,31,0.06)',
              }}
            >
              <span className="text-base">{feature.icon}</span>
              <span className="text-xs font-outfit font-medium" style={{ color: '#6B4226' }}>
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {laundryServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              image={service.image}
              whatsappMessage={service.whatsappMessage}
              link={service.link}
              icon={service.icon}
              badge={service.badge}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
