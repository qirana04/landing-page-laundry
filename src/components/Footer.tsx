import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/628770877858',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: '#25D366',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/republiklaundry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: '#E1306C',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@republiklaundrycianjur?_r=1&_t=ZS-96SAQF1xiIT',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.66a8.18 8.18 0 004.79 1.53V6.73a4.85 4.85 0 01-1.02-.04z"/>
      </svg>
    ),
    color: '#000000',
  },
];

const footerLinks = [
  { label: 'Layanan Laundry', href: '#layanan' },
  { label: 'Home Service', href: '#home-service' },
  { label: 'Simulasi Harga', href: '#harga' },
  { label: 'Syarat & Ketentuan', href: '#sk' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0f06 0%, #2d1a0d 50%, #1a0f06 100%)' }}
    >
      {/* Top accent */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C9A96E, #E8C98A)' }}
              >
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-outfit font-bold text-white">Republik Laundry</div>
                <div className="text-xs font-outfit tracking-widest uppercase" style={{ color: '#C9A96E' }}>
                  Premium Cleaning Service
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-sm font-outfit font-light leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Solusi kebersihan total untuk pakaian dan isi rumah Anda. Laundry premium dengan sistem higienis dan home service profesional.
            </motion.p>

            {/* Social */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,169,110,0.15)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: social.color,
                    background: 'rgba(255,255,255,0.1)',
                    borderColor: social.color,
                    boxShadow: `0 0 16px ${social.color}33`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Info */}
          <div>
            <motion.h3
              className="text-sm font-outfit font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C9A96E' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Informasi
            </motion.h3>
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin size={14} />,
                  content: 'Jl. Pangeran Hidayatullah No.39a, Sawah Gede, Cianjur',
                  href: 'https://www.google.com/maps/place/Republik+Laundry,+Jl.+Pangeran+Hidayatullah+No.39a,+Sawah+Gede,+Kec.+Cianjur,+Kabupaten+Cianjur,+Jawa+Barat+43212/data=!4m2!3m1!1s0x2e6853d8cc71ded7:0xac8387f1837a4942!17m2!4m1!1e3!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBjI2LjUuNBgAIJ6dCiqTASw5NDI2NzcyNyw5NDI3NTQwNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk2NTM1LDk0Mjg0NDY2LDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDc5MTQ3OUICSUQ%3D&skid=3b82f933-cf50-48dd-90e7-0466ee5b8a12',
                },
                {
                  icon: <Clock size={14} />,
                  content: 'Sen–Sab: 07.00–19.00 WIB\nMinggu: 07.00–17.00 WIB',
                },
                {
                  icon: <Phone size={14} />,
                  content: '+62 877-0877-8587',
                  href: 'https://wa.me/628770877858',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="mt-0.5 flex-shrink-0" style={{ color: '#C9A96E' }}>
                    {item.icon}
                  </div>
                  {'href' in item ? (
                    <a
                      href={(item as { href: string }).href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-outfit font-light leading-relaxed whitespace-pre-line transition-colors hover:text-yellow-300"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm font-outfit font-light leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {item.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <motion.h3
              className="text-sm font-outfit font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#C9A96E' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Navigasi
            </motion.h3>
            <div className="space-y-3">
              {footerLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  className="block text-sm font-outfit font-light text-left cursor-pointer transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ color: '#C9A96E', x: 4 }}
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/628770877858"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-outfit font-semibold"
              style={{
                background: 'rgba(37,211,102,0.12)',
                border: '1px solid rgba(37,211,102,0.25)',
                color: '#25D366',
              }}
              whileHover={{
                scale: 1.04,
                background: 'rgba(37,211,102,0.2)',
                boxShadow: '0 4px 16px rgba(37,211,102,0.2)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-outfit" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Republik Laundry. Hak Cipta Dilindungi.
          </p>
          <p className="text-xs font-outfit" style={{ color: 'rgba(201,169,110,0.4)' }}>
            Solusi Kebersihan Total Premium ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
