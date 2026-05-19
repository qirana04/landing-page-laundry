import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Shield, ExternalLink } from 'lucide-react';

const terms = [
  {
    q: 'Minimal Order Kedatangan',
    a: 'Untuk layanan home service, minimal order kedatangan petugas adalah Rp150.000. Pastikan kebutuhan Anda sudah mencapai minimum tersebut sebelum melakukan booking.',
    icon: '💰',
  },
  {
    q: 'Sumber Listrik & Air',
    a: 'Sumber listrik (minimal 1.300 watt) dan air bersih harus disediakan oleh pemilik rumah. Petugas kami hanya membawa peralatan dan bahan pembersih berkualitas.',
    icon: '⚡',
  },
  {
    q: 'Free Ongkir & Area Layanan',
    a: 'Gratis ongkos antar-jemput untuk radius hingga 5 KM dari outlet kami. Di luar radius tersebut, biaya ongkir akan dihitung berdasarkan jarak. Hubungi admin untuk detail area layanan.',
    icon: '🚗',
  },
  {
    q: 'Reschedule & Pembatalan',
    a: 'Reschedule jadwal home service dapat dilakukan maksimal H-1 (satu hari sebelum jadwal). Pembatalan mendadak pada hari H dapat dikenakan biaya administrasi.',
    icon: '📅',
  },
  {
    q: 'Estimasi Waktu Pengerjaan',
    a: 'Laundry kiloan: 2–3 hari kerja. Laundry satuan/premium: 3–5 hari kerja. Home service: 1–4 jam tergantung jenis dan kondisi item. Layanan express tersedia untuk kebutuhan mendesak.',
    icon: '⏰',
  },
  {
    q: 'Garansi & Tanggung Jawab',
    a: 'Kami berkomitmen merawat setiap item dengan standar terbaik. Namun kami tidak bertanggung jawab atas kerusakan akibat kondisi barang yang sudah rusak sebelum proses pengerjaan.',
    icon: '🛡️',
  },
];

function AccordionItem({ q, a, icon, index }: { q: string; a: string; icon: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.8)',
        border: `1px solid ${isOpen ? 'rgba(201,169,110,0.4)' : 'rgba(201,169,110,0.15)'}`,
        boxShadow: isOpen ? '0 8px 32px rgba(201,169,110,0.1)' : '0 2px 8px rgba(61,43,31,0.04)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <motion.button
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(201,169,110,0.04)' }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: 'rgba(201,169,110,0.1)' }}
          >
            {icon}
          </div>
          <span className="text-sm font-outfit font-semibold" style={{ color: '#3D2B1F' }}>
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown size={18} style={{ color: '#C9A96E' }} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="px-5 pb-5 pt-0 ml-14 text-sm font-outfit font-light leading-relaxed"
              style={{ color: '#9A6B4B', borderTop: '1px solid rgba(201,169,110,0.1)' }}
            >
              <div className="pt-4">{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TermsSection() {
  return (
    <section
      id="sk"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF6EF 0%, #FEFCF8 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)' }}
          >
            <Shield size={14} style={{ color: '#C9A96E' }} />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Syarat & Ketentuan
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4" style={{ color: '#3D2B1F' }}>
            Syarat &{' '}
            <span className="text-gradient-gold">Ketentuan</span>
          </h2>
          <p className="text-lg font-outfit font-light" style={{ color: '#9A6B4B' }}>
            Informasi penting sebelum menggunakan layanan kami.
          </p>

          <motion.div
            className="mx-auto mt-6 h-px w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {terms.map((term, i) => (
            <AccordionItem key={term.q} q={term.q} a={term.a} icon={term.icon} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://drive.google.com/file/d/13Db62RPE4b0fJW3m4Iklz4Ejtrv_Czfr/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-outfit font-semibold"
            style={{
              background: 'rgba(255,255,255,0.9)',
              border: '1.5px solid rgba(201,169,110,0.35)',
              color: '#3D2B1F',
              boxShadow: '0 4px 16px rgba(201,169,110,0.1)',
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 8px 32px rgba(201,169,110,0.2)',
              borderColor: '#C9A96E',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={16} style={{ color: '#C9A96E' }} />
            Lihat Detail S&K Lengkap
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
