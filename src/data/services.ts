import {
  formatKiloanMessage,
  formatSatuanMessage,
  formatKarpetMessage,
  formatGordenMessage,
  formatBonekaMessage,
  formatHomeServiceMessage,
} from '../utils/whatsapp';

export const laundryServices = [
  {
    id: 'kiloan',
    name: 'Laundry Kiloan',
    description: 'Cuci, kering, setrika untuk pakaian sehari-hari. Higienis dengan sistem 1 pelanggan 1 mesin cuci.',
    image: '/images/laundry-kiloan.jpg',
    link: 'https://tr.ee/0t3A0i6efn',
    whatsappMessage: formatKiloanMessage(),
    category: 'laundry' as const,
    icon: '👕',
    badge: 'Terpopuler',
  },
  {
    id: 'satuan',
    name: 'Laundry Satuan',
    description: 'Perawatan khusus untuk jas, gaun, jaket kulit, kebaya, dan pakaian premium.',
    image: '/images/laundry-satuan.jpg',
    link: 'https://tr.ee/gdG-LYuTUf',
    whatsappMessage: formatSatuanMessage(),
    category: 'laundry' as const,
    icon: '👔',
    badge: 'Premium',
  },
  {
    id: 'karpet',
    name: 'Laundry Karpet',
    description: 'Pembersihan mendalam segala jenis karpet agar bebas debu dan tungau.',
    image: '/images/laundry-karpet.jpg',
    link: 'https://tr.ee/BqhrTfv-yq',
    whatsappMessage: formatKarpetMessage(),
    category: 'laundry' as const,
    icon: '🏠',
    badge: null,
  },
  {
    id: 'gorden',
    name: 'Laundry Gorden',
    description: 'Pencucian gorden besar tanpa merusak serat kain dan pengait.',
    image: '/images/laundry-gorden.jpg',
    link: 'https://tr.ee/iO400NMzWj',
    whatsappMessage: formatGordenMessage(),
    category: 'laundry' as const,
    icon: '🪟',
    badge: null,
  },
  {
    id: 'boneka',
    name: 'Laundry Boneka',
    description: 'Cuci boneka segala ukuran menggunakan sabun aman dan pengeringan sempurna.',
    image: '/images/laundry-boneka.jpg',
    link: 'https://tr.ee/6KlD6Yy28c',
    whatsappMessage: formatBonekaMessage(),
    category: 'laundry' as const,
    icon: '🧸',
    badge: 'Kids Safe',
  },
];


export const homeServices = [
  {
    id: 'sofa',
    name: 'Cuci Sofa',
    description: 'Membersihkan noda, jamur, dan bakteri pada sofa kain maupun kulit langsung di rumah Anda.',
    image: '/images/home-sofa.jpg',
    link: 'https://tr.ee/BWkDwwpnrv',
    whatsappMessage: formatHomeServiceMessage('Cuci Sofa'),
    category: 'homeservice' as const,
    icon: '🛋️',
    badge: 'On-Site',
  },
  {
    id: 'springbed',
    name: 'Cuci Spring Bed',
    description: 'Ekstraksi debu, tungau, dan noda pada kasur menggunakan teknologi wet vacuum.',
    image: '/images/home-springbed.jpg',
    link: 'https://tr.ee/PGvxJ1bjCE',
    whatsappMessage: formatHomeServiceMessage('Cuci Spring Bed'),
    category: 'homeservice' as const,
    icon: '🛏️',
    badge: 'Anti-Tungau',
  },
  {
    id: 'cleaning',
    name: 'Home Cleaning',
    description: 'Layanan pembersihan kamar, dapur, kamar mandi, dan rumah pasca renovasi.',
    image: '/images/home-cleaning.jpg',
    link: 'https://tr.ee/CMl2XJdSND',
    whatsappMessage: formatHomeServiceMessage('Home Cleaning'),
    category: 'homeservice' as const,
    icon: '✨',
    badge: 'Pasca Renovasi',
  },
];

