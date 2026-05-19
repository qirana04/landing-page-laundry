import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield size={24} />,
    title: 'Sistem 1 Pelanggan 1 Mesin',
    description: 'Setiap pelanggan menggunakan mesin cuci khusus. Tidak ada campur pakaian antar pelanggan. Terjamin higienis.',
    color: '#C9A96E',
  },
  {
    icon: <Zap size={24} />,
    title: 'Express & Tepat Waktu',
    description: 'Layanan express 24 jam tersedia. Pengerjaan tepat waktu dengan notifikasi status laundry.',
    color: '#E8C98A',
  },
  {
    icon: <Heart size={24} />,
    title: 'Deterjen Ramah Kulit',
    description: 'Menggunakan deterjen premium hipoalergenik yang aman untuk kulit sensitif dan pakaian bayi.',
    color: '#C9A96E',
  },
  {
    icon: <Users size={24} />,
    title: 'Tim Profesional Berpengalaman',
    description: 'Petugas terlatih dan berpengalaman dalam menangani berbagai jenis pakaian dan tekstil premium.',
    color: '#E8C98A',
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FEFCF8 0%, #F5EDD8 50%, #FEFCF8 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4" style={{ color: '#3D2B1F' }}>
            Mengapa{' '}
            <span className="text-gradient-gold">Pilih Kami?</span>
          </h2>
          <p className="text-lg font-outfit font-light" style={{ color: '#9A6B4B' }}>
            Standar premium yang membedakan kami dari yang lain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="relative p-6 rounded-3xl group"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(201,169,110,0.15)',
                boxShadow: '0 4px 24px rgba(61,43,31,0.05)',
                backdropFilter: 'blur(12px)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 48px rgba(61,43,31,0.12)',
                borderColor: 'rgba(201,169,110,0.35)',
              }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(201,169,110,0.12)', color: feature.color }}
                whileHover={{ scale: 1.1, background: 'rgba(201,169,110,0.2)' }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-base font-outfit font-bold mb-3" style={{ color: '#3D2B1F' }}>
                {feature.title}
              </h3>
              <p className="text-sm font-outfit font-light leading-relaxed" style={{ color: '#9A6B4B' }}>
                {feature.description}
              </p>

              {/* Decorative corner */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
