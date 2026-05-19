import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Bot, AlertCircle } from 'lucide-react';
import { chatbotKnowledge } from '../data/services';
import { openWhatsApp } from '../utils/whatsapp';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

function generateBotResponse(userInput: string): string {
  const input = userInput.toLowerCase().trim();

  // Greetings
  if (/^(halo|hai|hi|hello|selamat|assalamu|hei)\b/.test(input)) {
    return 'Halo! Selamat datang di Republik Laundry 👋\n\nSaya siap membantu menjawab pertanyaan seputar layanan kami. Silakan tanyakan apa saja tentang:\n• Layanan Laundry\n• Home Service\n• Harga & Estimasi\n• Syarat & Ketentuan\n• Jam Operasional\n• Area Layanan\n\nApa yang bisa saya bantu? 😊';
  }

  // Laundry kiloan
  if (/kiloan|kg|kilo|per kg|harga cuci/.test(input)) {
    const info = chatbotKnowledge.layanan_laundry.kiloan;
    return `🧺 *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}\n\nSistem kami menggunakan 1 mesin cuci untuk 1 pelanggan — terjamin higienis!\n\nUntuk pemesanan, silakan gunakan tombol WhatsApp pada layanan yang tersedia ya.`;
  }

  // Laundry satuan
  if (/satuan|jas|blazer|kebaya|gaun|jaket kulit|pakaian formal|pakaian premium/.test(input)) {
    const info = chatbotKnowledge.layanan_laundry.satuan;
    return `👔 *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}\n\nLayanan ini menggunakan penanganan khusus untuk menjaga kualitas pakaian premium Anda.`;
  }

  // Karpet
  if (/karpet|carpet/.test(input)) {
    const info = chatbotKnowledge.layanan_laundry.karpet;
    return `🏠 *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}`;
  }

  // Gorden
  if (/gorden|gordyn|curtain|tirai/.test(input)) {
    const info = chatbotKnowledge.layanan_laundry.gorden;
    return `🪟 *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}`;
  }

  // Boneka
  if (/boneka|stuffed|teddy|plush|mainan/.test(input)) {
    const info = chatbotKnowledge.layanan_laundry.boneka;
    return `🧸 *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}\n\nMenggunakan sabun aman dan hipoalergenik, cocok untuk boneka anak-anak.`;
  }

  // Cuci Sofa
  if (/sofa|kursi|couch/.test(input)) {
    const info = chatbotKnowledge.home_service.sofa;
    return `🛋️ *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}\n\n⚠️ Syarat: ${info.syarat}\n\nPetugas profesional kami akan datang langsung ke rumah Anda!`;
  }

  // Spring bed / kasur
  if (/spring bed|springbed|kasur|mattress/.test(input)) {
    const info = chatbotKnowledge.home_service.springbed;
    return `🛏️ *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}\n\nMenggunakan teknologi wet vacuum untuk hasil bersih maksimal.`;
  }

  // Home cleaning
  if (/home cleaning|cleaning|bersih rumah|bersih-bersih|pasca renovasi|renovasi/.test(input)) {
    const info = chatbotKnowledge.home_service.cleaning;
    return `✨ *${info.nama}*\n\n${info.deskripsi}\n\n💰 Harga: ${info.harga}\n⏱️ Estimasi: ${info.estimasi}\n\nHubungi admin untuk survei dan penawaran yang sesuai kebutuhan Anda.`;
  }

  // Home service umum
  if (/home service|layanan rumah|on.?site/.test(input)) {
    return `🏠 *Layanan Home Service Kami:*\n\n🛋️ Cuci Sofa — Mulai Rp80.000\n🛏️ Cuci Spring Bed — Mulai Rp120.000\n✨ Home Cleaning — Sesuai survei\n\n*Keunggulan:*\n• Petugas profesional & bersertifikat\n• Alat & bahan cleaning premium\n• Datang langsung ke rumah Anda\n• Free ongkir radius 5 KM\n\nMinimal order Rp150.000 ya 😊`;
  }

  // Jam operasional
  if (/jam|buka|tutup|operasional|waktu|hari/.test(input)) {
    return `🕐 *Jam Operasional Republik Laundry:*\n\n📅 Senin – Sabtu: 08.00 – 20.00 WIB\n📅 Minggu: 09.00 – 17.00 WIB\n\nKami siap melayani Anda setiap hari! 💪`;
  }

  // Area layanan
  if (/area|lokasi|alamat|wilayah|jangkauan|radius/.test(input)) {
    return `📍 *Area Layanan:*\n\nKami melayani area sekitar outlet dan layanan jemput-antar.\n\n🚗 Free ongkir untuk radius 5 KM dari outlet\n📞 Untuk area di luar radius, silakan hubungi admin\n\nAlamat outlet: Hubungi admin untuk info lokasi terkini.`;
  }

  // Pembayaran
  if (/bayar|payment|transfer|qris|ovo|gopay|dana|tunai|cash/.test(input)) {
    return `💳 *Metode Pembayaran:*\n\n• Tunai / Cash\n• Transfer Bank\n• QRIS\n• E-Wallet: OVO, GoPay, Dana\n\nSemua transaksi aman dan terpercaya! ✅`;
  }

  // Antar jemput
  if (/antar|jemput|pickup|delivery/.test(input)) {
    return `🚗 *Layanan Antar-Jemput:*\n\n• Free ongkir radius 5 KM dari outlet\n• Penjemputan sesuai jadwal yang disepakati\n• Pengantaran setelah laundry selesai\n\nUntuk pemesanan antar-jemput, silakan gunakan tombol WhatsApp yang tersedia di setiap layanan ya! 😊`;
  }

  // Syarat & ketentuan
  if (/syarat|ketentuan|s&k|sk|sk home|peraturan|aturan/.test(input)) {
    const sk = chatbotKnowledge.sk_home_service;
    return `📋 *Syarat & Ketentuan Home Service:*\n\n${sk.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nUntuk S&K lengkap, kunjungi: tr.ee/8GY2juzSZ_`;
  }

  // Harga / tarif
  if (/harga|tarif|biaya|berapa|price|cost/.test(input)) {
    return `💰 *Estimasi Harga Layanan:*\n\n🧺 Laundry Kiloan: Rp7.000/kg\n👔 Laundry Satuan: Hubungi admin\n🏠 Laundry Karpet: Mulai Rp30.000\n🪟 Laundry Gorden: Hubungi admin\n🧸 Laundry Boneka: Rp15.000 – Rp45.000\n\n🛋️ Cuci Sofa: Rp80.000 – Rp180.000\n🛏️ Cuci Spring Bed: Rp120.000 – Rp220.000\n✨ Home Cleaning: Sesuai survei\n\nGunakan Simulasi Harga di website untuk estimasi lebih detail! 🔢`;
  }

  // Express
  if (/express|kilat|cepat|urgent|darurat/.test(input)) {
    return `⚡ *Layanan Express:*\n\nKami menyediakan layanan express untuk kebutuhan mendesak!\n\n• Layanan express dapat diselesaikan dalam 24 jam\n• Tersedia untuk laundry kiloan & satuan\n• Biaya tambahan berlaku untuk layanan express\n\nHubungi admin via WhatsApp untuk informasi layanan express lebih lanjut 📱`;
  }

  // Pemesanan
  if (/pesan|order|booking|beli|daftar|mau laundry|laundry sekarang/.test(input)) {
    return `ℹ️ *Informasi Pemesanan*\n\nChatbot ini hanya untuk pertanyaan seputar layanan Republik Laundry.\n\nUntuk melakukan pemesanan, silakan:\n👇 Gunakan tombol **"Pesan via WhatsApp"** pada layanan yang Anda inginkan di halaman ini.\n\nAdmin kami siap membantu proses order Anda! 😊`;
  }

  // About / tentang RL
  if (/siapa|tentang|republik laundry|rl laundry|about/.test(input)) {
    return `✨ *Tentang Republik Laundry*\n\nRepublik Laundry adalah layanan laundry premium dan home service profesional yang mengutamakan kebersihan dan kepuasan pelanggan.\n\n🌟 *Keunggulan kami:*\n• Sistem 1 pelanggan 1 mesin cuci\n• Petugas profesional & berpengalaman\n• Deterjen ramah kulit & hipoalergenik\n• Layanan antar-jemput tersedia\n• Home service langsung ke rumah\n• Harga transparan & terjangkau\n\nPercayakan kebersihan rumah Anda kepada kami! 💛`;
  }

  // Terima kasih
  if (/terima kasih|makasih|thanks|thank you/.test(input)) {
    return `Sama-sama! Senang bisa membantu 😊\n\nJika ada pertanyaan lain seputar layanan Republik Laundry, jangan ragu untuk bertanya ya!\n\nUntuk pemesanan, gunakan tombol WhatsApp yang tersedia. Kami siap melayani Anda! 💛✨`;
  }

  // Default fallback
  return `Maaf, saya belum bisa menjawab pertanyaan tersebut secara spesifik 🙏\n\nSaya bisa membantu Anda dengan informasi tentang:\n• Layanan laundry (kiloan, satuan, karpet, gorden, boneka)\n• Home service (sofa, kasur, home cleaning)\n• Harga & estimasi biaya\n• Jam operasional & area layanan\n• Syarat & ketentuan\n• Metode pembayaran\n\nAtau langsung hubungi admin kami via WhatsApp untuk bantuan lebih lanjut! 😊`;
}