export const priceData = [
  {
    id: 'kiloan',
    name: 'Laundry Kiloan',
    items: [
      { label: 'Cuci + Kering + Setrika', price: 7000, unit: 'per kg' },
      { label: 'Cuci + Kering', price: 5000, unit: 'per kg' },
      { label: 'Setrika saja', price: 4000, unit: 'per kg' },
    ],
  },
  {
    id: 'boneka',
    name: 'Laundry Boneka',
    items: [
      { label: 'Small (< 30cm)', price: 15000, unit: 'per pcs' },
      { label: 'Medium (30–60cm)', price: 25000, unit: 'per pcs' },
      { label: 'Large (> 60cm)', price: 45000, unit: 'per pcs' },
    ],
  },
  {
    id: 'karpet',
    name: 'Laundry Karpet',
    items: [
      { label: 'Karpet Kecil (s/d 1m²)', price: 30000, unit: 'per pcs' },
      { label: 'Karpet Sedang (1–3m²)', price: 55000, unit: 'per pcs' },
      { label: 'Karpet Besar (> 3m²)', price: 90000, unit: 'per pcs' },
    ],
  },
  {
    id: 'sofa',
    name: 'Cuci Sofa',
    items: [
      { label: '1 Dudukan', price: 80000, unit: 'per unit' },
      { label: '2 Dudukan', price: 130000, unit: 'per unit' },
      { label: '3 Dudukan', price: 180000, unit: 'per unit' },
    ],
  },
  {
    id: 'springbed',
    name: 'Cuci Spring Bed',
    items: [
      { label: 'Single (90×190)', price: 120000, unit: 'per unit' },
      { label: 'Double (120×200)', price: 150000, unit: 'per unit' },
      { label: 'Queen (160×200)', price: 180000, unit: 'per unit' },
      { label: 'King (180×200)', price: 220000, unit: 'per unit' },
    ],
  },
];

export const chatbotKnowledge = {
  layanan_laundry: {
    kiloan: {
      nama: 'Laundry Kiloan',
      deskripsi: 'Cuci, kering, setrika untuk pakaian sehari-hari. Sistem 1 pelanggan 1 mesin cuci — higienis dan bersih.',
      harga: 'Mulai dari Rp7.000/kg',
      estimasi: '2–3 hari kerja (express tersedia)',
    },
    satuan: {
      nama: 'Laundry Satuan',
      deskripsi: 'Perawatan khusus untuk jas, gaun, jaket kulit, kebaya, dan pakaian premium.',
      harga: 'Hubungi admin untuk info harga satuan',
      estimasi: '3–5 hari kerja',
    },
    karpet: {
      nama: 'Laundry Karpet',
      deskripsi: 'Pembersihan mendalam segala jenis karpet agar bebas debu dan tungau.',
      harga: 'Mulai Rp30.000 tergantung ukuran',
      estimasi: '3–5 hari kerja',
    },
    gorden: {
      nama: 'Laundry Gorden',
      deskripsi: 'Pencucian gorden besar tanpa merusak serat kain dan pengait.',
      harga: 'Hubungi admin untuk info harga',
      estimasi: '3–5 hari kerja',
    },
    boneka: {
      nama: 'Laundry Boneka',
      deskripsi: 'Cuci boneka segala ukuran menggunakan sabun aman dan pengeringan sempurna.',
      harga: 'Small Rp15.000 | Medium Rp25.000 | Large Rp45.000',
      estimasi: '2–3 hari kerja',
    },
  },
  home_service: {
    sofa: {
      nama: 'Cuci Sofa',
      deskripsi: 'Membersihkan noda, jamur, dan bakteri pada sofa kain maupun kulit langsung di rumah Anda.',
      harga: '1 dudukan Rp80.000 | 2 dudukan Rp130.000 | 3 dudukan Rp180.000',
      estimasi: '2–4 jam',
      syarat: 'Sumber listrik minimal 1.300 watt disediakan pelanggan',
    },
    springbed: {
      nama: 'Cuci Spring Bed',
      deskripsi: 'Ekstraksi debu, tungau, dan noda pada kasur menggunakan teknologi wet vacuum.',
      harga: 'Single Rp120.000 | Double Rp150.000 | Queen Rp180.000 | King Rp220.000',
      estimasi: '1–3 jam',
    },
    cleaning: {
      nama: 'Home Cleaning',
      deskripsi: 'Layanan pembersihan kamar, dapur, kamar mandi, dan rumah pasca renovasi.',
      harga: 'Hubungi admin untuk survei & penawaran',
      estimasi: 'Sesuai luas & kondisi rumah',
    },
  },
  operasional: {
    jam: 'Senin – Sabtu: 08.00 – 20.00 WIB | Minggu: 09.00 – 17.00 WIB',
    area: 'Melayani area sekitar outlet dan jemput-antar radius tertentu',
    metode: 'Datang langsung ke outlet atau Jemput-Antar (free ongkir radius 5 KM)',
    pembayaran: 'Tunai, Transfer Bank, QRIS, E-Wallet (OVO, GoPay, Dana)',
  },
  sk_home_service: [
    'Minimal order kedatangan Rp150.000',
    'Sumber listrik dan air disediakan pemilik rumah',
    'Free ongkir radius 5 KM dari outlet',
    'Reschedule maksimal H-1 sebelum jadwal',
    'Tidak bertanggung jawab atas kerusakan akibat kondisi barang yang sudah rusak sebelumnya',
  ],
};
