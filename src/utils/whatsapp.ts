const WA_NUMBER = '628770877858'; // +62 877-0877-8587

export const formatKiloanMessage = (): string => {
  return `Halo, Admin RL.
Saya ingin menanyakan layanan laundry pakaian kiloan disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*
Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Pengerjaan Layanan : Reguler / Ekspress _(Pilih salah satu yang digunakan)_
Metode Layanan : Datang langsung ke outlet / Jemput-Antar _(Pilih salah satu yang digunakan)_
Catatan Tambahan :

Terima kasih🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

export const formatSatuanMessage = (): string => {
  return `Halo, Admin RL.
Saya ingin menanyakan layanan laundry pakaian satuan disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*
Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Jenis Pakaian :
Jumlah :
Metode Layanan : Datang langsung ke outlet / Jemput-Antar _(Pilih salah satu yang digunakan)_
Catatan Tambahan :

Terima kasih🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

export const formatKarpetMessage = (): string => {
  return `Halo, Admin RL.
Saya ingin menanyakan layanan laundry karpet disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*
Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Jenis Karpet :
Ukuran / Jumlah :
Metode Layanan : Datang langsung ke outlet / Jemput-Antar _(Pilih salah satu yang digunakan)_
Catatan Tambahan :

Terima kasih🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

export const formatGordenMessage = (): string => {
  return `Halo, Admin RL.
Saya ingin menanyakan layanan laundry gorden disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*
Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Jenis Gorden :
Ukuran / Jumlah :
Metode Layanan : Datang langsung ke outlet / Jemput-Antar _(Pilih salah satu yang digunakan)_
Catatan Tambahan :

Terima kasih🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

export const formatBonekaMessage = (): string => {
  return `Halo, Admin RL.
Saya ingin menanyakan layanan laundry boneka disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*
Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Jumlah :
Metode Layanan : Datang langsung ke outlet / Jemput-Antar _(Pilih salah satu yang digunakan)_
Catatan Tambahan :

Terima kasih🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

export const formatHomeServiceMessage = (serviceName: string): string => {
  return `Halo, Admin RL.
Saya ingin menanyakan layanan ${serviceName} disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*
Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Daya Listrik : _(minimal 1.300 watt)_
Jenis Sofa :
Jumlah Sofa :
Catatan Tambahan :

Terima kasih 🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

// Kept for backward compatibility
export const formatLaundryMessage = (serviceName: string): string => {
  return `Halo, Admin RL. Saya ingin menanyakan layanan ${serviceName} disini. Mohon info detail layanan dan tarifnya ya.

*Berikut format order saya :*

Nama Pelanggan :
Alamat Lengkap :
No. WA Aktif :
Jumlah :
Metode Layanan :
Datang langsung ke outlet / Jemput-Antar
_(Pilih salah satu yang digunakan)_

Catatan Tambahan :

Terima kasih 🙏

*Kode Pesan : 1544 (Teks ini jangan dihapus)*`;
};

export const openWhatsApp = (message: string): void => {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const openWhatsAppWithLink = (link: string): void => {
  window.open(link, '_blank', 'noopener,noreferrer');
};
