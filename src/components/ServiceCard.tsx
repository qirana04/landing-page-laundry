import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
  link: string;
  icon: string;
  badge?: string | null;
  index: number;
}

export default function ServiceCard({
  name,
  description,
  image,
  whatsappMessage,
  link,
  icon,
  badge,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.8)',
        border: '1px solid rgba(201,169,110,0.15)',
        boxShadow: '0 4px 24px rgba(61,43,31,0.06)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 60px rgba(61,43,31,0.14), 0 4px 16px rgba(201,169,110,0.12)',
        borderColor: 'rgba(201,169,110,0.35)',
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background: 'linear-gradient(to top, rgba(61,43,31,0.5) 0%, transparent 60%)',
          }}
        />
        {/* Blur overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(201,169,110,0.08)', backdropFilter: 'blur(2px)' }}
        />

        {/* Badge */}
        {badge && (
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-outfit font-semibold"
            style={{
              background: 'linear-gradient(135deg, #C9A96E, #E8C98A)',
              color: '#3D2B1F',
            }}
          >
            {badge}
          </div>
        )}

        {/* Icon */}
        <div
          className="absolute bottom-3 right-3 w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(61,43,31,0.15)',
          }}
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-outfit font-bold mb-2" style={{ color: '#3D2B1F' }}>
          {name}
        </h3>
        <p className="text-sm font-outfit font-light leading-relaxed mb-4" style={{ color: '#9A6B4B' }}>
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <motion.button
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-outfit font-semibold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(37,211,102,0.35)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsApp(whatsappMessage)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan via WA
          </motion.button>

          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{
              background: 'rgba(201,169,110,0.12)',
              border: '1px solid rgba(201,169,110,0.25)',
              color: '#C9A96E',
            }}
            whileHover={{ scale: 1.08, background: 'rgba(201,169,110,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
