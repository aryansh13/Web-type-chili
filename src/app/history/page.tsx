"use client";
import Link from "next/link";
import Image from "next/image"; // Menggunakan komponen Image dari Next.js untuk optimisasi

const DUMMY_HISTORY = [
  {
    id: 1,
    image: "/chili1.jpg", // Path yang benar untuk file di folder /public
    name: "Cabai Rawit Merah",
    accuracy: 92,
    date: "12 Mei 2024, 10:15",
  },
  {
    id: 2,
    image: "/chili2.jpg",
    name: "Cabai Merah Besar",
    accuracy: 88,
    date: "10 Mei 2024, 14:22",
  },
  {
    id: 3,
    image: "/chili3.jpg",
    name: "Cabai Hijau Keriting",
    accuracy: 85,
    date: "8 Mei 2024, 09:05",
  },
];

// Komponen untuk fallback jika gambar tidak ditemukan
const ImageFallback = ({ src, alt, ...props }: any) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onError={(e) => {
        e.currentTarget.srcset = "https://placehold.co/128x128/e2e8f0/475569?text=Error";
        e.currentTarget.src = "https://placehold.co/128x128/e2e8f0/475569?text=Error";
      }}
    />
  );
};


export default function HistoryPage() {
  // Kondisi jika riwayat kosong
  if (DUMMY_HISTORY.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-slate-300"><path d="M10 2h4"/><path d="M12 18a6 6 0 1 0-6-6 6 6 0 0 0 6 6z"/><path d="M12 14v-4"/><path d="M12 22a8 8 0 0 0 8-8"/><path d="M4 14a8 8 0 0 0 8 8"/></svg>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Belum Ada Riwayat</h2>
            <p className="text-slate-500 mb-6">Mulai identifikasi cabai pertama Anda di halaman utama.</p>
            <Link href="/" className="inline-block px-6 py-2.5 text-base font-bold rounded-lg bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-all">
                Mulai Identifikasi
            </Link>
        </div>
      </div>
    );
  }

  // Tampilan utama jika ada riwayat
  return (
    <div className="w-full flex items-start justify-center p-4 sm:p-6 lg:p-8">
      <section className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header Halaman */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Riwayat Identifikasi</h1>
                <p className="text-slate-500 mt-1">Berikut adalah daftar semua identifikasi yang telah Anda lakukan.</p>
            </div>
            <button className="flex-shrink-0 bg-slate-100 text-slate-600 hover:bg-slate-200 font-semibold px-4 py-2 rounded-lg transition-colors text-sm">
                Hapus Semua Riwayat
            </button>
        </div>

        {/* Daftar Riwayat dalam Bentuk Tabel */}
        <div className="flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              {/* Header Tabel */}
              <div className="grid grid-cols-3 md:grid-cols-[2fr,1fr,1fr,auto] gap-4 border-b border-slate-200 pb-3 mb-3 text-left text-sm font-semibold text-slate-500">
                <div className="pl-4">Nama Cabai</div>
                <div className="text-center">Akurasi</div>
                <div className="text-center">Tanggal</div>
                <div className="text-right pr-4">Aksi</div>
              </div>
              
              {/* Isi Tabel */}
              <div className="flex flex-col gap-2">
                {DUMMY_HISTORY.map((item) => (
                  <div key={item.id} className="grid grid-cols-3 md:grid-cols-[2fr,1fr,1fr,auto] items-center gap-4 bg-slate-50 hover:bg-slate-100 rounded-lg p-2 transition-colors">
                    
                    {/* Kolom Nama & Gambar */}
                    <div className="flex items-center gap-4">
                        <ImageFallback
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover rounded-md border-2 border-white shadow-sm"
                        />
                        <span className="font-semibold text-slate-700">{item.name}</span>
                    </div>

                    {/* Kolom Akurasi */}
                    <div className="flex justify-center">
                        <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full">
                            {item.accuracy}%
                        </span>
                    </div>

                    {/* Kolom Tanggal */}
                    <div className="text-sm text-slate-500 text-center">{item.date}</div>
                    
                    {/* Kolom Aksi */}
                    <div className="text-right">
                        <button className="bg-white hover:bg-emerald-50 text-emerald-600 font-semibold px-4 py-1.5 rounded-md border border-slate-200 hover:border-emerald-200 transition text-sm">
                            Lihat
                        </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}