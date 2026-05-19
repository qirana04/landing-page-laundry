import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Calculator, Truck, Store } from 'lucide-react';
import { priceData } from '../data/services';
import { openWhatsApp, formatLaundryMessage, formatHomeServiceMessage } from '../utils/whatsapp';

export default function PriceCalculator() {
  const [selectedCategory, setSelectedCategory] = useState(priceData[0].id);
  const [selectedItem, setSelectedItem] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState<'outlet' | 'antar'>('outlet');
  const [isLoading, setIsLoading] = useState(false);

  const category = priceData.find((c) => c.id === selectedCategory) || priceData[0];
  const item = category.items[selectedItem] || category.items[0];
  const baseTotal = item.price * quantity;
  const deliveryFee = deliveryMethod === 'antar' ? 5000 : 0;
  const total = baseTotal + deliveryFee;

  const formatRupiah = (amount: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);

  const handleCalculate = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 600);
  };

  const handleOrder = () => {
    const homeServiceIds = ['sofa', 'springbed'];
    const isHomeService = homeServiceIds.includes(selectedCategory);
    const message = isHomeService
      ? formatHomeServiceMessage(category.name)
      : formatLaundryMessage(category.name);
    openWhatsApp(message);
  };

  return (
    <section
      id="harga"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FEFCF8 0%, #FAF6EF 100%)' }}
    >
      {/* BG decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
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
            <Calculator size={14} style={{ color: '#C9A96E' }} />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Simulasi Harga
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4" style={{ color: '#3D2B1F' }}>
            Simulasi{' '}
            <span className="text-gradient-gold">Harga</span>{' '}
            Laundry
          </h2>
          <p className="text-lg font-outfit font-light" style={{ color: '#9A6B4B' }}>
            Estimasi biaya layanan secara real-time — tanpa perlu tanya admin.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(201,169,110,0.2)',
            boxShadow: '0 32px 80px rgba(61,43,31,0.1), 0 8px 24px rgba(201,169,110,0.08)',
            backdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top accent line */}
          <div
            className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg, #C9A96E, #E8C98A, #C9A96E)' }}
          />

          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10">
            {/* Left: Inputs */}
            <div className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-outfit font-semibold mb-3" style={{ color: '#3D2B1F' }}>
                  Pilih Layanan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {priceData.map((cat) => (
                    <motion.button
                      key={cat.id}
                      className="px-3 py-2.5 rounded-xl text-xs font-outfit font-medium text-left transition-all"
                      style={
                        selectedCategory === cat.id
                          ? {
                              background: 'linear-gradient(135deg, #C9A96E, #A07840)',
                              color: 'white',
                              boxShadow: '0 4px 16px rgba(201,169,110,0.35)',
                            }
                          : {
                              background: 'rgba(201,169,110,0.08)',
                              color: '#6B4226',
                              border: '1px solid rgba(201,169,110,0.2)',
                            }
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedItem(0);
                        setQuantity(1);
                        handleCalculate();
                      }}
                    >
                      {cat.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Item Selection */}
              <div>
                <label className="block text-sm font-outfit font-semibold mb-3" style={{ color: '#3D2B1F' }}>
                  Pilih Jenis / Ukuran
                </label>
                <div className="space-y-2">
                  {category.items.map((it, idx) => (
                    <motion.button
                      key={idx}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-outfit text-left transition-all"
                      style={
                        selectedItem === idx
                          ? {
                              background: 'rgba(201,169,110,0.12)',
                              border: '1.5px solid rgba(201,169,110,0.5)',
                              color: '#3D2B1F',
                            }
                          : {
                              background: 'rgba(245,237,216,0.5)',
                              border: '1px solid transparent',
                              color: '#6B4226',
                            }
                      }
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => {
                        setSelectedItem(idx);
                        handleCalculate();
                      }}
                    >
                      <span>{it.label}</span>
                      <span className="font-semibold" style={{ color: '#C9A96E' }}>
                        {formatRupiah(it.price)}<span className="text-xs font-normal">/{it.unit.replace('per ', '')}</span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-outfit font-semibold mb-3" style={{ color: '#3D2B1F' }}>
                  Jumlah ({item.unit})
                </label>
                <div className="flex items-center gap-4">
                  <motion.button
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{ background: 'rgba(201,169,110,0.12)', color: '#C9A96E' }}
                    whileHover={{ scale: 1.1, background: 'rgba(201,169,110,0.2)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </motion.button>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={quantity}
                      className="text-2xl font-outfit font-bold w-12 text-center"
                      style={{ color: '#3D2B1F' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {quantity}
                    </motion.span>
                  </AnimatePresence>
                  <motion.button
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{ background: 'rgba(201,169,110,0.12)', color: '#C9A96E' }}
                    whileHover={{ scale: 1.1, background: 'rgba(201,169,110,0.2)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity((q) => Math.min(100, q + 1))}
                  >
                    +
                  </motion.button>

                  {/* Slider */}
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: '#C9A96E' }}
                  />
                </div>
              </div>

              {/* Delivery Method */}
              <div>
                <label className="block text-sm font-outfit font-semibold mb-3" style={{ color: '#3D2B1F' }}>
                  Metode Layanan
                </label>
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-outfit font-medium transition-all"
                    style={
                      deliveryMethod === 'outlet'
                        ? { background: 'linear-gradient(135deg, #C9A96E, #A07840)', color: 'white' }
                        : { background: 'rgba(201,169,110,0.08)', color: '#6B4226', border: '1px solid rgba(201,169,110,0.2)' }
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDeliveryMethod('outlet')}
                  >
                    <Store size={14} />
                    Datang Langsung
                  </motion.button>
                  <motion.button
                    className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-outfit font-medium transition-all"
                    style={
                      deliveryMethod === 'antar'
                        ? { background: 'linear-gradient(135deg, #C9A96E, #A07840)', color: 'white' }
                        : { background: 'rgba(201,169,110,0.08)', color: '#6B4226', border: '1px solid rgba(201,169,110,0.2)' }
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDeliveryMethod('antar')}
                  >
                    <Truck size={14} />
                    Jemput Antar
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right: Summary */}
            <div className="flex flex-col justify-between">
              <div
                className="rounded-2xl p-6 h-full flex flex-col justify-between"
                style={{ background: 'linear-gradient(135deg, #3D2B1F 0%, #2d1a0d 100%)' }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(201,169,110,0.2)' }}
                    >
                      <Calculator size={14} style={{ color: '#C9A96E' }} />
                    </div>
                    <span className="text-sm font-outfit font-semibold text-white">Ringkasan Estimasi</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Layanan', value: category.name },
                      { label: 'Jenis', value: item.label },
                      { label: 'Jumlah', value: `${quantity} ${item.unit}` },
                      { label: 'Harga Satuan', value: formatRupiah(item.price) },
                      { label: 'Subtotal', value: formatRupiah(baseTotal) },
                      ...(deliveryMethod === 'antar' ? [{ label: 'Ongkos Antar', value: formatRupiah(deliveryFee) }] : []),
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center text-sm font-outfit">
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}>{row.label}</span>
                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="h-px mb-5"
                    style={{ background: 'rgba(201,169,110,0.25)' }}
                  />

                  {/* Total */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-outfit font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      Estimasi Total
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={total}
                      className="text-3xl font-outfit font-bold shimmer-text"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isLoading ? (
                        <span className="text-white opacity-30">Menghitung...</span>
                      ) : (
                        formatRupiah(total)
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <p className="text-xs font-outfit mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    *Estimasi belum termasuk biaya tambahan layanan khusus
                  </p>
                </div>

                {/* CTA */}
                <motion.button
                  className="mt-8 w-full flex items-center justify-center gap-3 py-4 rounded-xl font-outfit font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                  whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(37,211,102,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleOrder}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan via WhatsApp
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center text-xs font-outfit mt-6"
          style={{ color: '#9A6B4B' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Harga di atas merupakan estimasi. Harga final dapat bervariasi sesuai kondisi item.
          Hubungi admin untuk penawaran detail.
        </motion.p>
      </div>
    </section>
  );
}