function MessageBubble({ msg }: { msg: Message }) {
  const isBot = msg.role === 'bot';
  return (
    <motion.div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} gap-2`}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {isBot && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
          style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}
        >
          <Bot size={12} className="text-white" />
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-outfit leading-relaxed whitespace-pre-line ${
          isBot
            ? 'rounded-tl-sm'
            : 'rounded-tr-sm'
        }`}
        style={
          isBot
            ? {
                background: 'rgba(245,237,216,0.9)',
                color: '#3D2B1F',
                border: '1px solid rgba(201,169,110,0.2)',
              }
            : {
                background: 'linear-gradient(135deg, #C9A96E, #A07840)',
                color: 'white',
              }
        }
      >
        {msg.content}
      </div>
    </motion.div>
  );
}

const QUICK_QUESTIONS = [
  'Layanan apa saja?',
  'Berapa harga kiloan?',
  'Jam buka kapan?',
  'Ada antar jemput?',
  'Cuci sofa berapa?',
  'Area layanan mana?',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: 'Halo! Saya asisten Republik Laundry 👋\n\nSaya siap menjawab pertanyaan seputar layanan kami. Untuk pemesanan, gunakan tombol WhatsApp yang tersedia ya!\n\nAda yang bisa saya bantu?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: generateBotResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Chat bubble button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}
        whileHover={{ scale: 1.1, boxShadow: '0 8px 32px rgba(201,169,110,0.5)' }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { scale: 0.9 } : {}}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '2px solid rgba(201,169,110,0.4)' }}
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] rounded-3xl overflow-hidden flex flex-col"
            style={{
              height: 520,
              background: 'rgba(254,252,248,0.97)',
              border: '1px solid rgba(201,169,110,0.25)',
              boxShadow: '0 32px 80px rgba(61,43,31,0.2), 0 8px 24px rgba(201,169,110,0.1)',
              backdropFilter: 'blur(20px)',
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #3D2B1F, #2d1a0d)',
                borderBottom: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(201,169,110,0.2)' }}
                >
                  <Bot size={18} style={{ color: '#E8C98A' }} />
                </div>
                <div>
                  <div className="text-sm font-outfit font-bold text-white">RL Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#25D366' }}
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-outfit" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="p-1.5 rounded-lg cursor-pointer transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </button>
            </div>

            {/* Notice */}
            <div
              className="px-4 py-2.5 flex items-start gap-2 flex-shrink-0"
              style={{
                background: 'rgba(201,169,110,0.08)',
                borderBottom: '1px solid rgba(201,169,110,0.15)',
              }}
            >
              <AlertCircle size={12} style={{ color: '#C9A96E', flexShrink: 0, marginTop: 2 }} />
              <p className="text-xs font-outfit leading-relaxed" style={{ color: '#9A6B4B' }}>
                Chat bot hanya untuk pertanyaan seputar layanan Republik Laundry. Untuk pemesanan laundry silakan gunakan tombol WhatsApp pada layanan yang tersedia.
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    className="flex justify-start gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}
                    >
                      <Bot size={12} className="text-white" />
                    </div>
                    <div
                      className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1"
                      style={{ background: 'rgba(245,237,216,0.9)', border: '1px solid rgba(201,169,110,0.2)' }}
                    >
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: '#C9A96E' }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, delay, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick questions */}
            <div
              className="px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0 scrollbar-hide"
              style={{ borderTop: '1px solid rgba(201,169,110,0.12)' }}
            >
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-outfit font-medium cursor-pointer transition-all whitespace-nowrap"
                  style={{
                    background: 'rgba(201,169,110,0.1)',
                    border: '1px solid rgba(201,169,110,0.2)',
                    color: '#6B4226',
                  }}
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div
              className="px-4 py-3 flex gap-2 flex-shrink-0"
              style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 text-sm font-outfit px-4 py-2.5 rounded-xl outline-none"
                style={{
                  background: 'rgba(245,237,216,0.6)',
                  border: '1px solid rgba(201,169,110,0.2)',
                  color: '#3D2B1F',
                }}
              />
              <motion.button
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{
                  background: input.trim()
                    ? 'linear-gradient(135deg, #C9A96E, #A07840)'
                    : 'rgba(201,169,110,0.15)',
                }}
                whileHover={{ scale: input.trim() ? 1.08 : 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
              >
                <Send size={14} style={{ color: input.trim() ? 'white' : '#C9A96E' }} />
              </motion.button>
            </div>

            {/* WA redirect */}
            <div className="px-4 pb-3 flex-shrink-0">
              <button
                className="w-full py-2 rounded-xl text-xs font-outfit font-medium flex items-center justify-center gap-2 cursor-pointer transition-all"
                style={{
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.2)',
                  color: '#128C7E',
                }}
                onClick={() => openWhatsApp('Halo Admin RL, saya ingin bertanya tentang layanan Republik Laundry.')}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi Admin via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
