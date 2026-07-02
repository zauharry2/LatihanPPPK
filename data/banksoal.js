const BANK_SOAL = [
  {
    soal: "Seorang operator ditugaskan untuk mengurus beberapa sarana kantor berikut adalah sarana yang diurus kecuali",
    pilihan: [
      "Scanner",
      "Komputer",
      "Ruang rapat",
      "ATK (alat tulis kantor)",
    ],
    jawaban: 3
  },
  {
    soal: "Lemari yang dirancang dengan deretan hanging folder di dalam setiap lacinya yang memungkinkan pengaturan dokumen secara teratur dan mudah diakses adalah",
    pilihan: [
      "Filing kabinet",
      "Ordner",
      "Hanging folder",
      "Rotary filing system",
    ],
    jawaban: 0
  },
  {
    soal: "Kegiatan melaporkan keadaan sarana dan prasarana kantor baik persediaan mutasi maupun keadaan fisik dalam periode tertentu merupakan tujuan dari penggunaan buku",
    pilihan: [
      "Induk",
      "Inventaris",
      "Induk barang inventaris",
      "Laporan sarana dan prasarana",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional menemukan bahwa server jaringan berjalan sangat lambat tindakan apa yang harus dilakukan untuk mengidentifikasi penyebabnya",
    pilihan: [
      "Melakukan restart server",
      "Mengecek penggunaan CPU dan RAM server",
      "Menghubungi penyedia layanan internet",
      "Memperbarui perangkat lunak server",
    ],
    jawaban: 1
  },
  {
    soal: "Sistem pemantauan mendeteksi anomali dalam data yang diolah Langkah apa yang harus diambil untuk memastikan keakuratan data",
    pilihan: [
      "Mengabaikan anomali",
      "Mengganti perangkat keras",
      "Melakukan backup data",
      "Memverifikasi Sumber data",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional harus memastikan kelancaran operasi selama pemadaman listrik yang tidak terduga Apa yang harus dilakukan untuk menjaga operasi tetap berjalan",
    pilihan: [
      "Menggunakan generator cadangan",
      "Mematikan semua perangkat",
      "Meminta semua staf untuk berhenti bekerja",
      "Menghubungi penyedia listrik",
    ],
    jawaban: 0
  },
  {
    soal: "Sistem mengalami down time yang tidak terduga selama jam kerja apa yang seharusnya dilakukan seorang operator layanan operasional untuk meminimalkan dampak pada operasi",
    pilihan: [
      "Menghubungi tim teknis",
      "Menginformasikan kepada manajemen",
      "Mengalihkan layanan ke sistem cadangan",
      "Menunggu sistem kembali normal",
    ],
    jawaban: 2
  },
  {
    soal: "Alat yang berfungsi untuk melubangi dokumen agar bisa dimasukkan ke dalam map snelster atau ordner dalam memproses dokumen disebut",
    pilihan: [
      "Perforator",
      "Stapler",
      "Remover",
      "Cutter",
    ],
    jawaban: 0
  },
  {
    soal: "Peralatan kantor yang digunakan dalam memproses dokumen",
    pilihan: [
      "Buku kendali dan daftar pengendali",
      "Lembar pengantar dan lembar disposisi",
      "Buku agenda dan buku ekspedisi",
      "Perforator, stapler, dan stempel (cap)",
    ],
    jawaban: 3
  },
  {
    soal: "Jika hendak mencari kembali dokumen tentang latihan training dengan menggunakan filing system subjek maka dapat dicari dalam laci",
    pilihan: [
      "Personalia",
      "Training",
      "Latihan training",
      "Pendidikan",
    ],
    jawaban: 1
  },
  {
    soal: "Jika terdapat email masuk untuk pimpinan cara yang tepat untuk menyampaikan kepada pimpinan adalah",
    pilihan: [
      "Membacakan isi atau pesan email tersebut",
      "Meneruskan email ke pimpinan",
      "Mencetak email tersebut kemudian disampaikan kepada beliau",
      "Membuka email tersebut dan meminta beliau untuk membacanya",
    ],
    jawaban: 2
  },
  {
    soal: "Kegiatan menyatukan dokumen yang sejenis dan dibuat seperti buku dengan tujuan agar dokumen tersebut tidak mudah hilang merupakan kegiatan",
    pilihan: [
      "Pustaka",
      "Kliping",
      "Binding atau penjilit",
      "Pembuatan buku",
    ],
    jawaban: 2
  },
  {
    soal: "Surat yang berisi masalah yang harus diselesaikan sesegera mungkin oleh beberapa pejabat sekaligus maka langkah penanganan surat yang tepat adalah",
    pilihan: [
      "Surat diperbanyak dan diserahkan kepada pejabat yang terkait",
      "Surat ditangani oleh pejabat tertentu dulu sampai selesai baru ditangani pejabat lain",
      "Surat langsung disampaikan kepada salah satu pejabat untuk dibaca bergantian",
      "Surat diserahkan kepada pejabat yang kompeten terhadap masalah tersebut",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional perlu memastikan bahwa sistem berjalan optimal setelah pembaharuan perangkat lunak besar apa yang harus diperiksa terlebih dahulu",
    pilihan: [
      "Kinerja CPU",
      "Ketersediaan memori",
      "Kondisi jaringan",
      "Kompatibilitas perangkat lunak",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional mendeteksi adanya malware dalam sistem operasional Apa langkah pertama yang harus dilakukan",
    pilihan: [
      "Menghapus file yang terinfeksi",
      "Menjalankan scan antivirus",
      "Mematikan sistem",
      "Menghubungi tim keamanan",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator layanan operasional perlu mengatur ulang jaringan setelah terjadi perubahan topologi Langkah apa yang sebaiknya dilakukan",
    pilihan: [
      "Mengkonfigurasi ulang switch",
      "Menghubungkan perangkat baru",
      "Memeriksa kecepatan jaringan",
      "Menginformasikan kepada pengguna",
    ],
    jawaban: 0
  },
  {
    soal: "Saat seorang operator layanan operasional menemukan bahwa biaya operasional melebihi anggaran langkah yang harus diambil adalah",
    pilihan: [
      "Mengabaikan karena sudah terjadi",
      "Melakukan audit internal untuk menemukan penyebabnya",
      "Mengurangi kualitas bahan baku untuk menghemat biaya",
      "Mengurangi jumlah tenaga kerja",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengawasan operasional seorang operator layanan operasional menemukan adanya penurunan efisiensi kerja karyawan langkah yang sebaiknya dilakukan adalah",
    pilihan: [
      "Mengganti seluruh karyawan dengan yang baru",
      "Memberikan insentif tambahan untuk meningkatkan semangat kerja",
      "Menambah jam kerja",
      "Melakukan evaluasi dan pelatihan ulang",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional menemukan bahwa ada mesin yang beroperasi di bawah kapasitas optimal langkah yang harus diambil adalah",
    pilihan: [
      "Menghentikan operasional mesin",
      "Menggantinya dengan mesin baru",
      "Mengurangi beban kerja pada mesin tersebut",
      "Melakukan perawatan dan kalibrasi mesin",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pengawasan operasional seorang operator layanan operasional menemukan bahwa proses pelaporan memakan waktu terlalu lama langkah yang paling tepat adalah",
    pilihan: [
      "Mengotomatisasi sebagian dari proses pelaporan",
      "Memotong prosedur pelaporan untuk mempercepat waktu",
      "Menunda waktu proses pelaporan",
      "Mengubah format laporan menjadi lebih sederhana",
    ],
    jawaban: 0
  },
  {
    soal: "Pengelolaan dokumen kepegawaian yang tertata dengan baik akan menciptakan pengurusan administrasi kepegawaian yang efektif dan efisien Berikut yang bukan termasuk dokumen kepegawaian adalah",
    pilihan: [
      "Surat izin penyelenggaraan kegiatan",
      "Dokumen penilaian kinerja pegawai",
      "SK kenaikan pangkat",
      "Sertifikat Diklat jabatan",
    ],
    jawaban: 0
  },
  {
    soal: "Seorang operator layanan operasional menerima keluhan pelanggan mengenai ketidakmampuan untuk mengakses layanan online selama jam sibuk langkah pertama yang paling tepat yang harus diambil oleh seorang operator layanan operasional tersebut adalah",
    pilihan: [
      "Mengabaikan keluhan dan melanjutkan pekerjaan lain",
      "Langsung menghubungi tim teknis untuk memperbaiki masalah",
      "Memberikan diskon kepada pelanggan sebagai kompensasi",
      "Mencatat keluhan dan memberikan nomor tiket kepada pelanggan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang dimaksud 'The Communication is in tune' dalam komunikasi efektif",
    pilihan: [
      "Pertukaran informasi, ide, perasaan yang menghasilkan perubahan sikap",
      "Sebuah hubungan baik antara pemberi pesan dan penerima pesan",
      "Kedua belah pihak yang berkomunikasi sama-sama mengerti apa pesan yang disampaikan",
      "Tercapainya tujuan si pengirim pesan",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana agar dapat tercipta komunikasi efektif",
    pilihan: [
      "Bagaimana cara agar suatu pesan yang disampaikan komunikator dapat menimbulkan dampak atau efek tertentu pada komunikasi",
      "Komunikator harus terlebih dahulu melakukan komunikasi dengan sendiri berdialog sendiri untuk dijawab sendiri",
      "Cara penyampaikan pesan atau informasi perlu dirancang secara cermat sesuai dengan karakteristik komunikan",
      "Komunikator hanya menekan pesan-pesan yang mendukung komunikasi saja",
    ],
    jawaban: 2
  },
  {
    soal: "Mengapa komunikasi dianggap sebagai kekuatan dominan dalam kehidupan organisasi",
    pilihan: [
      "Proses menyalurkan informasi, ide, penjelasan, perasaan, pertanyaan",
      "Tanpa komunikasi tidak akan terdapat aktivitas organisasi",
      "Pemindahan pengertian dalam bentuk gagasan atau informasi dari seseorang ke orang lain",
      "Pemberian pesan, ide atau sikap yang dihasilkan adanya suatu persetujuan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara mengetahui kualitas atau kualifikasi kepemimpinan seseorang dari proses komunikasi yang dilakukannya",
    pilihan: [
      "Mengungkapkan dan mengekspresikan ide-idenya kepada semua pihak dalam organisasi tersebut",
      "Memiliki karakter sebagai pengiriman atau pengarahan pesan, menafsirkan pesan dan penanganan atau penindaklanjutan pesan",
      "Menghasilkan pengertian tentang tugas dan hubungannya dengan tugas organisasian",
      "Komunikasi organisasi menyampaikan dan menafsirkan pesan-pesan di antara unit-unit komunikasi yang merupakan bagian dari fakta atau keterangan-keterangan organisasi",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika prosedur standar operasional (SOP) tidak dapat diterapkan karena situasi khusus",
    pilihan: [
      "Mengabaikan SOP dan mengerjakan agar cepat selesai",
      "Mencari panduan alternatif atau berkoordinasi dengan atasan",
      "Tetap mengikuti SOP meskipun tidak sesuai dengan situasi",
      "Membiarkan masalah tanpa tindakan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara menangani pekerjaan yang memiliki tenggat waktu ketat",
    pilihan: [
      "Menunda pekerjaan hingga mendekati tenggat",
      "Mengatur prioritas pekerjaan dan menyelesaikannya secara efisien",
      "Mengabaikan tenggat waktu",
      "Membagi pekerjaan tanpa memperhatikan urgensi",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan utama dari pelaksanaan pelatihan bagi operator layanan operasional",
    pilihan: [
      "Meningkatkan keterampilan dan pengetahuan untuk menjalankan tugas lebih efektif",
      "Mengurangi tanggung jawab pekerjaan",
      "Memperpanjang waktu pelayanan",
      "Meningkatkan biaya operasional untuk operator layanan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tugas utama seorang operator layanan operasional",
    pilihan: [
      "Merancang strategi bisnis untuk kelancaran operasional",
      "Menyediakan dukungan teknis harian dan memastikan kelancaran operasional",
      "Mengelola hubungan masyarakat atau pelanggan",
      "Melakukan promosi layanan",
    ],
    jawaban: 1
  },
  {
    soal: "Ketika terjadi gangguan operasional langkah pertama yang harus diambil oleh operator adalah",
    pilihan: [
      "Mengabaikan gangguan",
      "Melaporkan kepada atasan",
      "Menunggu instruksi",
      "Melakukan investigasi awal",
    ],
    jawaban: 3
  },
  {
    soal: "Peralatan yang mengalami kerusakan harus dilaporkan kepada",
    pilihan: [
      "Tim pemasaran",
      "Departemen teknis atau pemeliharaan",
      "Pelanggan",
      "Bagian keuangan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang dimaksud dengan down time dalam operasional layanan",
    pilihan: [
      "Waktu saat operator beristirahat di jam istirahat",
      "Waktu saat sistem aplikasi kantor off",
      "Waktu pemeliharaan sistem oleh tim teknis",
      "Waktu saat sistem atau layanan tidak berfungsi",
    ],
    jawaban: 3
  },
  {
    soal: "Mengapa penting bagi operator layanan operasional untuk memantau log sistem",
    pilihan: [
      "Untuk menghitung anggaran tahunan",
      "Untuk mengidentifikasi masalah dan pola yang berulang",
      "Untuk mengawasi kinerja karyawan",
      "Untuk membuat laporan keuangan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang dimaksud dengan pemeliharaan preventif",
    pilihan: [
      "Memperbaiki sistem yang rusak",
      "Melakukan tindakan perbaikan kerusakan sistem operasional",
      "Memastikan sistem saat tidak digunakan",
      "Aktivitas perawatan yang dilakukan untuk mencegah kerusakan peralatan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa fungsi dari sistem monitoring dalam operasional layanan",
    pilihan: [
      "Menghitung laba perusahaan",
      "Memastikan layanan berjalan optimal dengan memantau dan mengawasi kinerja sistem",
      "Mengganti karyawan yang sakit",
      "Mempromosikan produk baru",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan fungsi pengawasan pada proses komunikasi",
    pilihan: [
      "Proses penyampaian pesan berjalan sangat cepat juga mampu menjangkau wilayah geografis yang sangat luas",
      "Untuk mengendalikan apa yang terjadi di lingkungan masyarakat",
      "Pesan komunikasi yang disampaikan menyangkut kepentingan orang banyak tidak bersifat pribadi",
      "Mengutamakan prinsip-prinsip efisiensi dalam melakukan kegiatan komunikasinya",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah apa yang biasanya dilakukan dalam menyusun rencana kerja operator layanan operasional",
    pilihan: [
      "Akuisisi data, penyelidikan kebutuhan, perencanaan kegiatan, pelaksanaan dan evaluasi",
      "Pengumpulan data, analisis kebutuhan, perencanaan kegiatan, pelaksanaan dan evaluasi",
      "Pengumpulan data, analisis kebutuhan, pelaksanaan dan evaluasi",
      "Penghimpunan data, pemeriksaan kebutuhan, perencanaan kegiatan, pelaksanaan dan evaluasi",
    ],
    jawaban: 1
  },
  {
    soal: "Prinsip evaluasi operator layanan operasional adalah berdasarkan",
    pilihan: [
      "Fakta",
      "Data",
      "Anggota",
      "Penilaian",
    ],
    jawaban: 0
  },
  {
    soal: "Fungsi perencanaan dalam instansi pemerintahan dilakukan dalam kegiatan",
    pilihan: [
      "Pemberian motivasi kepada pegawai",
      "Menyusun struktur instansi pemerintahan",
      "Menentukan pegawai pada sebuah jabatan tertentu",
      "Menentukan target pencapaian yang harus diraih di instansi pemerintahan",
    ],
    jawaban: 3
  },
  {
    soal: "Asas pembinaan pegawai yang bekerja dengan mengutamakan keahlian berdasarkan kode etik dan ketentuan peraturan perundang-undangan yang berlaku adalah asas",
    pilihan: [
      "Perlindungan hukum",
      "Profesionalitas",
      "Akuntabilitas",
      "Legalitas",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam konteks penyusunan ketentuan atau pedoman atau lainnya di instansi pemerintahan proses yang melibatkan identifikasi masalah analisis kebutuhan dan pengumpulan data disebut sebagai",
    pilihan: [
      "Evaluasi ketentuan atau pedoman atau peraturan",
      "Pembentukan ketentuan atau pedoman atau peraturan",
      "Pelaksanaan ketentuan atau pedoman atau peraturan",
      "Evaluasi ketentuan atau pedoman atau peraturan",
    ],
    jawaban: 1
  },
  {
    soal: "Penilaian kinerja jabatan fungsional operator layanan operasional bertujuan untuk",
    pilihan: [
      "Memastikan keadilan",
      "Meningkatkan transparansi",
      "Menjamin objektivitas",
      "Mengutamakan meritokrasi",
    ],
    jawaban: 2
  },
  {
    soal: "Penilaian kinerja jabatan fungsi operator layanan operasional yang dilakukan mengacu pada praktik menjalankan proses penilaian dengan kejelasan integritas dan pertanggungjawaban pernyataan tersebut menegaskan prinsip",
    pilihan: [
      "Objektif",
      "Terukur",
      "Transparan",
      "Akuntabel",
    ],
    jawaban: 3
  },
  {
    soal: "Prinsip operator layanan operasional yang juga merupakan ASN sebagai profesi berlandaskan pada prinsip sebagai berikut kecuali",
    pilihan: [
      "Nilai dasar",
      "Kode etik dan kode perilaku",
      "Komitmen, integritas moral dan tanggung jawab pada pelayanan publik",
      "Non-diskriminatif",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang menjadi tujuan utama dari perencanaan dalam menjabat jabatan fungsional operator layanan operasional",
    pilihan: [
      "Memaksimalkan biaya",
      "Meningkatkan kecepatan pekerjaan",
      "Mengurangi risiko pekerjaan",
      "Memperpendek waktu pekerjaan",
    ],
    jawaban: 2
  },
  {
    soal: "Backup data secara berkala bertujuan untuk",
    pilihan: [
      "Mempercepat operasional",
      "Menghindari kehilangan data penting jika terjadi kerusakan sistem",
      "Menambah kapasitas server",
      "Mengurangi down time",
    ],
    jawaban: 1
  },
  {
    soal: "Apa peran dari manual operasional dalam pekerjaan operator layanan operasional",
    pilihan: [
      "Untuk membuat laporan keuangan",
      "Sebagai panduan langkah-langkah kerja untuk menjaga standar operasional",
      "Untuk Merancang strategi bisnis",
      "Untuk mengelola SDM",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu keterampilan penting yang harus dimiliki oleh operator layanan operasional adalah",
    pilihan: [
      "Keterampilan menulis laporan",
      "Keterampilan troubleshooting dan pemecahan masalah teknis",
      "Keterampilan negosiasi",
      "Keterampilan berbicara di depan umum",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan operator jika ada laporan gangguan dari masyarakat pengguna layanan",
    pilihan: [
      "Mengabaikan laporan tersebut",
      "Menindak lanjuti dengan mengecek dan memperbaiki masalah secepat mungkin",
      "Menunggu laporan lainnya",
      "Mengirimkan permintaan maaf",
    ],
    jawaban: 1
  },
  {
    soal: "Penggunaan dashboard dalam operasional layanan membantu operator untuk",
    pilihan: [
      "Memantau kinerja layanan secara Real Time",
      "Memantau laporan keuangan",
      "Mengatur jadwal karyawan",
      "Mengembangkan strategi pemasaran",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang dimaksud dengan operator layanan operasional",
    pilihan: [
      "Orang yang mengelola arsif dalam organisasi",
      "Orang yang bertanggung jawab untuk menjalankan dan mengawasi proses operasional sehari-hari dalam sebuah organisasi",
      "Orang yang mendesain sistem informasi",
      "Orang yang melakukan pelayanan terus-menerus",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah yang bukan merupakan tahapan dalam proses perencanaan dalam menjabat jabatan fungsional operator layanan operasional",
    pilihan: [
      "Analisis situasi",
      "Desain model",
      "Evaluasi risiko",
      "Pelaksanaan pekerjaan",
    ],
    jawaban: 3
  },
  {
    soal: "Kompetensi operator layanan operasional yang diukur dari pengalaman kerja berkaitan dengan masyarakat majemuk dalam hal agama suku dan budaya sehingga memiliki wawasan kebangsaan adalah",
    pilihan: [
      "Kompetensi teknis",
      "Kompetensi habituasi",
      "Kompetensi manajerial",
      "Kompetensi sosial kultural",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang dimaksud dengan partisipasi masyarakat dalam pelayanan publik",
    pilihan: [
      "Masyarakat diikut sertakan dalam proses perencanaan, pelaksanaan dan evaluasi pelayanan",
      "Masyarakat hanya berperan sebagai penerima layanan",
      "Masyarakat tidak terlibat dalam proses pelayanan",
      "Masyarakat hanya memberikan kritik terhadap pelayanan",
    ],
    jawaban: 0
  },
  {
    soal: "Standar pelayanan minimal (SPM) di sektor sosial mengatur tentang",
    pilihan: [
      "Penyediaan layanan hiburan",
      "Perlindungan dan layanan sosial bagi kelompok rentan",
      "Pembangunan perumahan mewah",
      "Penanganan aset negara",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu keuntungan komunikasi daring (dalam jaringan) adalah",
    pilihan: [
      "Memberikan fleksibilitas dan efisiensi",
      "Memberikan kesempatan upgrade fasilitas",
      "Memberikan kesempatan kemampuan adaptasi",
      "Memberikan keragaman pola kerja",
    ],
    jawaban: 0
  },
  {
    soal: "Untuk memudahkan pengiriman surat keluar kepada multi tujuan internal yang sifatnya berulang operator layanan operasional dapat menggunakan fitur",
    pilihan: [
      "Template penerima",
      "Template tujuan surat",
      "Template surat",
      "Daftar tujuan surat",
    ],
    jawaban: 0
  },
  {
    soal: "Meskipun ada banyak manfaat teknologi di tempat kerja penting untuk mengetahui apa saja dampak negatifnya berikut adalah efek negatif dari dampak teknologi di tempat kerja kecuali",
    pilihan: [
      "Ancaman terhadap keamanan data",
      "Ketergantungan yang berlebihan",
      "Ancaman terhadap privasi pegawai dalam bekerja",
      "Adanya peningkatan akurasi hasil pekerjaan",
    ],
    jawaban: 3
  },
  {
    soal: "Untuk menjaga keamanan transaksi pada dompet digital digunakan kode yang hanya berlaku beberapa menit saja yaitu",
    pilihan: [
      "Password",
      "Top up",
      "SMS",
      "OTP",
    ],
    jawaban: 3
  },
  {
    soal: "Kolaborasi yang memanfaatkan perangkat lunak dalam kegiatan pertemuan jarak jauh adalah",
    pilihan: [
      "Zoom",
      "Cloud",
      "Github",
      "Google Drive",
    ],
    jawaban: 0
  },
  {
    soal: "Suatu ketika aplikasi layanan mengalami gangguan Apa yang dilakukan operator layanan operasional",
    pilihan: [
      "Mengabaikan kendala yang terjadi",
      "Menunda pelayanan sampai gangguan teratasi",
      "Meminta teman dekat mencari solusi",
      "Memeriksa gangguan, menyiapkan alternatif solusi dan melaporkan kepada atasan",
    ],
    jawaban: 3
  },
  {
    soal: "Keamanan dan perlindungan data penerima layanan adalah hal penting dalam sebuah layanan publik serta tidak jarang ancaman seperti serangan Malware hacking atau pencurian identitas terjadi apa yang dilakukan operator layanan operasional untuk mencegah hal tersebut terjadi",
    pilihan: [
      "Data penerima layanan disimpan di Cloud",
      "Data penerima layanan disimpan di drive",
      "Menggunakan sistem enkripsi, memasang firewall dan antivirus",
      "Memasang WiFi",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam melakukan upaya pencegahan agar perangkat lunak dapat terlindungi hak ciptanya dari pembajakan maka perusahaan pembuat perangkat lunak melengkapi produknya dengan kode tertentu yang biasa disebut",
    pilihan: [
      "Serial number",
      "Code number",
      "Dial number",
      "Passing number",
    ],
    jawaban: 0
  },
  {
    soal: "Apa fungsi dari redudansi dalam sistem layanan",
    pilihan: [
      "Menambah biaya operasional",
      "Mengurangi beban kerja operator",
      "Memastikan sistem tetap beroperasi jika salah satu komponen gagal",
      "Mempercepat proses pelayanan",
    ],
    jawaban: 2
  },
  {
    soal: "Layanan berbasis teknologi informasi dalam pelayanan publik disebut",
    pilihan: [
      "Layanan otomatis",
      "E-government",
      "Pelayanan tradisional",
      "Pelayanan berbasis manual",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang dimaksud dengan inovasi dalam pelayanan publik",
    pilihan: [
      "Terobosan layanan bagi masyarakat dalam bentuk pelayanan publik yang baru",
      "Pelayanan yang menggunakan cara-cara lama",
      "Pengurangan pelayanan",
      "Penambahan jumlah pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Faktor yang paling penting dalam peningkatan kualitas pelayanan publik adalah",
    pilihan: [
      "Teknologi terbaru",
      "Kepuasan masyarakat dan efektivitas layanan",
      "Jumlah pegawai yang banyak",
      "Meningkatkan anggaran pemerintah",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tugas utama dari seorang operator layanan operasional di instansi pemerintah",
    pilihan: [
      "Mengelola seluruh dokumen rahasia negara",
      "Mengawasi kinerja pegawai",
      "Menyediakan dukungan teknis dan administrasi untuk layanan operasional harian di instansi",
      "Mengambil keputusan strategis",
    ],
    jawaban: 2
  },
  {
    soal: "Apa fungsi administratif yang harus dilakukan oleh operator layanan operasional",
    pilihan: [
      "Mengembangkan kebijakan publik",
      "Mengatur anggaran daerah",
      "Merencanakan Proyek besar pemerintah",
      "Melakukan pencatatan, pelaporan dan dokumentasi layanan harian",
    ],
    jawaban: 3
  },
  {
    soal: "Apa peran penting operator layanan operasional dalam efisiensi operasional",
    pilihan: [
      "Memastikan bahwa semua tugas diselesaikan oleh pegawai lain",
      "Mengurangi jumlah pegawai",
      "Menyediakan dukungan teknis yang memungkinkan efisiensi operasional yang lebih baik",
      "Membuat aturan baru tanpa konsultasi",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam struktur organisasi kepada siapa biasanya operator layanan operasional melapor",
    pilihan: [
      "Penjaga Keamanan",
      "Presiden langsung",
      "Masyarakat",
      "Kepala Departemen atau bagian terkait",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang dimaksud dengan manajemen dalam konteks pekerjaan operator layanan operasional",
    pilihan: [
      "Pengelolaan waktu dan biaya",
      "Pemilihan metode",
      "Desain struktur",
      "Pembuatan jadwal kerja",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam situasi di mana sistem operasional mengalami over permintaan yang tinggi, tindakan apa yang harus dilakukan operator layanan operasional",
    pilihan: [
      "Menunda semua permintaan",
      "Memberikan pemberitahuan kepada pelanggan mengenai potensi keterlambatan",
      "Mengabaikan permintaan",
      "Menolak pelanggan",
    ],
    jawaban: 1
  },
  {
    soal: "Saat melakukan pemeliharaan rutin pada sistem layanan seorang operator layanan operasional mendeteksi adanya anomali yang berpotensi menyebabkan gangguan besar tindakan terbaik yang harus diambil adalah",
    pilihan: [
      "Melanjutkan pemeliharaan tanpa melaporkan anomali",
      "Mengabaikan anomali dan menyelesaikan pemeliharaan sesuai jadwal",
      "Menunggu hingga anomali menjadi masalah nyata sebelum melaporkannya",
      "Menghentikan pemeliharaan dan melaporkan anomali ke tim teknis segera",
    ],
    jawaban: 3
  },
  {
    soal: "Saat menerima laporan dari pelanggan bahwa layanan internet mereka sering terputus-putus seorang operator layanan operasional melakukan diagnosis awal dan menemukan tidak ada masalah pada sisi pelanggan langkah yang harus dilakukan",
    pilihan: [
      "Menyuruh pelanggan untuk mengganti perangkat mereka",
      "Mengirim teknisi untuk memeriksa infrastruktur jaringan",
      "Memberikan kompensasi kepada pelanggan tanpa melakukan pemeriksaan lebih lanjut",
      "Mengabaikan laporan karena masalah tidak ditemukan di sisi pelanggan",
    ],
    jawaban: 1
  },
  {
    soal: "Saat kasus peningkatan volume keluhan pelanggan tentang performa layanan yang lambat seorang operator layanan operasional sebaiknya",
    pilihan: [
      "Mengubah algoritma layanan tanpa pemberitahuan",
      "Menonaktifkan layanan sementara untuk investigasi",
      "Menolak keluhan dan mengklaim layanan berjalan normal",
      "Mengumpulkan data keluhan untuk analisis lebih lanjut",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam menghadapi peningkatan permintaan selama waktu waktu Puncak strategi apa yang sebaiknya diterapkan oleh seorang operator layanan operasional untuk menjaga kualitas layanan",
    pilihan: [
      "Mengabaikan permintaan tambahan",
      "Menutup layanan bagi pengguna baru",
      "Mengurangi layanan untuk semua pelanggan",
      "Menambah kapasitas dan sumber daya sementara",
    ],
    jawaban: 3
  },
  {
    soal: "Proses yang melibatkan pengumpulan analisis dan pelaporan data kerja operator layanan operasional disebut",
    pilihan: [
      "Manajemen",
      "Evaluasi",
      "Pengendalian",
      "Monitoring",
    ],
    jawaban: 3
  },
  {
    soal: "Proses yang memastikan bahwa pekerjaan sesuai dengan spesifikasi dan standar disebut",
    pilihan: [
      "Pengawasan kualitas",
      "Instalasi kualitas",
      "Pengecoran kualitas",
      "Erosi kualitas",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana peran operator layanan operasional dalam menjaga kualitas layanan",
    pilihan: [
      "Membuat laporan bulanan saja",
      "Memastikan bahwa semua prosedur dijalankan sesuai standar dan memberikan layanan terbaik kepada masyarakat",
      "Menghindari interaksi langsung dengan masyarakat",
      "Menyerahkan tugas sepenuhnya kepada tim lain",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator layanan operasional berkontribusi dalam peningkatan layanan publik",
    pilihan: [
      "Mengelola dan memantau sistem yang mendukung pelayanan publik",
      "Mengabaikan masukan dari masyarakat yang cenderung tidak masuk akal",
      "Mengurangi standar pelayanan manual berganti dengan teknologi",
      "Hanya melaporkan masalah yang besar dan mengabaikan masalah kecil",
    ],
    jawaban: 0
  },
  {
    soal: "Pengembangan karir seorang ASN (operator layanan operasional) dapat dilakukan dengan mempertimbangkan",
    pilihan: [
      "Etika",
      "Kinerja",
      "Beban kerja",
      "Integritas",
    ],
    jawaban: 1
  },
  {
    soal: "Untuk meningkatkan kompetensi dan profesionalisme operator layanan operasional dapat dilakukan dengan cara",
    pilihan: [
      "Pelatihan",
      "Pembinaan",
      "Pengarahan",
      "Pengajaran",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang dimaksud dengan perencanaan operasional",
    pilihan: [
      "Proses merancang dan mengorganisasi kegiatan serta sumber daya untuk mencapai tujuan operasional",
      "Dokumen yang berisi rencana dan strategi untuk mencapai tujuan perusahaan",
      "Proses penyusunan rencana keuangan untuk suatu organisasi atau entitas dalam jangka waktu tertentu",
      "Proses sistematis dan strategis untuk memprediksi kebutuhan tenaga kerja di masa depan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang dimaksud dengan pemantauan kinerja dalam layanan operasional",
    pilihan: [
      "Menyusun rencana anggaran",
      "Mengamati dan mengevaluasi secara berkala kinerja suatu hal",
      "Mengelola inventaris barang",
      "Menyusun jadwal kerja",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam hal pelayanan pelanggan multikanal, Apa yang dimaksud dengan channel hopping",
    pilihan: [
      "Pelanggan berpindah dari suatu saluran komunikasi ke saluran lain",
      "Operator menangani berbagai saluran komunikasi sekaligus",
      "Sistem yang secara otomatis mengalihkan pelanggan ke saluran tertentu",
      "Metode untuk meningkatkan engagement pelanggan di media sosial",
    ],
    jawaban: 0
  },
  {
    soal: "Anda menerima laporan dari pelanggan bahwa ada ketidaksesuaian antara jumlah transaksi yang tercatat di rekeningnya dengan bukti transfer yang ia miliki. Langkah pertama yang harus anda lakukan adalah",
    pilihan: [
      "Langsung melakukan penyesuaian saldo rekening pelanggan",
      "Meminta pelanggan untuk mengirimkan bukti transfer via email",
      "Memeriksa log transaksi sistem untuk periode yang disebutkan",
      "Mengalihkan kasus tersebut ke Departemen Keuangan",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam hal manajemen hubungan pelanggan, apa yang dimaksud dengan churn rate",
    pilihan: [
      "Tingkat pertumbuhan pelanggan baru",
      "Persentase pelanggan yang berhenti menggunakan layanan",
      "Rata-rata durasi interaksi dengan pelanggan",
      "Frekuensi pembelian ulang oleh pelanggan",
    ],
    jawaban: 1
  },
  {
    soal: "Anda sedang menangani antrian pelanggan yang panjang ketika seorang pelanggan VIP tiba dan meminta pelayanan segera. Bagaimana anda menangani situasi ini dengan profesional",
    pilihan: [
      "Langsung melayani pelanggan VIP dengan mengabaikan antrian",
      "Meminta pelanggan VIP mengambil nomor antrian seperti yang lain",
      "Menjelaskan situasi kepada pelanggan dalam antrian dan meminta izin untuk melayani pelanggan VIP",
      "Mengalihkan pelanggan VIP ke supervisor anda",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam sistem manajemen pengetahuan untuk layanan pelanggan, apa fungsi utama dari decision tree",
    pilihan: [
      "Mengotomatisasi respon email kepada pelanggan",
      "Mengkategorikan tipe-tipe pertanyaan pelanggan",
      "Memandu operator melalui serangkaian pertanyaan untuk diagnosis masalah",
      "Memprioritaskan tiket layanan pelanggan",
    ],
    jawaban: 2
  },
  {
    soal: "Anda menerima laporan dari berbagai pelanggan tentang gangguan layanan tetapi sistem monitoring internal tidak menunjukkan adanya masalah. Langkah paling tepat yang harus anda ambil adalah",
    pilihan: [
      "Menginformasikan kepada pelanggan bahwa tidak ada masalah terdeteksi",
      "Melakukan restart sistem secara menyeluruh",
      "Mengabaikan laporan karena dianggap sebagai false alarm",
      "Melakukan pengecekan manual terhadap komponen sistem yang terkait",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam sistem manajemen antrian berbasis digital seorang operator layanan operasional menghadapi situasi di mana sistem tiba-tiba mengalami gangguan. Apa tindakan paling tepat yang harus diambil operator",
    pilihan: [
      "Menonaktifkan sistem dan kembali ke metode antrian manual",
      "Melakukan restart sistem tanpa memberitahu pelanggan",
      "Menghubungi tim IT dan memberi informasi kepada pelanggan",
      "Membiarkan sistem tetap berjalan dan mengabaikan keluhan",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang operator layanan operasional sedang menangani komplain pelanggan terkait keterlambatan pengiriman barang. Sistem pelacakan menunjukkan bahwa barang telah sampai di gudang distribusi terdekat sejak 3 hari yang lalu. Apa langkah paling efektif yang harus diambil operator",
    pilihan: [
      "Menyarankan pelanggan untuk menunggu 2 hari lagi",
      "Menghubungi gudang distribusi untuk verifikasi dan tindak lanjut",
      "Menawarkan pengembalian dana tanpa investigasi lebih lanjut",
      "Meminta pelanggan untuk menghubungi langsung gudang distribusi",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam situasi beban kerja tinggi seorang operator layanan operasional harus mengelola prioritas tugas dan efisien. Manakah dari berikut ini yang merupakan pendekatan paling efektif",
    pilihan: [
      "Mengerjakan tugas berdasarkan urutan waktu penerimaan",
      "Memprioritaskan tugas berdasarkan tingkat kesulitan",
      "Menggunakan matriks untuk kategorisasi dan prioritas tugas",
      "Mendelegasikan semua tugas ke rekan kerja",
    ],
    jawaban: 2
  },
  {
    soal: "Di bawah ini yang merupakan salah satu unsur-unsur komunikasi adalah",
    pilihan: [
      "Saluran",
      "Instruksi",
      "Evaluasi",
      "Beban informasi",
    ],
    jawaban: 0
  },
  {
    soal: "Untuk dapat melaksanakan suatu rencana seorang operator layanan operasional perlu menguasai berbagai pengetahuan dan keterampilan diantaranya sebagai berikut kecuali",
    pilihan: [
      "Motivasi",
      "Komunikasi",
      "Directing",
      "Channel",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah laporan berikut di bawah ini yang tergolong laporan administratif",
    pilihan: [
      "Tesis",
      "Laporan monografi",
      "Artikel",
      "Laporan berkala",
    ],
    jawaban: 3
  },
  {
    soal: "Sebuah laporan yang dibuat harus jelas tujuannya terutama adalah sebagai berikut",
    pilihan: [
      "Dimaksudkan untuk memberikan gambaran mengenai peristiwa yang belum terjadi",
      "Menguji prakiraan dan hipotesis",
      "Merancang pengawasan dan perbaikan",
      "Mengetahui perkembangan atau kemajuan proyek atau penelitian",
    ],
    jawaban: 3
  },
  {
    soal: "Komunikasi adalah suatu proses yang membuat sesuatu dari yang semula dimiliki oleh seseorang atau monopoli seseorang menjadi dimiliki oleh dua orang atau lebih merupakan salah satu komponen konseptual pokok teori komunikasi yaitu",
    pilihan: [
      "Kebersamaan",
      "Menggabungkan",
      "Proses",
      "Pengalihan",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam sistem manajemen antrian elektronik apa yang dimaksud dengan busting",
    pilihan: [
      "Menghapus antrian yang terlalu panjang",
      "Proses pelayanan secara keseluruhan",
      "Mengalihkan pelanggan ke layanan lain",
      "Melayani pelanggan sebelum mereka mencapai loket",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang pelanggan merasa tidak puas dengan layanan yang diberikan langkah pertama yang harus dilakukan oleh operator layanan operasional adalah",
    pilihan: [
      "Segera menawarkan kompensasi",
      "Mendengarkan keluhan pelanggan dengan seksama",
      "Menjelaskan kebijakan perusahaan",
      "Meminta pelanggan untuk mengisi formulir keluhan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam konteks keamanan data pelanggan apa yang dimaksud dengan data masking",
    pilihan: [
      "Mengenkripsi seluruh database pelanggan",
      "Mengganti data asli dengan karakter acak",
      "Menyembunyikan sebagian data sensitif dengan karakter pengganti",
      "Membatasi akses ke data pelanggan",
    ],
    jawaban: 2
  },
  {
    soal: "Anda sedang melayani seorang pelanggan ketika terjadi pemadaman listrik mendadak. Sistem komputer mati tetapi UPS masih berfungsi. Tindakan paling tepat yang harus anda lakukan adalah",
    pilihan: [
      "Meminta pelanggan untuk kembali lain waktu",
      "Melanjutkan pelayanan secara manual",
      "Menunggu listrik menyala kembali",
      "Menyimpan data transaksi terakhir dan mematikan sistem dengan aman",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional memberikan layanan kepada pelanggan. Apa yang dimaksud dengan layanan pelanggan",
    pilihan: [
      "Proses inovasi pekerja dalam memberikan pelayanan",
      "Proses pelayanan kepada pelanggan",
      "Proses manajemen inventaris kantor",
      "Proses pemberian bantuan dan dukungan kepada pelanggan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang menjadi tujuan dari pengelolaan kearsipan di instansi pemerintah",
    pilihan: [
      "Memudahkan penyusunan dokumen",
      "Meningkatkan pendapatan pemerintah",
      "Meningkatkan efisiensi pengelolaan informasi",
      "Memaksimalkan jumlah pegawai",
    ],
    jawaban: 2
  },
  {
    soal: "Berikut ini yang menjadi tugas operator layanan operasional dalam bidang kearsipan adalah",
    pilihan: [
      "Mengelola, menyimpan, memelihara dan memusnahkan arsip",
      "Menyusun dokumen sesuai tanggal",
      "Menyusun anggaran belanja",
      "Menyusun laporan",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam instansi pemerintah apa yang dimaksud dengan pengelolaan layanan keamanan",
    pilihan: [
      "Melakukan pembuatan jadwal untuk semua pegawai",
      "Melakukan rekrutmen petugas keamanan secara proporsional",
      "Penyediaan layanan keamanan untuk melindungi aset dan menjaga keamanan pegawai serta lingkungan kerja",
      "Saling menjaga antar pegawai dan menjaga kerahasiaan organisasi",
    ],
    jawaban: 2
  },
  {
    soal: "Menjalankan sebuah organisasi tentu tidak lepas dari risiko. Apa yang dimaksud dengan manajemen risiko",
    pilihan: [
      "Proses mencari solusi terhadap setiap masalah yang timbul",
      "Proses audit internal kepada semua kegiatan operasional",
      "Pembuatan laporan keuangan",
      "Proses Identifikasi dan pengendalian risiko operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang dimaksud dengan akuntabilitas dalam pelayanan publik",
    pilihan: [
      "Pelayanan yang ramah kepada semua pelanggan",
      "Keterbukaan informasi kepada publik",
      "Bertanggung jawab atas kinerja pelayanan dan hasil yang dicapai",
      "Penggunaan teknologi yang modern terhadap semua pelayanan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa saja keterampilan yang diperlukan oleh seorang operator layanan operasional",
    pilihan: [
      "Keterampilan dalam membuat kebijakan dan aturan internal instansi",
      "Keterampilan teknis, komunikasi, dan administrasi yang baik",
      "Kemampuan memimpin rapat besar dan memberikan perintah",
      "Mengelola proyek berskala besar dan layanan di setiap divisi",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengelolaan waktu, apa yang menjadi fokus utama operator layanan operasional",
    pilihan: [
      "Mengurangi jam kerja",
      "Menunda tugas yang tidak penting",
      "Menyelesaikan tugas tepat waktu dan mengatur prioritas kerja dengan baik",
      "Fokus hanya pada tugas administrasi dan mengabaikan tugas teknis",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana seorang operator layanan operasional berinteraksi dengan teknologi",
    pilihan: [
      "Menghindari penggunaan teknologi karena berpotensi menimbulkan kesalahan",
      "Hanya menggunakan teknologi ketika diperlukan saja",
      "Memanfaatkan teknologi untuk mempermudah pekerjaan",
      "Mengabaikan inovasi teknologi karena cara manual masih cukup efektif",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu tugas penting operator layanan operasional terkait penyimpanan data adalah",
    pilihan: [
      "Memastikan data disimpan dengan aman dan mudah diakses oleh pihak berwenang",
      "Menyimpan data tanpa akses keamanan",
      "Memberikan akses data publik sehingga akses dapat diberikan kepada semua orang",
      "Menyimpan data di satu tempat penyimpanan dan tidak perlu ada backup data",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang dimaksud dengan disaster recovery dalam tugas operator layanan operasional",
    pilihan: [
      "Memperbaiki komputer yang rusak",
      "Proses pemulihan data dan sistem setelah terjadi gangguan besar",
      "Penggantian perangkat keras lama ke perangkat keras yang baru",
      "Penghapusan data lama dan penyimpanan data baru",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang dimaksud dengan monitoring server dalam tugas operator layanan operasional",
    pilihan: [
      "Update data server untuk meningkatkan kecepatan kerja server",
      "Memperbarui sistem operasi server agar kinerja lebih optimal",
      "Mematikan kerja server setiap malam untuk diistirahatkan",
      "Memantau kinerja server secara berkala untuk memastikan sistem berjalan baik",
    ],
    jawaban: 3
  },
  {
    soal: "Mengapa operator layanan operasional harus memahami konsep cloud computing",
    pilihan: [
      "Karena cloud computing banyak digunakan untuk menyimpan dan mengelola data secara efisien dan fleksibel",
      "Karena cloud computing tidak digunakan di instansi pemerintah",
      "Untuk menghindari teknologi terbaru",
      "Agar dapat menghapus data lama dengan cepat",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari audit teknologi informasi di instansi pemerintah",
    pilihan: [
      "Meningkatkan jumlah pegawai",
      "Memastikan bahwa sistem informasi berjalan sesuai standar dan tidak ada pelanggaran keamanan",
      "Mengurangi anggaran",
      "Menghapus data lama",
    ],
    jawaban: 1
  },
  {
    soal: "Anda adalah seorang operator layanan operasional di sebuah instansi pemerintah. Seorang rekan kerja meminta anda memberikan password akun sistem informasi kepegawaian miliknya karena dia lupa. Apa tindakan yang paling tepat anda lakukan",
    pilihan: [
      "Memberikan password rekan tersebut karena dia adalah teman sekantor",
      "Menolak permintaan tersebut dan meminta rekan untuk mengikuti prosedur reset password resmi",
      "Meminta izin atasan sebelum memberikan password",
      "Memberikan password dengan syarat rekan tersebut berjanji tidak akan membocorkannya",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menangani dokumen yang berisi informasi sensitif tentang rencana pengembangan infrastruktur di sebuah kabupaten, Anda menemukan bahwa beberapa bagian dokumen tersebut tidak memiliki label klasifikasi kerahasiaan. Apa yang harusnya anda lakukan",
    pilihan: [
      "Mengabaikannya karena bukan tanggung jawab anda",
      "Memberikan label rahasia seluruh dokumen untuk berjaga-jaga",
      "Meminta klarifikasi kepada pembuat dokumen atau atasan tentang klasifikasi yang tepat",
      "Membagikan dokumen tersebut ke rekan kerja untuk mendapatkan pendapat mereka",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang layanan operasional diminta untuk mengirimkan laporan keuangan tahunan instansi di mana Dia bekerja melalui email kepada auditor eksternal. Metode pengiriman yang paling aman adalah",
    pilihan: [
      "Mengirimkan file laporan sebagai attachment biasa",
      "Menggunakan layanan file sharing public dan mengirimkan linknya",
      "Mengenkripsi file laporan dan mengirimkan password melalui SMS",
      "Menggunakan sistem secure file transfer dengan enkripsi end-to-end",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang warga meminta data pribadi tentang sahabatnya melalui layanan informasi publik yang anda kelola, mengklaim membutuhkan informasi tersebut untuk keperluan darurat. Tindakan yang paling tepat adalah",
    pilihan: [
      "Memberikan informasi tersebut karena situasi darurat",
      "Menolak permintaan tersebut dan menjelaskan kebijakan privasi",
      "Meminta persetujuan dari orang yang bersangkutan",
      "Memberikan sebagian informasi yang dianggap tidak sensitif",
    ],
    jawaban: 1
  },
  {
    soal: "Anda menemukan bahwa beberapa rekan kerja sering menggunakan USB flash disk pribadi untuk mentransfer data pekerjaan. Dari perspektif keamanan informasi, risiko utama dari praktik ini adalah",
    pilihan: [
      "Kehilangan USB flash disk yang berisi data penting",
      "Penyebaran malware ke sistem instansi",
      "Penggunaan bandwidth internet yang berlebihan",
      "Penurunan kinerja komputer kantor",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menghadapi peningkatan permintaan selama waktu-waktu Puncak, strategi apa yang sebaiknya diterapkan oleh seorang operator layanan operasional untuk menjaga kualitas layanan",
    pilihan: [
      "Mengabaikan permintaan tambahan",
      "Menutup layanan bagi pengguna baru",
      "Mengurangi layanan untuk semua pelanggan",
      "Menambah kapasitas dan sumber daya sementara",
    ],
    jawaban: 3
  },
  {
    soal: "Di bawah ini yang merupakan langkah-langkah penemuan kembali arsip pada sistem abjad adalah, kecuali",
    pilihan: [
      "Meneliti arsip yang diminta atau yang akan dicari dan ditemukan kodenya",
      "Menuju tempat penyimpanan",
      "Mengambil arsip yang diminta",
      "Mengisi buku kas kecil",
    ],
    jawaban: 3
  },
  {
    soal: "Untuk mitigasi untuk mencegah terjadinya kehilangan arsip akibat peminjaman yang tidak tertib maka dapat digunakan tools",
    pilihan: [
      "Kartu indeks",
      "Kartu tunjuk silang",
      "Outslip",
      "Buku arsip",
    ],
    jawaban: 2
  },
  {
    soal: "Dengan wawasan yang cermat dan teliti, operator layanan operasional dapat memastikan bahwa pekerjaan berjalan sesuai dengan rencana, memenuhi standar kualitas yang ditetapkan dan dapat diselesaikan dalam waktu yang ditetapkan. Pengawasan ini bertujuan untuk",
    pilihan: [
      "Memperlambat pekerjaan",
      "Meningkatkan biaya pekerjaan",
      "Menjamin kualitas pekerjaan",
      "Mengabaikan standar pekerjaan",
    ],
    jawaban: 2
  },
  {
    soal: "Proses yang memastikan bahwa pekerjaan sesuai dengan spesifikasi dan standar disebut",
    pilihan: [
      "Pengawasan kualitas",
      "Instalasi kualitas",
      "Pengecoran kualitas",
      "Erosi kualitas",
    ],
    jawaban: 0
  },
  {
    soal: "Moralitas dalam pengembangan karir seorang ASN operator layanan operasional diukur dari penerapan dan Pengamalan",
    pilihan: [
      "Sosial kemasyarakatan",
      "Menjadi contoh yang baik",
      "Kemampuan bekerja sama",
      "Pengabdian kepada masyarakat",
    ],
    jawaban: 0
  },
  {
    soal: "Keseluruhan proses pengelompokan orang-orang, alat-alat, tugas, tanggung jawab atau wewenang sedemikian rupa sehingga tercipta suatu organisasi yang dapat digerakkan sebagai satu kesatuan untuk mencapai tujuan yang telah ditetapkan adalah maksud dari",
    pilihan: [
      "Perencanaan",
      "Pengorganisasian",
      "Pelaksanaan",
      "Monitoring",
    ],
    jawaban: 1
  },
  {
    soal: "Laporan yang dibuat oleh operator layanan operasional harus jelas tujuannya terutama adalah sebagai berikut",
    pilihan: [
      "Dimaksudkan untuk memberikan gambaran mengenai peristiwa yang belum terjadi",
      "Menguji prakiraan dan hipotesis",
      "Merancang pengawasan dan perbaikan",
      "Mengetahui perkembangan kemajuan proyek atau penelitian",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan operator layanan operasional untuk memastikan keselamatan kerja di area operasional",
    pilihan: [
      "Menyusun laporan bulanan",
      "Mengabaikan prosedur keselamatan",
      "Memastikan bahwa semua prosedur keselamatan dan peraturan diikuti",
      "Mengurangi jumlah infrastruktur",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan dari enkripsi data dalam tugas operator layanan operasional",
    pilihan: [
      "Untuk menghemat ruang penyimpanan",
      "Melindungi data dan hanya pihak berwenang yang dapat membacanya",
      "Untuk menghapus data",
      "Untuk meningkatkan kecepatan pengiriman data",
    ],
    jawaban: 1
  },
  {
    soal: "Apa fungsi utama dari firewall",
    pilihan: [
      "Untuk melindungi jaringan dari serangan eksternal",
      "Untuk menghapus data lama",
      "Untuk menghapus virus dan mengembalikan data yang rusak",
      "Pilihan perlu ditinjau.",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara operator layanan operasional memastikan akurasi data dalam laporan",
    pilihan: [
      "Melakukan verifikasi dan validasi data sebelum laporan disusun",
      "Menggunakan asumsi",
      "Menebak Informasi yang tidak ada",
      "Mengandalkan laporan lama",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan operator jika menemukan ketidaksesuaian data dalam laporan operasional",
    pilihan: [
      "Membiarkan ketidaksesuaian tersebut",
      "Melakukan koreksi atau meminta klarifikasi atas data yang tidak sesuai",
      "Mengubah data tanpa pemberitahuan",
      "Mengabaikan data tersebut",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam manajemen laporan operasional, Apa yang dimaksud dengan pelaporan tepat waktu",
    pilihan: [
      "Pelaporan yang dilakukan setelah batas waktu",
      "Pelaporan yang dilakukan tanpa peduli pada jadwal",
      "Pelaporan yang dilakukan sesuai dengan jadwal yang telah ditetapkan",
      "Pelaporan yang dilakukan saat pegawai memiliki waktu luang",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang dimaksud dengan analisis kinerja operasional dalam laporan",
    pilihan: [
      "Analisis terhadap penggunaan anggaran",
      "Penilaian terhadap efektivitas dan efisiensi pelaksanaan kegiatan operasional",
      "Menambah jumlah pegawai",
      "Meningkatkan anggaran operasional",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator layanan operasional dalam membuat laporan harus sesuai dan baik. Laporan operasional yang baik harus",
    pilihan: [
      "Informatif, akurat dan relevan dengan kegiatan yang dilaporkan",
      "Singkat tanpa penjelasan detail",
      "Hanya mencakup satu aspek operasional",
      "Hanya mengandalkan data keuangan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa manfaat utama dari penggunaan software manajemen laporan operasional",
    pilihan: [
      "Memudahkan pengelolaan data dan mempercepat proses penyusunan laporan",
      "Mengurangi jumlah pegawai",
      "Meningkatkan pengeluaran instansi",
      "Menyederhanakan proses perekrutan pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Keterampilan yang penting dimiliki oleh operator layanan operasional adalah",
    pilihan: [
      "Kemampuan dalam analisis laporan keuangan",
      "Kemampuan manajemen waktu dan pemecahan masalah secara tepat",
      "Keterampilan mendesain produk baru",
      "Kemampuan menulis kebijakan publik",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menangani masalah yang muncul selama operasional langkah pertama yang harus dilakukan oleh operator layanan adalah",
    pilihan: [
      "Segera mengabaikan masalah agar tidak mengganggu pekerjaan lain",
      "Menunda penanganan masalah hingga akhir hari kerja",
      "Mengidentifikasi penyebab masalah sebelum mencari solusinya",
      "Menghentikan semua aktivitas operasional",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam layanan operasional Mengapa penting bagi operator untuk melakukan koordinasi dengan tim lain",
    pilihan: [
      "Agar dapat menghindari tugas yang sulit",
      "Untuk memastikan keselarasan dan efisiensi dalam proses operasional",
      "Untuk mengurangi beban kerja pada tim lain",
      "Untuk menghapus semua data secara otomatis",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam layanan operasional laporan kinerja yang dibuat oleh operator bertujuan untuk",
    pilihan: [
      "Mengurangi jumlah pekerjaan yang harus dilakukan",
      "Menambah penghasilan pegawai",
      "Menghilangkan kebutuhan untuk mengikuti SOP",
      "Menyediakan data mengenai pencapaian dan masalah yang terjadi selama operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan operator jika menemukan suatu masalah yang memerlukan bantuan dari bagian lain",
    pilihan: [
      "Mengabaikan masalah tersebut",
      "Menghubungi dan mengkoordinasikan dengan bagian terkait untuk menyelesaikan masalah",
      "Menunda masalah hingga bagian lain mengetahui sendiri",
      "Membuat keputusan sendiri tanpa berkonsultasi",
    ],
    jawaban: 1
  },
  {
    soal: "Prinsip transparansi dalam administrasi layanan publik adalah",
    pilihan: [
      "Menjaga rahasia proses pelayanan untuk menghindari kritik dari masyarakat",
      "Membuka akses informasi mengenai prosedur dan hasil kinerja kepada publik",
      "Mengutamakan kepentingan pegawai dalam pelayanan masyarakat",
      "Memberikan pelayanan hanya kepada masyarakat yang dikenal oleh pegawai",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam konteks layanan teknis pengoperasian layanan berfokus pada",
    pilihan: [
      "Penyusunan kebijakan publik tanpa implementasi langsung",
      "Mekanisme layanan yang diberikan kepada masyarakat",
      "Pemilihan pemimpin untuk setiap Departemen layanan teknis",
      "Pelaksanaan kegiatan teknis sesuai dengan standar operasional atau SOP",
    ],
    jawaban: 3
  },
  {
    soal: "Standar operasional prosedur (SOP) dalam pengoperasian layanan teknis berfungsi untuk",
    pilihan: [
      "Mengurangi jumlah pekerja dalam layanan teknis",
      "Memastikan setiap aktivitas berjalan sesuai rencana",
      "Mengubah kebijakan layanan secara berkala",
      "Memastikan setiap aktivitas teknis dilakukan secara konsisten dan efisien",
    ],
    jawaban: 3
  },
  {
    soal: "Pemeliharaan peralatan secara berkala bertujuan untuk",
    pilihan: [
      "Mengurangi frekuensi penggunaan peralatan",
      "Memastikan peralatan tetap dalam kondisi baik dan mengurangi resiko kerusakan",
      "Menghemat biaya operasional dengan tidak melakukan pemeliharaan",
      "Meminimalkan interaksi antara operator dengan peralatan",
    ],
    jawaban: 1
  },
  {
    soal: "Penggunaan teknologi informasi dalam pengoperasian layanan teknis bertujuan untuk",
    pilihan: [
      "Menghindari interaksi langsung dengan masyarakat",
      "Meningkatkan akurasi dan kecepatan dalam proses layanan",
      "Mengurangi pelatihan karyawan yang terkait dengan layanan teknis",
      "Mengganti semua tenaga kerja manusia dengan teknologi",
    ],
    jawaban: 1
  },
  {
    soal: "Pemantauan dan pengawasan dalam pengoperasian layanan teknis dilakukan untuk",
    pilihan: [
      "Menilai kinerja peralatan dan operator secara berkala",
      "Mengganti operator secara berkala tanpa penilaian kinerja",
      "Memastikan SOP tidak perlu diterapkan",
      "Mengurangi biaya operasional layanan teknis",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam pengoperasian layanan teknis pelatihan berkala untuk Operator dilakukan untuk",
    pilihan: [
      "Mengurangi penggunaan teknologi dalam layanan teknis",
      "Mengurangi biaya operasional",
      "Menurunkan standar kualitas dalam layanan teknis",
      "Memastikan operator memahami dan mengikuti prosedur yang diperbaharui",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah pertama dalam menyusun rencana kegiatan harian adalah",
    pilihan: [
      "Menyusun daftar tugas yang perlu diselesaikan dalam satu hari",
      "Menetapkan waktu istirahat terlebih dahulu",
      "Mengambil cara acak tanpa perencanaan",
      "Menunda tugas yang tidak sesuai",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam menyusun rencana kegiatan harian tugas-tugas yang paling penting sebaiknya",
    pilihan: [
      "Dilakukan di akhir hari setelah tugas kecil selesai",
      "Diselesaikan di awal hari untuk mendapatkan fokus maksimal",
      "Diserahkan kepada orang lain Jika memungkinkan",
      "Diabaikan jika membutuhkan waktu lama",
    ],
    jawaban: 1
  },
  {
    soal: "Teknik prioritas yang membantu menentukan tugas mana yang harus diselesaikan terlebih dahulu dikenal sebagai",
    pilihan: [
      "Analisis SWOT",
      "Metode SMART",
      "Matrix Eisenhower",
      "Teori Maslow",
    ],
    jawaban: 2
  },
  {
    soal: "Tujuan utama dari pengelolaan sistem informasi di kantor pelayanan publik adalah",
    pilihan: [
      "Menyimpan data tanpa perlu memprosesnya lebih lanjut",
      "Mengelola dan mendistribusikan informasi untuk meningkatkan efisiensi dan layanan kepada masyarakat",
      "Mengumpulkan informasi untuk dipelajari tanpa tujuan tertentu",
      "Menyembunyikan data dari masyarakat untuk menjaga privasi",
    ],
    jawaban: 1
  },
  {
    soal: "Pengelolaan keamanan data dalam sistem informasi kantor pelayanan publik sangat penting untuk",
    pilihan: [
      "Menyimpan semua informasi di satu tempat agar mudah diakses oleh publik",
      "Melindungi data sensitif dari akses tidak sah dan menjaga privasi informasi",
      "Mengizinkan semua orang mengakses Informasi pribadi tanpa batasan",
      "Menjaga data agar tidak pernah bisa diakses oleh pegawai yang berwenang",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu manfaat dari penyimpanan data secara terpusat dalam sistem informasi kantor pelayanan publik adalah",
    pilihan: [
      "Data tidak perlu diperbarui dan dibiarkan statis",
      "Data lebih bersifat internal",
      "Semua data tersedia untuk diakses oleh publik tanpa batasan",
      "Data lebih mudah dikelola dan diakses oleh pegawai yang berwenang",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang dimaksud dengan interoperabilitas dalam konteks sistem informasi Kantor Pelayanan publik",
    pilihan: [
      "Kemampuan sistem untuk menjalankan semua proses secara manual",
      "Kemampuan sistem untuk berbagi dan bertukar data dengan sistem lain",
      "Sistem yang menolak data dari sistem lain untuk menjaga keamanan",
      "Kemampuan sistem untuk menyembunyikan data dari pengguna akhir",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengelolaan sistem informasi proses backup data bertujuan untuk",
    pilihan: [
      "Menghapus data lama yang sudah tidak dibutuhkan",
      "Memindahkan data dan disimpan di tempat yang berbeda",
      "Menyediakan cadangan data yang bisa diakses jika terjadi kehilangan atau kerusakan data utama",
      "Mengurangi beban kerja pegawai dalam proses pelayanan",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama dalam proses pengolahan data adalah",
    pilihan: [
      "Penyimpanan data",
      "Pengumpulan data",
      "Pembersihan data",
      "Analisis data",
    ],
    jawaban: 1
  },
  {
    soal: "Pembersihan data (data cleaning) dalam pengolahan data bertujuan untuk",
    pilihan: [
      "Menghilangkan atau memperbaiki data yang tidak akurat atau tidak lengkap",
      "Pakan kosong penyimpanan",
      "Menyimpan data tanpa melakukan perubahan",
      "Mengurangi ukuran data set secara acak",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu teknik yang digunakan untuk merangkum dan menyajikan data dalam bentuk yang mudah dipahami adalah",
    pilihan: [
      "Pengkodean data",
      "Pengumpulan data",
      "Visualisasi data",
      "Pembersihan data",
    ],
    jawaban: 2
  },
  {
    soal: "Reduksi data adalah proses dalam pengolahan data yang bertujuan untuk",
    pilihan: [
      "Mengurangi jumlah data dengan tetap mempertahankan informasi penting",
      "Meningkatkan jumlah data yang diolah",
      "Menyimpan semua data tanpa perubahan",
      "Menghapus data secara acak",
    ],
    jawaban: 0
  },
  {
    soal: "Teknik yang digunakan untuk menghindari duplikasi dalam data disebut",
    pilihan: [
      "Pembersihan data",
      "Normalisasi data",
      "Data duplication",
      "Visualisasi data",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu alasan pentingnya pengelolaan data email di lingkungan kerja adalah",
    pilihan: [
      "Menghemat ruang penyimpanan dan memastikan pesan yang relevan mudah ditemukan",
      "Menghapus semua email yang masuk setiap hari",
      "Menyimpan keseluruhan email tanpa batas waktu",
      "Membuat surat elektronik (surel) dapat dibaca oleh semua orang di perusahaan",
    ],
    jawaban: 0
  },
  {
    soal: "Proses menghapus atau mengarsipkan email yang sudah tidak diperlukan disebut",
    pilihan: [
      "Penyimpanan otomatis",
      "Pengarsipan email",
      "Pengumpulan data",
      "Penggandaan email",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa penting untuk melakukan backup data email secara berkala",
    pilihan: [
      "Untuk memastikan semua surat elektronik dihapus secara otomatis",
      "Untuk menyimpan data email sebagai cadangan jika terjadi kehilangan data",
      "Agar surat elektronik dapat diakses oleh semua orang tanpa batasan",
      "Untuk mengurangi jumlah email yang dikirim setiap hari",
    ],
    jawaban: 1
  },
  {
    soal: "Saat menerima email dari sumber yang tidak dikenal yang meminta informasi pribadi tindakan yang paling aman adalah",
    pilihan: [
      "Membalas email dengan informasi yang diminta",
      "Meneruskan email ke rekan kerja untuk dilihat",
      "Mengabaikan email dan tidak membuka tautan atau lampiran apapun",
      "Menyimpan email di folder penting",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu risiko utama dalam pengelolaan data email adalah phishing yang merupakan",
    pilihan: [
      "Serangan yang mengarahkan pengguna untuk memberikan informasi sensitif melalui email palsu",
      "Upaya untuk membuat pengguna menghapus email mereka",
      "Tindakan menyimpan semua data email dalam satu folder",
      "Mengirim email secara masal ke semua kontak",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam pelaksanaan administrasi layanan publik salah satu prinsip yang harus dijunjung tinggi adalah akuntabilitas apa yang dimaksud akuntabilitas",
    pilihan: [
      "Penerapan prosedur yang cepat dan efektif dalam pelayanan masyarakat",
      "Pelibatan masyarakat dalam proses pengambilan keputusan",
      "Kemampuan institusi mempertanggungjawabkan kinerjanya kepada publik",
      "Ketaatan kepada prosedur di setiap kegiatan instansi",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan utama dari penggunaan teknologi informasi dalam administrasi layanan publik",
    pilihan: [
      "Meningkatkan transparansi dan aksesibilitas layanan bagi masyarakat",
      "Mengurangi anggaran yang dikeluarkan pemerintah",
      "Meningkatkan pengawasan masyarakat terhadap kebijakan publik",
      "Mengurangi partisipasi masyarakat dalam pengambilan keputusan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang menjadi tujuan dari evaluasi kinerja dalam administrasi layanan publik",
    pilihan: [
      "Menemukan kesalahan yang dibuat oleh karyawan",
      "Mengetahui apakah layanan sudah sesuai dengan target atau standar yang ditetapkan",
      "Mengurangi beban kerja pegawai",
      "Menambah jumlah prosedur yang harus dilakukan oleh masyarakat",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu tantangan utama dalam pelaksanaan administrasi layanan publik adalah birokrasi yang berbelit dampak utama dari birokrasi yang berbelit ini adalah",
    pilihan: [
      "Menurunnya anggaran yang dialokasikan untuk pelayanan publik",
      "Meningkatnya efisiensi pelayanan kepada masyarakat",
      "Menurunnya kualitas layanan dan kepuasan masyarakat",
      "Meningkatnya partisipasi masyarakat dalam pelayanan publik",
    ],
    jawaban: 2
  },
  {
    soal: "Partisipasi masyarakat dalam proses administrasi layanan publik dapat dilakukan dengan cara berikut kecuali",
    pilihan: [
      "Memberikan saran atau kritik terhadap pelayanan yang diterima",
      "Menyampaikan aspirasi melalui organisasi masyarakat atau komunitas",
      "Mengisi survei kepuasan layanan yang disediakan oleh instansi terkait",
      "Memanfaatkan orang dalam untuk mempercepat mendapatkan pelayanan",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pengembangan aplikasi untuk operator layanan publik aspek berikut sangat penting untuk meningkatkan kepuasan pengguna kecuali",
    pilihan: [
      "User interface atau UI yang intuitif dan mudah digunakan",
      "Fitur pembayaran online yang aman dan beragam",
      "Iklan Pop Up yang sering muncul agar pengguna mengingat layanan",
      "Pemberitahuan waktu kedatangan yang akurat",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam konteks keamanan data di aplikasi layanan publik manakah dari langkah-langkah berikut yang paling efektif untuk melindungi privasi pengguna",
    pilihan: [
      "Menghapus seluruh riwayat transaksi pengguna setiap minggu",
      "Menggunakan enkripsi data dan autentikasi dua faktor",
      "Membatasi akses pengguna hanya pada fitur dasar",
      "Menyimpan data pengguna dalam format teks sederhana agar mudah diakses",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengelolaan aplikasi sering terjadi kendala load tinggi pada server terutama saat banyak mengakses aplikasi secara bersamaan apa yang menjadi dampak langsung dari masalah ini",
    pilihan: [
      "Aplikasi dapat berjalan lebih cepat di perangkat pengguna",
      "Pengalaman pengguna menjadi lebih buruk karena aplikasi menjadi lambat atau tidak responsif",
      "Server menjadi lebih hemat energi",
      "Aplikasi menghasilkan data yang lebih akurat untuk analisis",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu kendala utama dalam pengembangan aplikasi adalah fragmentasi platform di mana aplikasi harus berjalan di berbagai perangkat dan sistem operasi apa dampak dari kendala ini terhadap pengembangan aplikasi",
    pilihan: [
      "Aplikasi menjadi lebih cepat dirilis di semua perangkat",
      "Aplikasi mudah digunakan oleh semua pengguna",
      "Memungkinkan aplikasi berjalan lebih stabil di semua sistem",
      "Pengembang harus melakukan pengujian lebih intens di berbagai perangkat",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam aplikasi yang mengandalkan koneksi internet kendala sering terjadi ketika pengguna berada di area dengan jaringan yang tidak stabil apa solusi yang paling efektif untuk mengatasi masalah ini",
    pilihan: [
      "Mengharuskan pengguna untuk hanya menggunakan WiFi",
      "Mengimplementasikan fitur offline yang memungkinkan aplikasi bekerja tanpa koneksi internet",
      "Membatasi penggunaan aplikasi hanya di wilayah dengan jaringan yang stabil",
      "Menghapus semua fitur yang memerlukan koneksi internet",
    ],
    jawaban: 1
  },
  {
    soal: "Keterampilan yang penting dimiliki oleh operator layanan operasional adalah",
    pilihan: [
      "Kemampuan dalam analisis laporan keuangan",
      "Kemampuan manajemen waktu dan pemecahan masalah secara tepat",
      "Keterampilan mendesain produk baru",
      "Kemampuan menulis kebijakan publik",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menangani masalah yang muncul Selama operasional langkah pertama yang harus dilakukan oleh operator layanan adalah",
    pilihan: [
      "Segera mengabaikan masalah agar tidak mengganggu pekerjaan lain",
      "Menunda penanganan masalah hingga akhir hari kerja",
      "Mengidentifikasi penyebab masalah sebelum mencari solusinya",
      "Menghentikan semua aktivitas operasional",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam layanan operasional Mengapa penting bagi operator untuk melakukan koordinasi dengan tim lain",
    pilihan: [
      "Agar dapat menghindari tugas yang sulit",
      "Untuk memastikan keselarasan dan efisiensi dalam proses operasional",
      "Untuk mengurangi beban kerja pada tim lain",
      "Untuk menghapus semua data secara otomatis",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam layanan operasional laporan kinerja yang dibuat oleh operator bertujuan untuk",
    pilihan: [
      "Mengurangi jumlah pekerjaan yang harus dilakukan",
      "Menambah penghasilan pegawai",
      "Menghilangkan kebutuhan untuk mengikuti sop",
      "Menyediakan data mengenai pencapaian dan masalah yang terjadi selama operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan operator jika menemukan suatu masalah yang memerlukan bantuan dari bagian lain",
    pilihan: [
      "Mengabaikan masalah tersebut",
      "Menghubungi dan mengkoordinasikan dengan bagian terkait untuk menyelesaikan masalah",
      "Menunda masalah hingga bagian lain mengetahui sendiri",
      "Membuat keputusan sendiri tanpa berkonsultasi",
    ],
    jawaban: 1
  },
  {
    soal: "Prinsip transparansi dalam administrasi layanan publik adalah",
    pilihan: [
      "Menjaga rahasia proses pelayanan untuk menghindari kritik dari masyarakat",
      "Membuka akses informasi mengenai prosedur dan hasil kinerja kepada publik",
      "Mengutamakan kepentingan pegawai dalam pelayanan masyarakat",
      "Memberikan pelayanan hanya kepada masyarakat yang dikenal oleh pegawai",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam konteks layanan teknis pengoperasian layanan berfokus pada",
    pilihan: [
      "Penyusunan kebijakan publik tanpa implementasi langsung",
      "Mekanisme layanan yang diberikan kepada masyarakat",
      "Pemilihan pemimpin untuk setiap Departemen layanan teknis",
      "Pelaksanaan kegiatan teknis Sesuai dengan standar operasional atau sop",
    ],
    jawaban: 3
  },
  {
    soal: "Standar operasional prosedur atau sop dalam pengoperasian layanan teknis berfungsi untuk",
    pilihan: [
      "Mengurangi jumlah pekerja dalam layanan teknis",
      "Memastikan setiap aktivitas berjalan sesuai rencana",
      "Mengubah kebijakan layanan secara berkala",
      "Memastikan setiap aktivitas teknis dilakukan secara konsisten dan efisien",
    ],
    jawaban: 3
  },
  {
    soal: "Tujuan pemeliharaan peralatan secara berkala adalah",
    pilihan: [
      "Mengurangi frekuensi penggunaan peralatan",
      "Memastikan peralatan tetap dalam kondisi baik dan mengurangi resiko kerusakan",
      "Menghemat biaya operasional dengan tidak melakukan pemeliharaan",
      "Meminimalkan interaksi antara operator dengan peralatan",
    ],
    jawaban: 1
  },
  {
    soal: "Penggunaan teknologi informasi dalam pengoperasian layanan teknis bertujuan untuk",
    pilihan: [
      "Menghindari Interaksi langsung dengan masyarakat",
      "Meningkatkan akurasi dan kecepatan dalam proses layanan",
      "Mengurangi pelatihan karyawan yang terkait dengan layanan teknis",
      "Mengganti semua tenaga kerja manusia dengan teknologi",
    ],
    jawaban: 1
  },
  {
    soal: "Pemantauan dan pengawasan dalam pengoperasian layanan teknis dilakukan untuk",
    pilihan: [
      "Menilai kinerja peralatan dan operator secara berkala",
      "Mengganti operator secara berkala tanpa penilaian kinerja",
      "Memastikan sop tidak perlu diterapkan",
      "Mengurangi biaya operasional layanan teknis",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam pengoperasian layanan teknis pelatihan berkala untuk Operator dilakukan untuk",
    pilihan: [
      "Mengurangi penggunaan teknologi dalam layanan teknis",
      "Mengurangi biaya operasional",
      "Menurunkan standar kualitas dalam layanan teknis",
      "Memastikan operator memahami dan mengikuti prosedur yang diperbaharui",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah pertama dalam menyusun rencana kegiatan harian adalah",
    pilihan: [
      "Menyusun daftar tugas yang perlu diselesaikan dalam Sat hari",
      "Menetapkan waktu istirahat terlebih dahulu",
      "Mengambil ara acak tanp perencan",
      "Menunda tugas yang tidak sesuai",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam menyusun rencana kegiatan harian tugas-tugas yang paling penting sebaiknya",
    pilihan: [
      "Dilakukan di akhir hari setelah tugas kecil selesai",
      "Diselesaikan di awal hari untuk mendapatkan fokus maksimal",
      "Diserahkan kepada orang lain Jika memungkinkan",
      "Diabaikan jika membutuhkan waktu lama",
    ],
    jawaban: 1
  },
  {
    soal: "Teknik prioritas yang membantu menentukan tugas mana yang harus diselesaikan terlebih dahulu dikenal sebagai",
    pilihan: [
      "Analisis Word",
      "Metode Smart",
      "Matrix power",
      "Teori Maslow",
    ],
    jawaban: 2
  },
  {
    soal: "Tujuan utama dari pengelolaan sistem informasi di kantor pelayanan publik adalah",
    pilihan: [
      "Menyimpan data tanpa perlu memprosesnya lebih lanjut",
      "Mengelola dan mendistribusikan informasi untuk meningkatkan efisiensi dan layanan kepada masyarakat",
      "Mengumpulkan informasi untuk dipelajari tanpa tujuan tertentu",
      "Menyembunyikan data dari masyarakat untuk menjaga privasi",
    ],
    jawaban: 1
  },
  {
    soal: "Pengelolaan keamanan data dalam sistem informasi kantor pelayanan publik sangat penting untuk",
    pilihan: [
      "Menyimpan semua informasi di satu tempat agar mudah diakses oleh publik",
      "Melindungi data sensitif dari akses tidak sah dan menjaga privasi informasi",
      "Mengizinkan semua orang mengakses Informasi pribadi tanpa patasan",
      "Menjaga data agar tidak perah bisa diakses oleh pegawai yang berwenang",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu manfaat dari penyimpanan data secara terpusat dalam sistem informasi kantor pelayanan publik adalah",
    pilihan: [
      "Data tidak perlu diperbarui dan dibiarkan statis",
      "Data lebih bersifat internal",
      "Semua data tersedia untuk diakses oleh publik tanpa batasan",
      "Data lebih mudah dikelola dan diakses oleh pegawai yang berwenang",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang dimaksud dengan interoperabilitas dalam konteks sistem informasi Kantor Pelayanan publ",
    pilihan: [
      "Kemampuan sistem untuk menjalankan semua proses secara manual",
      "Kemampuan sistem untuk berbagi dan bertukar data dengan sistem lain",
      "Sistem yang menolak data dari sistem lain untuk menjaga keamanan",
      "Kemampuan sistem untuk menyembunyikan data dari pengguna akhir",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengelolaan sistem informasi proses backup data bertujuan untuk",
    pilihan: [
      "Menghapus data lama yang sudah tidak dibutuhkan",
      "Memindahkan data dan disimpan di tempat yang berbeda",
      "Menyediakan cadangan data yang bisa diakses jika terjadi kehilangan atau kerusakan data utama",
      "Mengurangi beban kerja pegawai dalam proses pelayanan",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama dalam proses pengolahan data adalah",
    pilihan: [
      "Penyimpanan data",
      "Pengumpulan data",
      "Pembersihan data",
      "Anal data",
    ],
    jawaban: 1
  },
  {
    soal: "Pembersihan data (data cleaning) dalam pengolahan data bertujuan untuk",
    pilihan: [
      "Menghilangkan atau memperbaiki data yang tidak akurat atau tidak lengkap",
      "Pakan kosong penyimpanan",
      "Menyimpan data tanpa melakukan perubahan",
      "Mengurangi ukuran data set secara acak",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu teknik yang digunakan untuk merangkum dan menyajikan data dalam bentuk yang mudah dipahami adalah",
    pilihan: [
      "Pengkodan data",
      "Pengumpulan data",
      "Visualisasi data",
      "Pembersihan data",
    ],
    jawaban: 2
  },
  {
    soal: "Reduksi data adalah proses dalam pengolahan data yang bertujuan untuk",
    pilihan: [
      "Mengurangi jumlah data dengan tetap mempertahankan informasi penting",
      "Meningkatkan jumlah data yang diolah",
      "Menyimpan semua data tanpa perubahan",
      "Menghapus data secara acak",
    ],
    jawaban: 0
  },
  {
    soal: "Teknik yang digunakan untuk menghindari duplikasi dalam data disebut",
    pilihan: [
      "Pembersihan data",
      "Normalisasi data",
      "D duplication",
      "Visualisasi data",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu alasan pentingnya pengelolaan data email di lingkungan kerja adalah",
    pilihan: [
      "Menghemat ruang penyimpanan dan memastikan pesan yang relevan mudah ditemukan",
      "Menghapus semua email yang masuk setiap hari",
      "Menyimpan keseluruhan email tanpa batas waktu",
      "Membuat surat elektronik (surel) Dapat dibaca oleh semua orang di perusahaan",
    ],
    jawaban: 0
  },
  {
    soal: "Proses menghapus atau mengarsifkan email yang sudah tidak diperlukan disebut",
    pilihan: [
      "Penyimpanan otomatis",
      "Pengarsifan email",
      "Pengumpulan data",
      "Penggandaan email",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa penting untuk melakukan backup data email secara berkala",
    pilihan: [
      "Untuk memastikan semua surat elektronik dihapus secara otomatis",
      "Untuk menyimpan data email sebagai cadangan jika terjadi kehilangan data",
      "Agar surat elektronik dapat diakses oleh semua orang tanpa batasan",
      "Untuk mengurangi jumlah email yang dikirim setiap hari",
    ],
    jawaban: 1
  },
  {
    soal: "Saat menerima email dari sumber yang tidak dikenal yang meminta informasi pribadi tindakan yang paling aman adalah",
    pilihan: [
      "Membalas email dengan informasi yang diminta",
      "Meneruskan email ke rekan kerja untuk dilihat",
      "Mengabaikan email dan tidak membuka tautan atau lampiran Apun",
      "Menyimpan email di folder penting",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu resiko utama dalam pengelolaan data email adalah phishing yang merupakan",
    pilihan: [
      "Serangan yang mengarahkan pengguna untuk memberikan informasi sensitif melalui email palsu",
      "Upaya untuk membuat pengguna menghapus email mereka",
      "Tindakan menyimpan semua data email dalam satu folder",
      "Mengirim email secara masal ke semua kontak",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam pelaksanaan administrasi layanan publik salah satu prinsip yang harus dijunjung tinggi adalah akuntabilitas apa yang dimaksud akuntabilitas",
    pilihan: [
      "Penerapan prosed yang e dan eek pelayanarakat",
      "Pibatanyarakat proses pengilan kepusan",
      "Kemampuan institusi mempertanggungjawabkan kinerjanya kepada prosedur di setiap kegiatan instansi",
      "Ketaatan kepada prosedur di setiap kegiatan instansi",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan utama dari penggunaan teknologi informasi dalam administrasi layanan publik",
    pilihan: [
      "Meningkatkan transparansi dan aksesibilitas layanan bagi masyarakat",
      "Mengurangi anggaran yang dikeluarkan pemerintah",
      "Meningkatkan pengawasan masyarakat terhadap kebijakan publik",
      "Mengurangi partisipasi masyarakat dalam pengambilan keputusan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang menjadi tujuan dari evaluasi kinerja dalam administrasi layanan publik",
    pilihan: [
      "Menemukan kesalahan yang dibuat oleh karyawan",
      "Mengetahui apakah layanan sudah sesuai dengan target atau standar yang ditetapkan",
      "Mengurangi beban kerja pegawai",
      "Menambah jumlah prosedur yang harus dilakukan oleh masyarakat",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu tantangan utama dalam pelaksanaan administrasi layanan publik adalah birokrasi yang berbelit dampak utama dari birokrasi yang berbelit ini adalah",
    pilihan: [
      "Menurunnya anggaran yang dialokasikan untuk pelayanan publik",
      "Meningkatnya efisiensi pelayanan kepada masyarakat",
      "Menurunnya kualitas layanan dan kepuasan masyarakat",
      "Meningkatnya partisipasi masyarakat dalam pelayanan publik",
    ],
    jawaban: 2
  },
  {
    soal: "Partisipasi masyarakat dalam proses administrasi layanan publik dapat dilakukan dengan cara berikut kecuali",
    pilihan: [
      "Memberikan saran atau kritik terhadap pelayanan yang diterima",
      "Menyampaikan aspirasi melalui organisasi masyarakat atau komunitas",
      "Mengisi survei kepuasan layanan yang disediakan oleh instansi terkait",
      "Memanfaatkan orang dalam untuk mempercepat mendapatkan pelayanan",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pengembangan aplikasi untuk Operator layanan publik aspek berikut sangat penting untuk meningkatkan kepuasan pengguna kecuali",
    pilihan: [
      "User interface atau UI yang intuitif dan mudah digunakan",
      "Fitur pembayaran online yang aman dan beragam",
      "Iklan Pop Up yang sering muncul agar pengguna mengingat layanan",
      "Pemberitahuan waktu kedatangan yang akurat",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam konteks keamanan data di aplikasi layanan publik manakah dari langkah-langkah berikut yang paling efektif untuk melindungi privas pengguna",
    pilihan: [
      "Menghapus seluruh riwayat transaksi pengguna setiap minggu",
      "Menggunakan enkripsi data dan autentikasi dua faktor",
      "Membatasi akses pengguna hanya pada fitur dasar",
      "Menyimpan data pengguna dalam format teks sederhana agar mudah diakses",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengelolaan aplikasi sering terjadi kendala loot tinggi pada server terutama saat banyak mengakses aplikasi secara bersamaan apa yang menjadi dampak langsung dari masalah ini",
    pilihan: [
      "Aplikasi dapat berjalan lebih cepat di perangkat pengguna",
      "Pengalaman pengguna menjadi lebih buruk karena aplikasi menjadi lambat atau tidak responsif",
      "Server menjadi lebih hemat energi",
      "Aplikasi menghasilkan data yang lebih akurat untuk analisis",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu kendala utama dalam pengembangan aplikasi adalah fragmentasi platform di mana aplikasi harus berjalan di berbagai perangkat dan sistem operasi Apa dampak dari kendala ini terhadap pengembangan aplikasi",
    pilihan: [
      "Aplikasi menjadi lebih cepat dirilis di semua perangkat",
      "Aplikasi mudah digunakan oleh semua pengguna",
      "Memungkinkan aplikasi berjalan lebih stabil di semua sistem",
      "Pengembang harus melakukan pengujian lebih intens di berbagai perangkat",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam aplikasi yang mengandalkan koneksi internet kendala sering terjadi ketika pengguna berada di area dengan jaringan yang tidak stabil apa solusi yang paling efektif untuk mengatasi masalah ini",
    pilihan: [
      "Mengharuskan pengguna untuk hanya menggunakan Wii",
      "Mengimplementasikan fitur offline yang memungkinkan aplikasi bekerja tanpa koneksi internet",
      "Membatasi penggunaan aplikasi hanya di wilayah dengan jaringan yang stabil",
      "Harus pindah ke wilayah dengan koneksi internet yang bagus",
    ],
    jawaban: 1
  },
  {
    soal: "Petugas operator layanan operasional menemukan bahwa salah satu server utama mengalami overheting. Apa langkah pertama yang harus dilakukan untuk mengatasi masalah ini",
    pilihan: [
      "Mengganti perangkat keras server yang rusak",
      "Melaporkan masalah ke vendor perangkat keras",
      "Mematikan server dan melakukan diagnostik awal",
      "Meningkatkan kapasitas pendingin ruangan server",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang operator layanan operasional mendeteksi lonjakan pengguna CPU untuk perangkat lunak pemrosesan data. Apa yang seharusnya diperiksa terlebih dahulu",
    pilihan: [
      "Ketersediaan memori RAM",
      "Aktivitas proses atau aplikasi yang berjalan di server",
      "Pengaturan bios perangkat keras",
      "Versi terbaru dari perangkat lunak tersebut",
    ],
    jawaban: 1
  },
  {
    soal: "Petugas menerima keluhan bahwa sistem pemerintah seringkali lambat diakses oleh pengguna. Apa yang paling mungkin menjadi penyebabnya",
    pilihan: [
      "Gangguan pasokan listrik",
      "Masalah kompatibilitas perangkat keras",
      "Tingginya lalu lintas jaringan",
      "Kegagalan sistem backup",
    ],
    jawaban: 2
  },
  {
    soal: "Saat menjalankan pembaruan perangkat lunak di instansi pemerintah, Apa resiko terbesar yang harus diantisipasi oleh operator",
    pilihan: [
      "Kerusakan fisik pada perangkat keras",
      "Kehilangan data atau konfigurasi penting",
      "Overload pada server jaringan",
      "Tidak kompatibelnya perangkat keras dengan pembaruan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah utama dalam memastikan keamanan perangkat lunak yang digunakan dalam sistem pemerintahan",
    pilihan: [
      "Memastikan koneksi internet selalu aktif",
      "Melakukan pengujian fungsionalitas perangkat lunak",
      "Mengurangi jumlah pengguna sistem",
      "Mengimplementasi pembaruan keamanan secara rutin",
    ],
    jawaban: 3
  },
  {
    soal: "Laporan insiden yang baik harus mencantumkan",
    pilihan: [
      "Jumlah pengguna yang terdampak",
      "Estimasi kerugian finansial akibat insiden",
      "Analisis penyebab insiden dan tindakan korektif",
      "Perincian semua perangkat lunak yang digunakan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa menjadi tujuan utama dari menyusun laporan kinerja sistem",
    pilihan: [
      "Mengurangi beban kerja petugas operator",
      "Menyediakan data untuk pengajuan anggaran baru",
      "Memberikan evaluasi mendalam tentang performa sistem",
      "Menilai efektivitas tim operator",
    ],
    jawaban: 2
  },
  {
    soal: "Bagian mana yang menjadi kunci dalam laporan insiden jika ingin memastikan perbaikan berjalan efektif",
    pilihan: [
      "Deskripsi rinci langkah-langkah mitigasi",
      "Dampak insiden terhadap layanan publik",
      "Waktu terjadinya insiden",
      "Informasi tentang pengguna sistem",
    ],
    jawaban: 0
  },
  {
    soal: "Ketika berbagi laporan kinerja sistem dengan tim lain petugas operator harus memastikan bahwa",
    pilihan: [
      "Data teknis diubah menjadi format nonteknis",
      "Laporan hanya mencakup matrik positif",
      "Hanya Departemen IT yang menerima laporan",
      "Informasi yang dibagikan relevan dan mudah dipahami",
    ],
    jawaban: 3
  },
  {
    soal: "Setelah insiden besar terjadi petugas operator harus menyusun laporan evaluasi pasca insiden. Apa elemen kunci dari laporan tersebut",
    pilihan: [
      "Usulan untuk menambah perangkat keras",
      "Rekomendasi pengurangan pengguna sistem",
      "Analisis akar penyebab dan langkah pencegahan",
      "Jumlah waktu yang dihabiskan selama insiden",
    ],
    jawaban: 2
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan oleh petugas operator sebelum mengajukan permintaan peralatan dan bahan layanan teknis",
    pilihan: [
      "Memastikan ketersediaan anggaran dalam instansi",
      "Menyusun laporan kebutuhan berdasarkan evaluasi kondisi teknis",
      "Menghubungi vendor penyedia barang terkait",
      "Membuat dokumen pengadaan berdasarkan spesifikasi barang",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menentukan jumlah peralatan dan bahan layanan teknis yang akan diajukan apa yang menjadi pertimbangan utama",
    pilihan: [
      "Kebijakan pengadaan instansi",
      "Frekuensi pemakaian dan kondisi operasional",
      "Waktu kadaluarsa bahan teknis",
      "Jenis vendor yang tersedia",
    ],
    jawaban: 1
  },
  {
    soal: "Saat menyusun dokumen permintaan Informasi apa yang harus disiapkan untuk setiap peralatan yang diajukan",
    pilihan: [
      "Daftar alternatif barang yang serupa",
      "Riwayat penggunaan barang sebelumnya",
      "Nama vendor yang telah dipilih",
      "Rincian teknis barang, jumlah dan justifikasi kebutuhan",
    ],
    jawaban: 3
  },
  {
    soal: "Jika anggaran pengadaan terbatas bagaimana petugas operator dapat memprioritaskan peralatan atau bahan yang diajukan",
    pilihan: [
      "Berdasarkan tingkat urgensi dan dampak operasional",
      "Berdasarkan harga terendah dari vendor",
      "Berdasarkan rekomendasi tim pengadaan",
      "Berdasarkan ketersediaan barang di pasar",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari menyusun dokumen permintaan peralatan dan bahan secara rinci",
    pilihan: [
      "Mempermudah pengadaan barang dari vendor",
      "Menghindari revisi berulang dalam proses pengadaan",
      "Memberikan transparansi kebutuhan kepada pihak terkait",
      "Memastikan barang yang diterima sesuai dengan kebutuhan operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Jika salah satu pemangku kepentingan eksternal meminta penjelasan mendetail tentang layanan teknis tetapi petugas operator merasa kurang memiliki kapasitas untuk menjelaskannya. Apa tindakan terbaik yang harus dilakukan",
    pilihan: [
      "Mengarahkan permintaan kepada tim teknis yang lebih berpengalaman",
      "Menyiapkan dokumen teknis dan mengirimkannya tanpa diskusi",
      "Menunda tanggapan hingga memahami layanan dengan lebih baik",
      "Memberikan informasi yang dimiliki meskipun belum lengkap",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari koordinasi antar petugas operator dan tim internal terkait layanan teknis",
    pilihan: [
      "Menghindari konflik antar divisi yang berbeda",
      "Memastikan keberlanjutan layanan tanpa gangguan",
      "Membantu tim teknis mendapatkan pelatihan yang dibutuhkan",
      "Menyediakan laporan lengkap kepada manajemen",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan petugas operator jika terjadi ketidaksesuaian informasi antara tim internal dan pemangku kepentingan eksternal",
    pilihan: [
      "Meminta klarifikasi dari semua pihak terkait sebelum menyampaikan informasi lebih lanjut",
      "Mengutamakan informasi dari tim internal karena mereka lebih memahami teknis",
      "Mengabaikan ketidaksesuaian informasi hingga ada permintaan lebih lanjut",
      "Menyusun laporan baru berdasarkan persepsi sendiri",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana petugas operator dapat meningkatkan efektivitas koordinasi dengan pemangku kepentingan eksternal",
    pilihan: [
      "Dengan meningkatkan penggunaan teknologi komunikasi modern",
      "Dengan mengurangi jumlah rapat formal yang diadakan",
      "Dengan menyerahkan tanggung jawab komunikasi kepada pimpinan",
      "Dengan menghindari diskusi yang bersifat terlalu teknis",
    ],
    jawaban: 0
  },
  {
    soal: "Saat menyampaikan pembaruan layanan teknis kepada pemangku kepentingan eksternal apa yang harus diutamakan oleh petugas operator",
    pilihan: [
      "Informasi rinci tentang teknologi yang digunakan",
      "Dampak langsung pembaruan terhadap kepentingan mereka",
      "Rencana jangka panjang untuk layanan teknis",
      "Permintaan umpan balik terhadap layanan yang telah diberikan",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah pertama yang harus dilakukan oleh petugas operator dalam merekomendasikan perubahan prosedur operasional adalah",
    pilihan: [
      "Melakukan survei kepuasan pengguna akhir",
      "Menganalisis data kinerja dan mengidentifikasi hambatan operasional",
      "Mengganti perangkat lunak dengan teknologi terbaru",
      "Meminta pendapat tim teknis",
    ],
    jawaban: 1
  },
  {
    soal: "Apa indikator utama bahwa sebuah prosedur operasional perlu diperbaharui",
    pilihan: [
      "Prosedur sering melibatkan langkah manual yang berulang",
      "Biaya operasional meningkat tanpa perubahan output",
      "Prosedur telah digunakan selama lebih daripada 5 tahun",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam mengusulkan teknologi baru apa yang harus dipertimbangkan terlebih dahulu oleh petugas operator",
    pilihan: [
      "Kesesuaian teknologi dengan sistem yang ada",
      "Biaya investasi awal",
      "Reputasi vendor penyedia teknologi",
      "Kecepatan implementasi teknologi",
    ],
    jawaban: 0
  },
  {
    soal: "Petugas operator menemukan bahwa sistem sering mengalami down time akibat kurangnya sumber daya server. Apa rekomendasi terbaik untuk mengatasi masalah ini",
    pilihan: [
      "Mengupgrade perangkat keras server",
      "Menjadwal ulang waktu pemrosesan data",
      "Mengurangi jumlah pengguna sistem",
      "Menggunakan layanan cloud untuk skalabilitas",
    ],
    jawaban: 3
  },
  {
    soal: "Ketika mengusulkan perubahan prosedur petugas operator harus menyertakan",
    pilihan: [
      "Rencana implementasi yang mencakup waktu dan sumber daya",
      "Daftar perangkat lunak terbaru yang perlu digunakan",
      "Alternatif prosedur lain untuk dievaluasi oleh tim",
      "Nama-nama yang bertanggung jawab atas prosedur baru",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu bagian dari surat yang menjelaskan maksud atau topik utama surat disebut",
    pilihan: [
      "Perihal",
      "Tembusan",
      "Kepala surat",
      "Alamat tujuan",
    ],
    jawaban: 0
  },
  {
    soal: "Seorang pengunjung memerlukan informasi tentang prosedur pelayanan tetapi operator layanan operasional sedang sibuk melayani pengunjung lain. Apa tindakan yang tepat",
    pilihan: [
      "Meminta pengunjung menunggu tanpa informasi",
      "Mengarahkan pengunjung ke papan informasi yang berisi prosedur",
      "Menyuruh pengunjung mencari informasi di luar area pelayanan",
      "Menunda pelayanan saat ini untuk memberikan informasi",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pencatatan data harian operator layanan operasional menemukan adanya data yang tak masuk akal. Apa tindakan pertama yang sebaiknya dilakukan",
    pilihan: [
      "Menghapus data tersebut karena dirasa tidak penting",
      "Melakukan pengecekan lebih lanjut untuk memastikan akurasi",
      "Menyusun laporan dengan data tersebut tanpa perubahan",
      "Mengabaikan data yang tidak masuk akal",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator layanan operasional menerima dokumen sarana dan prasarana dari unit terkait. Langkah pertama yang harus dilakukan operator untuk memastikan kelengkapan dokumen tersebut adalah",
    pilihan: [
      "Mengarsifkan dokumen secara langsung",
      "Mengecek Apakah dokumen memiliki stempel resmi",
      "Membandingkan dokumen dengan daftar periksa standar",
      "Memastikan dokumen telah ditandatangani oleh atasan",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam proses pemeriksaan fisik sarana operator menemukan bahwa peralatan tidak sesuai dengan spesifikasi yang tertera dalam dokumen. Apa yang seharusnya dilakukan oleh operator",
    pilihan: [
      "Menerima peralatan tersebut untuk efisiensi waktu",
      "Membuat catatan tertulis Untuk dilaporkan ke pimpinan",
      "Mengalihkan peralatan kepada tim pelaporan",
      "Menyimpan peralatan di gudang hingga mendapat instruksi lebih lanjut",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah yang bukan termasuk langkah prosedural dalam menerima sarana dan prasarana di instansi pemerintah",
    pilihan: [
      "Verifikasi fisik terhadap barang yang diterima",
      "Pemeriksaan dokumen kelengkapan barang",
      "Memasukkan data barang ke dalam sistem inventaris",
      "Menggunakan sarana yang diterima sebelum proses verifikasi selesai",
    ],
    jawaban: 3
  },
  {
    soal: "Jika operator menemukan ketidaksesuaian antara dokumen dan kondisi barang, tindakan berikut ini yang paling tepat adalah",
    pilihan: [
      "Menghubungi pemasok dan meminta klarifikasi",
      "Mengajukan komplain resmi melalui jalur administratif yang ditentukan",
      "Membuat perubahan pada dokumen agar sesuai dengan kondisi barang",
      "Menerima barang dengan syarat dokumen diperbaiki kemudian",
    ],
    jawaban: 1
  },
  {
    soal: "Operator sedang memeriksa dokumen pendukung untuk alat berat yang diterima. Manakah dari Berikut ini yang tidak dianggap dokumen wajib",
    pilihan: [
      "Faktur pembelian",
      "Manual penggunaan alat berat",
      "Sertifikat garansi",
      "Laporan audit keuangan pemasok",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang petugas menemukan bahwa printer yang terhubung ke jaringan pemerintah tidak merespon langkah awal yang sebaiknya dilakukan adalah",
    pilihan: [
      "Mengganti kabel printer",
      "Menghubungi penyedia layanan printer",
      "Memeriksa koneksi jaringan dan pengaturan IP printer",
      "Menginstal ulang driver printer",
    ],
    jawaban: 2
  },
  {
    soal: "Petugas menemukan indikasi Malware pada perangkat lunak yang digunakan Apa langkah pertama yang sebaiknya dilakukan",
    pilihan: [
      "Melakukan pemindaian penuh dengan antivirus",
      "Menonaktifkan perangkat yang terinfeksi jaringan",
      "Menghapus perangkat lunak yang terinfeksi",
      "Memasang firewall tambahan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam proses pengawasan perangkat keras petugas menyadari bahwa Hard Drive pada salah satu server mulai menunjukkan tanda-tanda kegagalan Apa tindakan paling efektif",
    pilihan: [
      "Menjalankan perangkat lunak diagnostik pada Hard Drive",
      "Segera mengganti Hard Drive dengan yang baru",
      "Memformat ulang Hard Drive",
      "Memindahkan data ke server lain dan mengamankan backup",
    ],
    jawaban: 3
  },
  {
    soal: "Petugas mendapati bahwa sistem egovernment seringkali gagal melakukan sinkronisasi data secara real time apa kemungkinan penyebab utamanya",
    pilihan: [
      "Versi perangkat lunak yang kadalarsa",
      "Konflik perangkat keras antar server",
      "Gangguan pada koneksi jaringan antar server",
      "Ketidaksesuaian format data antar sistem",
    ],
    jawaban: 2
  },
  {
    soal: "Untuk menjaga keberlanjutan operasional perangkat keras di instansi pemerintah Apa tindakan pemeliharaan yang paling penting",
    pilihan: [
      "Bersihkan perangkat keras setiap bulan",
      "Ganti perangkat keras setiap tahun",
      "Melakukan pengujian rutin pada semua sistem",
      "Memonitor suhu dan tegangan listrik secara terus-menerus",
    ],
    jawaban: 3
  },
  {
    soal: "Apa komponen utama yang harus ada dalam laporan kinerja sistem harian yang disusun oleh petugas operator",
    pilihan: [
      "Informasi tentang perangkat keras yang digunakan",
      "Waktu operasional status sistem dan matrik performa",
      "Rincian biaya operasional sistem",
      "Daftar semua pengguna yang mengakses sistem",
    ],
    jawaban: 1
  },
  {
    soal: "Ketika menyusun laporan insiden langkah pertama yang harus dilakukan adalah",
    pilihan: [
      "Menentukan dampak insiden terhadap operasional instansi",
      "Mengidentifikasi penyebab utama insiden",
      "Mendokumentasikan waktu kejadian dan deskripsi insiden",
      "Merumuskan solusi untuk mengatasi insiden",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam laporan insiden petugas menemukan penyebab utama adalah kegagalan perangkat keras apa yang harus dicantumkan dalam bagian rekomendasi perbaikan",
    pilihan: [
      "Jadwal penggantian perangkat keras secara berkala",
      "Perincian biaya penggantian perangkat keras",
      "Proses pemeliharaan rutin yang diterapkan",
      "Penambahan sumber daya manusia untuk pengelolaan perangkat keras",
    ],
    jawaban: 0
  },
  {
    soal: "Setelah menyelesaikan laporan kinerja bulanan Apa langkah berikutnya yang seharusnya dilakukan oleh petugas operator",
    pilihan: [
      "Menyebarlaskan laporan ke semua pengguna sistem",
      "Mengarsipkan laporan untuk referensi mendatang",
      "Memperbarui kebijakan keamanan berdasarkan laporan",
      "Melakukan presentasi hasil laporan kepada manajemen",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam mendokumentasikan langkah perbaikan yang diambil apa informasi paling penting yang harus disertakan",
    pilihan: [
      "Biaya perbaikan perangkat keras atau perangkat lunak",
      "Nama petugas yang bertanggung jawab atas perbaikan",
      "Waktu metode dan hasil akhir dari langkah perbaikan",
      "Sumber daya tambahan gunakan dalam proses perbaikan",
    ],
    jawaban: 2
  },
  {
    soal: "Saat mengajukan bahan layanan teknis yang memiliki risiko kadaluarsa misalnya cairan pembersih atau pelumas apa yang harus dipastikan oleh petugas operator",
    pilihan: [
      "Memesan dalam jumlah besar untuk efisiensi biaya",
      "Menyesuaikan jumlah berdasarkan perkiraan waktu penggunaan",
      "Memilih bahan dengan harga termurah",
      "Menghindari penggunaan bahan yang mendekati tanggal kadaluarsa",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana petugas operator dapat memastikan barang yang diajukan memiliki kualitas yang sesuai",
    pilihan: [
      "Memilih produk berdasarkan merek terkenal",
      "Melakukan riset spesifikasi teknis sebelum pengajuan",
      "Mengutamakan barang yang direkomendasikan vendor",
      "Mengandalkan pengalaman penggunaan sebelumnya",
    ],
    jawaban: 1
  },
  {
    soal: "Dokumen permintaan diajukan ke tim pengadaan Tetapi beberapa item ditolak karena dinilai kurang penting Apakah taktik yang harusnya dilakukan petugas operator",
    pilihan: [
      "Mengajukan ulang permintaan dengan prioritas yang lebih jelas",
      "Mengganti item Yang Ditolak dengan barang alternatif",
      "Meminta persetujuan langsung dari pimpinan",
      "Membeli barang tersebut menggunakan dana operasional pribadi",
    ],
    jawaban: 0
  },
  {
    soal: "Apa resiko utama jika petugas operator tidak mencantumkan rincian spesifikasi barang dalam pengajuan",
    pilihan: [
      "Barang mungkin terlambat dikirim oleh vendor",
      "Barang yang diterima mungkin tidak sesuai dengan kebutuhan",
      "Proses persetujuan anggaran menjadi lebih lama",
      "Pengajuan barang akan langsung ditolak oleh tim pengadaan",
    ],
    jawaban: 1
  },
  {
    soal: "Setelah barang dan bahan yang diajukan diterima langkah selanjutnya yang harus dilakukan oleh petugas operator adalah",
    pilihan: [
      "Menyimpan barang di gudang untuk keperluan mendatang",
      "Menginformasikan pengguna akhir tentang ketersediaan barang",
      "Mengecek kesesuaian barang dengan dokumen permintaan",
      "Menyusun laporan anggaran tambahan untuk barang berikutnya",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama yang harus dilakukan oleh petugas operator dalam mengkoordinasikan informasi layanan teknis kepada pemangku kepentingan eksternal adalah",
    pilihan: [
      "Mengidentifikasi kebutuhan informasi masing-masing pihak",
      "Menyiapkan laporan lengkap tentang semua layanan teknis",
      "Mengadakan pertemuan untuk membahas rincian teknis",
      "Menyusun prosedur standar komunikasi eksternal",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tantangan utama yang mungkin dihadapi dalam melakukan koordinasi dengan tim internal terkait pembaruan layanan teknis",
    pilihan: [
      "Kurangnya dokumentasi standar operasional",
      "Tidak Tersedianya saluran komunikasi yang efektif",
      "Perbedaan prioritas antar divisi",
      "Ketidaksesuaian pemahaman teknis antar tim",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam memastikan koordinasi dengan pemangku kepentingan eksternal berjalan efektif petugas operator harus",
    pilihan: [
      "Menggunakan format komunikasi formal setiap saat",
      "Membatasi informasi hanya pada aspek yang bersifat teknis",
      "Menyediakan laporan berbasis data yang relevan dan mudah dipahami",
      "Melibatkan seluruh divisi dalam komunikasi",
    ],
    jawaban: 2
  },
  {
    soal: "Ketika terjadi insiden teknis yang mempengaruhi layanan Apa langkah pertama yang harus dilakukan petugas operator dalam berkoordinasi dengan tim internal",
    pilihan: [
      "Mengirimkan pemberitahuan resmi ke seluruh tim terkait",
      "Mengidentifikasi penyebab insiden secara mandiri",
      "Menyusun laporan sementara tentang dampak insiden",
      "Mengadakan rapat darurat dengan tim terkait",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan petugas operator untuk memastikan informasi layanan teknis disampaikan secara konsisten kepada semua pihak yang terlibat",
    pilihan: [
      "Membuat daftar penerima informasi berdasarkan hierarki jabatan",
      "Menggunakan format dan saluran komunikasi yang seragam",
      "Menyusun laporan hanya ketika diminta oleh atasan",
      "Mengadakan pertemuan rutin untuk mendiskusikan layanan teknis",
    ],
    jawaban: 1
  },
  {
    soal: "Teknologi baru untuk meningkatkan efisiensi operasional harus memenuhi kriteria berikut",
    pilihan: [
      "Dapat diimplementasikan dengan cepat",
      "Memberikan pengurangan biaya operasional yang signifikan",
      "Memiliki fitur otomatisasi proses manual",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan petugas operator jika tim internal tidak menyetujui usulan perubahan prosedur",
    pilihan: [
      "Membatalkan usulan dan mempertahankan prosedur yang ada",
      "Menyusun ulang usulan dengan justifikasi yang lebih kuat",
      "Meminta dukungan langsung dari manajemen puncak",
      "Mengubah rekomendasi sesuai preferensi tim internal",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan utama dari perubahan pada sistem atau prosedur operasional",
    pilihan: [
      "Menurunkan biaya pelatihan staf",
      "Mengurangi beban kerja petugas operator",
      "Meningkatkan efisiensi produktivitas dan keandalan sistem",
      "Memenuhi regulasi terbaru dalam pengelolaan operasional",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam mengevaluasi teknologi baru untuk operasional petugas operator harus fokus pada",
    pilihan: [
      "Fitur-fitur inovatif yang ditawarkan teknologi tersebut",
      "Testimoni pengguna lain tentang teknologi tersebut",
      "Kesesuaian dengan kebutuhan spesifik organisasi",
      "Harga teknologi dibandingkan kompetitor",
    ],
    jawaban: 2
  },
  {
    soal: "Setelah implementasi teknologi baru langkah penting yang harus dilakukan oleh petugas operator adalah",
    pilihan: [
      "Melatih semua pengguna dengan segera",
      "Mengevaluasi dampak implementasi terhadap efisiensi operasional",
      "Menghapus sistem lama untuk mengurangi redundansi",
      "Mengalihkan seluruh operasi ke teknologi baru dalam satu waktu",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam sistem pengarsipan surat urutan penyimpanan berdasarkan abjad disebut",
    pilihan: [
      "Sistem kronologis",
      "Sistem subjek",
      "Sistem abjad",
      "Sistem numerik",
    ],
    jawaban: 2
  },
  {
    soal: "Sebagai petugas operator layanan operasional yang ditugaskan di bagian pengemudi kendaraan dinas tugas manakah yang tidak termasuk dalam tugas pengemudi kendaraan dinas",
    pilihan: [
      "Mengemudikan kendaraan dinas dan atau operasional",
      "Menggunakan kendaraan keluar daerah tanpa tugas atasan",
      "Mencatat kondisi kendaraan",
      "Membersihkan kendaraan sebelum dan sesudah digunakan",
    ],
    jawaban: 1
  },
  {
    soal: "Sebagai operator layanan operasional pada bidang keamanan kantor salah satu tugasnya adalah menjaga keamanan lingkungan dinas berikut adalah tugas menjaga lingkungan dinas kecuali",
    pilihan: [
      "Mengelola prosedur",
      "Menjaga kantor",
      "Menerima tamu",
      "Memeriksa parkir",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam melakukan verifikasi data operator harus memastikan bahwa dokumen memenuhi prinsip 3 C prinsip tersebut meliputi",
    pilihan: [
      "Clear complete konsisten",
      "Correct comprehensive clear",
      "Complete clear certificate",
      "Consistent clear dan correct",
    ],
    jawaban: 0
  },
  {
    soal: "Berita acara serah terima harus ditandatangani oleh",
    pilihan: [
      "Operator dengan atasan langsung",
      "Pihak yang menyerahkan dan operator penerima",
      "Operator atasan dan pihak pemasok",
      "Hanya operator penerima",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengarsipan dokumen sarana dan prasarana operator harus memastikan bahwa dokumen disimpan berdasarkan",
    pilihan: [
      "Jenis barang dan nomor faktur",
      "Urutan Alfa numerik",
      "Relevansi dan urgensi",
      "Protokol pengarsipan instansi",
    ],
    jawaban: 3
  },
  {
    soal: "Apa tujuan utama dari pemeriksaan fisik barang yang diterima oleh operator",
    pilihan: [
      "Memastikan barang terlihat baru",
      "Memastikan spesifikasi teknis sesuai dokumen",
      "Meningkatkan efisiensi penyimpanan",
      "Mengurangi waktu penerimaan barang",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah tindakan berikut yang paling menunjukkan prinsip akuntabilitas operator layanan operasional",
    pilihan: [
      "Mengambil keputusan sendiri ketika menghadapi masalah mendesak",
      "Menyimpan dokumen tanpa mencatat proses penerimaan",
      "Mengikuti seluruh prosedur dokumentasi yang telah ditetapkan",
      "Mengutamakan kecepatan daripada ketelitian dalam bekerja",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang perlu dilakukan jika operator menemukan bahwa dokumen pengirim tidak sesuai dengan spesifikasi yang diminta",
    pilihan: [
      "Menghubungi bagian keuangan untuk menunda pembayaran",
      "Menolak dokumen dan barang tersebut",
      "Melaporkan temuan ini kepada pihak berwenang di instansi",
      "Meminta vendor segera memperbaiki dokumen",
    ],
    jawaban: 2
  },
  {
    soal: "Jika sebuah instansi menerima pengiriman dalam jumlah besar apa prioritas utama operator dalam pemeriksaan awal",
    pilihan: [
      "Memastikan kelengkapan dokumen pengiriman",
      "Membuka dan memeriksa setiap barang untuk mendeteksi kerusakan",
      "Memeriksa sebagian barang sebagai sampel untuk efisiensi waktu",
      "Menyimpan seluruh barang terlebih dahulu untuk diproses nanti",
    ],
    jawaban: 2
  },
  {
    soal: "Operator menemukan bahwa barang yang diterima sesuai dokumen tetapi kemasannya rusak apa tindakan terbaik",
    pilihan: [
      "Menerima barang dan menyimpan di tempat aman",
      "Melaporkan kerusakan kemasan kepada vendor untuk dokumentasi",
      "Menolak barang karena kerusakan kemasan dapat mempengaruhi kualitas",
      "Membuka kemasan untuk memeriksa barang di dalamnya",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam konteks pemeriksaan operasional Mengapa penting untuk mencocokkan dokumen pengiriman dengan barang yang diterima",
    pilihan: [
      "Untuk memastikan dokumen dapat diaudit di masa depan",
      "Untuk menghindari kesalahan administratif yang dapat merugikan instansi",
      "Untuk mengevaluasi kualitas layanan vendor",
      "Untuk mempermudah proses pembayaran kepada vendor",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika operator tidak melakukan pemeriksaan terhadap barang yang diterima",
    pilihan: [
      "Keterlambatan dalam distribusi barang ke Unit terkait",
      "Peningkatan biaya operasional untuk perbaikan",
      "Tuntutan hukum dari vendor karena pelanggaran kontrak",
      "Barang tidak dapat digunakan sesuai kebutuhan instansi",
    ],
    jawaban: 3
  },
  {
    soal: "Apa tujuan utama mencatat dokumen sarana dan prasarana pada lembar atau buku kendali dalam konteks operasional instansi pemerintah",
    pilihan: [
      "Memastikan semua dokumen tercatat untuk audit keuangan",
      "Menghindari kehilangan dokumen selama proses pengelolaan",
      "Memberikan laporan langsung kepada pimpinan instansi",
      "Memastikan pencatatan administrasi tertib dan pencarian data lebih mudah",
    ],
    jawaban: 3
  },
  {
    soal: "Operator menemukan bahwa buku kendali dokumen sudah penuh dan tidak tersedia pengganti segera Apa tindakan paling tepat",
    pilihan: [
      "Mencatat dokumen pada lembar terpisah dan menyimpannya sementara",
      "Menggunakan dokumen digital sebagai pengganti",
      "Menunda pencatatan hingga buku kendali baru tersedia",
      "Menghapus data lama untuk membuat ruang baru di buku kendali",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam mencatat dokumen sarana dan prasarana Informasi apa yang harus selalu dicatat untuk menjaga kelengkapan data",
    pilihan: [
      "Nama pengirim dan tanggal pengirim",
      "Jenis barang, jumlah dan lokasi penyimpanan",
      "Nomor pesanan dan tanda tangan operator",
      "Semua informasi relevan termasuk nomor dokumen, tanggal, deskripsi barang dan tanda tangan",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana seorang operator memastikan bahwa dokumen yang dicatat pada buku kendali Sesuai dengan standar administrasi",
    pilihan: [
      "Menggunakan format pencatatan yang ditentukan oleh instansi",
      "Memastikan semua dokumen diverifikasi oleh pimpinan sebelum dicatat",
      "Melakukan pencatatan setelah barang diperiksa oleh pihak ketiga",
      "Membandingkan data dengan dokumen lain sebelum pencatatan",
    ],
    jawaban: 0
  },
  {
    soal: "Jika terdapat kesalahan dalam mencatat dokumen pada buku kendali Apa langkah yang harus diambil oleh operator",
    pilihan: [
      "Menghapus entry yang salah dan membuat catatan baru",
      "Membuat koreksi dengan catatan tambahan di buku kendali",
      "Mengabaikan kesalahan selama dokumen fisik masih lengkap",
      "Melaporkan kesalahan kepada atasan tanpa memperbaikinya",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan operator sebelum mendistribusikan sarana dan prasarana ke Unit terkait",
    pilihan: [
      "Memastikan kendaraan pengangkut tersedia dan siap digunakan",
      "Menghubungi vendor untuk konfirmasi ulang barang",
      "Menginformasikan jadwal distribusi kepada semua unit",
      "Memeriksa kesesuaian barang dengan dokumen distribusi",
    ],
    jawaban: 3
  },
  {
    soal: "Jika operator menemukan barang yang rusak saat akan didistribusikan apa tindakan paling tepat yang harus dilakukan",
    pilihan: [
      "Tetap mendistribusikan barang untuk menghindari keterlambatan",
      "Mengganti barang tersebut dengan barang lain yang ada di gudang",
      "Melaporkan kerusakan kepada atasan dan menunda distribusi barang tersebut",
      "Mengirimkan barang dan melaporkan kerusakan setelah barang diterima unit terkait",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang menjadi prioritas utama operator dalam memastikan ketepatan sasaran penyampaian barang",
    pilihan: [
      "Melihat permintaan yang diajukan setiap unit terkait",
      "Memastikan barang diterima oleh pihak yang berwenang di unit penerima",
      "Mengirimkan barang sesuai jadwal distribusi yang telah ditetapkan",
      "Mencocokkan Alamat pengiriman dengan data pada dokumen",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam proses distribusi operator mendapati jumlah barang yang akan dikirim tidak sesuai dengan dokumen apa tindakan yang harus diambil",
    pilihan: [
      "Tetap mengirim barang yang ada untuk menghindari keterlambatan",
      "Membuat catatan sementara dan melaporkan selisih barang kemudian",
      "Menginformasikan kepada pihak penerima mengenai kekurangan barang",
      "Melaporkan ketidaksesuaian kepada atasan sebelum distribusi dilanjutkan",
    ],
    jawaban: 3
  },
  {
    soal: "Risiko utama jika operator tidak memeriksa kondisi barang sebelum distribusi",
    pilihan: [
      "Terjadinya keterlambatan distribusi terkait",
      "Barang tidak diterima oleh pihak yang berwenang",
      "Barang diterima dalam kondisi rusak sehingga tidak dapat digunakan",
      "Adanya protes dari unit terkait jumlah barang",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana cara memastikan bahwa pencatatan barang inventaris dilakukan dengan akurat dan lengkap",
    pilihan: [
      "Menggunakan perangkat lunak khusus inventarisasi",
      "Melakukan pemeriksaan silang antara barang fisik dan daftar inventaris",
      "Meminta konfirmasi dari setiap departemen yang menggunakan barang",
      "Menambahkan kolom tahan untuk informasi pendukung",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan jika operator menemukan data barang duplikat dalam daftar inventaris",
    pilihan: [
      "Menghapus salah satu entry tanpa pemeriksaan lebih lanjut",
      "Membuat catatan terpisah untuk data duplikat tersebut",
      "Memverifikasi barang fisik untuk menentukan data yang benar",
      "Menggabungkan data duplikat menjadi satu entry yang lengkap",
    ],
    jawaban: 2
  },
  {
    soal: "Apa risiko utama jika operator tidak mengelompokkan data berdasarkan jenis barang dalam inventaris",
    pilihan: [
      "Sulit menemukan barang saat dibutuhkan",
      "Ketidaksesuaian antara data dan barang fisik",
      "Terjadinya konflik antar unit terkait barang tertentu",
      "Barang rusak karena tidak terkelola dengan baik",
    ],
    jawaban: 0
  },
  {
    soal: "Operator menemukan barang dengan kondisi rusak saat proses inventarisasi Apa langkah yang harus diambil",
    pilihan: [
      "Mencatat barang sebagai rusak dalam daftar inventaris",
      "Menghapus barang tersebut dari daftar inventaris",
      "Memperbaiki barang terlebih dahulu sebelum mencatatnya",
      "Memindahkan barang ke tempat khusus untuk barang rusak",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator utama keberhasilan proses inventarisasi sarana dan prasarana",
    pilihan: [
      "Semua barang tercatat dalam daftar inventaris tanpa terkecuali",
      "Barang dikelompokkan dengan baik berdasarkan jenis dan lokasi",
      "Data inventaris akurat, lengkap dan mudah diakses saat dibutuhkan",
      "Tidak ada barang yang ditemukan rusak selama inventarisasi",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan utama memasukkan data inventaris ke dalam buku induk barang inventaris",
    pilihan: [
      "Mempermudah proses audit keuangan oleh instansi pemerintah",
      "Menyediakan catatan resmi dan terpusat untuk semua barang inventaris",
      "Memastikan data barang tidak hilang selama proses operasional",
      "Mempermudah distribusi barang antar unit",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah pertama yang dilakukan operator saat memasukkan data inventaris ke buku induk adalah",
    pilihan: [
      "Memastikan semua barang telah diberi kode klasifikasi",
      "Mengelompokkan barang berdasarkan jenis dan lokasi",
      "Memvalidasi data barang dengan dokumen pengadaan atau penerimaan",
      "Menyusun daftar barang sesuai urutan pembelian",
    ],
    jawaban: 2
  },
  {
    soal: "Kode klasifikasi barang dalam inventarisasi biasanya digunakan untuk",
    pilihan: [
      "Mengidentifikasi pemilik barang dalam instansi",
      "Mengelompokkan barang berdasarkan jenis fungsi atau kategori",
      "Mempermudah pencatatan barang dalam laporan bulanan",
      "Membatasi akses terhadap barang tertentu di unit",
    ],
    jawaban: 1
  },
  {
    soal: "Apa komponen utama yang harus ada dalam kode klasifikasi barang inventaris",
    pilihan: [
      "Nama barang, harga dan kode unit",
      "Jenis barang, tahun pembelian dan lokasi penyimpanan",
      "Lokasi barang, spesifikasi teknis dan nomor seri pabrik",
      "Jenis barang, kategori, fungsi dan urutan nomor unik",
    ],
    jawaban: 3
  },
  {
    soal: "Jika operator mendapati barang yang belum memiliki kode klasifikasi Apa langkah yang harus dilakukan",
    pilihan: [
      "Memberikan kode klasifikasi baru sesuai pedoman yang berlaku",
      "Meminta persetujuan atasan untuk mengklasifikasikan barang",
      "Memberikan kode sementara hingga ada arahan lebih lanjut",
      "Menambahkan barang ke daftar inventaris tanpa kode klasifikasi",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan operator jika barang yang diadakan tidak sesuai dengan spesifikasi yang dibutuhkan",
    pilihan: [
      "Mengembalikan barang kepada vendor untuk penggantian",
      "Mencatat barang tersebut sebagai stok tambahan",
      "Menggunakan barang tersebut untuk keperluan lain di instansi",
      "Melaporkan ketidaksesuaian kepada unit penerima barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang menjadi risiko utama jika operator tidak melakukan pemeliharaan sarana dan prasarana secara berkala",
    pilihan: [
      "Laporan pemeliharaan tidak sesuai dengan pedoman instansi",
      "Anggaran pemeliharaan tidak terpakai dengan baik",
      "Terjadi keluhan dari pihak vendor terkait garansi barang",
      "Barang akan rusak dan sulit digunakan kembali",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam proses penghapusan sarana dan prasarana dokumen apa yang paling penting untuk disiapkan oleh operator",
    pilihan: [
      "Surat pernyataan dari unit terkait yang menyatakan barang tidak dibutuhkan",
      "Daftar aset yang akan dihapus berikut alasan penghapusan",
      "Faktur pembelian barang yang dihapus",
      "Bukti pemeliharaan terakhir barang tersebut",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator menentukan prioritas dalam pengadaan sarana dan prasarana",
    pilihan: [
      "Berdasarkan saran vendor mengenai barang terbaik",
      "Berdasarkan ketersediaan anggaran instansi pemerintah",
      "Berdasarkan tingkat urgensi dan dampak operasional barang tersebut",
      "Berdasarkan permintaan tertinggi dari unit terkait",
    ],
    jawaban: 2
  },
  {
    soal: "Apa indikator utama keberhasilan operator dalam mengatur penggunaan sarana dan prasarana di instansi pemerintah",
    pilihan: [
      "Semua barang dapat didistribusikan tepat waktu ke setiap unit",
      "Barang selalu dalam kondisi baik dan tidak ada keluhan dari unit terkait",
      "Sarana dan prasarana digunakan secara optimal dan sesuai dengan kebutuhan instansi",
      "Semua barang yang tidak digunakan segera dihapus dari daftar inventaris",
    ],
    jawaban: 2
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan operator dalam pemeriksaan rutin kondisi sarana dan prasarana kantor",
    pilihan: [
      "Menyusun jadwal pemeriksaan berdasarkan urgensi",
      "Menggunakan daftar periksa (ceklist) yang telah disiapkan",
      "Memastikan semua barang berada di lokasi yang sesuai",
      "Mengidentifikasi barang yang memerlukan pemeliharaan segera",
    ],
    jawaban: 1
  },
  {
    soal: "Ketika operator menemukan kerusakan pada barang selama pemeriksaan rutin Apa tindakan paling tepat",
    pilihan: [
      "Segera melaporkan kerusakan kepada atasan untuk tindakan lanjutan",
      "Memperbaiki barang tersebut Jika memungkinkan",
      "Membuat catatan kerusakan pada laporan pemeriksaan dan melanjutkan pemeriksaan",
      "Mengganti barang yang rusak dengan barang cadangan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang menjadi fokus utama operator saat melakukan pemeriksaan rutin sarana dan prasarana kantor",
    pilihan: [
      "Menilai apakah barang tersebut masih sesuai kebutuhan instansi",
      "Memastikan barang dalam kondisi baik dan layak pakai",
      "Memeriksa jumlah barang sesuai dengan daftar inventaris",
      "Memastikan semua barang memiliki kode klasifikasi yang benar",
    ],
    jawaban: 1
  },
  {
    soal: "Apa komponen penting yang harus ada dalam laporan pemeriksaan rutin sarana dan prasarana",
    pilihan: [
      "Daftar barang yang rusak beserta perkiraan biaya perbaikan",
      "Hanya catatan kerusakan dan barang yang perlu diganti",
      "Tanggal pemeriksaan, nama pemeriksa dan tanda tangan atasan",
      "Catatan kondisi setiap barang, temuan kerusakan dan rekomendasi tindakan",
    ],
    jawaban: 3
  },
  {
    soal: "Operator menemukan barang dengan kondisi menurun tetapi masih bisa digunakan Apa langkah yang sebaiknya dilakukan",
    pilihan: [
      "Menggunakan barang tersebut hingga tidak layak pakai",
      "Mengusulkan barang untuk segera diganti dengan yang baru",
      "Menandai barang tersebut untuk dilakukan pemeliharaan preventif",
      "Menghapus barang dari daftar inventaris kantor",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam kasus peminjaman barang yang bernilai tinggi Apa langkah tambahan yang harus dilakukan operator",
    pilihan: [
      "Meminta persetujuan tertulis dari atasan sebelum memproses peminjaman",
      "Mencatat barang dalam daftar khusus barang bernilai tinggi",
      "Melakukan inspeksi bersama dengan unit terkait sebelum barang dipinjam",
      "Membatasi durasi peminjaman untuk mengurangi risiko kerusakan",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana operator memastikan barang yang dipinjam digunakan sesuai dengan tujuan yang diajukan",
    pilihan: [
      "Memeriksa tujuan peminjaman pada formulir yang diajukan",
      "Meminta laporan penggunaan barang dari unit terkait",
      "Mengawasi penggunaan barang selama dipinjam",
      "Membatasi penggunaan barang hanya pada jam kerja",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah operator jika barang yang dikembalikan dalam kondisi rusak",
    pilihan: [
      "Menghubungi vendor untuk mendapatkan barang pengganti",
      "Memperbaiki barang tersebut sebelum digunakan kembali",
      "Menolak pengembalian barang dan meminta ganti rugi dari unit terkait",
      "Melaporkan kerusakan kepada pimpinan dan mencatatnya dalam laporan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa indikator keberhasilan operator dalam memberikan layanan permintaan dan peminjaman sarana dan prasarana",
    pilihan: [
      "Semua barang tersedia setiap saat untuk dipinjam",
      "Tidak ada barang yang hilang selama proses peminjaman",
      "Permintaan diproses dengan cepat dan dokumentasi lengkap",
      "Barang selalu dikembalikan tepat waktu tanpa kerusakan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang harus dilakukan operator untuk meningkatkan efisiensi dalam layanan peminjaman sarana dan prasarana",
    pilihan: [
      "Menggunakan sistem pencatatan elektronik untuk mendokumentasikan permintaan dan pengembalian",
      "Memprioritaskan unit yang mengajukan permintaan lebih awal",
      "Mengurangi jumlah dokumen yang diperlukan untuk proses peminjaman",
      "Membatasi peminjaman hanya pada barang yang sering digunakan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa langkah pertama yang dilakukan operator Sebelum melaksanakan pemeliharaan preventif sarana dan prasarana",
    pilihan: [
      "Mengidentifikasi barang yang sering digunakan",
      "Membuat jadwal pemeliharaan sesuai rekomendasi manual barang",
      "Mengalokasikan anggaran pemeliharaan ke setiap unit",
      "Mengajukan permintaan persetujuan kepada pimpinan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan utama pemeliharaan berkala sarana dan prasarana",
    pilihan: [
      "Memastikan barang selalu sedia untuk digunakan",
      "Memenuhi kewajiban audit inventaris",
      "Meminimalkan biaya pengganti barang baru",
      "Memperpanjang umur barang dengan menjaga kondisinya tetap optimal",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam konteks pemeliharaan darurat Apa langkah yang paling penting bagi operator",
    pilihan: [
      "Memperbaiki barang secepat mungkin untuk menghindari gangguan operasional",
      "Mengganti barang dengan barang cadangan jika tersedia",
      "Melaporkan kerusakan kepada pimpinan untuk arahan selanjutnya",
      "Menghubungi teknisi yang memiliki keahlian khusus",
    ],
    jawaban: 3
  },
  {
    soal: "Apa perbedaan utama antara pemeliharaan berkala dan pemeliharaan preventif",
    pilihan: [
      "Pemeliharaan berkala dilakukan rutin sedangkan preventif dilakukan hanya jika ada indikasi kerusakan",
      "Pemeliharaan berkala lebih fokus pada inspeksi sementara preventif bertujuan mencegah kerusakan",
      "Pemeliharaan preventif membutuhkan anggaran lebih besar daripada berkala",
      "Pemeliharaan berkala hanya mencakup barang yang sering digunakan sedangkan preventif mencakup semua barang",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika pemeliharaan preventif tidak dilakukan pada sarana dan prasarana",
    pilihan: [
      "Barang akan cepat rusak tanpa terdeteksi",
      "Barang yang tidak terpakai akan memenuhi ruang penyimpanan",
      "Anggaran pemeliharaan tidak terpakai sesuai rencana",
      "Barang akan sulit digunakan dalam situasi darurat",
    ],
    jawaban: 0
  },
  {
    soal: "Seorang operator operasional menerima pengiriman barang berupa alat elektronik untuk kebutuhan instansi pemerintah. Apa langkah pertama yang harus dilakukan operator sesuai dengan prosedur pemeriksaan sarana dan prasarana",
    pilihan: [
      "Memastikan bahwa dokumen pengirim sudah ditandatangani pengirim",
      "Memeriksa kesesuaian jumlah barang dengan dokumen pemesanan",
      "Menghubungi pimpinan untuk konfirmasi penerimaan barang",
      "Menguji fungsi alat elektronik untuk memastikan kelayakan",
    ],
    jawaban: 1
  },
  {
    soal: "Jika terdapat barang yang rusak saat diterima apa tindakan paling tepat yang dilakukan operator sesuai prosedur",
    pilihan: [
      "Melaporkan kepada pimpinan tanpa mengambil tindakan apapun",
      "Mengembalikan barang secara langsung kepada pengirim",
      "Membuat laporan kerusakan dan mengajukan klaim kepada pengirim",
      "Menyimpan barang rusak untuk sementara waktu hingga ada keputusan",
    ],
    jawaban: 2
  },
  {
    soal: "Operator mendapati bahwa dokumen pemesanan menunjukkan barang berbeda dengan barang yang diterima tindakan paling benar",
    pilihan: [
      "Melaporkan ketidaksesuaian kepada vendor dan menolak barang tersebut",
      "Menghubungi bagian logistik untuk meminta arahan",
      "Menyimpan barang sementara dan memproses dokumen ulang",
      "Menandatangani dokumen pengiriman untuk memastikan penerimaan barang",
    ],
    jawaban: 0
  },
  {
    soal: "Saat memeriksa alat yang diterima ia menyadari bahwa salah satu fitur utama tidak berfungsi langkah selanjutnya adalah",
    pilihan: [
      "Segera meminta barang pengganti dari vendor",
      "Membuat laporan keluhan kepada vendor dengan bukti pendukung",
      "Menggunakan barang tersebut karena fitur utama dianggap opsional",
      "Menyimpan barang rusak Untuk sementara di gudang",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang menjadi tujuan utama dari pemeriksaan sarana dan prasarana oleh operator layanan operasional",
    pilihan: [
      "Menghindari pembelian barang yang tidak diperlukan",
      "Memastikan dokumen pengiriman sudah lengkap",
      "Menjamin barang diterima dalam kondisi baik dan siap digunakan",
      "Menilai kinerja vendor berdasarkan barang yang dikirim",
    ],
    jawaban: 2
  },
  {
    soal: "Mengapa penting bagi operator untuk mencatat dokumen sarana dan prasarana segera setelah penerimaan barang",
    pilihan: [
      "Untuk memastikan dokumen tidak hilang di kemudian hari",
      "Untuk memberikan laporan cepat kepada pimpinan",
      "Untuk menghindari kerumitan saat audit berlangsung",
      "Untuk menjaga akurasi dan kelengkapan data",
    ],
    jawaban: 3
  },
  {
    soal: "Operator diminta untuk mencatat dokumen secara digital selain pada buku kendali fisik Apa keuntungan utama dari pencatatan Ganda ini",
    pilihan: [
      "Menghemat waktu dalam pencatatan",
      "Mempermudah pencarian dokumen secara cepat dan aman",
      "Mengurangi resiko kesalahan pencatatan",
      "Mengurangi jumlah dokumen fisik yang diperlukan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika operator tidak mencatat dokumen sarana dan prasarana dengan baik",
    pilihan: [
      "Instansi tidak dapat melakukan audit keuangan dengan baik",
      "Kehilangan dokumen penting yang dapat merugikan operasional instansi",
      "Vendor mengajukan keluhan terkait proses pengiriman barang",
      "Operator menghadapi sanksi administratif dari pimpinan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana seorang operator memastikan bahwa buku kendali tetap tertib dan terorganisasi",
    pilihan: [
      "Menggunakan kode warna untuk membedakan jenis dokumen",
      "Membuat salinan fisik semua Dokumen untuk cadangan",
      "Memisahkan dokumen berdasarkan tanggal penerimaan",
      "Menggunakan sistem numerik atau indeksasi sesuai prosedur",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pencatatan dokumen operator perlu menambahkan kolom baru untuk informasi tambahan Apa langkah terbaik yang harus diambil",
    pilihan: [
      "Menambahkan Kolom pada halaman berikutnya tanpa mengubah format awal",
      "Menggunakan buku kendali baru yang mencakup kolom tersebut",
      "Mengajukan perubahan format kepada pihak yang berwenang",
      "Menulis informasi tambahan di bagian catatan khusus pada dokumen",
    ],
    jawaban: 2
  },
  {
    soal: "Operator mendistribusikan barang yang sensitif Seperti alat elektronik Apa tindakan tambahan yang harus dilakukan untuk menjaga ketepatan kondisi barang",
    pilihan: [
      "Memastikan barang dikemas dengan baik dan aman sebelum distribusi",
      "Mengirim barang langsung ke Unit penerima tanpa perantara",
      "Menggunakan dokumen tambahan untuk mencatat jenis barang",
      "Melibatkan teknisi untuk mendampingi proses distribusi",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana operator memastikan bahwa barang yang telah didistribusi sesuai dengan dokumen distribusi",
    pilihan: [
      "Meminta tanda tangan penerima pada dokumen distribusi",
      "Membuat laporan distribusi setelah barang diterima",
      "Mengirim salinan dokumen distribusi kepada setiap unit",
      "Menginformasikan jumlah barang kepada bagian administrasi",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam situasi di mana barang tidak disalurkan ke Unit penerima tepat waktu Apa langkah terbaik bagi operator",
    pilihan: [
      "Menyimpan barang sementara di gudang hingga jadwal baru ditentukan",
      "Menginformasikan kepada unit penerima tentang penundaan pengiriman",
      "Melaporkan masalah kepada pimpinan untuk mendapatkan arahan lebih lanjut",
      "Mencari alternatif pengiriman yang lebih cepat",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang harus dilakukan operator jika unit penerima menolak barang yang didistribusikan karena tidak sesuai kebutuhan",
    pilihan: [
      "Mengembalikan barang ke gudang dan mencatat kejadian tersebut",
      "Meminta unit penerima menandatangani penolakan pada dokumen",
      "Mendistribusikan barang tersebut ke Unit lain yang membutuhkan",
      "Melaporkan kejadian ini kepada atasan untuk keputusan lebih lanjut",
    ],
    jawaban: 3
  },
  {
    soal: "Apa indikator utama keberhasilan proses distribusi sarana dan prasarana di instansi pemerintah",
    pilihan: [
      "Semua barang diterima tepat waktu oleh unit penerima",
      "Dokumen distribusi lengkap dan disimpan dengan baik",
      "Barang yang diterima sesuai jumlah, jenis, sasaran dan dalam kondisi baik",
      "Tidak ada keluhan dari unit penerima selama proses distribusi",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan utama dari inventarisasi sarana dan prasarana di instansi pemerintah",
    pilihan: [
      "Memastikan semua barang terdaftar untuk audit keuangan",
      "Membantu operator menentukan barang mana yang harus diprioritaskan",
      "Mencatat, mengelompokkan dan mengelola barang agar mudah dilacak dan digunakan",
      "Mempermudah pelaporan kepada pihak vendor",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama yang harus dilakukan operator dalam proses inventarisasi barang adalah",
    pilihan: [
      "Membuat daftar barang yang sudah tercatat sebelumnya",
      "Mengelompokkan barang berdasarkan jenis dan lokasi",
      "Memeriksa kondisi fisik barang untuk memastikan kelayakan",
      "Mengidentifikasi dan mencatat semua barang yang dimiliki instansi",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pencatatan inventaris informasi apa yang wajib dicantumkan untuk setiap barang",
    pilihan: [
      "Nama barang, harga dan tanggal pembelian",
      "Nama barang, lokasi penyimpanan dan pemilik",
      "Nama barang, kode unik, spesifikasi dan kondisi",
      "Nama barang, jenis barang dan Departemen pengguna",
    ],
    jawaban: 2
  },
  {
    soal: "Apa keuntungan utama dari pengelompokan barang berdasarkan jenis dalam proses inventarisasi",
    pilihan: [
      "Mempermudah penyusunan laporan keuangan",
      "Menghindari duplikasi barang di lokasi yang berbeda",
      "Memastikan barang tidak rusak selama penyimpanan",
      "Mempercepat proses pencarian dan penggunaan barang",
    ],
    jawaban: 3
  },
  {
    soal: "Jika operator menemukan barang yang tidak tercatat dalam daftar inventaris Apa langkah paling tepat yang dilakukan",
    pilihan: [
      "Menambahkan barang tersebut ke daftar inventaris tanpa pemeriksaan lebih lanjut",
      "Memeriksa dokumen pendukung untuk memastikan asal-usul barang",
      "Menyimpan barang sementara untuk investigasi",
      "Melaporkan barang tersebut kepada pimpinan untuk keputusan lebih lanjut",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan penyiapan kode pengguna barang dalam inventarisasi",
    pilihan: [
      "Mempermudah pengelompokan barang berdasarkan lokasi penyimpanan",
      "Memastikan setiap barang memiliki tanggung jawab yang jelas",
      "Menyediakan informasi tambahan untuk pelaporan bulanan",
      "Membantu operator mendistribusikan barang secara lebih efisien",
    ],
    jawaban: 1
  },
  {
    soal: "Operator perlu mengintegrasikan kode klasifikasi dan kode pengguna barang Apa manfaat utama dari integrasi ini",
    pilihan: [
      "Memastikan barang tercatat dengan baik dalam sistem keuangan",
      "Memudahkan audit internal dan eksternal instansi",
      "Menjamin barang digunakan oleh unit yang tepat",
      "Mengurangi kesalahan dalam proses distribusi barang",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana operator memastikan bahwa kode pengguna barang tidak duplikat dalam sistem inventaris",
    pilihan: [
      "Menggunakan format kode unik yang telah distandarisasi",
      "Melakukan verifikasi manual terhadap setiap kode yang diinput",
      "Menyusun daftar kode pengguna dalam urutan abjad",
      "Memberikan tanda khusus untuk kode yang sering digunakan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan operator jika kode pengguna barang yang ada tidak sesuai dengan pemilik barang saat ini",
    pilihan: [
      "Menghapus kode pengguna lama dan menggantinya dengan kode baru",
      "Membuat catatan khusus mengenai perubahan dalam buku induk",
      "Melaporkan perubahan kepada atasan untuk mendapatkan arahan lebih lanjut",
      "Menyusun ulang seluruh daftar inventaris untuk menghindari kesalahan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa indikator utama keberhasilan dalam memasukkan data inventaris ke buku induk barang inventaris",
    pilihan: [
      "Semua barang tercatat tanpa terkecuali",
      "Kode klasifikasi dan kode pengguna barang tercatat dengan benar dan konsisten",
      "Buku induk selesai disusun sebelum batas waktu pelaporan",
      "Tidak ada barang yang dilaporkan hilang selama proses inventarisasi",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan operator dalam perencanaan penggunaan sarana dan prasarana di instansi pemerintah",
    pilihan: [
      "Mengidentifikasi kebutuhan unit terkait",
      "Menyusun anggaran untuk pengadaan barang baru",
      "Membuat daftar inventaris barang yang tersedia",
      "Mengkonsultasikan rencana dengan pimpinan instansi",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam proses pengadaan sarana dan prasarana apa yang harus menjadi Fokus utama operator",
    pilihan: [
      "Menyelesaikan proses pengadaan secepat mungkin",
      "Memastikan barang yang dibeli memiliki kualitas terbaik",
      "Menyesuaikan pengadaan dengan anggaran yang tersedia dan kebutuhan yang telah direncanakan",
      "Memastikan vendor yang dipilih memiliki reputasi yang baik",
    ],
    jawaban: 2
  },
  {
    soal: "Ketika operator mengatur pemeliharaan sarana dan prasarana apa langkah penting untuk memastikan efisiensi",
    pilihan: [
      "Menjadwalkan pemeliharaan secara rutin berdasarkan manual barang",
      "Menunggu laporan kerusakan sebelum melakukan pemeliharaan",
      "Mengalokasikan anggaran khusus untuk perbaikan darurat",
      "Melibatkan pihak ketiga untuk semua proses pemeliharaan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang menjadi indikator utama bahwa sarana dan prasarana memerlukan penghapusan",
    pilihan: [
      "Barang tersebut sudah tidak digunakan selama lebih dari 6 bulan",
      "Biaya pemeliharaan barang lebih tinggi daripada nilai barang itu sendiri",
      "Barang tersebut rusak tetapi masih bisa diperbaiki",
      "Terdapat barang pengganti yang lebih canggih dan efisien",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam mengatur penggunaan sarana dan prasarana Bagaimana operator memastikan bahwa distribusi barang sesuai dengan kebutuhan setiap unit",
    pilihan: [
      "Berdasarkan permintaan yang diajukan oleh masing-masing unit",
      "Berdasarkan data historis penggunaan barang di unit terkait",
      "Berdasarkan anggaran yang tersedia untuk setiap unit",
      "Berdasarkan evaluasi kebutuhan dan urgensi operasional setiap unit",
    ],
    jawaban: 3
  },
  {
    soal: "Apa risiko utama jika operator tidak melakukan pemeriksaan rutin sarana dan prasarana",
    pilihan: [
      "Barang tidak akan terdeteksi hilang dalam waktu cepat",
      "Anggaran untuk pemeliharaan akan sulit ditanggungjawabkan",
      "Kerusakan kecil bisa menjadi kerusakan besar yang memerlukan biaya tinggi",
      "Tidak ada data untuk menyusun laporan bulanan kantor",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana operator memastikan pemeriksaan rutin dilakukan dengan efisien",
    pilihan: [
      "Melakukan pemeriksaan secara acak pada barang tertentu setiap minggu",
      "Menggunakan daftar periksa yang terstruktur dan sesuai dengan jenis barang",
      "Melibatkan semua unit dalam proses pemeriksaan barang",
      "Memprioritaskan barang yang paling sering digunakan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan operator jika menemukan barang yang hilang dalam laporan pemeriksaan rutin",
    pilihan: [
      "Menandai barang tersebut sebagai tidak ditemukan dalam laporan",
      "Melaporkan kehilangan kepada bagian keamanan instansi",
      "Menghapus barang dari daftar inventaris sementara menunggu investigasi",
      "Melaporkan kehilangan barang tersebut kepada pimpinan dan mencatatnya dalam laporan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa indikator keberhasilan dalam pemeriksaan rutin sarana dan prasarana kantor",
    pilihan: [
      "Tidak ada barang yang ditemukan rusak selama pemeriksaan",
      "Laporan pemeriksaan lengkap dan diterima tepat waktu oleh pimpinan",
      "Semua barang yang rusak telah diperbaiki sebelum laporan disusun",
      "Operator dapat menyelesaikan pemeriksaan dalam waktu yang singkat",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tindakan operator jika mendeteksi kerusakan yang memerlukan perbaikan segera",
    pilihan: [
      "Menunda perbaikan hingga anggaran tersedia",
      "Mengajukan permohonan perbaikan kepada bagian pemeliharaan",
      "Memperbaiki barang tersebut secara langsung",
      "Melaporkan barang sebagai tidak layak pakai",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan operator setelah menerima permintaan peminjaman sarana dan prasarana dari unit terkait",
    pilihan: [
      "Memastikan ketersediaan barang yang diminta",
      "Meminta tanda tangan persetujuan dari atasan",
      "Mencatat permintaan pada buku log peminjaman",
      "Menghubungi pihak yang bertanggung jawab atas barang tersebut",
    ],
    jawaban: 0
  },
  {
    soal: "Jika operator mendapati bahwa barang yang diminta tidak tersedia Apa tindakan terbaik yang harus dilakukan",
    pilihan: [
      "Menolak permintaan secara langsung dan memberi alasan",
      "Mengusulkan alternatif barang yang serupa kepada unit peminjam",
      "Mencatat permintaan sebagai tertunda dalam dokumen resmi",
      "Menghubungi bagian pengadaan untuk pengadaan barang baru",
    ],
    jawaban: 1
  },
  {
    soal: "Ada dokumen yang wajib disiapkan oleh operator saat memproses peminjaman sarana dan prasarana",
    pilihan: [
      "Surat perjanjian peminjaman barang antara unit terkait",
      "Daftar inventaris barang yang akan dipinjam",
      "Formulir peminjaman yang mencantumkan barang, durasi dan tanda tangan",
      "Bukti ketersediaan barang dalam sistem inventaris",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang menjadi tanggung jawab operator setelah barang yang dipinjam dikembalikan oleh unit terkait",
    pilihan: [
      "Mencatat pengembalian barang dan memeriksa kondisi barang",
      "Menyimpan barang langsung tanpa pemeriksaan",
      "Menyusun laporan bulanan tentang barang yang dipinjam",
      "Menandai barang sebagai siap untuk dipinjam kembali",
    ],
    jawaban: 0
  },
  {
    soal: "Apa risiko utama jika operator tidak mendokumentasikan aktivitas peminjaman sarana dan prasarana",
    pilihan: [
      "Unit terkait tidak dapat meminjam barang di masa mendatang",
      "Barang dapat hilang atau rusak tanpa pertanggungjawaban yang jelas",
      "Meminjam barang menjadi lebih lambat dan tidak efisien",
      "Barang tidak tersedia untuk digunakan sesuai kebutuhan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator memastikan bahwa pemeliharaan sarana dan prasarana dilakukan secara efisien",
    pilihan: [
      "Menggunakan perangkat lunak manajemen pemeliharaan",
      "Menugaskan teknisi untuk memeriksa semua barang setiap minggu",
      "Mengelompokkan barang berdasarkan urgensi pemeliharaannya",
      "Mengalokasikan anggaran tambahan untuk barang-barang penting",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator keberhasilan pemeliharaan terus-menerus pada sarana dan prasarana",
    pilihan: [
      "Tidak ada barang yang memerlukan perbaikan selama periode tertentu",
      "Biaya pemeliharaan lebih rendah dari anggaran yang disediakan",
      "Barang tetap dalam kondisi optimal dan tersedia sesuai kebutuhan operasional",
      "Semua barang lama digantikan dengan barang baru",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam pemeliharaan darurat apa dokumentasi yang harus dibuat oleh operator setelah kerusakan diperbaiki",
    pilihan: [
      "Formulir inspeksi pasca perbaikan",
      "Laporan kerusakan yang mencakup penyebab dan langkah perbaikan",
      "Surat pernyataan teknisi tentang kelayakan barang",
      "Rencana pemeliharaan berkala untuk barang tersebut",
    ],
    jawaban: 1
  },
  {
    soal: "Apa perbedaan utama antara pemeliharaan berkala dan pemeliharaan preventif",
    pilihan: [
      "Pemeliharaan berkala dilakukan rutin sedangkan preventif dilakukan hanya jika ada indikasi kerusakan",
      "Pemeliharaan berkala lebih fokus pada inspeksi sementara preventif bertujuan mencegah kerusakan",
      "Pemeliharaan preventif membutuhkan anggaran lebih besar daripada berkala",
      "Pemeliharaan berkala hanya mencakup barang yang sering digunakan sedangkan preventif mencakup semua barang",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika pemeliharaan preventif tidak dilakukan pada sarana dan prasarana",
    pilihan: [
      "Barang akan cepat rusak tanpa terdeteksi",
      "Barang yang tidak terpakai akan memenuhi ruang penyimpanan",
      "Anggaran pemeliharaan tidak terpakai sesuai rencana",
      "Barang akan sulit digunakan dalam situasi darurat",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Seorang tukang mebel kayu dapat membuat 12 meja dalam 6 hari. Jika ia ingin membuat 18 meja berapa lama waktu yang diperlukan",
    pilihan: [
      "8 hari",
      "9 hari",
      "10 hari",
      "12 hari",
    ],
    jawaban: 1
  },
  {
    soal: "Soal TIU: Hitunglah hasil dari perhitungan berikut 2345 x 112 + 789",
    pilihan: [
      "263.429",
      "262.429",
      "264.429",
      "265.429",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Jika X = 3 dan Y = 5 maka persamaan mana yang benar",
    pilihan: [
      "X + 2 = Y",
      "X - 2 = Y",
      "X + Y = 8",
      "X lebih dari Y",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: Sebuah perusahaan membeli 100 unit barang dengan harga per unit 150.000. Setelah beberapa waktu perusahaan tersebut menjual barang-barang tersebut dengan harga per unitnya 180.000. Selain itu ternyata perusahaan mengeluarkan biaya tambahan berupa biaya transportasi dan administrasi sebesar 3 juta untuk seluruh barang. Berapa persentase keuntungan yang diperoleh perusahaan setelah menjual seluruh barang tersebut",
    pilihan: [
      "12%",
      "15%",
      "18%",
      "0%",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Pembangunan sebuah rumah memerlukan waktu 1 bulan jika dilakukan oleh 20 orang. Jika ada penambahan pekerja sebanyak 10 orang maka berapa lama waktu pembangunan rumah tersebut",
    pilihan: [
      "20 hari",
      "30 hari",
      "40 hari",
      "50 hari",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Abolisi adalah lawan kata dari",
    pilihan: [
      "Pembentukan",
      "Penangkapan",
      "Pembusukan",
      "Perubahan",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Anomali itu lawan kata dari",
    pilihan: [
      "Aturan",
      "Normal",
      "Patuh",
      "Takut",
    ],
    jawaban: 1
  },
  {
    soal: "Soal TIU: Tendensi itu persamaan kata dari",
    pilihan: [
      "Denyut",
      "Lawan",
      "Utama",
      "Kecenderungan",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Supervisi itu persamaan kata dari",
    pilihan: [
      "Pengawasan",
      "Luar biasa",
      "Pegawai",
      "Bos",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Sporadis itu persamaan kata dari",
    pilihan: [
      "Rapat",
      "Subur",
      "Banyak",
      "Jarang",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Kompor : Api = ... : ...",
    pilihan: [
      "Palung : gula",
      "Pohon : buah",
      "Kipas angin : angin",
      "Jalan : macet",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: Suhu : Celsius = ... : ...",
    pilihan: [
      "Termometer : suhu",
      "Api : kebakaran",
      "Banjir : air",
      "Gempa : Richter",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Jika saya lolos seleksi tim nasional saya akan pindah klub. Saya tidak pindah klub maka Kesimpulan yang tepat adalah",
    pilihan: [
      "Saya lolos seleksi tim nasional",
      "Saya pindah klub",
      "Saya tidak lolos seleksi",
      "Saya tidak lolos seleksi tim nasional",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Andi, Anton dan Intan adalah saudara. Usia Andi terpaut 1 bulan dengan Intan. Andi Memanggil Ayah Intan dengan sebutan Paman. Intan juga Memanggil Ayah Andi dengan sebutan Paman. Anton adalah saudara Andi dan lebih tua dari Andi tetapi tidak lebih tua dari Intan. Kesimpulannya adalah",
    pilihan: [
      "Andi lebih tua dari Intan",
      "Intan paling muda",
      "Anton dan Andi saudara kembar dan lebih muda dari Intan",
      "Intan seumuran dengan Andi",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: Berat badan Adinda lebih besar dari Dini Tetapi lebih rendah dari Ulfa. Berat badan Ulfa lebih besar dari Pandu tetapi tidak lebih besar dari Dewi. Berat badan Pandu lebih besar dari Adinda. Kesimpulannya urutan berat badan dari yang terbesar sampai yang terkecil adalah",
    pilihan: [
      "Dewi, Ulfa, Pandu, Adinda, Dini",
      "Ulfa, Pandu, Dewi, Dini, Adinda",
      "Dini, Adinda, Pandu, Dewi, Ulfa",
      "Adinda, Dini, Dewi, Pandu, Ulfa",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Suatu kelompok belajar mempunyai anggota 7 orang. Jika setiap belajar semua anggota kelompok duduk dengan posisi melingkar banyaknya cara untuk mengatur posisi duduk anggota kelompok tersebut adalah",
    pilihan: [
      "720",
      "10440",
      "2520",
      "5040",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Suatu Rapat dihadiri oleh lima orang peserta yang terdiri dari ketua, wakil, sekretaris, Anggota 1 dan anggota 2. Susunan posisi duduk pada saat Rapat adalah mengelilingi Meja Bundar. Jika ketua dan wakil harus saling berdekatan maka banyaknya susunan yang mungkin adalah",
    pilihan: [
      "8 cara",
      "12 cara",
      "24 cara",
      "48 cara",
    ],
    jawaban: 1
  },
  {
    soal: "Soal TIU: 2, 4, 7, 11, 16, ..., ...",
    pilihan: [
      "17, 18",
      "20, 22",
      "22, 29",
      "24, 32",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: 1, 3, 7, 13, 21, ...",
    pilihan: [
      "25",
      "28",
      "31",
      "35",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: A, C, C, E, ..., ..., G, I, I, K",
    pilihan: [
      "E dan G",
      "G dan H",
      "H dan I",
      "G dan J",
    ],
    jawaban: 0
  },
  {
    soal: "Proses pemeriksaan barang yang paling tepat untuk peralatan elektronik seperti komputer melibatkan tahap berikut kecuali",
    pilihan: [
      "Pengujian fungsi perangkat",
      "Pemeriksaan spesifikasi teknis",
      "Penghitungan kuantitas barang",
      "Pengisian ulang dokumen manual perangkat",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah yang termasuk dalam kategori barang sarana perkantoran",
    pilihan: [
      "Gedung kantor",
      "Komputer dan printer",
      "Sistem pengelolaan limbah",
      "Lif dan eskalator",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa pemeriksaan stok barang kecil seperti alat tulis kantor perlu dilakukan secara berkala",
    pilihan: [
      "Untuk menghindari barang kadaluarsa",
      "Agar dapat menilai efisiensi kerja karyawan",
      "Supaya tidak ada penumpukan stok yang tidak diperlukan",
      "Untuk mencocokkan desain barang dengan tema kantor",
    ],
    jawaban: 2
  },
  {
    soal: "Apa langkah pertama dalam pemeriksaan barang sarana perkantoran yang baru diterima",
    pilihan: [
      "Membandingkan dengan spesifikasi dalam kontrak pembelian",
      "Menguji fungsionalitas barang",
      "Mendokumentasi barang ke dalam inventaris",
      "Melakukan negosiasi ulang dengan supplier",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam pemeriksaan prasarana seperti jaringan internet kantor apa yang menjadi indikator kelayakan utama",
    pilihan: [
      "Warna kabel yang digunakan",
      "Kecepatan dan stabilitas koneksi",
      "Kemudahan akses bagi tamu",
      "Jarak antara router dan workstation",
    ],
    jawaban: 1
  },
  {
    soal: "Jika ditemukan barang yang tidak sesuai dalam pemeriksaan Apa langkah yang harus dilakukan",
    pilihan: [
      "Langsung mengganti barang sendiri",
      "Memberikan laporan kerusakan kepada Departemen lain",
      "Menghubungi pemasok untuk klaim atau penggantian",
      "Menyimpan barang tersebut untuk digunakan dalam situasi darurat",
    ],
    jawaban: 2
  },
  {
    soal: "Pemeriksaan barang yang membutuhkan laporan audit khusus biasanya diterapkan pada jenis barang berikut kecuali",
    pilihan: [
      "Barang elektronik mahal",
      "Aset tetap seperti meja dan kursi",
      "Kendaraan operasional kantor",
      "Barang habis pakai seperti kertas dan tinta",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah yang merupakan ciri utama prasarana perkantoran",
    pilihan: [
      "Dapat dipindahkan dengan mudah",
      "Digunakan untuk kegiatan administratif langsung",
      "Bersifat permanen dan mendukung aktivitas utama kantor",
      "Berfungsi sebagai alat pelengkap saja",
    ],
    jawaban: 2
  },
  {
    soal: "Perbedaan utama antara sarana dan prasarana perkantoran adalah",
    pilihan: [
      "Sarana berfungsi sebagai alat utama sedangkan prasarana pendukung aktivitas",
      "Sarana bersifat tidak bergerak sedangkan prasarana bersifat bergerak",
      "Sarana lebih mahal dibandingkan prasarana",
      "Prasarana lebih mudah rusak dibandingkan sarana",
    ],
    jawaban: 0
  },
  {
    soal: "Apa saja faktor utama yang mempengaruhi kebutuhan prasarana kantor",
    pilihan: [
      "Desain interior dan tren modern",
      "Jumlah karyawan dan jenis aktivitas kantor",
      "Lokasi geografis perusahaan",
      "Preferensi pimpinan perusahaan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa fungsi utama dari buku klepper dalam pengelolaan sarana dan prasarana perkantoran",
    pilihan: [
      "Mencatat seluruh transaksi keuangan kantor",
      "Menyimpan dokumen inventarisasi barang",
      "Mengelola data pemeliharaan dan perbaikan fasilitas",
      "Memantau keluar masuknya barang secara manual",
    ],
    jawaban: 3
  },
  {
    soal: "Apa perbedaan utama buku klepper dan buku kendali",
    pilihan: [
      "Buku klepper mencatat inventaris barang sementara buku kendali memantau anggaran",
      "Buku klepper digunakan untuk dokumen keluar masuk barang sedangkan buku kendali mencatat distribusi dan pemakaian barang",
      "Buku kendali hanya mencatat barang elektronik sementara buku klepper mencatat seluruh barang",
      "Buku klepper hanya digunakan untuk barang habis pakai sementara buku kendali mencakup barang tetap",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah informasi berikut yang biasanya terdapat dalam buku klepper",
    pilihan: [
      "Tanggal pembelian dan harga barang",
      "Kondisi barang saat diterima",
      "Nama pengguna dan lokasi penempatan barang",
      "Tanggal keluar dan masuk barang",
    ],
    jawaban: 3
  },
  {
    soal: "Apa tujuan penggunaan buku kendali dalam pengelolaan sarana dan prasarana perkantoran",
    pilihan: [
      "Menghindari pemborosan dalam penggunaan fasilitas kantor",
      "Meningkatkan efisiensi sistem inventarisasi",
      "Menjamin persediaan barang setiap saat",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah dari Berikut ini yang merupakan kelemahan utama pengelolaan berbasis buku klepper",
    pilihan: [
      "Tidak dapat digunakan untuk barang habis pakai",
      "Rentan terhadap kesalahan pencatatan manual",
      "Sulit diakses oleh beberapa pihak secara bersama",
      "Membutuhkan perangkat khusus untuk penyimpanan data",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah jenis barang berikut yang lebih relevan dicatat dalam buku klepper",
    pilihan: [
      "Barang habis pakai seperti kertas dan tinta",
      "Fasilitas permanen seperti ruang kantor",
      "Kendaraan operasional",
      "Sistem pendingin ruangan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa langkah pertama dalam mengelola buku kendali sarana perkantoran",
    pilihan: [
      "Menyusun daftar barang berdasarkan kategori",
      "Membuat anggaran pemeliharaan barang",
      "Menentukan jadwal penggunaan barang",
      "Mengarsipkan dokumen pembelian barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa manfaat utama menggunakan buku kendali dalam pengawasan aset tetap",
    pilihan: [
      "Mempermudah penggantian barang rusak",
      "Menghindari penggunaan barang yang tidak sesuai spesifikasi",
      "Memastikan barang selalu dalam kondisi baru",
      "Meminimalkan resiko kehilangan barang",
    ],
    jawaban: 3
  },
  {
    soal: "Apa langkah pertama yang dilakukan operator ketika menerima surat masuk",
    pilihan: [
      "Membuka dan membaca isi surat",
      "Mencatat surat dalam buku agenda atau sistem pencatatan",
      "Mengirim surat kepada penerima langsung",
      "Mengarsipkan surat berdasarkan kategori",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan utama dari penggunaan buku agenda surat masuk dan keluar",
    pilihan: [
      "Mempermudah akses fisik terhadap dokumen",
      "Memastikan setiap surat yang diterima dan dikirim tercatat dengan jelas",
      "Mengurangi jumlah surat yang harus disimpan",
      "Mendokumen memenuhi standar legal",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah dokumen pendukung yang sering digunakan operator untuk surat keluar resmi",
    pilihan: [
      "Nota dinas",
      "Buku inventaris",
      "Laporan audit",
      "Formulir perizinan",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana operator memastikan keamanan dokumen surat rahasia",
    pilihan: [
      "Menyimpan dokumen rahasia dalam arsip umum",
      "Menggunakan amplop berwarna khusus",
      "Memberikan kode khusus pada surat dan menyimpan dokumen di tempat terkunci",
      "Meminta tanda tangan setiap kali dokumen diperiksa",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah yang termasuk tantangan utama operator dalam pengelolaan surat elektronik",
    pilihan: [
      "Kurangnya format standar untuk semua surat",
      "Resiko kebocoran informasi dan serangan cyber",
      "Proses pengarsipan yang terlalu manual",
      "Kesalahan dalam pencatatan nomor surat",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang sebaiknya dilakukan operator jika terjadi kesalahan pada surat resmi yang sudah terkirim",
    pilihan: [
      "Menghapus surat dari arsip",
      "Segera mengirim surat pembatalan atau klarifikasi",
      "Menyalahkan kurir atas kesalahan tersebut",
      "Menunggu instruksi dari pihak penerima",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tanggung jawab utama operator dalam situasi di mana surat mendesak harus segera dikirim tetapi tidak ditandatangani atasan",
    pilihan: [
      "Mengirimkan surat tanpa persetujuan dan menyampaikan balasan belakangan",
      "Mengarsipkan surat dan menunggu arahan lebih lanjut",
      "Menjaga validitas surat dengan mengikuti kebijakan pengganti tanda tangan atau mencari izin delegasi",
      "Meninggalkan surat untuk dikirim oleh pihak lain",
    ],
    jawaban: 2
  },
  {
    soal: "Apa risiko utama mengirim surat resmi tanpa tanda tangan atasan",
    pilihan: [
      "Surat dianggap tidak sah oleh penerima",
      "Surat dapat diterima tetapi memerlukan konfirmasi tambahan",
      "Tanda tangan dapat ditambah kemudian oleh operator",
      "Surat akan mempengaruhi hubungan baik dengan penerima",
    ],
    jawaban: 0
  },
  {
    soal: "Jika operator memutuskan untuk menunda pengiriman surat karena atasan tidak ada apa yang harus dilakukan agar tetap profesional",
    pilihan: [
      "Memberikan alasan kepada penerima bahwa surat akan dikirim belakangan",
      "Mengarsipkan surat dan menunggu instruksi selanjutnya",
      "Membuat laporan tertulis kepada atasan mengenai keterlambatan pengiriman",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan operator dalam mempersiapkan ruang rapat",
    pilihan: [
      "Memastikan daftar hadir peserta rapat tersedia",
      "Memeriksa ketersediaan ATK",
      "Membersihkan ruangan dan menata kursi",
      "Menyesuaikan suhu ruangan dengan standar kenyamanan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa peran utama operator dalam memastikan ketersediaan ATK di ruangan rapat",
    pilihan: [
      "Membeli ATK baru jika habis",
      "Menyusun daftar kebutuhan ATK berdasarkan jenis rapat",
      "Memeriksa jumlah ATK Sebelum rapat dan mengatur penggunaannya",
      "Menanyakan kepada peserta rapat tentang kebutuhan mereka",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana operator dapat memastikan suhu ruangan sesuai standar kenyamanan selama rapat",
    pilihan: [
      "Mengatur suhu AC pada tingkat maksimum",
      "Menggunakan kipas angin tambahan di sudut ruangan",
      "Menempatkan termometer di tengah ruangan",
      "Menyetel suhu AC pada kisaran 22 sampai 25 derajat celsius dan memeriksa sirkulasi udara",
    ],
    jawaban: 3
  },
  {
    soal: "Apa alat tambahan yang harus dipastikan tersedia oleh operator untuk rapat yang menggunakan presentasi visual",
    pilihan: [
      "Buku catatan tambahan untuk semua peserta",
      "Papan tulis manual dan spidol permanen",
      "Printer untuk mencetak bahan rapat",
      "Proyektor, kabel koneksi dan layar presentasi",
    ],
    jawaban: 3
  },
  {
    soal: "Apa tanggung jawab operator jika ada alat ruang rapat yang rusak sebelum digunakan",
    pilihan: [
      "Melaporkan masalah setelah rapat selesai",
      "Mengabaikan kerusakan jika tidak terlalu parah",
      "Mengganti atau memperbaiki alat Sebelum rapat dimulai",
      "Membuat catatan untuk diperbaiki di lain waktu",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah tindakan operator yang salah dalam mempersiapkan ruang rapat",
    pilihan: [
      "Meletakkan dokumen rapat di setiap tempat duduk peserta",
      "Memeriksa fungsi proyektor dan perangkat presentasi lainnya",
      "Memastikan kebersihan meja dan kursi",
      "Mengatur kursi tanpa mempertimbangkan jumlah peserta",
    ],
    jawaban: 3
  },
  {
    soal: "Apa langkah operator untuk memastikan kelancaran teknologi selama rapat",
    pilihan: [
      "Menggunakan perangkat cadangan yang sudah usang",
      "Menghubungi tim teknis jika terjadi kendala Sebelum rapat dimulai",
      "Membiarkan peserta rapat menyelesaikan masalah teknologi sendiri",
      "Mengabaikan koneksi internet jika tidak diminta",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator dapat memastikan kenyamanan peserta selama rapat berlangsung",
    pilihan: [
      "Dengan memantau suhu ruangan, kebersihan, ketersediaan ATK secara berkala",
      "Hanya dengan menyiapkan makanan ringan",
      "Mengandalkan penyesuaian diri peserta sendiri",
      "Mengatur lampu ruangan pada intensitas rendah",
    ],
    jawaban: 0
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan operator dalam inventarisasi barang baru yang diterima",
    pilihan: [
      "Memasukkan barang ke gudang tanpa pemeriksaan",
      "Mencatat barang dalam sistem inventaris dan memeriksa kesesuaiannya dengan dokumen pesanan",
      "Segera mendistribusikan barang kepada pengguna",
      "Melaporkan kedatangan barang kepada atasan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator menangani barang yang ditemukan dalam kondisi rusak saat diterima",
    pilihan: [
      "Segera membuang barang yang rusak untuk menghindari kerusakan tambahan",
      "Melaporkan kondisi barang kepada pemasok untuk klaim atau penggantian",
      "Mengabaikan kerusakan jika tidak signifikan",
      "Mendistribusikan barang rusak ke departemen terkait",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah yang harus diambil jika barang yang diterima tidak sesuai pesanan jenis atau jumlahnya",
    pilihan: [
      "Menggunakan barang tersebut untuk kebutuhan lain",
      "Mengembalikan barang kepada pemasok dan menunggu pesanan dikirim ulang kembali",
      "Membuat laporan ketidaksesuaian kepada bagian pengadaan untuk ditindaklanjuti",
      "Membiarkan barang disimpan di dalam gudang penyimpanan tanpa digunakan lebih lanjut",
    ],
    jawaban: 2
  },
  {
    soal: "Apa langkah penting yang dilakukan operator jika barang hilang dari inventaris",
    pilihan: [
      "Membeli barang baru tanpa menyelidiki penyebab kehilangan",
      "Menyalahkan bagian lain atas kehilangan tersebut",
      "Mengganti barang hilang menggunakan anggaran pribadi",
      "Membuat laporan kehilangan dan memulai investigasi internal",
    ],
    jawaban: 3
  },
  {
    soal: "Apa fungsi utama sistem inventarisasi dalam pengelolaan barang di kantor",
    pilihan: [
      "Mempercepat penghapusan barang yang tidak lagi dibutuhkan",
      "Memastikan distribusi barang ke pengguna dengan efisien",
      "Mempermudah pencatatan barang masuk keluar dan kondisinya",
      "Mengurangi biaya pembelian barang",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana operator memastikan barang yang rusak tetap tercatat dengan benar dalam sistem inventaris",
    pilihan: [
      "Menghapus barang rusak dari inventaris",
      "Membuat catatan khusus tentang kondisi barang dan tindak lanjut yang diambil",
      "Menukar barang rusak dengan barang serupa tanpa pencatatan",
      "Menggunakan barang rusak untuk kebutuhan internal atau untuk divisi lain",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator menangani barang yang usianya sudah habis atau tidak layak pakai lagi",
    pilihan: [
      "Menghapus barang dari inventaris tanpa dokumentasi untuk efisiensi tempat",
      "Menyimpan barang di gudang hingga diperlukan kembali",
      "Menjual barang tanpa persetujuan atasan",
      "Mengusulkan penghapusan melalui prosedur resmi perusahaan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa tujuan audit inventaris yang dilakukan secara berkala oleh operator",
    pilihan: [
      "Memastikan jumlah barang sesuai dengan catatan dan mendeteksi masalah seperti kehilangan atau kerusakan",
      "Mengurangi jumlah barang yang tercatat dalam inventaris",
      "Mempercepat proses penghapusan barang lama",
      "Meningkatkan nilai barang dalam sistem inventaris",
    ],
    jawaban: 0
  },
  {
    soal: "Apa fungsi utama arsip dinamis dalam satu organisasi",
    pilihan: [
      "Menyimpan dokumen untuk referensi jangka panjang",
      "Mendukung operasional sehari-hari organisasi",
      "Meningkatkan nilai historis organisasi",
      "Melindungi dokumen dari kerusakan fisik",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana operator memastikan arsip elektronik terlindungi dari kehilangan atau kerusakan",
    pilihan: [
      "Mencetak dokumen elektronik untuk disimpan sebagai cadangan fisik",
      "Menggunakan perangkat lunak arsip dengan fitur enkripsi dan cadangan otomatis",
      "Menyimpan dokumen elektronik di perangkat pribadi",
      "Mengarsipkan dokumen elektronik bersama dokumen fisik",
    ],
    jawaban: 1
  },
  {
    soal: "Apa perbedaan utama antara arsip vital dan arsip penting",
    pilihan: [
      "Arsip vital tidak dapat diganti sementara arsip penting dapat diganti meskipun memerlukan usaha besar",
      "Arsip vital digunakan dalam operasional sehari-hari sementara arsip penting digunakan untuk keperluan sejarah",
      "Arsip vital bersifat rahasia sementara arsip penting bersifat publik",
      "Arsip vital adalah arsip yang telah kadaluarsa sementara arsip penting masih berlaku",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang dimaksud dengan arsip statis",
    pilihan: [
      "Arsip yang sudah tidak digunakan dan dapat dimusnahkan",
      "Arsip yang hanya digunakan untuk operasional sementara",
      "Arsip yang disimpan untuk nilai sejarah atau referensi jangka panjang",
      "Arsip yang hanya tersedia dalam bentuk digital",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah langkah yang salah dalam proses pemusnahan arsip",
    pilihan: [
      "Membuat daftar arsip yang akan dimusnahkan",
      "Memusnahkan arsip yang memiliki nilai hukum tanpa persetujuan",
      "Melakukan pemusnahan sesuai prosedur hukum yang berlaku",
      "Menyimpan arsip cadangan sebelum dimusnahkan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan operator jika menemukan dokumen arsip vital dalam kondisi rusak",
    pilihan: [
      "Membuat salinan dokumen tersebut untuk mencegah kehilangan data",
      "Memindahkan dokumen ke gudang arsip cadangan",
      "Segera melaporkan kerusakan kepada atasan untuk tindakan perbaikan atau restorasi",
      "Membiarkan dokumen tetap kondisi rusak",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang menjadi prioritas utama dalam pengelolaan arsip rahasia",
    pilihan: [
      "Memastikan arsip rahasia mudah diakses oleh semua karyawan",
      "Membiarkan arsip rahasia tidak terkunci untuk mempermudah penggunaan",
      "Menggabungkan arsip rahasia dengan arsip umum",
      "Menyimpan arsip rahasia di tempat dengan akses terbatas",
    ],
    jawaban: 3
  },
  {
    soal: "Apa fungsi utama dari map snelhecter dalam pengelolaan dokumen",
    pilihan: [
      "Menyimpan dokumen dalam jumlah banyak dengan praktis",
      "Melindungi dokumen dari kerusakan fisik akibat air dan debu",
      "Mengelompokkan dokumen secara terorganisir dengan sistem penjepit",
      "Mempermudah distribusi dokumen ke berbagai departemen",
    ],
    jawaban: 2
  },
  {
    soal: "Apa kekurangan utama penggunaan map untuk pengelolaan dokumen",
    pilihan: [
      "Tidak dapat digunakan untuk dokumen dengan jumlah banyak",
      "Dokumen sulit diambil tanpa merusak penjepit",
      "Tidak kompatibel dengan dokumen berukuran kecil",
      "Penjepit logam mudah berkarat dalam kondisi lembab",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara operator menggunakan map untuk meningkatkan efisiensi dalam pengarsipan dokumen",
    pilihan: [
      "Menyusun dokumen berdasarkan tanggal dan mengatur kode warna pada map",
      "Menggunakan map snelhecter untuk menyimpan semua jenis dokumen",
      "Menghapus dokumen lama dari map untuk menambah dokumen baru",
      "Menyimpan dokumen dalam map snelhecter tanpa mencatat isinya",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana arsip digolongkan berdasarkan tingkat penggunaannya",
    pilihan: [
      "Arsip dinamis dan arsip statis",
      "Arsip aktif dan arsip inaktif",
      "Arsip vital dan arsip biasa",
      "Arsip rahasia dan arsip public",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana pengelolaan arsip berdasarkan tingkat kepentingannya",
    pilihan: [
      "Arsip aktif, inaktif dan vital",
      "Arsip rahasia, publik dan pribadi",
      "Arsip fisik, digital dan elektronik",
      "Arsip vital, penting, berguna dan biasa",
    ],
    jawaban: 3
  },
  {
    soal: "Apa penggolongan arsip berdasarkan bentuknya",
    pilihan: [
      "Arsip aktif dan inaktif",
      "Arsip digital dan arsip analog",
      "Arsip vital dan arsip statis",
      "Arsip fisik dan arsip elektronik",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Seorang tukang mebel kayu dapat membuat 12 meja dalam 6 hari. Jika ia ingin membuat 18 meja berapa lama waktu yang diperlukan",
    pilihan: [
      "8 hari",
      "9 hari",
      "10 hari",
      "12 hari",
    ],
    jawaban: 1
  },
  {
    soal: "Soal TIU: Hitunglah hasil dari perhitungan berikut 2345 x 112 + 789",
    pilihan: [
      "263.429",
      "262.429",
      "264.429",
      "265.429",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Jika X = 3 dan Y = 5 maka persamaan mana yang benar",
    pilihan: [
      "X + 2 = Y",
      "X - 2 = Y",
      "X + Y = 8",
      "X lebih dari Y",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: Sebuah perusahaan membeli 100 unit barang dengan harga per unit 150.000. Setelah beberapa waktu perusahaan tersebut menjual barang-barang tersebut dengan harga per unitnya 180.000. Selain itu ternyata perusahaan mengeluarkan biaya tambahan berupa biaya transportasi dan administrasi sebesar 3 juta untuk seluruh barang. Berapa persentase keuntungan yang diperoleh perusahaan setelah menjual seluruh barang tersebut",
    pilihan: [
      "12%",
      "15%",
      "18%",
      "0%",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Pembangunan sebuah rumah memerlukan waktu 1 bulan jika dilakukan oleh 20 orang. Jika ada penambahan pekerja sebanyak 10 orang maka berapa lama waktu pembangunan rumah tersebut",
    pilihan: [
      "20 hari",
      "30 hari",
      "40 hari",
      "50 hari",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Abolisi adalah lawan kata dari",
    pilihan: [
      "Pembentukan",
      "Penangkapan",
      "Pembusukan",
      "Perubahan",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Anomali itu lawan kata dari",
    pilihan: [
      "Aturan",
      "Normal",
      "Patuh",
      "Takut",
    ],
    jawaban: 1
  },
  {
    soal: "Soal TIU: Tendensi itu persamaan kata dari",
    pilihan: [
      "Denyut",
      "Lawan",
      "Utama",
      "Kecenderungan",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Supervisi itu persamaan kata dari",
    pilihan: [
      "Pengawasan",
      "Luar biasa",
      "Pegawai",
      "Bos",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Sporadis itu persamaan kata dari",
    pilihan: [
      "Rapat",
      "Subur",
      "Banyak",
      "Jarang",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Kompor : Api = ... : ...",
    pilihan: [
      "Palung : gula",
      "Pohon : buah",
      "Kipas angin : angin",
      "Jalan : macet",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: Suhu : Celsius = ... : ...",
    pilihan: [
      "Termometer : suhu",
      "Api : kebakaran",
      "Banjir : air",
      "Gempa : Richter",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Jika saya lolos seleksi tim nasional saya akan pindah klub. Saya tidak pindah klub maka Kesimpulan yang tepat adalah",
    pilihan: [
      "Saya lolos seleksi tim nasional",
      "Saya pindah klub",
      "Saya tidak lolos seleksi",
      "Saya tidak lolos seleksi tim nasional",
    ],
    jawaban: 3
  },
  {
    soal: "Soal TIU: Andi, Anton dan Intan adalah saudara. Usia Andi terpaut 1 bulan dengan Intan. Andi Memanggil Ayah Intan dengan sebutan Paman. Intan juga Memanggil Ayah Andi dengan sebutan Paman. Anton adalah saudara Andi dan lebih tua dari Andi tetapi tidak lebih tua dari Intan. Kesimpulannya adalah",
    pilihan: [
      "Andi lebih tua dari Intan",
      "Intan paling muda",
      "Anton dan Andi saudara kembar dan lebih muda dari Intan",
      "Intan seumuran dengan Andi",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: Berat badan Adinda lebih besar dari Dini Tetapi lebih rendah dari Ulfa. Berat badan Ulfa lebih besar dari Pandu tetapi tidak lebih besar dari Dewi. Berat badan Pandu lebih besar dari Adinda. Kesimpulannya urutan berat badan dari yang terbesar sampai yang terkecil adalah",
    pilihan: [
      "Dewi, Ulfa, Pandu, Adinda, Dini",
      "Ulfa, Pandu, Dewi, Dini, Adinda",
      "Dini, Adinda, Pandu, Dewi, Ulfa",
      "Adinda, Dini, Dewi, Pandu, Ulfa",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Suatu kelompok belajar mempunyai anggota 7 orang. Jika setiap belajar semua anggota kelompok duduk dengan posisi melingkar banyaknya cara untuk mengatur posisi duduk anggota kelompok tersebut adalah",
    pilihan: [
      "720",
      "10440",
      "2520",
      "5040",
    ],
    jawaban: 0
  },
  {
    soal: "Soal TIU: Suatu Rapat dihadiri oleh lima orang peserta yang terdiri dari ketua, wakil, sekretaris, Anggota 1 dan anggota 2. Susunan posisi duduk pada saat Rapat adalah mengelilingi Meja Bundar. Jika ketua dan wakil harus saling berdekatan maka banyaknya susunan yang mungkin adalah",
    pilihan: [
      "8 cara",
      "12 cara",
      "24 cara",
      "48 cara",
    ],
    jawaban: 1
  },
  {
    soal: "Soal TIU: 2, 4, 7, 11, 16, ..., ...",
    pilihan: [
      "17, 18",
      "20, 22",
      "22, 29",
      "24, 32",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: 1, 3, 7, 13, 21, ...",
    pilihan: [
      "25",
      "28",
      "31",
      "35",
    ],
    jawaban: 2
  },
  {
    soal: "Soal TIU: A, C, C, E, ..., ..., G, I, I, K",
    pilihan: [
      "E dan G",
      "G dan H",
      "H dan I",
      "G dan J",
    ],
    jawaban: 0
  },
  {
    soal: "Apa resiko jika operator tidak memeriksa barang secara menyeluruh saat diterima",
    pilihan: [
      "Terjadinya penyimpangan dalam anggaran",
      "Pengadaan barang menjadi lebih cepat",
      "Vendor mendapatkan keuntungan lebih besar",
      "Barang bisa langsung digunakan tanpa kendala",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang menjadi indikator utama bahwa suatu sarana atau prasarana layak digunakan setelah diterima",
    pilihan: [
      "Tidak ada cacat fisik yang terlihat",
      "Sesuai dengan dokumen pengadaan dan telah diuji coba",
      "Memiliki harga yang sesuai dengan anggaran",
      "Mendapat rekomendasi dari vendor",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tindakan yang harus diambil jika vendor mengirimkan barang yang tidak sesuai spesifikasi",
    pilihan: [
      "Langsung mengembalikan ke vendor",
      "Mencatat dalam laporan penerimaan dan mengajukan klaim",
      "Menggunakan barang tersebut selama masih dapat digunakan",
      "Menghubungi vendor untuk negosiasi harga",
    ],
    jawaban: 1
  },
  {
    soal: "Siapa yang memiliki kewenangan untuk menolak barang jika tidak sesuai spesifikasi",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian pengadaan",
      "Tim audit",
      "Kepala Dinas",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa pencatatan dalam penerimaan barang sangat penting",
    pilihan: [
      "Untuk memudahkan pencatatan keuangan",
      "Untuk menghindari sengketa dengan vendor",
      "Untuk memastikan akuntabilitas dan transparansi",
      "Agar barang dapat langsung digunakan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan utama pencatatan sarana dan prasarana dalam buku kendali",
    pilihan: [
      "Mengurangi biaya pengadaan barang baru",
      "Memastikan efisiensi dalam penggunaan barang",
      "Mencegah kehilangan aset kantor",
      "Memudahkan pencarian dan pengelolaan aset",
    ],
    jawaban: 3
  },
  {
    soal: "Informasi apa yang paling penting dicantumkan dalam buku kendali sarana dan prasarana",
    pilihan: [
      "Harga barang dan nilai depresiasi",
      "Nomor identifikasi barang, lokasi dan kondisi barang",
      "Nama vendor dan tanggal pembelian",
      "Nama pengguna barang dan divisi terkait",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan jika terdapat kesalahan pencatatan dalam buku kendali",
    pilihan: [
      "Menghapus data yang salah tanpa mencatat perubahan",
      "Membuat catatan koreksi dan memberikan tanda revisi",
      "Membiarkan data lama tetap ada dan menambahkan catatan baru",
      "Mengganti seluruh buku kendali dengan yang baru",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara memastikan bahwa pencatatan dalam buku kendali tetap akurat dan terkini",
    pilihan: [
      "Melakukan pencatatan ulang setiap bulan",
      "Memverifikasi data secara berkala dan memperbarui informasi jika ada perubahan",
      "Menunggu laporan dari pengguna barang sebelum memperbarui data",
      "Menyimpan dokumen pencatatan tanpa perubahan kecuali ada perintah dari atasan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika pencatatan dalam buku kendali tidak dilakukan dengan baik",
    pilihan: [
      "Penurunan kualitas layanan operasional",
      "Kesulitan dalam melacak aset kantor",
      "Pengurangan anggaran untuk pengadaan barang baru",
      "Meningkatnya biaya operasional",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan jika barang yang didistribusikan mengalami kerusakan sebelum sampai ke unit penerima",
    pilihan: [
      "Mengganti barang dengan stok cadangan jika tersedia",
      "Tetap mengirim barang dan mencatat dalam berita acara",
      "Meminta unit penerima untuk melakukan perbaikan",
      "Mengabaikan kerusakan jika tidak signifikan",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab atas pencatatan barang setelah distribusi",
    pilihan: [
      "Auditor eksternal",
      "Kepala bagian keuangan",
      "Pegawai yang menerima barang",
      "Operator layanan operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara menghindari keterlambatan dalam distribusi sarana dan prasarana",
    pilihan: [
      "Merencanakan distribusi berdasarkan prioritas kebutuhan",
      "Mengirim semua barang sekaligus tanpa mempertimbangkan kebutuhan",
      "Mengurangi jumlah unit kerja yang menerima barang",
      "Menggunakan sistem manual untuk menghindari kesalahan teknis",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator utama bahwa distribusi sarana dan prasarana berjalan dengan baik",
    pilihan: [
      "Semua unit menerima barang sesuai permintaan dan tepat waktu",
      "Semua barang diterima meskipun tidak sesuai spesifikasi",
      "Barang yang rusak tetap digunakan",
      "Laporan distribusi tidak diperlukan karena semua berjalan lancar",
    ],
    jawaban: 0
  },
  {
    soal: "Mengapa distribusi sarana dan prasarana harus dilakukan secara transparan",
    pilihan: [
      "Agar barang yang rusak tetap digunakan",
      "Semua barang diterima meskipun tidak sesuai spesifikasi",
      "Transparansi distribusi memastikan tidak ada penyalahgunaan aset",
      "Laporan distribusi tidak diperlukan karena semua berjalan lancar",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tujuan utama dari proses inventarisasi sarana dan prasarana kantor",
    pilihan: [
      "Memastikan barang tetap dalam kondisi baik",
      "Mempermudah perencanaan anggaran pengadaan",
      "Mencegah kehilangan dan penyalahgunaan aset",
      "Memudahkan pegawai dalam penggunaan barang",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen apa yang digunakan untuk mencatat hasil inventarisasi barang di kantor pemerintahan",
    pilihan: [
      "Surat perintah kerja",
      "Laporan audit internal",
      "Kartu inventaris barang",
      "Berita acara serah terima",
    ],
    jawaban: 2
  },
  {
    soal: "Siapa yang bertanggung jawab dalam melakukan inventarisasi barang kantor",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian keuangan",
      "Pegawai yang menggunakan barang",
      "Vendor penyedia barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa data inventaris tetap akurat dan terkini",
    pilihan: [
      "Memeriksa daftar inventaris setiap bulan",
      "Melakukan audit fisik berkala dan mencocokkan dengan dokumen",
      "Mengandalkan laporan pengguna barang",
      "Menunggu laporan dari bagian keuangan sebelum melakukan pembaruan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika inventaris barang tidak dikelola dengan baik",
    pilihan: [
      "Keterlambatan dalam pengadaan barang baru",
      "Kesulitan dalam audit dan pertanggungjawaban aset",
      "Penurunan efisiensi penggunaan anggaran",
      "Berkurangnya jumlah barang di gudang",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara menghindari penggunaan sarana dan prasarana secara berlebihan",
    pilihan: [
      "Menerapkan sistem peminjaman dan pencatatan yang ketat",
      "Mengurangi jumlah barang yang tersedia",
      "Membatasi akses pegawai terhadap semua barang",
      "Menyediakan barang dalam jumlah sedikit agar tidak sering digunakan",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab dalam menentukan prioritas penggunaan sarana dan prasarana kantor",
    pilihan: [
      "Operator layanan operasional",
      "Pegawai yang membutuhkan barang",
      "Vendor penyedia barang",
      "Kepala bagian umum dan logistik",
    ],
    jawaban: 3
  },
  {
    soal: "Apa risiko utama jika tidak ada pengaturan penggunaan sarana dan prasarana yang jelas",
    pilihan: [
      "Terjadinya kekurangan barang akibat penggunaan yang tidak terkontrol",
      "Pegawai akan lebih mudah mengakses barang tanpa hambatan",
      "Laporan keuangan akan lebih mudah dibuat",
      "Operator melakukan pencatatan inventaris secara berkala",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan sarana dan prasarana tetap dalam kondisi baik setelah digunakan",
    pilihan: [
      "Mewajibkan pegawai mengembalikan barang dalam kondisi baik",
      "Mengadakan inspeksi berkala terhadap barang yang digunakan",
      "Mencatat kondisi barang sebelum dan sesudah penggunaan",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara mengatur jadwal penggunaan sarana dan prasarana yang terbatas",
    pilihan: [
      "Menggunakan sistem booking atau pemesanan",
      "Menentukan waktu penggunaan berdasarkan urutan kedatangan",
      "Memberikan akses hanya kepada pegawai senior",
      "Mengurangi jumlah barang agar lebih eksklusif",
    ],
    jawaban: 0
  },
  {
    soal: "Mengapa penting untuk mendokumentasikan setiap hasil pengecekan kondisi barang",
    pilihan: [
      "Untuk memudahkan proses audit dan pengelolaan aset",
      "Agar barang bisa segera diganti tanpa konfirmasi",
      "Supaya pegawai tidak bisa meminjam barang sesuka hati",
      "Untuk meningkatkan nilai jual barang bekas",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara mengetahui apakah barang masih layak digunakan",
    pilihan: [
      "Melakukan pengujian langsung terhadap fungsi barang",
      "Melihat umur barang tanpa melakukan pemeriksaan fisik",
      "Bertanya kepada pegawai yang menggunakannya",
      "Mengandalkan laporan keuangan sebagai acuan utama",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator utama bahwa pengecekan kondisi sarana dan prasarana berjalan efektif",
    pilihan: [
      "Semua barang tercatat dalam laporan pemeriksaan",
      "Tidak ada barang yang hilang atau rusak secara tiba-tiba",
      "Barang yang rusak segera diperbaiki atau diganti",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Apa manfaat utama dari pengecekan berkala terhadap kondisi sarana dan prasarana kantor",
    pilihan: [
      "Mengurangi anggaran pengadaan barang baru",
      "Memastikan barang hanya digunakan oleh pegawai tertentu",
      "Mendeteksi kerusakan sejak dini dan memastikan barang berfungsi optimal",
      "Mempermudah proses penghapusan aset tanpa pemeriksaan tambahan",
    ],
    jawaban: 2
  },
  {
    soal: "Siapa yang bertanggung jawab dalam Menindaklanjuti hasil pemeriksaan kondisi barang yang mengalami kerusakan",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian umum dan logistik",
      "Pegawai yang menggunakan barang",
      "Vendor penyedia barang",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan utama pemeliharaan sarana dan prasarana kantor",
    pilihan: [
      "Mengurangi jumlah barang yang digunakan pegawai",
      "Memastikan barang tetap dalam kondisi baik dan dapat digunakan optimal",
      "Mempermudah penghapusan barang dalam daftar inventaris",
      "Menghindari pengadaan barang baru dalam jangka panjang",
    ],
    jawaban: 1
  },
  {
    soal: "Dokumen apa yang harus dibuat untuk mencatat jadwal pemeliharaan rutin sarana dan prasarana",
    pilihan: [
      "Laporan keuangan",
      "Jadwal pemeliharaan dan perawatan barang",
      "Berita acara serah terima",
      "Kartu inventaris barang",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara terbaik untuk mencegah kerusakan dini pada sarana dan prasarana kantor",
    pilihan: [
      "Menggunakan barang dengan lebih hati-hati dan sesuai prosedur",
      "Menyimpan barang di gudang untuk mengurangi pemakaian",
      "Hanya mengizinkan pegawai tertentu untuk menggunakan barang",
      "Mengurangi frekuensi penggunaan barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tindakan pertama yang harus dilakukan jika sarana dan prasarana dalam kondisi kurang baik",
    pilihan: [
      "Langsung menghapus barang dari daftar inventaris",
      "Melaporkan kondisi barang dan mengusulkan perbaikan",
      "Mengganti barang dengan yang baru tanpa pemeriksaan lebih lanjut",
      "Membiarkan barang tetap digunakan hingga rusak total",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara memastikan bahwa sarana dan prasarana kantor mendapatkan pemeliharaan yang optimal",
    pilihan: [
      "Membuat jadwal perawatan rutin dan melakukan pengecekan berkala",
      "Menunggu laporan dari pegawai sebelum melakukan pemeliharaan",
      "Mengurangi penggunaan barang agar tidak cepat rusak",
      "Memprioritaskan barang yang lebih mahal untuk dirawat terlebih dahulu",
    ],
    jawaban: 0
  },
  {
    soal: "Apa kendala terbesar dalam sistem peminjaman manual dibandingkan dengan sistem digital",
    pilihan: [
      "Kesulitan dalam mengakses data peminjaman secara cepat dan akurat",
      "Terlalu banyak peminjam yang mengajukan permohonan secara bersamaan",
      "Operator harus mencatat semua peminjaman secara tertulis setiap hari",
      "Proses peminjaman menjadi lebih formal dan birokratis",
    ],
    jawaban: 0
  },
  {
    soal: "Mengapa batas waktu peminjaman penting dalam manajemen fasilitas",
    pilihan: [
      "Agar fasilitas dapat digunakan secara merata oleh seluruh pengguna",
      "Untuk memastikan bahwa semua fasilitas selalu dalam kondisi baru",
      "Karena batas waktu membuat peminjam lebih berhati-hati dalam penggunaan fasilitas",
      "Supaya operator layanan operasional memiliki kendali penuh atas peminjaman",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab dalam menangani fasilitas yang rusak akibat kelalaian peminjaman",
    pilihan: [
      "Operator layanan operasional wajib mengganti fasilitas tanpa pengecualian",
      "Peminjam harus bertanggung jawab sesuai dengan kebijakan yang berlaku",
      "Perusahaan wajib mengganti fasilitas tanpa membebankan peminjam",
      "Vendor eksternal bertanggung jawab atas semua kerusakan fasilitas",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara terbaik untuk mengatasi ketidakseimbangan antara permintaan dan ketersediaan fasilitas",
    pilihan: [
      "Menerapkan sistem siapa cepat dia dapat untuk semua peminjaman",
      "Menyusun jadwal peminjaman dan memprioritaskan berdasarkan urgensi",
      "Membatasi jumlah fasilitas yang bisa dipinjam oleh masing-masing departemen",
      "Menyediakan fasilitas cadangan tanpa regulasi tambahan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa risiko utama jika prosedur peminjaman tidak dijalankan dengan baik",
    pilihan: [
      "Kehilangan fasilitas, penyalahgunaan dan kesulitan akuntabilitas",
      "Pengguna menjadi lebih bebas dalam menggunakan fasilitas",
      "Perusahaan harus mengganti fasilitas lebih sering dari biasanya",
      "Operator layanan operasional harus bekerja lebih keras untuk mendata peminjaman",
    ],
    jawaban: 0
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan oleh operator layanan operasional saat menerima sarana dan prasarana di kantor pemerintah",
    pilihan: [
      "Menghitung jumlah barang yang diterima",
      "Membandingkan spesifikasi barang dengan dokumen pengadaan",
      "Memeriksa kondisi fisik barang",
      "Menandatangani berita acara penerimaan barang",
    ],
    jawaban: 1
  },
  {
    soal: "Dokumen apa yang menjadi dasar dalam memeriksa kesesuaian sarana dan prasarana yang diterima",
    pilihan: [
      "Surat Perintah kerja",
      "Laporan keuangan",
      "Berita acara serah terima",
      "Surat jalan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tindakan yang harus dilakukan jika ditemukan ketidaksesuaian antara barang yang diterima dan dokumen pengadaan",
    pilihan: [
      "Langsung mengembalikan barang ke vendor",
      "Mencatat perbedaan dalam berita acara pemeriksaan",
      "Menggunakan barang yang tersedia dan menyesuaikan dokumen",
      "Menyetujui penerimaan untuk menghindari keterlambat",
    ],
    jawaban: 1
  },
  {
    soal: "Siapa pihak yang bertanggung jawab dalam melakukan pemeriksaan akhir sebelum barang digunakan",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian pengadaan",
      "Tim audit internal",
      "Kepala Dinas",
    ],
    jawaban: 0
  },
  {
    soal: "Mengapa penting bagi operator untuk memahami spesifikasi teknis barang yang diterima",
    pilihan: [
      "Agar dapat menggunakan dengan efisien",
      "Untuk memastikan barang sesuai dengan kontrak pengadaan",
      "Supaya dapat menyusun laporan keuangan",
      "Untuk memudahkan pencatatan aset tetap",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan jika buku kendali mengalami kehilangan atau kerusakan",
    pilihan: [
      "Mengganti buku dengan yang baru dan mencatat ulang seluruh aset",
      "Menggunakan dokumen cadangan atau salinan digital",
      "Menghentikan pencatatan hingga ada perintah atasan",
      "Mencari buku kendali yang hilang sebelum melakukan tindakan lain",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa penting untuk mencatat kondisi barang dalam buku kendali",
    pilihan: [
      "Untuk menghindari pembelian barang yang tidak perlu",
      "Untuk membantu proses pemeliharaan dan penggantian barang",
      "Agar pengguna tahu cara menggunakan barang dengan benar",
      "Untuk mencegah penyalahgunaan barang",
    ],
    jawaban: 1
  },
  {
    soal: "Apa keuntungan penggunaan sistem digital dalam pencatatan buku kendali",
    pilihan: [
      "Mempermudah pencarian data secara cepat",
      "Mengurangi jumlah barang yang harus dicatat",
      "Menghilangkan kebutuhan untuk melakukan verifikasi",
      "Mengurangi tanggung jawab operator layanan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator utama bahwa sistem pencatatan buku kendali berjalan dengan baik",
    pilihan: [
      "Tidak ada aset yang hilang atau tidak tercatat",
      "Semua barang memiliki nilai jual tinggi",
      "Buku kendali selalu diperbarui setiap hari",
      "Tidak ada barang yang perlu perawatan",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang harus diberikan akses terhadap buku kendali",
    pilihan: [
      "Hanya operator layanan operasional",
      "Semua pegawai kantor pemerintahan",
      "Kepala bagian umum dan operator layanan operasional",
      "Vendor penyedia barang",
    ],
    jawaban: 2
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan oleh operator layanan operasional sebelum mendistribusikan sarana dan prasarana ke Unit terkait",
    pilihan: [
      "Menyiapkan dokumen distribusi",
      "Memeriksa kondisi barang sebelum didistribusikan",
      "Menghubungi vendor untuk memastikan spesifikasi barang",
      "Melakukan pencatatan dalam laporan pengadaan",
    ],
    jawaban: 1
  },
  {
    soal: "Dokumen apa yang harus dibuat saat melakukan distribusi sarana dan prasarana ke Unit terkait",
    pilihan: [
      "Surat Perintah kerja",
      "Berita acara serah terima",
      "Faktur pembelian",
      "Surat keputusan pengadaan",
    ],
    jawaban: 1
  },
  {
    soal: "Apa tujuan utama dari pendistribusian sarana dan prasarana ke unit kerja",
    pilihan: [
      "Mengurangi jumlah aset kantor yang tidak digunakan",
      "Memastikan setiap unit memiliki alat yang diperlukan untuk operasional",
      "Memudahkan pengadaan barang baru",
      "Menjaga hubungan baik dengan vendor",
    ],
    jawaban: 1
  },
  {
    soal: "Siapa yang berwenang menentukan prioritas dalam distribusi sarana dan prasarana kantor",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian umum dan logistik",
      "Vendor penyedia barang",
      "Pegawai yang membutuhkan barang",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara memastikan bahwa distribusi sarana dan prasarana dilakukan secara efisien",
    pilihan: [
      "Menggunakan sistem pencatatan yang akurat dan terdokumentasi",
      "Mengandalkan permintaan dari pegawai yang membutuhkan",
      "Mengurangi jumlah barang yang didistribusikan untuk menghemat anggaran",
      "Memberikan barang secara langsung Tanpa dokumen pendukung",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab menyusun laporan inventarisasi tahunan",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian Keuangan",
      "Tim audit internal",
      "Vendor penyedia barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara menghindari selisih jumlah barang dalam inventaris",
    pilihan: [
      "Melakukan pengecekan berkala dan pencocokan dengan data",
      "Laporan keuangan sebagai acuan utama",
      "Mengurangi jumlah barang yang didata",
      "Menunggu laporan dari pegawai yang menggunakan barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa langkah yang harus dilakukan jika ditemukan barang yang tidak tercatat dalam inventaris",
    pilihan: [
      "Memberikan barang tersebut ke pegawai yang membutuhkan",
      "Menghapus barang serupa untuk menyesuaikan data",
      "Mengabaikan barang tersebut jika tidak memiliki nilai tinggi",
      "Menambahkannya ke daftar inventaris setelah verifikasi",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara memastikan barang inventaris digunakan sesuai peruntukannya",
    pilihan: [
      "Melakukan monitoring penggunaan barang secara kala",
      "Membatasi jumlah barang yang diberikan ke unit kerja",
      "Menggunakan sistem berbasis kepercayaan",
      "Menunggu laporan pengguna sebelum melakukan pengecekan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa manfaat utama dari sistem inventaris berbasis digital",
    pilihan: [
      "Memudahkan pencatatan dan pencarian data barang",
      "Mengurangi jumlah barang yang perlu didata",
      "Menghilangkan kebutuh audit fisik",
      "Memastikan Tidak ada barang yang rusak",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari pengaturan penggunaan sarana dan prasarana kantor",
    pilihan: [
      "Mengurangi biaya operasional kantor",
      "Meningkatkan Efisiensi dan efektivitas kerja",
      "Mengurangi jumlah barang yang tersedia",
      "Menghindari pembelian barang baru",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah pertama yang harus dilakukan sebelum memberikan sarana dan prasarana kepada pegawai",
    pilihan: [
      "Memastikan barang tersedia dalam inventaris",
      "Menghubungi vendor Untuk pemesanan ulang",
      "Menunggu persetujuan dari semua pegawai",
      "Menghapus barang dari daftar inventaris",
    ],
    jawaban: 0
  },
  {
    soal: "Dokumen apa yang diperlukan dalam proses peminjaman sarana dan prasarana kantor",
    pilihan: [
      "Surat Perintah kerja",
      "Berita acara serah terima",
      "Kartu inventaris barang",
      "Laporan keuangan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara memastikan bahwa sarana dan prasarana digunakan sesuai kebutuhan",
    pilihan: [
      "Menyusun kebijakan penggunaan barang yang jelas",
      "Menyediakan barang dalam jumlah berlebih untuk menghindari kekurangan",
      "Mengandalkan laporan keuangan untuk memantau penggunaan",
      "Mengurangi jumlah barang yang disediakan agar penggunaannya lebih selektif",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan jika terjadi penyalahgunaan sarana dan prasarana kantor",
    pilihan: [
      "Membiarkan pegawai bertanggung jawab sendiri",
      "Menghapus barang dari daftar inventaris",
      "Melaporkan kejadian tersebut kepada atasan dan mencatatnya",
      "Mengganti barang dengan yang baru tanpa investigasi",
    ],
    jawaban: 2
  },
  {
    soal: "Siapa yang bertanggung jawab atas pemeriksaan kondisi sarana dan prasarana secara rutin",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian Keuangan",
      "Pegawai pengguna barang",
      "Vendor penyedia barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara mendeteksi barang yang perlu segera diganti",
    pilihan: [
      "Menghitung umur barang tanpa melakukan pemeriksaan langsung",
      "Mengandalkan laporan dari pegawai pengguna barang",
      "Menunggu barang mengalami kerusakan total sebelum diganti",
      "Melakukan inspeksi visual dan uji coba fungsi barang",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika ditemukan barang yang tidak sesuai dengan daftar inventaris",
    pilihan: [
      "Menambahkannya ke daftar inventaris setelah verifikasi",
      "Menghapus barang dari daftar inventaris tanpa pemeriksaan",
      "Memindahkan barang ke gudang tanpa pencatatan",
      "Mengabaikan barang tersebut jika masih bisa digunakan",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara menghindari kehilangan barang selama proses pengecekan kondisi",
    pilihan: [
      "Melakukan pengecekan dengan sistem pencatatan yang jelas",
      "Menyimpan barang dalam ruangan terkunci saat pengecekan",
      "Mengurangi frekuensi pengecekan untuk mengurangi resiko kehilangan",
      "Memastikan hanya satu Orang yang bertanggung jawab atas pengecekan",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan jika kondisi barang sudah tidak layak pakai",
    pilihan: [
      "Mengusulkan penghapusan barang dari daftar inventaris",
      "Tetap menggunakan barang Selama masih bisa berfungsi",
      "Memperbaiki barang tanpa laporan resmi",
      "Memberikan barang kepada pegawai tanpa pencatatan",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa semua pegawai ikut menjaga sarana dan prasarana kantor",
    pilihan: [
      "Menerapkan kebijakan penggunaan barang dengan tanggung jawab",
      "Menugaskan satu pegawai khusus untuk mengawasi barang",
      "Mengurangi jumlah barang yang tersedia",
      "Membatasi akses pegawai terhadap barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa resiko jika pemeliharaan sarana dan prasarana tidak dilakukan secara rutin",
    pilihan: [
      "Barang tetap dapat digunakan tanpa masalah",
      "Biaya operasional kantor akan berkurang",
      "Barang lebih cepat rusak dan biaya penggantian meningkat",
      "Pegawai lebih berhati-hati dalam menggunakan barang",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana cara mengevaluasi efektivitas program pemeliharaan sarana dan prasarana kantor",
    pilihan: [
      "Memeriksa jumlah barang yang telah diperbaiki setiap bulan",
      "Menanyakan kepada vendor tentang kondisi barang",
      "Membandingkan data sebelum dan sesudah pemeliharaan serta melakukan survei kepuasan pengguna",
      "Mengurangi jumlah barang yang dirawat untuk efisiensi anggaran",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang harus dilakukan jika pemeliharaan barang membutuhkan waktu lama",
    pilihan: [
      "Menunda penggunaan barang hingga perbaikan selesai",
      "Mengganti barang dengan yang baru tanpa mempertimbangkan anggaran",
      "Menyediakan barang cadangan untuk sementara waktu",
      "Mengalihkan barang dari unit lain tanpa pemberitahuan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa indikator utama bahwa pemeliharaan sarana dan prasarana berjalan dengan baik",
    pilihan: [
      "Barang tidak pernah mengalami kerusakan",
      "Barang selalu diganti dengan yang baru setiap tahun",
      "Tidak ada keluhan dari pegawai mengenai sarana dan prasarana",
      "Barang tetap berfungsi dengan baik tidak sering rusak dan dapat digunakan secara optimal",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang operator layanan operasional menerima permintaan peminjaman ruang rapat dari salah satu departemen. Langkah pertama yang harus dilakukan oleh operator tersebut adalah",
    pilihan: [
      "Langsung memberikan persetujuan kepada pemohon",
      "Mengecek ketersediaan ruangan rapat dalam sistem pemesanan internal",
      "Menghubungi manajer operasional untuk mendapatkan izin",
      "Menanyakan alasan peminjaman kepada pemohon sebelum melakukan pengecekan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam prosedur peminjaman sarana dan prasarana, Siapa yang bertanggung jawab atas verifikasi kelayakan sarana sebelum dipinjamkan",
    pilihan: [
      "Peminjam sendiri",
      "Operator layanan operasional",
      "Kepala departemen pemohon",
      "Tim keuangan perusahaan",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah dari Berikut ini yang bukan merupakan dokumen standar dalam proses peminjaman sarana dan prasarana",
    pilihan: [
      "Formulir permohonan peminjaman",
      "Surat persetujuan dari pihak terkait",
      "Laporan kerusakan sebelumnya",
      "Rencana anggaran departemen pemohon",
    ],
    jawaban: 3
  },
  {
    soal: "Jika terjadi kerusakan pada sarana yang dipinjamkan langkah pertama yang harus dilakukan oleh operator layanan operasional adalah",
    pilihan: [
      "Segera mengganti barang tersebut dengan yang baru",
      "Menghubungi peminjam untuk meminta klarifikasi",
      "Melaporkan kerusakan kepada tim pemeliharaan atau teknisi",
      "Menahan jaminan yang diberikan oleh peminjam",
    ],
    jawaban: 2
  },
  {
    soal: "Faktor utama yang perlu dipertimbangkan dalam menyusun prosedur peminjaman sarana dan prasarana adalah",
    pilihan: [
      "Tingkat kebutuhan pengguna terhadap fasilitas",
      "Biaya pengadaan fasilitas baru",
      "Jumlah staf operator layanan operasional",
      "Kebijakan perusahaan dalam penggunaan fasilitas",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah dari Berikut ini yang bukan merupakan sarana dan prasarana di kantor pemerintah",
    pilihan: [
      "Komputer dan printer",
      "Meja dan kursi kerja",
      "Kendaraan dinas",
      "Dana operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika barang yang diterima mengalami kerusakan ringan",
    pilihan: [
      "Membuangnya dan meminta penggantian",
      "Menggunakan barang tersebut selama masih berfungsi",
      "Mencatat kondisi barang dalam berita acara pemeriksaan",
      "Memperbaikinya sendiri tanpa melaporkan",
    ],
    jawaban: 2
  },
  {
    soal: "Siapa yang bertanggung jawab dalam penyimpanan dan distribusi sarana dan prasarana setelah diterima",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian keuangan",
      "Sekretaris dinas",
      "Bagian umum dan logistik",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara memastikan bahwa barang yang diterima benar-benar sesuai dengan spesifikasi yang telah disepakati",
    pilihan: [
      "Memeriksa hanya dari segi jumlahnya",
      "Mengandalkan laporan vendor",
      "Melakukan pengecekan fisik dan dokumen pengadaan",
      "Menunggu laporan penggunaan dari pegawai yang menerima barang",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen apa yang harus ditandatangani setelah barang diterima dan diperiksa",
    pilihan: [
      "Faktur pajak",
      "Surat Perintah kerja",
      "Berita acara serah terima",
      "Laporan audit internal",
    ],
    jawaban: 2
  },
  {
    soal: "Manfaat utama buku kendali dibandingkan pencatatan manual tanpa struktur",
    pilihan: [
      "Memudahkan audit dan pertanggungjawaban aset",
      "Mengurangi jumlah barang yang harus dicatat",
      "Mempermudah pengguna dalam meminjam barang",
      "Mengurangi anggaran operasional kantor",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab untuk memastikan pencatatan sarana dan prasarana tetap terkelola dengan baik",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian keuangan",
      "Vendor penyedia barang",
      "Sekretaris dinas",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara menghindari duplikasi pencatatan dalam buku kendali",
    pilihan: [
      "Memeriksa daftar pencatatan sebelum menambahkan entri baru",
      "Menggunakan format dokumen yang berbeda untuk setiap kategori barang",
      "Membuat buku kendali terpisah untuk setiap ruangan",
      "Menghapus data lama sebelum menambahkan yang baru",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan jika ditemukan barang yang tidak tercatat dalam buku kendali",
    pilihan: [
      "Menambahkannya ke dalam daftar tanpa pemeriksaan lebih lanjut",
      "Melakukan verifikasi dan mencatat barang dalam daftar inventaris",
      "Mengabaikannya jika barang tersebut sudah lama ada",
      "Memindahkan barang ke gudang tanpa pencatatan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana buku kendali membantu dalam efisiensi operasional kantor",
    pilihan: [
      "Mengurangi biaya pemeliharaan barang",
      "Mempermudah pemantauan pemeliharaan dan distribusi aset",
      "Menyediakan informasi untuk audit pajak",
      "Memastikan barang tidak gunakan oleh pihak eksternal",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan jika unit penerima menolak barang yang didistribusikan",
    pilihan: [
      "Mengembalikan barang ke gudang dan mencatat dalam laporan",
      "Memaksa unit untuk menerima barang sesuai prosedur",
      "Mendistribusikan barang ke Unit lain tanpa konfirmasi",
      "Menghapus barang dari daftar inventaris",
    ],
    jawaban: 0
  },
  {
    soal: "Apa risiko utama jika distribusi sarana dan prasarana tidak terdokumentasi dengan baik",
    pilihan: [
      "Hilangnya barang tanpa pertanggungjawaban",
      "Meningkatnya efisiensi operasional",
      "Terjadinya pengurangan anggaran untuk pengadaan berikutnya",
      "Memudahkan proses audit internal",
    ],
    jawaban: 0
  },
  {
    soal: "Mengapa perlu dilakukan pencocokan antara barang yang didistribusikan dengan permintaan unit kerja",
    pilihan: [
      "Supaya unit kerja dapat menerima lebih banyak barang",
      "Agar proses distribusi lebih cepat",
      "Untuk memudahkan proses pembayaran kepada vendor",
      "Untuk menghindari pengiriman barang yang tidak dibutuhkan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika terdapat selisih jumlah barang antara dokumen distribusi dan kondisi nyata",
    pilihan: [
      "Melakukan investigasi dan mencatat dalam laporan",
      "Mengubah dokumen agar sesuai dengan jumlah barang yang ada",
      "Mengabaikan selisih tersebut jika tidak terlalu besar",
      "Mengirim barang tambahan tanpa konfirmasi",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa barang yang didistribusikan itu digunakan dengan optimal oleh unit penerima",
    pilihan: [
      "Melakukan Pemantauan dan evaluasi penggunaan barang",
      "Memberikan instruksi penggunaan barang sebelum distribusi",
      "Mengurangi jumlah barang yang dikirim ke unit kerja",
      "Menghapus barang dari daftar inventaris setelah didistribusikan",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana prosedur pencatatan barang yang baru diterima dalam inventaris",
    pilihan: [
      "Memasukkan barang ke dalam daftar inventaris setelah digunakan",
      "Menunggu laporan pegawai sebelum mencatat barang",
      "Mencatat barang dalam kartu inventaris barang sebelum didistribusikan",
      "Menunggu proses audit sebelum pencatatan",
    ],
    jawaban: 2
  },
  {
    soal: "Jika ditemukan barang yang rusak saat inventarisasi Apa yang harus dilakukan",
    pilihan: [
      "Membuangnya langsung tanpa pencatatan",
      "Memindahkannya ke gudang tanpa melaporkan",
      "Mencatat kondisi barang dan melaporkannya untuk perbaikan atau penghapusan",
      "Menghapus barang dari daftar inventaris tanpa konfirmasi",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang menjadi dasar penghapusan barang dari daftar inventaris",
    pilihan: [
      "Barang sudah tidak digunakan dalam 5 tahun terakhir",
      "Barang telah rusak berat dan tidak bisa diperbaiki",
      "Digantikan dengan model yang lebih baru",
      "Barang dipindahkan ke unit lain",
    ],
    jawaban: 1
  },
  {
    soal: "Apa manfaat dari pencatatan kode inventaris pada setiap barang",
    pilihan: [
      "Memudahkan pelacakan dan audit barang",
      "Meningkatkan harga jual barang bekas",
      "Mengurangi kebutuhan pencatatan manual",
      "Mempermudah distribusi barang ke pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator utama bahwa proses inventarisasi berjalan dengan baik",
    pilihan: [
      "Tidak ada aset yang hilang atau tidak tercatat",
      "Semua barang dapat digunakan tanpa perbaikan",
      "Pengadaan barang baru tidak diperlukan",
      "Setiap barang memiliki spesifikasi teknis yang jelas",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator bahwa pengaturan penggunaan sarana dan prasarana sudah berjalan dengan baik",
    pilihan: [
      "Semua pegawai mendapatkan akses sesuai kebutuhannya",
      "Tidak ada barang yang hilang atau rusak akibat penggunaan yang salah",
      "Sistem peminjaman berjalan sesuai prosedur",
      "Semua jawaban A, B, C benar",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika ada barang yang sering digunakan dan mengalami keausan",
    pilihan: [
      "Mengusulkan pengadaan barang baru sebagai cadangan",
      "Membatasi penggunaan barang agar lebih awet",
      "Menghapus barang dari daftar inventaris",
      "Meminta pegawai menggunakan barang pribadi",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa pegawai bertanggung jawab atas penggunaan sarana dan prasarana",
    pilihan: [
      "Menggunakan sistem pencatatan peminjaman dan pengembalian",
      "Memberikan sanksi bagi yang tidak merawat barang",
      "Mewajibkan pegawai menandatangani dokumen peminjaman",
      "Semua jawaban A, B, C benar",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara mengoptimalkan penggunaan sarana dan prasarana kantor",
    pilihan: [
      "Menyediakan lebih banyak barang agar tidak terjadi kekurangan",
      "Memberikan kebebasan penuh kepada pegawai dalam menggunakan barang",
      "Memonitor penggunaan barang memastikan pemeliharaan dan mengalokasikan sesuai kebutuhan",
      "Membatasi penggunaan barang hanya untuk divisi tertentu",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang harus dilakukan jika terdapat unit kerja yang membutuhkan sarana dan prasarana tetapi stok barang terbatas",
    pilihan: [
      "Mengalokasikan barang berdasarkan urgensi kebutuhan",
      "Menunggu hingga pengadaan berikutnya tanpa solusi sementara",
      "Meminta unit kerja mencari alternatif sendiri",
      "Memprioritaskan unit kerja yang memiliki jumlah pegawai terbanyak",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari pengecekan kondisi sarana dan prasarana kantor",
    pilihan: [
      "Memastikan semua barang dalam kondisi baik dan dapat digunakan",
      "Mengurangi jumlah barang yang perlu dipelihara",
      "Mempercepat proses pengadaan barang baru",
      "Menghindari penggunaan barang oleh pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Dokumen apa yang digunakan untuk mencatat hasil pengecekan kondisi sarana dan prasarana",
    pilihan: [
      "Berita acara serah terima",
      "Laporan pemeriksaan sarana dan prasarana",
      "Kartu inventaris barang",
      "Faktur pembelian",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah pertama dalam melakukan pengecekan kondisi sarana dan prasarana",
    pilihan: [
      "Memeriksa daftar inventaris barang yang ada",
      "Menghubungi vendor penyedia barang",
      "Mendistribusikan barang yang masih baru",
      "Menunggu laporan dari pegawai terkait kondisi barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa pengecekan kondisi barang dilakukan secara akurat",
    pilihan: [
      "Menggunakan ceklis standar pemeriksaan kondisi barang",
      "Mempercayai laporan pegawai tanpa verifikasi",
      "Melakukan pengecekan hanya pada barang yang sering digunakan",
      "Mengandalkan laporan keuangan untuk mengetahui status barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tindakan yang harus dilakukan jika ditemukan sarana dan prasarana dalam kondisi rusak ringan",
    pilihan: [
      "Langsung menghapus barang dari daftar inventaris",
      "Melaporkan dan mengusulkan perbaikan kepada bagian terkait",
      "Mengganti barang dengan yang baru tanpa pemeriksaan lebih lanjut",
      "Membiarkan barang tetap digunakan selama masih berfungsi",
    ],
    jawaban: 1
  },
  {
    soal: "Siapa yang bertanggung jawab dalam memastikan pemeliharaan sarana dan prasarana berjalan dengan baik",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian keuangan",
      "Pegawai yang menggunakan barang",
      "Vendor penyedia barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara mengidentifikasi barang yang memerlukan perawatan lebih intensif",
    pilihan: [
      "Melakukan inspeksi visual dan uji coba fungsi barang secara berkala",
      "Menunggu hingga barang mengalami kerusakan total",
      "Mengandalkan laporan keuangan sebagai acuan",
      "Menghitung umur barang tanpa melakukan pemeriksaan langsung",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tindakan yang harus dilakukan jika sarana dan prasarana kantor mengalami kerusakan berat",
    pilihan: [
      "Menyimpan barang di gudang meskipun tidak digunakan",
      "Tetap menggunakan barang selama masih bisa berfungsi",
      "Memperbaiki barang tanpa laporan resmi",
      "Mengusulkan penghapusan barang dari daftar inventaris",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara terbaik untuk menyusun anggaran pemeliharaan sarana dan prasarana kantor",
    pilihan: [
      "Berdasarkan kebutuhan pemeliharaan yang terjadwal dan historis kerusakan barang",
      "Mengalokasikan dana hanya untuk barang yang sering digunakan",
      "Menunggu permintaan perbaikan sebelum menyusun anggaran",
      "Menggunakan anggaran yang tersisa dari pengadaan barang baru",
    ],
    jawaban: 0
  },
  {
    soal: "Apa manfaat utama dari pemeliharaan preventif dibandingkan pemeliharaan korektif",
    pilihan: [
      "Mencegah kerusakan sebelum terjadi dan mengurangi biaya perbaikan",
      "Memastikan barang tetap terlihat baru",
      "Mengurangi penggunaan barang oleh pegawai",
      "Memudahkan proses penghapusan barang dari inventaris",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam sistem layanan operasional pencatatan peminjaman dilakukan untuk tujuan utama berikut kecuali",
    pilihan: [
      "Memastikan akuntabilitas penggunaan fasilitas",
      "Mengontrol jumlah fasilitas yang tersedia",
      "Mendeteksi adanya kehilangan atau kerusakan",
      "Memonitor tingkat kepuasan pengguna",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana operator layanan operasional dapat mencegah terjadinya penyalahgunaan fasilitas yang dipinjamkan",
    pilihan: [
      "Mengawasi setiap peminjaman secara langsung",
      "Memberlakukan denda bagi peminjam yang tidak mengalikan fasilitas tepat waktu",
      "Membatasi jumlah yang bisa dipinjam oleh satu individu",
      "Melakukan audit berkala terhadap penggunaan fasilitas",
    ],
    jawaban: 3
  },
  {
    soal: "Jika ada lebih dari satu permintaan untuk fasilitas yang sama pada waktu yang bersamaan peminjaman sebaiknya didasarkan pada",
    pilihan: [
      "Urutan waktu pengajuan permohonan",
      "Kepentingan dan urgensi penggunaan fasilitas",
      "Status jabatan pemohon di perusahaan",
      "Jumlah fasilitas yang telah dipinjam sebelumnya oleh masing-masing pemohon",
    ],
    jawaban: 1
  },
  {
    soal: "Operator layanan operasional bertanggung jawab untuk memastikan bahwa peminjaman dilakukan dengan prosedur standar manakah dari langkah berikut yang bukan bagian dari prosedur standar",
    pilihan: [
      "Menerima dan mengevaluasi permintaan peminjaman",
      "Melakukan inspeksi sarana sebelum dan sesudah peminjaman",
      "Menandatangani kontrak penggunaan dengan peminjam",
      "Mencatat transaksi peminjaman dalam sistem inventaris",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana cara terbaik memastikan bahwa fasilitas yang dipinjam dikembalikan dalam kondisi baik",
    pilihan: [
      "Mengandalkan kejujuran peminjam tanpa melakukan pemeriksaan lebih lanjut",
      "Menugaskan tim khusus untuk mengawasi penggunaan fasilitas selama peminjaman",
      "Mengharuskan peminjaman menandatangani perjanjian tanggung jawab sebelum peminjaman",
      "Melakukan inspeksi kondisi fasilitas sebelum dan sesudah peminjaman",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah dari Berikut ini yang bukan merupakan sarana dan prasarana di kantor pemerintah",
    pilihan: [
      "Komputer dan printer",
      "Meja dan kursi kerja",
      "Kendaraan dinas",
      "Dana operasional",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika barang yang diterima mengalami kerusakan ringan",
    pilihan: [
      "Membuangnya dan meminta penggantian",
      "Menggunakan barang tersebut selama masih berfungsi",
      "Mencatat kondisi barang dalam berita acara pemeriksaan",
      "Memperbaikinya sendiri tanpa melaporkan",
    ],
    jawaban: 2
  },
  {
    soal: "Siapa yang bertanggung jawab dalam penyimpanan dan distribusi sarana dan prasarana setelah diterima",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagi keuangan",
      "Sekretaris dinas",
      "Bagian umum dan logistik",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara memastikan bahwa barang yang diterima benar-benar sesuai dengan spesifikasi yang telah disepakati",
    pilihan: [
      "Memeriksa hanya dari segi jumlahnya",
      "Mengandalkan laporan vendor",
      "Melakukan pengecekan fisik dan dokumen pengadaan",
      "Menunggu laporan penggunaan dari pegawai yang menerima barang",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen apa yang harus ditandatangani setelah barang diterima dan diperiksa",
    pilihan: [
      "Faktur pajak",
      "Surat Perintah kerja",
      "Berita acara serah terima",
      "Laporan audit internal",
    ],
    jawaban: 2
  },
  {
    soal: "Manfaat utama buku kendali dibandingkan pencatatan manual tanpa struktur",
    pilihan: [
      "Memudahkan audit dan pertanggungjawaban aset",
      "Mengurangi jumlah barang yang harus dicatat",
      "Mempermudah pengguna dalam meminjam barang",
      "Mengurangi anggaran operasional kantor",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab untuk dalam memastikan pencatatan sarana dan prasarana tetap terkelola dengan baik",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian Keuangan",
      "Vendor penyedia barang",
      "Sekretaris dinas",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara menghindari duplikasi pencatatan dalam buku kendali",
    pilihan: [
      "Memeriksa daftar pencatatan sebelum menambahkan entri baru",
      "Menggunakan format dokumen yang berbeda untuk setiap kategori barang",
      "Membuat buku kendali terpisah untuk setiap ruangan",
      "Menghapus data lama sebelum menambahkan yang baru",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang harus dilakukan jika ditemukan barang yang tidak tercatat dalam buku kendali",
    pilihan: [
      "Menambahkannya ke dalam daftar tanpa pemeriksaan lebih lanjut",
      "Melakukan verifikasi dan mencatat barang dalam daftar inventaris",
      "Mengabaikannya jika barang tersebut sudah lama ada",
      "Memindahkan barang ke gudang tanpa pencatatan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana buku kendali membantu dalam efisiensi operasional kantor",
    pilihan: [
      "Mengurangi biaya pemeliharaan barang",
      "Mempermudah pemantauan pemeliharaan dan distribusi aset",
      "Menyediakan informasi untuk audit pajak",
      "Memastikan barang tidak gunakan oleh pihak eksternal",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan jika unit penerima menolak barang yang didistribusikan",
    pilihan: [
      "Mengembalikan barang ke gundang dan mencatat dalam laporan",
      "Memaksa unit untuk menerima barang sesuai prosedur",
      "Mendistribusikan barang ke Unit lain tanpa konfirmasi",
      "Menghapus barang dari daftar inventaris",
    ],
    jawaban: 0
  },
  {
    soal: "Apa risiko utama jika distribusi sarana dan prasarana tidak terdokumentasi dengan baik",
    pilihan: [
      "Hilang hilangnya barang tanpa pertanggungjawaban",
      "Meningkatnya efisiensi operasional",
      "Terjadinya pengurangan anggaran untuk pengadaan berikutnya",
      "Memudahkan proses audit internal",
    ],
    jawaban: 0
  },
  {
    soal: "Mengapa perlu dilakukan pencocokan antara barang yang didistribusikan dengan permintaan unit kerja",
    pilihan: [
      "Supaya unit kerja dapat menerima lebih banyak barang",
      "Agar proses distribusi lebih cepat",
      "Untuk memudahkan proses pembayaran kepada vendor",
      "Untuk menghindari pengiriman barang yang tidak dibutuhkan",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika terdapat selisih jumlah barang antara dokumen distribusi dan kondisi nyata",
    pilihan: [
      "Melakukan investigasi dan mencatat dalam laporan",
      "Mengubah dokumen agar sesuai dengan jumlah barang yang ada",
      "Mengabaikan selisih tersebut jika tidak terlalu besar",
      "Mengirim barang tambahan tanpa konfirmasi",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa barang yang didistribusikan itu digunakan dengan optimal oleh unit penerima",
    pilihan: [
      "Melakukan Pemantauan dan evaluasi penggunaan barang",
      "Memberikan instruksi penggunaan barang sebelum distribusi",
      "Mengurangi jumlah barang yang dikirim ke unit kerja",
      "Menghapus barang dari daftar inventari setelah didistribusikan",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana prosedur pencatatan barang yang baru diterima dalam inventaris",
    pilihan: [
      "Memasukkan barang ke dalam daftar inventaris setelah digunakan",
      "Menunggu laporan pegawai sebelum mencatat barang",
      "Mencatat barang dalam kartu inventaris barang sebelum didistribusikan",
      "Menunggu proses audit sebelum pencatatan",
    ],
    jawaban: 2
  },
  {
    soal: "Jika ditemukan barang yang rusak saat inventarisasian yang harus dilakukan",
    pilihan: [
      "Membuangnya langsung tanpa pencatatan",
      "Memindahkannya ke gudang tanpa melaporkan",
      "Mencatat kondisi barang dan melaporkannya untuk perbaikan atau penghapusan",
      "Menghapus barang dari daftar inventaris tanpa konfirmasi",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang menjadi dasar penghapusan barang dari daftar inventaris",
    pilihan: [
      "Barang sudah tidak digunakan dalam 5 tahun terakhir",
      "Barang telah rusak berat dan tidak bisa diperbaiki",
      "Digantikan dengan model yang lebih baru",
      "Barang dipindahkan ke Unit lain",
    ],
    jawaban: 1
  },
  {
    soal: "Apa manfaat dari pencatatan kode inventaris pada setiap barang",
    pilihan: [
      "Memudahkan pelacakan dan audit barang",
      "Meningkatkan harga jual barang bekas",
      "Mengurangi kebutuhan pencatatan manual",
      "Mempermudah distribusi barang ke pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator utama bahwa proses inventarisasi berjalan dengan baik",
    pilihan: [
      "Tidak ada aset yang hilang atau tidak tercatat",
      "Semua barang dapat digunakan tanpa perbaikan",
      "Pengadaan barang baru tidak diperlukan",
      "Setiap barang memiliki spesifikasi teknis yang jelas",
    ],
    jawaban: 0
  },
  {
    soal: "Apa indikator bahwa pengaturan penggunaan sarana dan prasarana sudah berjalan dengan baik",
    pilihan: [
      "Semua pegawai mendapatkan akses sesuai kebutuhannya",
      "Tidak ada barang yang hilang atau rusak akibat penggunaan yang salah",
      "Sistem peminjaman berjalan sesuai prosedur",
      "Semua jawaban A B C Benar",
    ],
    jawaban: 3
  },
  {
    soal: "Apa yang harus dilakukan jika ada barang yang sering digunakan dan mengalami keausan",
    pilihan: [
      "Mengusulkan pengadaan barang baru sebagai cadangan",
      "Membatasi penggunaan barang agar lebih awet",
      "Menghapus barang dari daftar inventaris",
      "Meminta pegawai menggunakan barang pribadi",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa pegawai bertanggung jawab atas penggunaan sarana dan prasarana",
    pilihan: [
      "Menggunakan sistem pencatatan peminjaman dan pengembalian",
      "Memberikan sanksi bagi yang tidak merawat barang",
      "Mewajibkan pegawai menandatangani dokumen peminjaman",
      "Semua jawaban ABC Benar",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara mengoptimalkan penggunaan sarana dan prasarana kantor",
    pilihan: [
      "Menyediakan lebih banyak barang agar tidak terjadi kekurangan",
      "Memberikan kebebasan penuh kepada pegawai dalam menggunakan barang",
      "Memonitor penggunaan barang memastikan pemeliharaan dan mengalokasan sesuai kebutuhan",
      "Membatasi penggunaan barang hanya untuk divisi tertentu",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang harus dilakukan jika terdapat unit kerja yang membutuhkan sarana dan prasarana tetapi stok barang terbatas",
    pilihan: [
      "Mengalokasikan barang berdasarkan urgensi kebutuhan",
      "Menunggu hingga pengadaan berikutnya tanpa solusi sementara",
      "Meminta unit kerja mencari alternatif sendiri",
      "Memprioritaskan Unit kerja yang memiliki jumlah pegawai terbanyak",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari pengecekan kondisi sarana dan prasarana kantor",
    pilihan: [
      "Memastikan semua barang dalam kondisi baik dan dapat digunakan",
      "Mengurangi jumlah barang yang perlu dipelihara",
      "Mempercepat proses pengadaan barang baru",
      "Menghindari penggunaan barang oleh pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Dokumen apa yang digunakan untuk mencatat hasil pengecekan kondisi sarana dan prasarana",
    pilihan: [
      "Berita acara serah terima",
      "Laporan pemeriksaan sarana dan prasarana",
      "Kartu inventaris barang",
      "Faktur pembelian",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah pertama dalam melakukan pengecekan kondisi sarana dan prasarana",
    pilihan: [
      "Memeriksa daftar inventaris barang yang ada",
      "Menghubungi vendor penyedia barang",
      "Mendistribusikan barang yang masih baru",
      "Menunggu laporan dari pegawai terkait kondisi barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara memastikan bahwa pengecekan kondisi barang dilakukan secara akurat",
    pilihan: [
      "Menggunakan ceklis standar pemeriksaan kondisi barang",
      "Mempercayai laporan pegawai tanpa verifikasi",
      "Melakukan pengecekan hanya pada barang yang sering digunakan",
      "Mengandalkan laporan keuangan untuk mengetahui status barang",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tindakan yang harus dilakukan jika ditemukan sarana dan prasarana dalam kondisi rusak ringan",
    pilihan: [
      "Langsung menghapus barang dari daftar inventaris",
      "Melaporkan dan mengusulkan perbaikan kepada bagian terkait",
      "Mengganti barang dengan yang baru tanpa pemeriksaan lebih lanjut",
      "Membiarkan barang tetap digunakan Selama masih berfungsi",
    ],
    jawaban: 1
  },
  {
    soal: "Siapa yang bertanggung jawab dalam memastikan pemeliharaan sarana dan prasarana berjalan dengan baik",
    pilihan: [
      "Operator layanan operasional",
      "Kepala bagian Keuangan",
      "Pegawai yang menggunakan barang",
      "Vendor penyedia barang",
    ],
    jawaban: 0
  },
  {
    soal: "Bagaimana cara mengidentifikasi barang yang memerlukan perawatan lebih intensif",
    pilihan: [
      "Melakukan inspeksi visual dan uji coba fungsi barang secara berkala",
      "Menunggu hingga barang mengalami kerusakan total",
      "Mengandalkan laporan keuangan sebagai Acu",
      "Menghitung umur barang tanpa melakukan pemeriksaan langsung",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tindakan yang harus dilakukan jika sarana dan prasarana kantor mengalami kerusakan berat",
    pilihan: [
      "Menyimpan barang di gudang Meskipun tidak digunakan",
      "Tetap menggunakan barang Selama masih bisa berfungsi",
      "Memperbaiki barang tanpa laporan resmi",
      "Mengusulkan penghapusan barang dari daftar inventaris",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana cara terbaik untuk menyusun anggaran pemeliharaan sarana dan prasarana kantor",
    pilihan: [
      "Berdasarkan kebutuhan pemeliharaan yang terjadwal dan historis kerusakan barang",
      "Mengalokasikan dana hanya untuk barang yang sering digunakan",
      "Menunggu permintaan perbaikan sebelum menyusun anggaran",
      "Menggunakan anggaran yang tersisa dari pengadaan barang baru",
    ],
    jawaban: 0
  },
  {
    soal: "Apa manfaat utama dari pemeliharaan preventif dibandingkan pemeliharaan korektif",
    pilihan: [
      "Mencegah kerusakan sebelum terjadi dan mengurangi biaya perbaikan",
      "Memastikan barang tetap terlihat baru",
      "Mengurangi penggunaan barang oleh pegawai",
      "Memudahkan proses penghapusan barang dari inventaris",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam sistem layanan operasional pencatatan peminjaman dilakukan untuk tujuan utama berikut kecuali",
    pilihan: [
      "Memastikan akuntabilitas penggunaan fasilitas",
      "Mengontrol jumlah fasilitas yang tersedia",
      "Mendeteksi adanya kehilangan atau kerusakan",
      "Memonitor tingkat kepuasan pengguna",
    ],
    jawaban: 3
  },
  {
    soal: "Bagaimana operator layanan operasional dapat mencegah terjadinya penyalahgunaan fasilitas yang dipinjamkan",
    pilihan: [
      "Mengawasi setiap peminjaman secara langsung",
      "Memberlakukan denda bagi peminjam yang tidak mengalikan fasilitas tepat waktu",
      "Mas jumlah yang bisa dipinjam oleh satu individu",
      "Melakukan audit berkala terhadap penggunaan fasilitas",
    ],
    jawaban: 3
  },
  {
    soal: "Jika ada lebih dari satu permintaan untuk fasilitas yang sama pada waktu yang bersamaan peminjaman sebaiknya didasarkan pada",
    pilihan: [
      "Urutan waktu pengajuan permohonan",
      "Kepentingan dan urgensi penggunaan fasilitas",
      "Status jabatan pemohon di perusahaan",
      "Jumlah fasilitas yang telah dipinjam sebelumnya oleh masing-masing pemohon",
    ],
    jawaban: 1
  },
  {
    soal: "Operator layanan operasional bertanggung jawab untuk memastikan bahwa peminjaman dilakukan dengan prosedur standar manakah dari langkah berikut yang bukan bagian dari prosedur standar",
    pilihan: [
      "Menerima dan mengevaluasi permintaan peminjaman",
      "Melakukan inspeksi sarana sebelum dan sesudah peminjaman",
      "Menandatangani kontrak penggunaan dan peminjam dengan peminjam",
      "Mencatat transaksi peminjaman dalam sistem inventaris",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana cara terbaik memastikan bahwa fasilitas yang dipinjam dikembalikan dalam kondisi baik",
    pilihan: [
      "Mengandalkan kejujuran peminjam tanpa melakukan pemeriksaan lebih lanjut",
      "Menugaskan tim khusus untuk mengawasi penggunaan fasilitas selama peminjaman",
      "Mengharuskan peminjaman menandatangani perjanjian tanggung jawab sebelum peminjaman",
      "Melakukan inspeksi kondisi fasilitas sebelum dan sesudah peminjaman",
    ],
    jawaban: 3
  },
  {
    soal: "Seorang tukang mebel kayu dapat membuat 12 meja dalam 6 hari. Jika ia ingin membuat 18 meja berapa lama waktu yang diperlukan",
    pilihan: [
      "8 hari",
      "9 hari",
      "10 hari",
      "12 hari",
    ],
    jawaban: 1
  },
  {
    soal: "Hitunglah hasil dari perhitungan berikut 2345 x 112 + 789",
    pilihan: [
      "263.429",
      "262.429",
      "264.429",
      "265.429",
    ],
    jawaban: 0
  },
  {
    soal: "Jika X = 3 dan Y = 5 maka persamaan mana yang benar",
    pilihan: [
      "X + 2 = Y",
      "X - 1 = Y",
      "X + Y = 8",
      "X lebih dari Y",
    ],
    jawaban: 2
  },
  {
    soal: "Sebuah perusahaan membeli 100 unit barang dengan harga per unit 150.000. Setelah beberapa waktu perusahaan tersebut menjual barang-barang tersebut dengan harga per unitnya 180.000. Selain itu ternyata perusahaan mengeluarkan biaya tambahan berupa biaya transportasi dan administrasi sebesar 3 juta untuk seluruh barang. Berapa persentase keuntungan yang diperoleh perusahaan setelah menjual seluruh barang tersebut",
    pilihan: [
      "12%",
      "15%",
      "18%",
      "0%",
    ],
    jawaban: 3
  },
  {
    soal: "Pembangunan sebuah rumah memerlukan waktu 1 bulan jika dilakukan oleh 20 orang. Jika ada penambahan pekerja sebanyak 10 orang maka berapa lama waktu pembangunan rumah tersebut",
    pilihan: [
      "20 hari",
      "30 hari",
      "40 hari",
      "50 hari",
    ],
    jawaban: 0
  },
  {
    soal: "Abolisi adalah lawan kata dari",
    pilihan: [
      "Pembentukan",
      "Penangkapan",
      "Pembusukan",
      "Perubahan",
    ],
    jawaban: 0
  },
  {
    soal: "Anomali itu lawan kata dari",
    pilihan: [
      "Aturan",
      "Normal",
      "Patuh",
      "Takut",
    ],
    jawaban: 1
  },
  {
    soal: "Tendensi itu persamaan kata dari",
    pilihan: [
      "Denyut",
      "Lawan",
      "Utama",
      "Kecenderungan",
    ],
    jawaban: 3
  },
  {
    soal: "Supervisi itu persamaan kata dari",
    pilihan: [
      "Pengawasan",
      "Luar biasa",
      "Pegawai",
      "Bos",
    ],
    jawaban: 0
  },
  {
    soal: "Sporadis itu persamaan kata dari",
    pilihan: [
      "Rapat",
      "Subur",
      "Banyak",
      "Jarang",
    ],
    jawaban: 3
  },
  {
    soal: "Kompor : Api = ... : ...",
    pilihan: [
      "Palung : gula",
      "Pohon : buah",
      "Kipas angin : angin",
      "Jalan : macet",
    ],
    jawaban: 2
  },
  {
    soal: "Suhu : Celsius = ... : ...",
    pilihan: [
      "Termometer : suhu",
      "Api : kebakaran",
      "Banjir : air",
      "Gempa : Richter",
    ],
    jawaban: 3
  },
  {
    soal: "Jika saya lolos seleksi tim nasional saya akan pindah klub. Saya tidak pindah klub maka Kesimpulan yang tepat adalah",
    pilihan: [
      "Saya lolos seleksi tim nasional",
      "Saya pindah klub",
      "Saya tidak lolos seleksi",
      "Saya tidak lolos seleksi tim nasional",
    ],
    jawaban: 3
  },
  {
    soal: "Andi, Anton dan Intan adalah saudara. Usia Andi terpaut 1 bulan dengan Intan. Andi Memanggil Ayah Intan dengan sebutan Paman. Intan juga Memanggil Ayah Andi dengan sebutan Paman. Anton adalah saudara Andi dan lebih tua dari Andi tetapi tidak lebih tua dari Intan. Kesimpulannya adalah",
    pilihan: [
      "Andi lebih tua dari Intan",
      "Intan paling muda",
      "Anton dan Andi saudara kembar dan lebih muda dari Intan",
      "Intan seumuran dengan Andi",
    ],
    jawaban: 2
  },
  {
    soal: "Berat badan Adinda lebih besar dari Dini Tetapi lebih rendah dari Ulfa. Berat badan Ulfa lebih besar dari Pandu tetapi tidak lebih besar dari Dewi. Berat badan Pandu lebih besar dari Adinda. Kesimpulannya urutan berat badan dari yang terbesar sampai yang terkecil adalah",
    pilihan: [
      "Dewi, Ulfa, Pandu, Adinda, Dini",
      "Ulfa, Pandu, Dewi, Dini, Adinda",
      "Dini, Adinda, Pandu, Dewi, Ulfa",
      "Adinda, Dini, Dewi, Pandu, Ulfa",
    ],
    jawaban: 0
  },
  {
    soal: "Suatu kelompok belajar mempunyai anggota 7 orang. Jika setiap belajar semua anggota kelompok duduk dengan posisi melingkar banyaknya cara untuk mengatur posisi duduk anggota kelompok tersebut adalah",
    pilihan: [
      "720",
      "1440",
      "2520",
      "5040",
    ],
    jawaban: 0
  },
  {
    soal: "Suatu Rapat dihadiri oleh lima orang peserta yang terdiri dari ketua, wakil, sekretaris, Anggota 1 dan anggota 2. Susunan posisi duduk pada saat Rapat adalah mengelilingi Meja Bundar. Jika ketua dan wakil harus saling berdekatan maka banyaknya susunan yang mungkin adalah",
    pilihan: [
      "8 cara",
      "12 cara",
      "24 cara",
      "48 cara",
    ],
    jawaban: 1
  },
  {
    soal: "2, 4, 7, 11, 16, ..., ...",
    pilihan: [
      "17, 18",
      "20, 22",
      "22, 29",
      "24, 32",
    ],
    jawaban: 2
  },
  {
    soal: "1, 3, 7, 13, 21, ...",
    pilihan: [
      "25",
      "28",
      "31",
      "35",
    ],
    jawaban: 2
  },
  {
    soal: "A, C, C, E, ..., ..., G, I, I, K",
    pilihan: [
      "E dan G",
      "G dan H",
      "H dan I",
      "G dan J",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam menangani dokumen rahasia perusahaan seorang operator layanan operasional harus memastikan bahwa dokumen tersebut hanya diakses oleh pihak yang berwenang. Apa tindakan yang paling tepat untuk menjaga kerahasiaan dokumen ini",
    pilihan: [
      "Menyimpan dokumen di meja kerja",
      "Mengirimkan dokumen melalui email pribadi",
      "Menggunakan sistem pengamanan dokumen seperti password dan otorisasi akses",
      "Mengizinkan semua pegawai untuk mengakses dokumen",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam mengelola arsip digital metode terbaik untuk memastikan keamanan data serta kemudahan pencarian adalah",
    pilihan: [
      "Menyimpan semua file dalam satu folder besar tanpa kategori",
      "Menggunakan sistem pengkodean dan pencadangan berkala",
      "Menyimpan file dalam format yang tidak dapat diedit",
      "Menghapus file lama secara rutin",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator layan operasional bertugas untuk menangani surat masuk dan keluar. Salah satu langkah penting dalam menangani surat masuk adalah",
    pilihan: [
      "Langsung membalas surat tanpa perlu verifikasi isi",
      "Mengarsifkan surat tanpa mendistribusikannya ke pihak terkait",
      "Melakukan pencatatan dan mendistribusikan surat ke bagian yang bersangkutan",
      "Menyimpan semua surat di meja kerja",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam suatu perusahaan operator layanan operasional bertanggung jawab atas persediaan alat tulis kantor atau ATK. Agar penggunaan ATK lebih efisien langkah yang perlu dilakukan adalah",
    pilihan: [
      "Membeli dalam jumlah besar tanpa memperhitungkan kebutuhan aktual",
      "Mengeluarkan ATK kepada siapa saja yang memintanya tanpa pencatatan penggunaan",
      "Memonitor stok secara berkala dan membuat laporan penggunaan",
      "Menggunakan sistem manual tanpa pencatatan",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam menghadapi keluhan pelanggan terkait layanan administrasi langkah pertama yang harus dilakukan oleh operator layanan operasional adalah",
    pilihan: [
      "Mengabaikan keluhan jika dianggap tidak penting",
      "Menanggapi dengan nada tinggi",
      "Mendengarkan keluhan dengan sikap profesional dan mencari solusi terbaik",
      "Menyalahkan pelanggan karena tidak mengikuti prosedur",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang operator layanan operasional menggunakan perangkat lunak berbasis cloud untuk menyimpan dokumen perusahaan. Keuntungan utama dari penggunaan teknologi ini adalah",
    pilihan: [
      "Meningkatkan resiko kebocoran data",
      "Menurunkan efisiensi kerja karena membutuhkan koneksi internet",
      "Memungkinkan akses data dari berbagai lokasi dengan keamanan yang baik",
      "Menghapus kebutuhan untuk melakukan pencadangan secara berkala",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam menangani komunikasi internal perusahaan seorang operator layanan operasional menggunakan aplikasi komunikasi bisnis seperti Microsoft teams atau Slack. Apa manfaat utama dari penggunaan aplikasi ini",
    pilihan: [
      "Memastikan komunikasi lebih cepat dan efisien tanpa perlu pertemuan fisik",
      "Mengurangi kebutuhan akan komunikasi formal melalui email",
      "Memungkinkan semua pesan tersimpan secara otomatis untuk referensi",
      "Semua jawaban benar",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam menjaga keamanan sistem informasi perusahaan langkah yang harus dilakukan oleh operator layanan operasional adalah",
    pilihan: [
      "Membuat kata sandi yang mudah diingat",
      "Menggunakan jaringan WiFi publik",
      "Mengaktifkan otentikasi dua faktor untuk akun penting",
      "Menyimpan semua kata sandi di catatan terbuka",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang operator layanan operasional memiliki banyak tugas yang harus diselesaikan dalam waktu terbatas. Apa strategi baik untuk memastikan semua tugas selesai tepat waktu",
    pilihan: [
      "Menyelesaikan tugas paling mudah terlebih dahulu tanpa mempertimbangkan prioritas",
      "Membagi tugas kepada rekan kerja tanpa izin atasan",
      "Menggunakan metode manajemen waktu seperti to-do list dan prioritas tugas",
      "Mengabaikan tugas yang dirasa kurang penting",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam menangani tugas Harian Seorang operator layanan operasional seringkali menghadapi distraksi. Bagaimana cara paling efektif untuk mengatasi distraksi ini",
    pilihan: [
      "Menghindari semua interaksi dengan rekan kerja agar tetap fokus",
      "Membuat jadwal kerja yang terstruktur dengan batasan waktu untuk setiap tugas",
      "Mengerjakan beberapa tugas sekaligus atau multitasking",
      "Menunggu hingga suasana Kantor lebih tenang",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang pelanggan mengeluh bahwa mereka tidak mendapatkan informasi yang jelas terkait layanan yang diberikan. Sebagai operator layanan operasional tindakan terbaik yang harus diambil adalah",
    pilihan: [
      "Menyalahkan pelanggan karena tidak membaca informasi dengan baik",
      "Memberikan informasi ulang dengan bahasa yang lebih sederhana dan jelas",
      "Meminta pelanggan untuk mencari sendiri informasi di website perusahaan",
      "Mengabaikan keluhan pelanggan",
    ],
    jawaban: 1
  },
  {
    soal: "Saat menghadapi pelanggan yang marah dan berbicara dengan nada tinggi Bagaimana sikap yang seharusnya dilakukan oleh operator layanan operasional",
    pilihan: [
      "Membalas dengan nada yang lebih tinggi",
      "Tetap tenang mendengarkan keluhan dan mencari solusi dengan sopan",
      "Menghindari pelanggan dan meminta rekan kerja untuk menangani",
      "Memotong pembicaraan pelanggan",
    ],
    jawaban: 1
  },
  {
    soal: "Untuk mencegah kehilangan data penting dalam sistem komputer perusahaan tindakan pencegahan terbaik yang dapat dilakukan adalah",
    pilihan: [
      "Menyimpan semua data hanya dalam satu komputer",
      "Melakukan pencadangan atau backup data secara berkala di server atau Cloud",
      "Mencetak semua dokumen penting sebagai cadangan fisik",
      "Menggunakan hard disk eksternal tanpa perlindungan enkripsi",
    ],
    jawaban: 1
  },
  {
    soal: "Apa langkah keamanan yang paling efektif dalam melindungi informasi sensitif perusahaan dari serangan cyber",
    pilihan: [
      "Menggunakan kata sandi yang kuat dan menggantinya secara berkala",
      "Membagikan kata sandi kepada rekan kerja",
      "Menyimpan file penting di folder terbuka",
      "Menggunakan jaringan wifi publik",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu tanggung jawab operator layanan operasional adalah memastikan bahwa peralatan kantor dalam kondisi baik. Apa langkah terbaik untuk mengelola peralatan kantor secara efisien",
    pilihan: [
      "Menunggu peralatan rusak sebelum melakukan perbaikan",
      "Melakukan pemeliharaan dan pencatatan kondisi peralatan",
      "Membeli peralatan baru setiap bulan",
      "Menggunakan peralatan secara berlebihan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menjalankan tugas administrasi operator layanan operasional harus mematuhi undang-undang Keterbukaan Informasi Publik. Apa tujuan utama dari undang-undang ini",
    pilihan: [
      "Melindungi data pribadi pegawai agar tidak diakses publik",
      "Memastikan transparansi dan akses masyarakat terhadap Informasi Publik",
      "Membatasi akses masyarakat terhadap dokumen pemerintahan",
      "Mengizinkan pegawai untuk menyimpan informasi publik secara pribadi",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang pelanggan datang ke kantor dengan keluhan bahwa dokumen yang ia ajukan belum diproses meskipun sudah melewati batas waktu yang ditentukan. Sebagai operator layanan operasional Apa langkah terbaik yang harus dilakukan",
    pilihan: [
      "Menyalahkan pelanggan karena tidak mengikuti prosedur dengan benar",
      "Memeriksa status dokumen dan memberikan penjelasan yang jelas",
      "Meminta pelanggan datang kembali di lain waktu",
      "Menyuruh pelanggan untuk mengajukan ulang dokumen",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam pengelolaan arsip ada beberapa metode penyimpanan yang digunakan. Metode yang paling sesuai untuk menyimpan dokumen dengan akses cepat dan sistematis adalah",
    pilihan: [
      "Menyusun dokumen secara acak",
      "Menggunakan sistem klasifikasi berdasarkan kategori dan kode tertentu",
      "Menyimpan semua dokumen dalam satu folder tanpa pemisahan",
      "Mengarsifkan dokumen secara manual tanpa pencatatan digital",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu prinsip dalam manajemen arsip adalah prinsip keaktifan. Apa yang dimaksud dengan prinsip ini",
    pilihan: [
      "Arsip yang sering digunakan harus ditempatkan di tempat yang mudah diakses",
      "Semua arsip harus disimpan dalam bentuk cetak",
      "Dokumen harus dihapus Setelah 5 tahun penyimpanan",
      "Arsif yang tidak aktif harus dicampur dengan arsif aktif",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu manfaat dari penerapan sistem otomatisasi dalam layanan operasional adalah",
    pilihan: [
      "Meningkatkan efisiensi kerja dengan mengurangi pekerjaan manual",
      "Menghilangkan kebutuhan akan tenaga manusia sepenuhnya",
      "Memungkinkan semua pekerjaan dilakukan tanpa pengawasan",
      "Mengurangi transparansi",
    ],
    jawaban: 0
  },
  {
    soal: "Seorang operator layanan operasional diminta untuk mengelola surat elektronik (email) kantor. Apa praktik terbaik menangani email profesional",
    pilihan: [
      "Membalas semua email tanpa membaca isinya secara rinci",
      "Menggunakan bahasa formal dan jelas dalam setiap korespondensi",
      "Hapus semua email setelah dibaca",
      "Mengabaikan email dari pengirim yang tidak dikenal",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam memberikan layanan kepada masyarakat seorang operator layanan operasional harus memahami prinsip-prinsip pelayanan prima. Salah satu prinsip utama dalam pelayanan prima adalah",
    pilihan: [
      "Melayani dengan cepat tanpa memperhatikan kualitas layanan",
      "Memberikan layanan dengan sikap ramah tanggap dan profesional",
      "Memprioritaskan layanan hanya kepada pelanggan tertentu",
      "Mengabaikan keluhan pelanggan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam menghadapi pelanggan yang memiliki kebutuhan khusus (Misalnya penyandang disabilitas) langkah terbaik yang harus dilakukan oleh seorang operator layanan operasional adalah",
    pilihan: [
      "Mengabaikan permintaan pelanggan tersebut",
      "Memberikan bantuan sesuai kebutuhan dengan sikap inklusif dan ramah",
      "Menyarankan pelanggan mencari bantuan sendiri",
      "Mengarahkan pelanggan ke jalur Layanan Umum tanpa memberikan solusi tambahan",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang pegawai mendapatkan informasi rahasia perusahaan yang tidak seharusnya diketahui oleh publik. Apa langkah etis yang harus diambil oleh pegawai tersebut",
    pilihan: [
      "Menyebarkan informasi tersebut kepada rekan kerja",
      "Menggunakan informasi tersebut untuk keuntungan pribadi",
      "Melaporkan kepada atasan jika informasi tersebut beresiko bocor ke publik",
      "Mengunggah informasi tersebut ke media sosial",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam lingkungan kerja seorang operator layanan operasional harus bersikap profesional. Salah satu contoh sikap profesionalnya adalah",
    pilihan: [
      "Datang terlambat ke kantor",
      "Mengutamakan pekerjaan tanpa memperhatikan aturan perusahaan",
      "Menjalankan tugas sesuai tanggung jawab dan etika kerja",
      "Menerima imbalan dari pihak untuk mempercepat layanan",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang pelanggan mengajukan permintaan layanan yang memerlukan waktu lebih lama dari biasanya. Bagaimana cara terbaik untuk menangani situasi ini",
    pilihan: [
      "Menjanjikan penyelesaian lebih cepat Meskipun tidak realistis",
      "Memberikan informasi yang jelas mengenai estimasi waktu dan alasan keterlambatan",
      "Mengabaikan pelanggan dan fokus kepada pekerjaan lain",
      "Meminta pelanggan untuk mencari alternatif layanan sendiri",
    ],
    jawaban: 1
  },
  {
    soal: "Jika seorang operator layanan operasional menemukan kesalahan dalam dokumen yang telah diproses tindakan yang seharusnya dilakukan adalah",
    pilihan: [
      "Membiarkan kesalahan tersebut",
      "Segera melaporkan dan memperbaiki kesalahan sesuai prosedur",
      "Menyalahkan pihak lain",
      "Mengabaikan kesalahan",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator pelayanan operasional bertanggung jawab dalam pengelolaan anggaran untuk kebutuhan operasional kantor. Prinsip utama yang harus diterapkan dalam pengelolaan anggaran adalah",
    pilihan: [
      "Menggunakan dana sesuai kebutuhan yang sudah direncanakan",
      "Menggunakan dana tanpa perlu pencatatan",
      "Mengalokasikan dana untuk kebutuhan pribadi",
      "Menghindari laporan keuangan",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam membuat laporan keuangan untuk operasional kantor informasi utama harus dicantumkan adalah",
    pilihan: [
      "Hanya jumlah pengeluaran tanpa perlu rincian",
      "Semua pemasukan dan pengeluaran disertai bukti transaksi",
      "Pengeluaran saja",
      "Data keuangan yang sudah dikurangi pajak tanpa penjelasan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam rangka meningkatkan transparansi layanan publik pemerintah menerapkan sistem pelayanan berbasis digital. Keuntungan utama dari sistem ini adalah",
    pilihan: [
      "Mempermudah masyarakat dalam mengakses layanan tanpa harus datang langsung",
      "Menghapus kebutuhan interaksi antara petugas dan masyarakat",
      "Mengurangi jumlah pegawai yang dibutuhkan",
      "Membuat semua layanan gratis",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu program pemerintah yang mendukung keterbukaan informasi bagi masyarakat adalah",
    pilihan: [
      "Undang-undang Keterbukaan Informasi Publik",
      "Undang-undang rahasia negara",
      "Peraturan tentang penghapusan dokumen publik",
      "Kebijakan privatisasi layanan pemerintah",
    ],
    jawaban: 0
  },
  {
    soal: "Seorang operator layanan operasional ingin meningkatkan keterampilan dalam penggunaan aplikasi perkantoran. Langkah terbaik yang dapat dilakukan adalah",
    pilihan: [
      "Mengikuti pelatihan atau kursus terkait teknologi perkantoran",
      "Mempelajari sendirian tanpa mengikuti pelatihan",
      "Mengandalkan rekan kerja untuk menyelesaikan tugas",
      "Menggunakan cara manual",
    ],
    jawaban: 0
  },
  {
    soal: "Seorang pegawai mendapatkan tugas baru yang belum pernah Ia tangani sebelumnya. Sikap yang sebaiknya dilakukan adalah",
    pilihan: [
      "Menolak tugas tersebut",
      "Mengerjakan tugas tanpa mencari tahu terlebih dahulu",
      "Bertanya dan belajar dari rekan kerja atau atasan yang lebih berpengalaman",
      "Mengabaikan tugas tersebut",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang pelanggan meminta informasi terkait layanan tertentu tetapi operator layanan operasional tidak memiliki jawaban yang pasti. Apa tindakan terbaik dalam situasi ini",
    pilihan: [
      "Mengarang jawaban",
      "Mengatakan tidak tahu tanpa memberikan solusi",
      "Mencari informasi yang akurat atau menghubungi pihak yang berwenang",
      "Menyuruh pelanggan mencari informasi sendiri",
    ],
    jawaban: 2
  },
  {
    soal: "Jika seorang operator layanan operasional menemukan bahwa ada kesalahan dalam pencatatan dokumen penting langkah pertama yang harus dilakukan adalah",
    pilihan: [
      "Mengoreksi kesalahan secara diam-diam tanpa laporan",
      "Melaporkan kepada atasan dan memperbaiki sesuai prosedur",
      "Menghapus dokumen yang salah",
      "Membiarkan kesalahan tersebut",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam lingkungan kerja terkadang terjadi konflik antar pegawai. Cara terbaik untuk menangani konflik tersebut adalah",
    pilihan: [
      "Menghindari diskusi dan membiarkan konflik berlalu",
      "Mendengarkan kedua belah pihak dan mencari solusi yang adil",
      "Memihak salah satu pihak",
      "Mengabaikan konflik",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara efektif untuk mengevaluasi kinerja seseorang operator layanan operasional",
    pilihan: [
      "Hanya berdasarkan jumlah tugas yang diselesaikan",
      "Dengan menilai kecepatan kerja",
      "Melalui kombinasi umpan balik pelanggan atasan dan pencapaian kerja",
      "Berdasarkan lama bekerja di kantor",
    ],
    jawaban: 2
  },
  {
    soal: "Apa tindakan yang harus dilakukan jika terjadi keadaan darurat di kantor seperti kebakaran",
    pilihan: [
      "Menyelamatkan barang pribadi terlebih dahulu",
      "Mengikuti prosedur evakuasi yang telah ditentukan",
      "Tetap di dalam ruangan dan menunggu instruksi lebih lanjut",
      "Mencoba memadamkan api tanpa pelatihan yang memadai",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator layanan operasional melihat kabel listrik di kantornya terkelupas dan beresiko menyebabkan korsleting. Apa tindakan terbaik yang harus dilakukan",
    pilihan: [
      "Mengabaikannya",
      "Menggunakan isolasi seadanya",
      "Melaporkan kepada bagian teknis atau pemeliharaan untuk segera diperbaiki",
      "Memindahkan kabel ke tempat lain",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam rapat evaluasi bulanan seorang operator layanan operasional diminta menyampaikan laporan perkembangan proyek. Agar komunikasi berjalan efektif langkah terbaik yang harus dilakukan adalah",
    pilihan: [
      "Membaca laporan secara langsung",
      "Menggunakan bahasa yang terlalu teknis",
      "Menyusun laporan dengan ringkas dan menjelaskan poin-poin penting dengan jelas",
      "Menggunakan terlalu banyak istilah asing",
    ],
    jawaban: 2
  },
  {
    soal: "Apa perbedaan utama antara sarana dan prasarana",
    pilihan: [
      "Sarana adalah fasilitas yang digunakan langsung dalam pekerjaan sedangkan prasarana adalah pendukung utama yang memastikan sarana dapat digunakan dengan optimal",
      "Prasarana mencakup barang habis pakai sementara sarana adalah aset jangka panjang",
      "Sarana selalu berupa perangkat elektronik sedangkan prasarana mencakup bangunan saja",
      "Prasarana hanya berfungsi sebagai dekorasi kantor",
    ],
    jawaban: 0
  },
  {
    soal: "Manakah di bawah ini yang merupakan contoh dari prasarana dalam operasional kantor",
    pilihan: [
      "Meja kerja printer dan komputer",
      "Gedung kantor jaringan listrik dan sistem ventilasi",
      "Kertas tinta printer dan alat tulis kantor",
      "Mesin fotokopi scanner dan headset",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa pemeliharaan sarana dan prasarana kantor sangat penting dalam layanan operasional",
    pilihan: [
      "Agar fasilitas tetap berfungsi dengan baik dan menunjang produktivitas kerja",
      "Untuk meningkatkan biaya operasional",
      "Supaya pegawai tidak perlu bertanggung jawab atas fasilitas",
      "Agar bisa mengganti semua peralatan lama dengan yang baru",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam pengadaan sarana dan prasarana kantor faktor apa yang paling penting untuk dipertimbangkan",
    pilihan: [
      "Hanya harga yang paling murah",
      "Kualitas efisiensi penggunaan dan daya tahan fasilitas",
      "Desain yang menarik",
      "Memilih produk berdasarkan tren terbaru",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu tantangan dalam pengelolaan sarana dan prasarana kantor adalah keterbatasan anggaran. Apa solusi terbaik untuk mengatasi ini",
    pilihan: [
      "Mengurangi jumlah sarana dan prasarana yang tersedia di kantor",
      "Memastikan pemeliharaan rutin agar fasilitas tetap awet dan tidak cepat rusak",
      "Menunda pembelian hingga semua fasilitas rusak total",
      "Mengandalkan sumbangan dari pegawai",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam sebuah instansi pemerintahan manakah yang termasuk dalam kategori sarana bukan prasarana",
    pilihan: [
      "Gedung kantor dan sistem pendingin ruangan",
      "Komputer mesin fotokopi dan alat tulis kantor",
      "Jaringan listrik dan akses jalan menuju Kantor",
      "Ruang rapat toilet dan sistem keamanan",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu contoh prasarana yang mendukung efisiensi kerja dalam operasional kantor adalah",
    pilihan: [
      "Proyektor dan mesin pencetak dokumen",
      "Gedung kantor dan sistem jaringan listrik",
      "Flashdisk dan Hard Drive eksternal",
      "Telepon kantor dan headset komunikasi",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator layanan operasional bertugas mengelola sarana kantor. Apa tindakan yang paling tepat untuk memastikan sarana tetap berfungsi dengan baik",
    pilihan: [
      "Menggunakan sarana tanpa jadwal pemeliharaan rutin",
      "Menunggu sampai terjadinya kerusakan sebelum melakukan perbaikan",
      "Menyediakan jadwal pemeliharaan rutin dan pencatatan penggunaan sarana",
      "Menggunakan sarana selama mungkin tanpa menggantinya",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam sebuah kantor pemerintahan jaringan internet dan sistem telekomunikasi termasuk dalam kategori",
    pilihan: [
      "Sarana karena digunakan langsung dalam pekerjaan administratif",
      "Prasarana karena mendukung sarana lainnya dalam bekerja",
      "Barang habis pakai",
      "Inventaris kantor yang tidak memerlukan pemeliharaan",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana cara terbaik untuk mengoptimalkan penggunaan sarana dan prasarana kantor agar lebih efisien",
    pilihan: [
      "Menggunakan peralatan secara berlebihan",
      "Mengabaikan perawatan fasilitas",
      "Melakukan inventarisasi berkala dan memastikan pemanfaatan sesuai kebutuhan",
      "Menghindari penggunaan teknologi",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah pernyataan yang paling tepat mencerminkan prinsip efektivitas dalam pelayanan publik",
    pilihan: [
      "Pelayanan yang diberikan harus sesuai dengan standar yang berlaku",
      "Masyarakat dapat mengakses informasi layanan dengan mudah dan terbuka",
      "Setiap pelayanan harus dilakukan dengan biaya serendah mungkin",
      "Layanan yang diberikan harus mencapai tujuan dengan sumber daya yang tersedia",
    ],
    jawaban: 3
  },
  {
    soal: "Apa fungsi utama dari buku kendali sarana dan prasarana dalam operasional perkantoran di pemerintahan",
    pilihan: [
      "Sebagai dokumen pendukung dalam audit keuangan",
      "Untuk mencatat pengeluaran anggaran secara rinci",
      "Alat kontrol penggunaan dan pemeliharaan aset kantor",
      "Untuk mengelola daftar pegawai yang menggunakan fasilitas kantor",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu pendekatan dalam meningkatkan kualitas layanan publik adalah model SERVQUAL yang terdiri dari dimensi berikut, kecuali",
    pilihan: [
      "Tangibles (berwujud)",
      "Responsive (daya tanggap)",
      "Reliability (keandalan)",
      "Creativity (kreativitas)",
    ],
    jawaban: 3
  },
  {
    soal: "Apa bentuk paling konkret dari partisipasi masyarakat dalam konsep good government pada pelayanan publik",
    pilihan: [
      "Membantu pegawai layanan operasional dalam tugasnya",
      "Mengawasi dan memberikan masukan terhadap kebijakan layanan",
      "Memberikan donasi untuk meningkatkan kualitas layanan",
      "Mematuhi semua peraturan tanpa memberikan kritik",
    ],
    jawaban: 1
  },
  {
    soal: "Apa yang harus dilakukan oleh operator layanan operasional ketika menemukan ketidaksesuaian antara data dalam buku kendali dengan kondisi fisik aset",
    pilihan: [
      "Langsung memperbarui data tanpa verifikasi tambahan",
      "Melaporkan ketidaksesuaian kepada atasan dan mengajukan verifikasi lebih lanjut",
      "Mengabaikan ketidaksesuaian karena bukan tanggung jawab operator",
      "Menghapus data lama dan menggantinya dengan data terbaru tanpa dokumentasi",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam sistem kearsipan pemerintahan, dokumen yang harus disimpan secara permanen termasuk",
    pilihan: [
      "Surat permohonan cuti pegawai",
      "Bukti pembayaran listrik instansi",
      "Dokumen peraturan dan keputusan pejabat negara",
      "Jadwal kegiatan harian pegawai",
    ],
    jawaban: 2
  },
  {
    soal: "Apa yang dimaksud dengan prinsip akuntabilitas dalam pencatatan buku kendali sarana dan prasarana",
    pilihan: [
      "Setiap aset harus dapat diaudit dan dipertanggungjawabkan penggunaannya",
      "Setiap pegawai harus memiliki akses penuh ke semua aset kantor",
      "Data aset boleh diubah oleh siapa saja yang memiliki tanggung jawab operasional",
      "Penggunaan aset tidak perlu dicatat jika dilakukan oleh pejabat tinggi",
    ],
    jawaban: 0
  },
  {
    soal: "Prinsip 'the right man in the right place' dalam manajemen SDM pemerintahan bertujuan untuk",
    pilihan: [
      "Menempatkan pegawai sesuai kompetensinya",
      "Mendistribusikan pekerjaan secara merata",
      "Memberikan sanksi bagi pegawai yang tidak disiplin",
      "Meningkatkan jumlah pegawai di setiap unit",
    ],
    jawaban: 0
  },
  {
    soal: "Apa tujuan utama dari analisis beban kerja dalam instansi pemerintahan",
    pilihan: [
      "Menilai apakah jumlah pegawai yang ada sudah mencukupi",
      "Menganalisis efektivitas pengeluaran keuangan",
      "Mengurangi jumlah pegawai yang tidak diperlukan",
      "Memastikan setiap pegawai memiliki beban kerja yang sama",
    ],
    jawaban: 0
  },
  {
    soal: "Apa faktor utama yang menentukan keberhasilan implementasi digitalisasi layanan (SPBE)",
    pilihan: [
      "Kemampuan masyarakat menggunakan layanan online",
      "Anggaran yang tersedia untuk pengadaan teknologi",
      "Kebijakan dan komitmen pimpinan instansi",
      "Ketersediaan perangkat keras dan lunak",
    ],
    jawaban: 2
  },
  {
    soal: "Apa langkah yang harus dilakukan dalam prosedur pencatatan barang yang baru diterima dalam buku kendali sarana dan prasarana",
    pilihan: [
      "Langsung mendistribusikan barang tanpa pencatatan",
      "Mencatat barang sesuai dengan spesifikasi dan sumber pengadaannya",
      "Menunggu hingga barang digunakan sebelum dicatat",
      "Mencatat barang hanya jika ada permintaan dari atasan",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam kode etik ASN, seorang operator layanan operasional harus mengutamakan",
    pilihan: [
      "Kepentingan pimpinan di atas segalanya",
      "Kepuasan masyarakat dalam pelayanan",
      "Efisiensi anggaran dibandingkan kualitas layanan",
      "Menjalankan tugas sesuai arahan tanpa mempertanyakan",
    ],
    jawaban: 1
  },
  {
    soal: "Jika seorang pegawai menyalahgunakan wewenangnya untuk memperoleh keuntungan pribadi dalam pelayanan publik, pelanggaran yang terjadi adalah",
    pilihan: [
      "Maladministrasi",
      "Nepotisme",
      "Korupsi",
      "Kolusi",
    ],
    jawaban: 2
  },
  {
    soal: "Bagaimana cara terbaik untuk mengelola aset kantor yang sudah tidak dapat digunakan lagi",
    pilihan: [
      "Langsung membuang aset tanpa dokumentasi",
      "Menjual aset secara pribadi untuk mengurangi beban kantor",
      "Mengajukan proses penghapusan aset sesuai regulasi yang berlaku",
      "Menyimpan aset tanpa penggunaan sebagai cadangan",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama yang harus dilakukan oleh operator layanan operasional saat menghadapi keluhan masyarakat adalah",
    pilihan: [
      "Membantah keluhan yang dirasa tidak valid",
      "Memproses keluhan sesuai SOP yang berlaku",
      "Menyampaikan keluhan kepada atasan terlebih dahulu",
      "Mengabaikan jika keluhan tidak memiliki bukti",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam kondisi darurat layanan publik, pegawai harus memastikan bahwa",
    pilihan: [
      "Layanan dihentikan sementara hingga situasi normal",
      "Masyarakat diberitahu bahwa layanan terganggu",
      "Langkah-langkah mitigasi segera diterapkan",
      "Semua keputusan harus menunggu instruksi pimpinan",
    ],
    jawaban: 2
  },
  {
    soal: "Analisis SWOT dalam perbaikan layanan operasional bertujuan untuk",
    pilihan: [
      "Menyusun kebijakan baru dalam layanan",
      "Menganalisis kekuatan, kelemahan, peluang, dan ancaman",
      "Menilai kepuasan masyarakat terhadap layanan",
      "Meningkatkan efisiensi layanan melalui teknologi",
    ],
    jawaban: 1
  },
  {
    soal: "Perawatan fasilitas layanan publik sebaiknya dilakukan berdasarkan prinsip",
    pilihan: [
      "Dilakukan hanya saat terjadi kerusakan",
      "Dijalankan secara berkala dan terencana",
      "Dilakukan setelah masyarakat mengajukan komplain",
      "Menunggu persetujuan pimpinan sebelum perbaikan",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu metode yang efektif untuk meningkatkan kepuasan pengguna layanan adalah",
    pilihan: [
      "Menyediakan layanan dengan harga mahal untuk meningkatkan kualitas",
      "Mengurangi interaksi langsung dengan masyarakat",
      "Meningkatkan empati dan keterampilan komunikasi petugas",
      "Menghilangkan layanan tatap muka dan beralih ke sistem online",
    ],
    jawaban: 2
  },
  {
    soal: "Strategi paling efektif untuk menangani pelanggan yang marah dalam komunikasi pelayanan publik adalah",
    pilihan: [
      "Menjawab dengan nada tinggi untuk menunjukkan ketegasan",
      "Menunda respon hingga pelanggan lebih tenang",
      "Mendengarkan dengan aktif dan memberikan solusi konkret",
      "Menyalahkan pelanggan jika keluhannya tidak valid",
    ],
    jawaban: 2
  },
  {
    soal: "Indikator utama dalam menilai keberhasilan suatu layanan publik adalah",
    pilihan: [
      "Kepuasan masyarakat, efektivitas, dan efisiensi",
      "Kecepatan layanan, jumlah pegawai, dan biaya operasional",
      "Jumlah layanan yang diberikan dan anggaran yang digunakan",
      "Banyaknya keluhan masyarakat yang masuk",
    ],
    jawaban: 0
  },
  {
    soal: "Langkah evaluasi yang tepat jika sebuah unit layanan memiliki waktu penyelesaian lebih lama dari standar yang ditetapkan adalah",
    pilihan: [
      "Meningkatkan jumlah pegawai tanpa mengubah prosedur",
      "Menyederhanakan proses layanan dan mengurangi birokrasi",
      "Menunda layanan tertentu untuk fokus pada layanan prioritas",
      "Menambahkan lebih banyak prosedur untuk memastikan akurasi",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu keunggulan utama penerapan e-government dalam pelayanan publik adalah",
    pilihan: [
      "Meningkatkan jumlah pegawai yang dibutuhkan",
      "Mengurangi interaksi antara pegawai dengan masyarakat",
      "Meningkatkan transparansi dan efisiensi layanan",
      "Memungkinkan layanan dijalankan tanpa kebijakan pemerintah",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama yang harus dilakukan jika terjadi kehilangan atau kerusakan aset yang tercatat dalam buku kendali sarana dan prasarana adalah",
    pilihan: [
      "Langsung mengganti aset yang hilang dengan dana pribadi",
      "Melaporkan kehilangan atau kerusakan kepada atasan dan membuat berita acara",
      "Menghapus aset dari daftar inventaris tanpa proses administrasi",
      "Mencatat kehilangan atau kerusakan tetapi tidak perlu dilaporkan",
    ],
    jawaban: 1
  },
  {
    soal: "Tujuan utama dari sistem pengaduan masyarakat dalam pelayanan publik adalah",
    pilihan: [
      "Memudahkan masyarakat untuk melaporkan ketidakpuasan mereka",
      "Menyaring keluhan agar hanya yang serius yang ditindaklanjuti",
      "Mengurangi interaksi langsung antara masyarakat dan pegawai",
      "Menghindari kritik terhadap instansi pemerintahan",
    ],
    jawaban: 0
  },
  {
    soal: "Keunggulan utama pengelolaan arsip digital dibanding arsip fisik adalah",
    pilihan: [
      "Arsip digital tidak bisa hilang",
      "Arsip digital tidak membutuhkan perawatan khusus",
      "Arsip digital lebih mudah diakses dan dicari",
      "Arsip fisik selalu lebih lambat dalam pemrosesan",
    ],
    jawaban: 2
  },
  {
    soal: "Kategori aset yang memiliki umur pakai lebih dari 1 tahun dan bernilai ekonomis tinggi disebut",
    pilihan: [
      "Barang habis pakai",
      "Barang milik pribadi",
      "Barang modal",
      "Barang konsumsi",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu prinsip utama dalam reformasi birokrasi adalah",
    pilihan: [
      "Memperbanyak jumlah pegawai untuk mengoptimalkan layanan",
      "Mengurangi anggaran layanan publik untuk efisiensi",
      "Meningkatkan akuntabilitas dan transparansi layanan",
      "Menghapus sistem pengawasan dalam pelayanan publik",
    ],
    jawaban: 2
  },
  {
    soal: "Manfaat utama keterbukaan informasi publik adalah",
    pilihan: [
      "Mengurangi kewajiban pemerintah untuk menjelaskan kebijakan",
      "Membantu masyarakat dalam mengawasi kinerja pemerintah",
      "Membatasi akses masyarakat terhadap kebijakan pemerintah",
      "Mengurangi kebutuhan akan layanan publik yang transparan",
    ],
    jawaban: 1
  },
  {
    soal: "Prinsip utama dalam pengelolaan keuangan layanan publik adalah",
    pilihan: [
      "Fleksibilitas tanpa batas dalam penggunaan anggaran",
      "Transparansi dan akuntabilitas dalam pengelolaan dana",
      "Menggunakan anggaran hanya untuk kepentingan internal",
      "Mengutamakan belanja modal dibandingkan operasional",
    ],
    jawaban: 1
  },
  {
    soal: "Prinsip pengadaan barang dan jasa pemerintah adalah",
    pilihan: [
      "Efisien, transparan, dan akuntabel",
      "Murah, cepat, dan tanpa regulasi",
      "Fleksibel, tidak diaudit, dan berbasis kebutuhan internal",
      "Berdasarkan hubungan baik dengan penyedia",
    ],
    jawaban: 0
  },
  {
    soal: "Prinsip efisiensi dalam pengelolaan sarana dan prasarana perkantoran pemerintah adalah",
    pilihan: [
      "Menggunakan aset dengan cara yang dapat memberikan manfaat maksimal dengan biaya minimal",
      "Menggunakan aset tanpa mempertimbangkan anggaran",
      "Memastikan hanya pegawai tertentu yang dapat menggunakan aset",
      "Mengurangi jumlah aset yang dibeli tanpa mempertimbangkan kebutuhan",
    ],
    jawaban: 0
  },
  {
    soal: "Siapa yang bertanggung jawab memastikan aset yang tercatat sesuai dengan kondisi di lapangan dalam buku kendali sarana dan prasarana",
    pilihan: [
      "Pegawai umum yang menggunakan aset",
      "Operator layanan operasional atau petugas inventarisasi",
      "Bendahara kantor",
      "Kepala kepegawaian",
    ],
    jawaban: 1
  },
  {
    soal: "Tujuan utama dari stock opname dalam pengelolaan sarana dan prasarana perkantoran pemerintah adalah",
    pilihan: [
      "Menentukan nilai jual aset yang sudah tidak digunakan",
      "Menyesuaikan jumlah aset yang tersedia dengan pencatatan dalam buku kendali",
      "Menghapus aset lama tanpa proses administrasi",
      "Mengurangi jumlah barang yang diinventarisasi",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah paling awal dalam proses inventarisasi sarana dan prasarana adalah",
    pilihan: [
      "Menyusun laporan kondisi aset yang tersedia",
      "Melakukan pencatatan barang sesuai kode inventaris",
      "Mengidentifikasi dan mengklasifikasikan barang inventaris",
      "Memeriksa kesesuaian jumlah barang dengan dokumen aset",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen yang digunakan untuk mencatat perubahan kondisi aset menurut PMK No. 181/2016 adalah",
    pilihan: [
      "Kartu inventaris ruangan (KIR)",
      "Buku induk inventaris",
      "Laporan penghapusan aset",
      "Kartu pemeliharaan dan perbaikan",
    ],
    jawaban: 3
  },
  {
    soal: "Aset yang sudah tidak dapat digunakan dan tidak layak diperbaiki harus",
    pilihan: [
      "Dipindah tangankan ke unit lain yang membutuhkan",
      "Dihapuskan melalui mekanisme penghapusan aset",
      "Dimasukkan kembali ke dalam daftar inventaris",
      "Dijual kepada pihak ketiga tanpa prosedur",
    ],
    jawaban: 1
  },
  {
    soal: "Apa faktor utama yang menyebabkan pencatatan aset menjadi tidak akurat",
    pilihan: [
      "Terlalu sering dilakukan pemeriksaan fisik aset",
      "Penggunaan sistem pencatatan manual tanpa digitalisasi",
      "Pengelolaan aset oleh tim yang sudah berpengalaman",
      "Penerapan prosedur standar operasional yang ketat",
    ],
    jawaban: 1
  },
  {
    soal: "Bagaimana pengelolaan aset yang masih layak digunakan tetapi tidak terpakai dalam satu unit kerja menurut PP No. 27/2014",
    pilihan: [
      "Dijual untuk menambah anggaran operasional",
      "Dihapus dari daftar inventaris unit tersebut",
      "Dialihkan ke unit kerja lain yang membutuhkan",
      "Dibiarkan dalam daftar inventaris hingga dibutuhkan kembali",
    ],
    jawaban: 2
  },
  {
    soal: "Prinsip utama efisiensi dalam penggunaan sarana dan prasarana kantor adalah",
    pilihan: [
      "Menggunakan peralatan kantor hanya saat jam kerja",
      "Memastikan setiap pegawai memiliki fasilitas kerja yang sama",
      "Menyesuaikan penggunaan sarana dengan kebutuhan kerja yang optimal",
      "Mengutamakan fasilitas yang lebih canggih tanpa mempertimbangkan anggaran",
    ],
    jawaban: 2
  },
  {
    soal: "Solusi terbaik saat ruang rapat sudah dipesan semua adalah",
    pilihan: [
      "Membatalkan rapat",
      "Menggunakan ruangan lain tanpa izin",
      "Menggunakan fasilitas virtual meeting jika memungkinkan",
      "Meminta unit lain membatalkan rapatnya",
    ],
    jawaban: 2
  },
  {
    soal: "Cara terbaik mengelola penggunaan alat-alat kantor agar tidak terjadi pemborosan adalah",
    pilihan: [
      "Membatasi jumlah alat kantor yang digunakan pegawai",
      "Melakukan pemantauan dan pencatatan penggunaan alat kantor secara berkala",
      "Memberikan kebebasan kepada setiap pegawai",
      "Mengutamakan penggunaan alat kantor lama",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah efektif mengatasi kerusakan peralatan kantor akibat penggunaan yang tidak sesuai prosedur adalah",
    pilihan: [
      "Membatasi akses pegawai terhadap peralatan kantor",
      "Memberikan sanksi kepada pegawai",
      "Mengadakan pelatihan penggunaan alat kantor bagi pegawai",
      "Mengurangi pengadaan alat baru",
    ],
    jawaban: 2
  },
  {
    soal: "Keuntungan utama penggunaan fasilitas bersama (resource sharing) adalah",
    pilihan: [
      "Mengurangi kebutuhan koordinasi antar pegawai",
      "Menekan biaya operasional dengan optimalisasi penggunaan fasilitas",
      "Memastikan setiap pegawai memiliki akses alat kerja pribadi",
      "Mengurangi pengadaan alat-alat baru secara permanen",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah pertama sebelum melakukan perbaikan fasilitas yang rusak adalah",
    pilihan: [
      "Menunggu laporan dari pegawai",
      "Langsung mengganti fasilitas dengan yang baru",
      "Melakukan inspeksi dan pencatatan kondisi sarana dan prasarana secara berkala",
      "Mengajukan anggaran baru",
    ],
    jawaban: 2
  },
  {
    soal: "Metode pemeliharaan paling efektif untuk menjaga sarana tetap dalam kondisi baik adalah",
    pilihan: [
      "Perbaikan hanya setelah terjadi kerusakan parah",
      "Pemeliharaan preventif secara berkala untuk mencegah kerusakan",
      "Mengganti semua fasilitas setiap tahun",
      "Mengabaikan kerusakan kecil",
    ],
    jawaban: 1
  },
  {
    soal: "Jadwal pemeliharaan rutin ditentukan berdasarkan",
    pilihan: [
      "Anggaran yang tersedia setiap tahun",
      "Tingkat urgensi dan kebutuhan operasional",
      "Keinginan pegawai terhadap kenyamanan kerja",
      "Hasil diskusi informal antar pegawai",
    ],
    jawaban: 1
  },
  {
    soal: "Prosedur tepat jika perangkat kantor mengalami kerusakan ringan adalah",
    pilihan: [
      "Langsung mengganti dengan perangkat baru",
      "Melakukan identifikasi kerusakan dan perbaikan sesuai prosedur standar",
      "Menunggu hingga kerusakan semakin parah",
      "Menghentikan penggunaan perangkat",
    ],
    jawaban: 1
  },
  {
    soal: "Dokumen untuk mencatat hasil pemeliharaan sarana dan prasarana adalah",
    pilihan: [
      "Kartu inventaris barang",
      "Berita acara serah terima barang",
      "Kartu pemeliharaan dan perbaikan",
      "Buku induk aset tetap",
    ],
    jawaban: 2
  },
  {
    soal: "Seorang tukang mebel membuat 12 meja dalam 6 hari. Jika membuat 18 meja, waktu yang diperlukan adalah",
    pilihan: [
      "8 hari",
      "9 hari",
      "10 hari",
      "12 hari",
    ],
    jawaban: 1
  },
  {
    soal: "Ketika terjadi perbedaan antara fisik sarana dan dokumen pengantar, langkah yang tidak tepat dilakukan operator adalah",
    pilihan: [
      "Melakukan pencatatan selisih dalam log buku harian",
      "Menginformasikan kepada pejabat pengadaan",
      "Menyesuaikan data dokumen agar sesuai dengan barang",
      "Menolak pencatatan sebelum klarifikasi resmi",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu indikator kepatuhan prosedural dalam penerimaan dokumen sarana dan prasarana adalah",
    pilihan: [
      "Dokumen diketik dalam format Microsoft Word standar",
      "Dokumen telah ditandatangani semua pihak terkait dan distempel",
      "Dokumen disimpan secara pribadi oleh operator",
      "Dokumen disusun berdasarkan urutan fisik barang",
    ],
    jawaban: 1
  },
  {
    soal: "Apa akibat dari tidak mengarsifkan dokumen sarana dan prasarana dengan sistematis",
    pilihan: [
      "Tidak berdampak karena semua dokumen juga dikirim secara digital",
      "Proses audit internal menjadi lebih cepat",
      "Rentan terhadap kehilangan informasi penting untuk pertanggungjawaban",
      "Memberikan fleksibilitas lebih kepada operator",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen pengadaan sarana dianggap valid apabila",
    pilihan: [
      "Telah dicetak dengan kertas berlogo instansi",
      "Telah diverifikasi, lengkap, ditandatangani, dan sesuai aturan",
      "Diberikan langsung oleh vendor terpercaya",
      "Disimpan oleh kepala seksi",
    ],
    jawaban: 1
  },
  {
    soal: "Fungsi utama dari berita acara serah terima dokumen (BAST) adalah",
    pilihan: [
      "Bukti pengeluaran anggaran operasional",
      "Dokumen pelengkap untuk pengajuan perjalanan dinas",
      "Bukti legal bahwa proses penyerahan telah terjadi sesuai prosedur",
      "Formulir pelaporan ke Kementerian Keuangan",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah paling awal yang wajib dilakukan oleh petugas operator saat menerima dokumen fisik sarana dan prasarana dari pihak penyedia adalah",
    pilihan: [
      "Membuat berita acara penerimaan barang",
      "Memeriksa kondisi fisik barang berdasarkan spesifikasi teknis",
      "Mengarsifkan dokumen dalam sistem digital",
      "Memverifikasi kesesuaian dokumen dengan daftar pengadaan",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam konteks pemeriksaan administratif, dokumen sarana dan prasarana dinyatakan tidak lengkap apabila",
    pilihan: [
      "Tidak terdapat tanda tangan penyedia barang",
      "Tidak mencantumkan kode barang sesuai e-katalog",
      "Tidak dilampirkan foto barang",
      "Tidak disertai dengan faktur pajak asli",
    ],
    jawaban: 0
  },
  {
    soal: "Jika operator menemukan dokumen yang berbeda format dari ketentuan instansi, maka langkah yang paling tepat adalah",
    pilihan: [
      "Mengembalikan dokumen dan menolak proses pemeriksaan",
      "Mengubah format dokumen agar sesuai lalu meneruskannya",
      "Melaporkan perbedaan format kepada pejabat terkait",
      "Menandatangani dokumen jika substansi sudah benar",
    ],
    jawaban: 2
  },
  {
    soal: "Ketika operator menemukan bahwa nomor surat pada dokumen berbeda dengan sistem digital, tindakan yang tidak sesuai aturan adalah",
    pilihan: [
      "Melakukan koreksi langsung di dokumen fisik",
      "Menandai dokumen sebagai tidak sinkron",
      "Melakukan pencocokan ulang dengan penyedia",
      "Menunda verifikasi sambil menunggu klarifikasi",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam proses pemeriksaan dokumen, berita acara serah terima dianggap sah apabila",
    pilihan: [
      "Ditandatangani oleh operator dan penyedia saja",
      "Disertai dengan foto kegiatan serah terima",
      "Ditandatangani oleh semua pihak terkait dan distempel resmi",
      "Dilampirkan setelah proses audit keuangan selesai",
    ],
    jawaban: 2
  },
  {
    soal: "Penggunaan tinta selain warna hitam atau biru dalam mencatat buku kendali bisa berisiko karena",
    pilihan: [
      "Buku kendali akan terlihat lebih berwarna dan tidak formal",
      "Tidak akan bisa dibaca oleh mesin scanner",
      "Bisa dianggap tidak sah menurut aturan administrasi standar",
      "Mudah pudar dan tidak bisa dibaca oleh operator lain",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam kasus pencatatan dokumen ke dalam buku kendali, operator mencatat data barang berdasarkan dugaannya sendiri. Hal ini dapat menyebabkan",
    pilihan: [
      "Ketidaksesuaian data dengan dokumen pendukung",
      "Terhindarnya kelambatan pelaporan keuangan",
      "Percepatan distribusi barang ke unit kerja",
      "Tercapainya efisiensi manajemen barang",
    ],
    jawaban: 0
  },
  {
    soal: "Saat mencatat barang ke dalam buku kendali, operator tidak menemukan nomor surat pengantar. Tindakan yang paling sesuai prosedur adalah",
    pilihan: [
      "Mengisi dengan nomor surat sebelumnya",
      "Meninggalkan kolom kosong dan melanjutkan pencatatan",
      "Meminta salinan surat pengantar yang sah dari penyedia",
      "Mengganti dengan nomor faktur sebagai pengganti",
    ],
    jawaban: 2
  },
  {
    soal: "Apabila operator melakukan koreksi pada buku kendali, maka cara koreksi yang diakui secara administrasi adalah",
    pilihan: [
      "Menghapus dengan correction pen lalu menulis ulang",
      "Mencoret dengan satu garis, beri paraf dan tulis data yang benar",
      "Menulis ulang seluruh entry di halaman baru",
      "Mengosongkan bagian tersebut dan menunggu arahan",
    ],
    jawaban: 1
  },
  {
    soal: "Tujuan utama dari pencatatan dokumen sarana dan prasarana ke dalam buku kendali adalah",
    pilihan: [
      "Menjadi dasar penghitungan tunjangan kinerja",
      "Menjadi acuan laporan keuangan kas daerah",
      "Menjadi bukti pengeluaran anggaran langsung",
      "Menjamin keterlacakan akuntabilitas dan bukti transaksi administratif",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah pertama yang wajib dilakukan oleh operator layanan sebelum mendistribusikan sarana dan prasarana ke unit terkait adalah",
    pilihan: [
      "Melakukan pengecekan kondisi fisik barang",
      "Mencatat barang ke dalam buku distribusi",
      "Menyiapkan berita acara serah terima",
      "Memastikan barang telah diterima dari penyedia",
    ],
    jawaban: 0
  },
  {
    soal: "Dokumen utama yang harus dibuat dan dilampirkan saat operator mendistribusikan barang ke unit lain adalah",
    pilihan: [
      "Faktur pembelian dari vendor",
      "Surat permintaan barang dari kepala unit",
      "Berita acara distribusi barang atau serah terima",
      "Laporan realisasi anggaran pengadaan",
    ],
    jawaban: 2
  },
  {
    soal: "Jika barang didistribusikan tanpa adanya pencatatan atau dokumentasi, resiko paling serius yang mungkin terjadi adalah",
    pilihan: [
      "Barang tidak digunakan sesuai fungsinya",
      "Laporan keuangan menjadi terlambat",
      "Barang tidak tercatat dalam sistem aset negara",
      "Unit penerima tidak mengetahui asal barang",
    ],
    jawaban: 2
  },
  {
    soal: "Operator harus mencocokkan data barang dengan dokumen distribusi. Manakah yang tidak wajib dicocokkan",
    pilihan: [
      "Jenis dan jumlah barang",
      "Lokasi penyimpanan sementara",
      "Nomor surat pengantar",
      "Unit penerima",
    ],
    jawaban: 1
  },
  {
    soal: "Distribusi sarana ke unit-unit kerja harus dilakukan berdasarkan",
    pilihan: [
      "Rekomendasi dari vendor",
      "Jadwal distribusi tahunan yang berlaku",
      "Surat permintaan resmi dari unit terkait dan persetujuan pimpinan",
      "Arahan langsung dari staf teknis lapangan",
    ],
    jawaban: 2
  },
  {
    soal: "Inventarisasi barang sarana dan prasarana harus dilakukan secara berkala berdasarkan ketentuan",
    pilihan: [
      "Setiap bulan setelah tutup buku anggaran",
      "Setiap 3 tahun anggaran berjalan",
      "Setiap awal dan akhir tahun anggaran",
      "Setiap kali ada rotasi kepala unit",
    ],
    jawaban: 2
  },
  {
    soal: "Jenis barang yang termasuk dalam inventarisasi sarana dan prasarana meliputi",
    pilihan: [
      "Barang habis pakai dan dokumen dinas",
      "Alat tulis kantor dan makanan rapat",
      "Semua barang yang dibeli dari APBN atau APBD tanpa kecuali",
      "Barang modal dan barang inventaris non habis pakai",
    ],
    jawaban: 3
  },
  {
    soal: "Fungsi kode barang dalam proses inventarisasi adalah",
    pilihan: [
      "Sebagai identitas administratif untuk distribusi internal",
      "Untuk menentukan nilai tukar barang saat pelelangan",
      "Untuk membedakan barang milik instansi pusat dan daerah",
      "Sebagai penanda unik yang membedakan satu barang dari lainnya",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pelaksanaan inventarisasi jika ditemukan barang yang tidak terdaftar dalam KIB dan tidak memiliki dokumen pendukung maka langkah yang tepat adalah",
    pilihan: [
      "Menyimpannya tanpa mencatat agar tidak memicu temuan",
      "Langsung memasukkan ke dalam KIB sebagai temuan baru",
      "Mengusulkan barang sebagai hasil hibah tidak tercatat",
      "Melaporkan temuan tersebut untuk verifikasi legalitasnya",
    ],
    jawaban: 3
  },
  {
    soal: "Tujuan akhir dari proses inventarisasi barang oleh operator adalah",
    pilihan: [
      "Memastikan semua unit menerima barang yang dianggarkan",
      "Menentukan berapa besar anggaran tambahan yang dibutuhkan",
      "Menyediakan data akurat untuk pelaporan aset dan pertanggungjawaban",
      "Mencocokkan pengadaan barang dengan kebutuhan pegawai",
    ],
    jawaban: 2
  },
  {
    soal: "Tanggung jawab utama operator layanan operasional dalam pengelolaan penggunaan barang inventaris adalah",
    pilihan: [
      "Menyimpan barang yang tidak digunakan dalam jangka panjang",
      "Mengatur distribusi barang sesuai permintaan vendor",
      "Menyusun dan mengelola jadwal penggunaan barang secara efisien",
      "Menyusun pengadaan barang baru untuk menggantikan yang lama",
    ],
    jawaban: 2
  },
  {
    soal: "Barang inventaris yang digunakan oleh unit kerja harus dicatat dalam",
    pilihan: [
      "Buku peminjaman atau register penggunaan barang",
      "Daftar pengeluaran barang ATK",
      "Buku tamu internal",
      "Laporan anggaran keuangan bulanan",
    ],
    jawaban: 0
  },
  {
    soal: "Jika suatu unit meminta penggunaan barang inventaris untuk kegiatan tertentu, operator wajib",
    pilihan: [
      "Menyerahkan barang tanpa proses administrasi",
      "Menyusun berita acara pengembalian terlebih dahulu",
      "Menunggu perintah langsung dari kepala bagian umum",
      "Memverifikasi kelayakan dan ketersediaan barang tersebut",
    ],
    jawaban: 3
  },
  {
    soal: "Penggunaan barang inventaris harus mempertimbangkan prinsip",
    pilihan: [
      "Fleksibilitas unit pengguna",
      "Kebutuhan mendesak setiap staf",
      "Efektivitas, efisiensi, dan akuntabilitas",
      "Keinginan pimpinan unit kerja",
    ],
    jawaban: 2
  },
  {
    soal: "Jika terjadi penggunaan barang inventaris tanpa persetujuan operator atau tanpa pencatatan, maka",
    pilihan: [
      "Barang tetap dapat digunakan jika untuk kepentingan dinas",
      "Tanggung jawab sepenuhnya berada di staf pengguna",
      "Barang dianggap tidak digunakan secara sah",
      "Penggunaan tetap dicatat belakangan oleh operator",
    ],
    jawaban: 2
  },
  {
    soal: "Surat resmi yang digunakan untuk permohonan penggunaan barang inventaris secara sementara adalah",
    pilihan: [
      "Surat keterangan penggunaan barang",
      "Surat izin peminjaman inventaris",
      "Nota dinas pendistribusian barang",
      "Surat permohonan penggunaan barang (SPPB)",
    ],
    jawaban: 3
  },
  {
    soal: "Setiap penggunaan barang inventaris oleh staf harus dilandasi prinsip",
    pilihan: [
      "Kepemilikan pribadi sementara",
      "Rotasi antar pegawai",
      "Tanggung jawab penggunaan yang terdata",
      "Fleksibilitas selama jam kerja",
    ],
    jawaban: 2
  },
  {
    soal: "Operator layanan bertanggung jawab terhadap penggunaan barang oleh unit kerja kecuali",
    pilihan: [
      "Memberi arahan teknis penggunaan barang",
      "Mengatur jadwal pemakaian bersama",
      "Menetapkan sanksi atas kerusakan barang",
      "Mencatat waktu peminjaman dan pengembalian",
    ],
    jawaban: 2
  },
  {
    soal: "Ketika barang inventaris telah dikembalikan operator harus",
    pilihan: [
      "Segera mendistribusikannya ke unit berikutnya",
      "Melaporkan ke bagian keuangan",
      "Melakukan pengecekan kondisi dan mencatat pengembalian",
      "Menyimpan barang tanpa perlu diperiksa ulang",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah barang yang tidak termasuk barang inventaris yang harus diatur penggunaannya secara ketat",
    pilihan: [
      "Laptop kerja dinas",
      "Proyektor rapat",
      "Printer kantor",
      "Pulpen dan kertas memo",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah awal yang paling tepat dilakukan oleh operator sebelum mengatur penggunaan sarana dan prasarana adalah",
    pilihan: [
      "Melaporkan seluruh daftar kebutuhan ke pimpinan unit",
      "Menyusun jadwal pengadaan baru",
      "Melakukan pendataan terhadap ketersediaan dan kondisi sarana prasarana",
      "Mengalokasikan langsung barang ke unit-unit yang membutuhkan",
    ],
    jawaban: 2
  },
  {
    soal: "Jika ada beberapa unit kerja yang mengajukan permintaan penggunaan ruang rapat yang sama, operator harus",
    pilihan: [
      "Menyerahkan keputusan ke pimpinan tertinggi",
      "Memberikan secara bergiliran sesuai urutan surat masuk",
      "Menolak salah satu permintaan secara acak",
      "Menganalisis urgensi dan menyusun prioritas berdasarkan kebutuhan strategis",
    ],
    jawaban: 3
  },
  {
    soal: "Dokumen formal yang biasa digunakan untuk mencatat penggunaan sarana seperti kendaraan dinas atau ruang kerja adalah",
    pilihan: [
      "Nota dinas pengadaan",
      "Surat keputusan peminjaman barang",
      "Formulir penggunaan sarana prasarana dan berita acara",
      "Laporan evaluasi penggunaan harian",
    ],
    jawaban: 2
  },
  {
    soal: "Prinsip utama dalam pengaturan penggunaan sarana dan prasarana oleh operator adalah",
    pilihan: [
      "Efisiensi kemanfaatan dan akuntabilitas",
      "Kecepatan distribusi dan kemudahan pengguna",
      "Kepentingan pribadi, pengguna dan fleksibilitas kerja",
      "Keamanan barang dan rotasi internal antar pegawai",
    ],
    jawaban: 0
  },
  {
    soal: "Salah satu indikator bahwa operator berhasil mengatur penggunaan sarana dan prasarana dengan baik adalah",
    pilihan: [
      "Seluruh unit mendapatkan barang baru setiap tahun",
      "Tidak ada permintaan yang ditolak selama setahun",
      "Tingkat kerusakan barang dan konflik pemanfaatan rendah",
      "Semua barang disimpan di gudang dan tidak digunakan",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu tanggung jawab utama operator layanan operasional dalam memeriksa sarana dan prasarana adalah memastikan bahwa",
    pilihan: [
      "Sarana dan prasarana tersedia sesuai anggaran",
      "Kondisi sarana dan prasarana sesuai spesifikasi teknis",
      "Seluruh inventaris digunakan setiap hari",
      "Seluruh dokumen pengadaan telah diarsifkan",
    ],
    jawaban: 1
  },
  {
    soal: "Jika ditemukan peralatan yang tidak berfungsi saat pengecekan berkala, langkah pertama yang paling tepat dilakukan oleh operator adalah",
    pilihan: [
      "Mengganti langsung dengan peralatan baru",
      "Membuat laporan resmi kepada atasan",
      "Menghapus dari daftar inventaris",
      "Menyimpan kembali peralatan ke gudang",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam melakukan pemeriksaan sarana dan prasarana, dokumen apa yang paling penting untuk memastikan kesesuaian dengan perencanaan awal",
    pilihan: [
      "Berita acara pemeriksaan",
      "Surat jalan pengiriman barang",
      "Rencana kebutuhan barang milik negara",
      "Surat keputusan pengadaan",
    ],
    jawaban: 2
  },
  {
    soal: "Pemeriksaan sarana dan prasarana harus mempertimbangkan prinsip akuntabilitas. Apa makna prinsip ini dalam konteks tersebut",
    pilihan: [
      "Operator harus membuat berita acara untuk setiap temuan",
      "Operator perlu tanggung jawab penuh atas pengadaan barang",
      "Seluruh hasil pemeriksaan harus dapat dipertanggungjawabkan secara administratif dan teknis",
      "Operator bebas menentukan metode pemeriksaan",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah indikator efektivitas dalam pelaksanaan pemeriksaan sarana dan prasarana",
    pilihan: [
      "Semua barang telah tercatat dalam SIMAK BMN",
      "Proses pemeriksaan dilakukan dalam waktu singkat",
      "Semua ruang kerja bersih dan terorganisir",
      "Laporan pemeriksaan mengidentifikasi kondisi aktual dan rekomendasi perbaikan",
    ],
    jawaban: 3
  },
  {
    soal: "Tanggung jawab utama operator dalam pemeliharaan sarana dan prasarana meliputi",
    pilihan: [
      "Penggantian barang secara langsung tanpa laporan",
      "Perencanaan pengadaan barang baru setiap bulan",
      "Pencatatan kondisi barang dan pelaporan kerusakan",
      "Pemberian sanksi kepada pengguna barang yang lalai",
    ],
    jawaban: 2
  },
  {
    soal: "Saat operator menemukan AC kantor mengalami gangguan fungsi, langkah awal yang paling prosedural adalah",
    pilihan: [
      "Menunggu perintah dari atasan",
      "Menghubungi teknisi eksternal secara langsung",
      "Mengisi formulir permintaan perbaikan dan melaporkannya",
      "Menghentikan penggunaan dan melepas AC tersebut",
    ],
    jawaban: 2
  },
  {
    soal: "Tujuan utama dari kegiatan pemeliharaan sarana dan prasarana adalah",
    pilihan: [
      "Menghindari pengawasan dari inspektorat",
      "Menurunkan biaya operasional jangka pendek",
      "Mengurangi beban kerja pegawai pengguna",
      "Menjamin keberlangsungan fungsi dan umur pakai aset",
    ],
    jawaban: 3
  },
  {
    soal: "Jenis pemeliharaan yang dilakukan secara rutin dan bersifat preventif disebut",
    pilihan: [
      "Pemeliharaan korektif",
      "Pemeliharaan reaktif",
      "Pemeliharaan prediktif",
      "Pemeliharaan preventif",
    ],
    jawaban: 3
  },
  {
    soal: "Manakah yang bukan termasuk contoh kegiatan pemeliharaan ringan",
    pilihan: [
      "Pengecekan baut dan sekrup meja kerja",
      "Pelumasan engsel pintu ruangan arsip",
      "Penggantian unit AC karena rusak total",
      "Pembersihan filter air dispenser",
    ],
    jawaban: 2
  },
  {
    soal: "Peminjaman barang hanya bisa dilakukan jika",
    pilihan: [
      "Ada persetujuan lisan dari kepala ruangan",
      "Tidak ada kegiatan lain di hari tersebut",
      "Barang tersedia, layak pakai dan sudah tercatat",
      "Barang tersebut belum pernah dipinjam dalam 1 bulan terakhir",
    ],
    jawaban: 2
  },
  {
    soal: "Berikut ini bukan merupakan tanggung jawab operator dalam proses layanan peminjaman sarana prasarana adalah",
    pilihan: [
      "Mengatur jadwal peminjaman",
      "Menyusun dan mengarsifkan formulir peminjaman",
      "Melakukan pemeriksaan fisik barang setelah dikembalikan",
      "Menentukan sanksi kepada peminjam yang melanggar aturan",
    ],
    jawaban: 3
  },
  {
    soal: "Barang yang telah dikembalikan dari peminjaman sebaiknya segera",
    pilihan: [
      "Dicatat sebagai barang baru",
      "Disimpan di tempat semula dan diperiksa kondisinya",
      "Dipinjamkan kembali tanpa pemeriksaan",
      "Dihapus dari daftar penggunaan",
    ],
    jawaban: 1
  },
  {
    soal: "Ketika terjadi permintaan peminjaman barang oleh pihak luar instansi, operator wajib",
    pilihan: [
      "Langsung menolak tanpa pengecekan",
      "Memberikan persetujuan lisan",
      "Meminta surat izin resmi dari pimpinan instansi",
      "Menyediakan barang dengan catatan waktu terbatas",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu kendala yang sering dihadapi operator dalam layanan peminjaman sarana adalah",
    pilihan: [
      "Barang terlalu banyak untuk dipinjamkan sekaligus",
      "Pengguna tidak memahami prosedur peminjaman",
      "Barang terlalu baru sehingga sulit dicatat",
      "Operator tidak memiliki akses ke data BMN",
    ],
    jawaban: 1
  },
  {
    soal: "Dalam konteks e-government berikut ini adalah kombinasi sarana dan prasarana yang tepat",
    pilihan: [
      "Jaringan internet, website layanan publik",
      "Website layanan publik, gedung pelayanan terpadu",
      "Server data, peraturan pelaksana",
      "Sistem informasi digital, karyawan front office",
    ],
    jawaban: 0
  },
  {
    soal: "Ketika kantor pemerintah mengalami keterlambatan pelayanan akibat kerusakan AC dan pencahayaan, maka yang terdampak adalah aspek",
    pilihan: [
      "Sarana digital",
      "Prasarana fisik",
      "Sarana SDM",
      "Prasarana administratif",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu indikator bahwa sarana kantor pemerintah digunakan secara efisien adalah",
    pilihan: [
      "Semua alat kantor dipakai setiap hari",
      "Tidak ada alat yang rusak dalam setahun",
      "Tingkat pemakaian alat sesuai dengan beban kerja",
      "Seluruh pegawai memiliki laptop masing-masing",
    ],
    jawaban: 2
  },
  {
    soal: "Jika sebuah kantor pemerintah mengalami penumpukan dokumen dan alat kantor tidak tertata, maka masalah utama terletak pada",
    pilihan: [
      "Kelebihan sarana",
      "Ketidakteraturan alur kerja",
      "Ketiadaan prasarana penyimpanan yang memadai",
      "Kelebihan pegawai",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu pendekatan dalam peningkatan sarana dan prasarana kantor pemerintah adalah prinsip",
    pilihan: [
      "Diversifikasi keuangan",
      "Reduksi kebutuhan pegawai",
      "Penurunan anggaran pemeliharaan",
      "Efektivitas investasi aset",
    ],
    jawaban: 3
  },
  {
    soal: "Petugas operator menerima dokumen pengadaan sarana dari pihak ketiga. Langkah pertama yang paling tepat sesuai dengan prinsip akuntabilitas adalah",
    pilihan: [
      "Melaporkan penerimaan dokumen kepada atasan langsung",
      "Menyimpan dokumen di tempat yang aman",
      "Memverifikasi kelengkapan dan legalitas dokumen",
      "Menandatangani tanda terima dan mengarsifkan",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam proses pencatatan dokumen sarana dan prasarana operator diwajibkan menggunakan sistem digital yang terintegrasi. Hal ini bertujuan untuk",
    pilihan: [
      "Memudahkan pengarsipan manual oleh staf pengelola",
      "Menyederhanakan prosedur audit internal tanpa laporan manual",
      "Memastikan data terdokumentasi, terdigitalisasi, dan dapat dilacak",
      "Meningkatkan keterbatasan akses publik terhadap dokumen",
    ],
    jawaban: 2
  },
  {
    soal: "Jika terdapat dokumen yang tidak sesuai spesifikasi teknis yang ditentukan, langkah operator yang paling sesuai adalah",
    pilihan: [
      "Menandatangani dokumen untuk mempercepat proses",
      "Menolak dokumen secara sepihak dan tidak mencatat kejadian",
      "Menyimpan dokumen tanpa tindakan lebih lanjut",
      "Melaporkan ketidaksesuaian dan meminta klarifikasi tertulis",
    ],
    jawaban: 3
  },
  {
    soal: "Salah satu risiko administratif yang dapat muncul jika dokumen sarana tidak diperiksa secara cermat oleh operator adalah",
    pilihan: [
      "Terhambatnya penyerapan anggaran",
      "Meningkatnya performa laporan tahunan",
      "Meningkatnya jumlah pegawai",
      "Bertambahnya stok barang berkualitas tinggi",
    ],
    jawaban: 0
  },
  {
    soal: "Peran petugas operator dalam proses kontrol dokumen sarana dan prasarana sangat krusial karena",
    pilihan: [
      "Ia bertanggung jawab penuh atas anggaran yang digunakan",
      "Ia menjadi pihak yang mengatur jadwal distribusi barang",
      "Ia bertugas sebagai verifikator awal yang menjaga integritas proses",
      "Ia dapat memutuskan penerima manfaat dari pengadaan",
    ],
    jawaban: 2
  },
  {
    soal: "Fungsi operator dalam memastikan keabsahan dokumen pengadaan barang mencakup hal berikut kecuali",
    pilihan: [
      "Mencocokkan spesifikasi teknis dengan dokumen penawaran",
      "Memastikan dokumen sesuai peraturan presiden terkait pengadaan",
      "Melakukan pemeriksaan ke lapangan untuk uji fungsi barang",
      "Memastikan semua dokumen terdokumentasi secara digital",
    ],
    jawaban: 2
  },
  {
    soal: "Operator menemukan dokumen dengan cap instansi yang buram dan tidak jelas. Langkah profesional yang dapat diambil adalah",
    pilihan: [
      "Menolak dokumen secara permanen",
      "Mengarsifkan dokumen tanpa catatan",
      "Meminta dokumen pengganti dengan cap yang sah",
      "Menandatangani sebagai bentuk penerimaan sementara",
    ],
    jawaban: 2
  },
  {
    soal: "Apa risiko utama bila operator mengabaikan inkonsistensi dokumen saat pemeriksaan awal",
    pilihan: [
      "Potensi temuan audit dan sanksi administratif meningkat",
      "Penyedia barang memperoleh keuntungan lebih",
      "Penggunaan sistem digital menjadi tidak efektif",
      "Arsip menjadi terlalu besar untuk dikelola",
    ],
    jawaban: 0
  },
  {
    soal: "Ketika dokumen sarana dan prasarana diterima dalam format digital dan cetak, operator wajib",
    pilihan: [
      "Mengutamakan pemeriksaan dokumen digital karena lebih praktis",
      "Membandingkan keduanya dan memastikan kesesuaian",
      "Mengarsifkan dokumen cetak saja karena bersifat resmi",
      "Memverifikasi dokumen cetak dan mengabaikan versi digital",
    ],
    jawaban: 1
  },
  {
    soal: "Seorang operator menemukan bahwa jumlah barang dalam dokumen lebih banyak dari yang diterima. Tindakan yang tepat adalah",
    pilihan: [
      "Mencoret jumlah dalam dokumen agar sesuai barang",
      "Menyimpan dokumen dan menunggu instruksi",
      "Melaporkan selisih kepada tim verifikasi dan mencatat temuan",
      "Menandatangani dokumen sebagai bukti penerimaan",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama yang paling tepat dilakukan oleh operator sebelum mencatat dokumen sarana dan prasarana ke dalam buku kendali adalah",
    pilihan: [
      "Memastikan dokumen telah ditandatangani oleh kepala unit",
      "Melakukan verifikasi kelengkapan dan kesesuaian dokumen",
      "Mencetak dokumen digital untuk arsip manual",
      "Menginput data barang langsung ke spreadsheet digital",
    ],
    jawaban: 1
  },
  {
    soal: "Manakah di bawah ini yang paling mencerminkan fungsi buku kendali dalam proses administrasi sarana dan prasarana",
    pilihan: [
      "Sebagai media penyimpanan dokumen pengadaan",
      "Sebagai alat pelaporan ke unit keuangan",
      "Sebagai catatan resmi transaksi penerimaan dan pengeluaran barang",
      "Sebagai lembar disposisi internal antar bagian",
    ],
    jawaban: 2
  },
  {
    soal: "Jika operator mencatat dokumen pada buku kendali dengan nomor urut yang sama dengan entry sebelumnya, maka yang berpotensi terjadi adalah",
    pilihan: [
      "Efisiensi dalam pelacakan data meningkat",
      "Pengarsipan menjadi lebih sederhana",
      "Terjadi duplikasi data yang bisa memicu temuan audit",
      "Validasi internal berjalan lebih cepat",
    ],
    jawaban: 2
  },
  {
    soal: "Informasi wajib yang harus dicatat oleh operator dalam buku kendali antara lain adalah",
    pilihan: [
      "Nama barang, nama supplier, dan kondisi ruangan",
      "Nomor surat pengantar, tanggal terima, dan jumlah barang",
      "Harga satuan, volume ruangan, dan nama penerima barang",
      "Tanggal pembelian, nama vendor, dan lokasi penyimpanan",
    ],
    jawaban: 1
  },
  {
    soal: "Jika operator lupa mencatat satu dokumen penting ke dalam buku kendali, maka konsekuensi yang paling mungkin terjadi adalah",
    pilihan: [
      "Barang tidak bisa digunakan oleh unit kerja",
      "Barang dianggap tidak sah dalam laporan aset",
      "Sistem keuangan akan langsung menghapus data tersebut",
      "Kepala unit akan mencatat ulang atas nama operator",
    ],
    jawaban: 1
  },
  {
    soal: "Ketika unit penerima tidak berada di tempat saat distribusi dilakukan, maka operator layanan harus",
    pilihan: [
      "Menitipkan barang ke unit terdekat",
      "Menunda distribusi dan menjadwalkan ulang",
      "Meninggalkan barang di lokasi dan membuat dokumentasi",
      "Mengembalikan barang ke vendor",
    ],
    jawaban: 1
  },
  {
    soal: "Pencatatan distribusi barang ke unit penerima biasanya dilakukan dalam",
    pilihan: [
      "Buku kendali keluar",
      "Buku kas umum",
      "Laporan evaluasi sarana",
      "Register inventaris akhir tahun",
    ],
    jawaban: 0
  },
  {
    soal: "Apa yang tidak boleh dilakukan operator layanan dalam proses distribusi sarana dan prasarana",
    pilihan: [
      "Membantu menata barang di lokasi penerima",
      "Mengubah jumlah barang pada dokumen distribusi secara sepihak",
      "Menyerahkan barang sesuai jadwal yang telah ditentukan",
      "Memastikan tanda tangan penerima diperoleh",
    ],
    jawaban: 1
  },
  {
    soal: "Jika operator mendistribusikan sarana ke unit yang tidak tercantum dalam daftar penerima resmi, maka potensi risiko yang muncul adalah",
    pilihan: [
      "Barang akan digunakan lebih cepat",
      "Kegiatan operasional menjadi lebih efisien",
      "Terjadi penyalahgunaan barang dan ketidaksesuaian alokasi",
      "Sistem distribusi menjadi lebih fleksibel",
    ],
    jawaban: 2
  },
  {
    soal: "Distribusi barang dari operator ke unit lain dinyatakan sah dan lengkap jika",
    pilihan: [
      "Barang diterima dan didokumentasikan secara lisan",
      "Ada komunikasi WhatsApp sebagai bukti pengiriman",
      "Terdapat berita acara, tanda tangan penerima, dan pencatatan pada sistem atau buku",
      "Barang sudah tidak ada lagi di gudang",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah pertama yang dilakukan operator sebelum melakukan inventarisasi barang adalah",
    pilihan: [
      "Mendistribusikan formulir isian ke seluruh unit kerja",
      "Melaporkan hasil inventarisasi sebelumnya",
      "Melakukan pengecekan terhadap daftar barang existing",
      "Menginput data barang ke sistem aset",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen yang menjadi acuan utama bagi operator dalam kegiatan inventarisasi adalah",
    pilihan: [
      "Surat permintaan barang",
      "Berita acara distribusi terakhir",
      "Kartu inventaris barang (KIB)",
      "Dokumen pengadaan dari penyedia",
    ],
    jawaban: 2
  },
  {
    soal: "Salah satu tujuan utama dari inventarisasi berkala adalah",
    pilihan: [
      "Menyesuaikan barang dengan anggaran pengadaan",
      "Mempermudah distribusi barang antar unit kerja",
      "Menentukan pemusnahan aset yang tidak terpakai",
      "Menjamin akuntabilitas dan validitas data aset",
    ],
    jawaban: 3
  },
  {
    soal: "Dalam pelaksanaan inventarisasi barang yang ditemukan rusak berat harus dicatat dengan cara",
    pilihan: [
      "Dihapus dari daftar dan dimusnahkan langsung",
      "Ditandai sebagai barang hilang atau diinvestigasi",
      "Dipindahkan ke gudang cadangan oleh operator",
      "Dicatat sebagai barang non aktif dan dilaporkan untuk proses penghapusan",
    ],
    jawaban: 3
  },
  {
    soal: "Jika terdapat perbedaan antara catatan KIB dan kondisi riil barang, maka operator layanan wajib",
    pilihan: [
      "Mengubah data KIB tanpa menunggu persetujuan",
      "Mengisi catatan temuan dan melaporkannya",
      "Menyesuaikan barang dengan dokumen KIB",
      "Mencoret barang dari daftar dan menyimpan laporan",
    ],
    jawaban: 1
  },
  {
    soal: "Operator wajib melakukan pengecekan berkala terhadap penggunaan barang inventaris agar",
    pilihan: [
      "Barang lebih cepat diganti",
      "Barang selalu terlihat digunakan",
      "Mencegah kerusakan akibat kelalaian atau penggunaan berlebih",
      "Memastikan semua barang habis pakai tetap tersedia",
    ],
    jawaban: 2
  },
  {
    soal: "Jika barang inventaris digunakan di luar instansi, maka",
    pilihan: [
      "Tidak perlu dicatat karena untuk kegiatan resmi",
      "Dicatat sebagai peminjaman luar instansi dengan izin tertulis",
      "Diserahkan langsung ke panitia kegiatan",
      "Diganti dengan barang pribadi pegawai",
    ],
    jawaban: 1
  },
  {
    soal: "Setiap operator layanan harus melaporkan data penggunaan barang secara berkala kepada",
    pilihan: [
      "Sekretariat lembaga",
      "Pihak vendor terkait",
      "Kepala unit kerja dan tim pengelola aset",
      "Pejabat pelaksana teknis kegiatan",
    ],
    jawaban: 2
  },
  {
    soal: "Penggunaan barang yang tidak sesuai peruntukannya bisa mengakibatkan",
    pilihan: [
      "Efisiensi penggunaan barang meningkat",
      "Barang bertahan lebih lama",
      "Pengembalian barang lebih cepat",
      "Terjadinya kerusakan dan tidak tercapainya tujuan pengadaan",
    ],
    jawaban: 3
  },
  {
    soal: "Sistem informasi yang mendukung pengaturan penggunaan barang di banyak instansi pemerintah adalah",
    pilihan: [
      "SIPKD",
      "Simak BMN",
      "Sakti",
      "E-procurement",
    ],
    jawaban: 1
  },
  {
    soal: "Barang inventaris yang rusak ringan saat digunakan, langkah operator adalah",
    pilihan: [
      "Mencatat dan melaporkan kerusakan untuk diperbaiki",
      "Menghapus barang dari daftar inventaris",
      "Mengganti barang tersebut dengan barang baru",
      "Meminjam barang dari unit lain",
    ],
    jawaban: 0
  },
  {
    soal: "Jika permintaan penggunaan barang melebihi jumlah ketersediaan, maka operator harus",
    pilihan: [
      "Menolak permintaan tanpa penjelasan",
      "Memberikan barang secara bergiliran berdasarkan prioritas",
      "Mendistribusikan semua barang dan mencari pinjaman",
      "Membagi barang berdasarkan jumlah pegawai",
    ],
    jawaban: 1
  },
  {
    soal: "Salah satu indikator kinerja operator layanan dalam pengaturan barang adalah",
    pilihan: [
      "Banyaknya barang yang diminta pegawai",
      "Kecepatan belanja pengadaan",
      "Tingkat kerusakan barang selama masa pakai",
      "Jumlah barang yang belum didistribusikan",
    ],
    jawaban: 2
  },
  {
    soal: "Barang inventaris yang dialihkan ke pegawai untuk penggunaan pribadi di rumah harus",
    pilihan: [
      "Diberikan tanpa prosedur",
      "Dihibahkan melalui surat keputusan",
      "Dicatat sebagai barang keluar sementara dengan persetujuan tertulis",
      "Diberikan atas nama pengguna",
    ],
    jawaban: 2
  },
  {
    soal: "Tujuan utama pengaturan penggunaan barang inventaris oleh operator layanan operasional adalah",
    pilihan: [
      "Menambah beban kerja staf pengguna",
      "Memastikan distribusi barang merata",
      "Menjaga efisiensi, keamanan dan pertanggungjawaban aset",
      "Mengurangi permintaan pengadaan barang",
    ],
    jawaban: 2
  },
  {
    soal: "Jika ditemukan sarana yang digunakan tidak sesuai dengan prosedur, operator layanan operasional harus",
    pilihan: [
      "Mengambil alih barang tanpa konfirmasi",
      "Memberi sanksi langsung kepada pengguna",
      "Membiarkan selama barang tidak rusak",
      "Melaporkan kepada atasan dan mencatat pelanggaran dalam log penggunaan",
    ],
    jawaban: 3
  },
  {
    soal: "Peran penting operator layanan operasional dalam pengaturan prasarana gedung adalah",
    pilihan: [
      "Menjadwalkan perawatan dan pemakaian berdasarkan permintaan pengguna",
      "Menjaga keamanan gedung selama jam operasional",
      "Melakukan pengadaan fasilitas tambahan setiap kali ada permintaan",
      "Menyusun anggaran gedung secara mandiri",
    ],
    jawaban: 0
  },
  {
    soal: "Ketika penggunaan sarana melebihi kapasitas atau terjadi overbooking, operator sebaiknya",
    pilihan: [
      "Menyusun daftar tunggu berdasarkan urutan waktu permintaan",
      "Mengizinkan semua unit menggunakan barang secara bersamaan",
      "Menambah jumlah barang secara manual",
      "Memprioritaskan unit kerja yang memiliki anggaran lebih besar",
    ],
    jawaban: 0
  },
  {
    soal: "Tujuan dari pencatatan penggunaan sarana dan prasarana oleh operator adalah",
    pilihan: [
      "Memenuhi keinginan auditor internal",
      "Menyediakan data untuk pengajuan barang baru setiap bulan",
      "Menjamin keterlacakan evaluasi dan akuntabilitas penggunaan",
      "Membantu pengembangan sistem penggajian pegawai",
    ],
    jawaban: 2
  },
  {
    soal: "Apa akibat dari tidak adanya pengaturan penggunaan sarana dan prasarana oleh operator layanan operasional",
    pilihan: [
      "Meningkatnya efisiensi penggunaan",
      "Terbentuknya solidaritas antar unit",
      "Terjadinya konflik penggunaan dan kerusakan barang yang tidak terkendali",
      "Barang menjadi lebih cepat dibagikan",
    ],
    jawaban: 2
  },
  {
    soal: "Operator harus mengacu pada regulasi pengelolaan barang milik negara yaitu",
    pilihan: [
      "Peraturan Presiden 54/2010",
      "Peraturan Pemerintah Nomor 27 Tahun 2014",
      "Undang-undang Nomor 5 Tahun 2014",
      "Inpres Nomor 3",
    ],
    jawaban: 1
  },
  {
    soal: "Apa peran sistem informasi seperti SIMAK BMN dalam pemeriksaan sarana dan prasarana",
    pilihan: [
      "Menghapus barang yang rusak dari daftar",
      "Mengurangi beban kerja staf pengadaan",
      "Menyediakan data valid untuk memverifikasi keberadaan dan kondisi barang",
      "Membuat laporan keuangan tahunan",
    ],
    jawaban: 2
  },
  {
    soal: "Saat operator mendapati ketidaksesuaian antara data inventaris dan kondisi fisik di lapangan, langkah paling profesional adalah",
    pilihan: [
      "Menyesuaikan data dengan kondisi lapangan",
      "Melaporkan ketidaksesuaian dalam berita acara",
      "Menghapus data yang tidak sesuai",
      "Memindahkan barang ke lokasi yang sesuai data",
    ],
    jawaban: 1
  },
  {
    soal: "Operator menemukan kursi yang aus dan tidak layak pakai. Tindakan selanjutnya yang paling tepat adalah",
    pilihan: [
      "Mengganti langsung dengan kursi baru",
      "Melakukan penghapusan tanpa prosedur",
      "Mengusulkan pemeliharaan atau penghapusan sesuai prosedur",
      "Menyimpan di gudang sebagai cadangan",
    ],
    jawaban: 2
  },
  {
    soal: "Apa risiko utama jika operator tidak melakukan pemeriksaan sarana dan prasarana secara rutin",
    pilihan: [
      "Kelebihan anggaran tahunan",
      "Penurunan kinerja staf SDM",
      "Tidak tercapainya target pelayanan publik",
      "Berkurangnya jumlah pegawai",
    ],
    jawaban: 2
  },
  {
    soal: "Dalam pengelolaan pemeliharaan sarana dan prasarana pemerintah, dokumen penting untuk perawatan adalah",
    pilihan: [
      "Surat tugas pegawai",
      "Daftar presensi harian",
      "Manual penggunaan dan perawatan",
      "Daftar kebutuhan konsumsi kegiatan",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan yang tepat dalam konteks pemeliharaan untuk komputer yang lambat adalah",
    pilihan: [
      "Menonaktifkan komputer sampai ada penggantian",
      "Menghapus komputer dari inventaris aktif",
      "Melakukan instal ulang sistem secara mandiri tanpa prosedur",
      "Membersihkan file sampah dan menjalankan diagnosis perangkat lunak",
    ],
    jawaban: 3
  },
  {
    soal: "Prinsip 'value for money' dalam pengelolaan pemeliharaan sarana prasarana berarti",
    pilihan: [
      "Membeli barang semurah mungkin",
      "Memastikan biaya perawatan ditanggung pribadi",
      "Mengutamakan efisiensi, efektivitas, dan ekonomi dalam pengelolaan aset",
      "Menghindari penggunaan barang secara berlebihan",
    ],
    jawaban: 2
  },
  {
    soal: "Risiko terbesar jika peralatan kantor tidak diperiksa dan dirawat secara berkala adalah",
    pilihan: [
      "Produktivitas menurun dan biaya penggantian meningkat",
      "Anggaran kepegawaian meningkat",
      "Barang cepat hilang dari inventaris",
      "Pegawai menjadi terlalu bergantung pada teknologi",
    ],
    jawaban: 0
  },
  {
    soal: "Pemeliharaan sarana dan prasarana yang dilakukan oleh operator harus dilaporkan ke",
    pilihan: [
      "Pegawai senior",
      "Staf TU atau administrasi umum",
      "Kepala bagian perencanaan",
      "Pejabat pengelola barang milik negara (BMN)",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah awal yang tepat dilakukan operator saat menerima permohonan peminjaman sarana prasarana adalah",
    pilihan: [
      "Menyediakan barang yang diminta dan mencatatnya secara lisan",
      "Mengisi formulir pengajuan peminjaman atas nama pemohon",
      "Memeriksa ketersediaan barang dan mencocokkan dengan data inventaris",
      "Menyerahkan barang dan mencatat nomor inventaris di buku tulis",
    ],
    jawaban: 2
  },
  {
    soal: "Prinsip penting dalam pengelolaan peminjaman barang milik negara adalah",
    pilihan: [
      "Peminjaman wajib mengganti barang dengan jenis yang sama setelah digunakan",
      "Barang hanya dapat dipinjam oleh pihak luar instansi",
      "Barang yang dipinjam tetap dalam pengawasan operator",
      "Barang yang dipinjam tidak perlu dicatat ulang jika dikembalikan dalam 3 hari",
    ],
    jawaban: 2
  },
  {
    soal: "Formulir peminjaman barang harus memuat informasi kecuali",
    pilihan: [
      "Perkiraan usia barang",
      "Jenis dan jumlah barang",
      "Nama peminjam",
      "Waktu peminjaman dan pengembalian",
    ],
    jawaban: 0
  },
  {
    soal: "Jika barang yang dipinjam rusak saat digunakan, operator harus terlebih dahulu",
    pilihan: [
      "Menyusun laporan kehilangan barang",
      "Melaporkan kejadian kepada atasan dan membuat berita acara",
      "Memanggil teknisi untuk memperbaiki",
      "Menghapus barang dari daftar inventaris",
    ],
    jawaban: 1
  },
  {
    soal: "Fungsi utama dari pencatatan transaksi peminjaman sarana dan prasarana oleh operator adalah",
    pilihan: [
      "Untuk memudahkan proses penghapusan barang",
      "Untuk melaporkan kepada pegawai pemeliharaan",
      "Untuk keperluan audit dan pengawasan aset",
      "Untuk menambah jumlah barang dalam database",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah yang bukan termasuk sarana dalam konteks kantor pemerintah",
    pilihan: [
      "Komputer dan printer",
      "Kursi dan meja",
      "Bangunan kantor",
      "Alat komunikasi internal",
    ],
    jawaban: 2
  },
  {
    soal: "Prasarana kantor pemerintah yang mempengaruhi efektivitas koordinasi antar instansi lain adalah",
    pilihan: [
      "AC dan pencahayaan",
      "Jaringan LAN dan WAN",
      "Komputer server lokal",
      "Stok ATK",
    ],
    jawaban: 1
  },
  {
    soal: "Sarana berikut ini dianggap tidak efektif bila tidak didukung oleh prasarana yang memadai",
    pilihan: [
      "Mesin penghitung uang",
      "Aplikasi pengelolaan kepegawaian",
      "Proyektor presentasi",
      "Printer multifungsi",
    ],
    jawaban: 1
  },
  {
    soal: "Indikator utama kelayakan prasarana kantor pemerintah adalah",
    pilihan: [
      "Merek perangkat keras yang digunakan",
      "Estetika interior bangunan",
      "Kesesuaian fungsi dengan kebutuhan organisasi",
      "Kecepatan pengadaan sarana tambahan",
    ],
    jawaban: 2
  },
  {
    soal: "Pernyataan yang benar terkait hubungan antara sarana dan prasarana adalah",
    pilihan: [
      "Sarana tidak bisa berfungsi tanpa adanya prasarana yang sesuai",
      "Prasarana berfungsi lebih mandiri daripada sarana",
      "Sarana selalu berumur lebih lama dibanding prasarana",
      "Sarana tidak memiliki peran penting dalam pelayanan publik",
    ],
    jawaban: 0
  },
  {
    soal: "Dalam kerangka administrasi publik, manakah dari pilihan berikut yang paling tepat menggambarkan definisi sarana dalam instansi pemerintah?",
    pilihan: [
      "Sistem informasi kepegawaian",
      "Komputer, printer, dan alat tulis",
      "Gedung kantor pusat",
      "Jaringan jalan nasional",
    ],
    jawaban: 1
  },
  {
    soal: "Mengapa perbedaan klasifikasi sarana dan prasarana harus dijaga dalam perencanaan pembangunan instansi pemerintah?",
    pilihan: [
      "Untuk menyesuaikan kebutuhan pengguna",
      "Agar dapat menentukan hierarki struktural",
      "Supaya dapat menetapkan kategori program",
      "Untuk membedakan aset operasional dengan aset infrastruktur secara administratif dan fiskal",
    ],
    jawaban: 3
  },
  {
    soal: "Peralatan pendukung fungsi administrasi seperti komputer dan mesin fotokopi tergolong sebagai",
    pilihan: [
      "Prasarana",
      "Aset tidak terwujud",
      "Sarana",
      "Bagian dari infrastruktur",
    ],
    jawaban: 2
  },
  {
    soal: "Mengapa penting memisahkan secara eksplisit investasi pada sarana dan prasarana dalam tata kelola berbasis kinerja?",
    pilihan: [
      "Perbedaan proses pengadaan",
      "Perbedaan sifat komersial/publik",
      "Pencatatan dan evaluasi kinerjanya berbeda dalam sistem akuntabilitas publik",
      "Perbedaan subsidi anggaran",
    ],
    jawaban: 2
  },
  {
    soal: "Jaringan internet berkecepatan tinggi di kantor pelayanan publik dikategorikan sebagai",
    pilihan: [
      "Prasarana",
      "Sarana",
      "Aset lancar",
      "Aset tetap berwujud",
    ],
    jawaban: 0
  },
  {
    soal: "Manakah yang bukan termasuk prasarana dalam konteks pemerintahan daerah?",
    pilihan: [
      "Gedung pertemuan umum",
      "Jaringan transportasi publik",
      "Aplikasi kepegawaian berbasis web",
      "Sistem drainase kota",
    ],
    jawaban: 2
  },
  {
    soal: "Mana yang mencerminkan kesalahan pemahaman terhadap fungsi sarana?",
    pilihan: [
      "Sarana perlu disesuaikan dengan kebutuhan operasional",
      "Sarana penunjang langsung aktivitas kinerja ASN",
      "Sarana memerlukan pembaruan rutin",
      "Sarana merupakan elemen utama dalam perencanaan jangka panjang infrastruktur daerah",
    ],
    jawaban: 3
  },
  {
    soal: "Renovasi besar gedung pusat kementerian termasuk dalam",
    pilihan: [
      "Peningkatan sarana",
      "Penguatan sistem digitalisasi",
      "Pengembangan prasarana",
      "Pemeliharaan aset bergerak",
    ],
    jawaban: 2
  },
  {
    soal: "Apa hubungan pengelolaan sarana dengan peningkatan kinerja pelayanan publik?",
    pilihan: [
      "Sarana menentukan arah kebijakan",
      "Optimalisasi sarana meningkatkan efisiensi dan responsivitas pelayanan",
      "Sarana menggantikan peran regulasi",
      "Kinerja ditentukan volume pengadaan",
    ],
    jawaban: 1
  },
  {
    soal: "Risiko utama pengelolaan prasarana yang buruk dalam audit kinerja adalah",
    pilihan: [
      "Penurunan kualitas komunikasi internal",
      "Ketidaksesuaian realisasi anggaran",
      "Gangguan terhadap kesinambungan pelayanan lintas fungsi dan wilayah",
      "Penurunan partisipasi ASN",
    ],
    jawaban: 2
  },
  {
    soal: "Contoh prasarana strategis fisik dalam sektor pemerintahan adalah",
    pilihan: [
      "Server pusat data",
      "Sistem manajemen dokumen",
      "Gedung pengadilan tingkat provinsi",
      "Aplikasi administrasi kependudukan",
    ],
    jawaban: 2
  },
  {
    soal: "Manakah yang bukan termasuk sarana operasional langsung?",
    pilihan: [
      "Laptop dinas",
      "Kendaraan dinas operasional",
      "Meja dan kursi kerja",
      "Lift dalam gedung kantor",
    ],
    jawaban: 3
  },
  {
    soal: "Contoh prasarana nonfisik strategis pendukung interoperabilitas adalah",
    pilihan: [
      "Sistem informasi layanan terpadu",
      "Jaringan kabel serat optik milik pemerintah pusat",
      "Kendaraan layanan keliling",
      "Pengadaan generator cadangan",
    ],
    jawaban: 1
  },
  {
    soal: "Sarana yang berfungsi tidak langsung dalam struktur organisasi birokrasi adalah",
    pilihan: [
      "Perangkat lunak statistik",
      "Sistem drainase",
      "Komputer loket pelayanan",
      "Kursi tunggu bagi tamu pelayanan publik",
    ],
    jawaban: 3
  },
  {
    soal: "Prasarana dengan mobilitas rendah tetapi daya guna tinggi jangka panjang adalah",
    pilihan: [
      "Ruang arsip digital",
      "Aplikasi database ASN",
      "Bangunan unit pelayanan terpadu satu pintu (UPTSP)",
      "Mesin absensi",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan pertama petugas operator saat menerima dokumen sarana dari pihak ketiga adalah",
    pilihan: [
      "Melaporkan penerimaan",
      "Menyimpan dokumen",
      "Memverifikasi kelengkapan dan legalitas dokumen",
      "Menandatangani tanda terima",
    ],
    jawaban: 2
  },
  {
    soal: "Dokumen yang bukan dokumen pokok dalam prosedur penerimaan prasarana adalah",
    pilihan: [
      "Berita acara serah terima",
      "Faktur/invoice",
      "Surat jalan",
      "Daftar inventaris barang elektronik kementerian",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah tepat sebelum pencatatan digital prasarana adalah",
    pilihan: [
      "Memastikan data sesuai anggaran",
      "Melaporkan nilai barang ke akuntansi",
      "Mengisi formulir pemakaian",
      "Memverifikasi spesifikasi teknis dan kuantitas berdasarkan dokumen resmi",
    ],
    jawaban: 3
  },
  {
    soal: "Jika terjadi selisih jumlah antara dokumen dan fisik saat penerimaan perangkat jaringan, tindakan yang paling akuntabel adalah",
    pilihan: [
      "Menyelesaikan selisih internal",
      "Menerima apa adanya",
      "Menolak seluruh pengiriman",
      "Membuat catatan tertulis selisih jumlah dalam berita acara serah terima",
    ],
    jawaban: 3
  },
  {
    soal: "Kepada siapa dokumen serah terima harus disampaikan agar proses penganggaran berlanjut?",
    pilihan: [
      "Perencanaan strategis",
      "Kepala unit pengguna",
      "Subbagian kepegawaian",
      "Subbagian keuangan dan akuntansi",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah pertama prosedur resmi penerimaan sarana/prasarana adalah",
    pilihan: [
      "Mencatat nomor seri",
      "Menandatangani surat jalan",
      "Memeriksa fisik dan jumlah barang dengan dokumen pengadaan",
      "Menginformasikan bagian pengguna",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan paling tepat jika spesifikasi teknis tidak sesuai dokumen adalah",
    pilihan: [
      "Melanjutkan distribusi",
      "Lapor lisan",
      "Menyimpan barang",
      "Menyusun berita acara pemeriksaan dengan catatan ketidaksesuaian",
    ],
    jawaban: 3
  },
  {
    soal: "Dokumen dasar verifikasi awal petugas operator adalah",
    pilihan: [
      "Kuitansi",
      "Surat jalan",
      "Surat pesanan (purchase order)",
      "Berita acara pemeriksaan",
    ],
    jawaban: 2
  },
  {
    soal: "Prosedur jika dokumen tidak lengkap saat barang tiba adalah",
    pilihan: [
      "Menyusun berita acara penerimaan sementara (BAPS)",
      "Menyimpan tanpa proses",
      "Menolak seluruh barang",
      "Menyerahkan barang tanpa pencatatan",
    ],
    jawaban: 0
  },
  {
    soal: "Pemeriksaan non administratif wajib yang dilakukan pada prasarana sistem jaringan kabel adalah",
    pilihan: [
      "Cek nilai kontrak",
      "Uji fungsi dan pengecekan teknis bersama tim IT",
      "Verifikasi tanggal pesanan",
      "Periksa cap dokumen",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah paling tepat mencatat barang baru ke buku kendali adalah",
    pilihan: [
      "Urutan penerimaan",
      "Rekap di Excel",
      "Mencatat nama barang, spesifikasi, jumlah, tanggal, dan nomor dokumen",
      "Input laporan bulanan",
    ],
    jawaban: 2
  },
  {
    soal: "Elemen krusial untuk menjaga keterlacakan administratif dalam buku kendali adalah",
    pilihan: [
      "Nama penyedia",
      "Nama petugas",
      "Jumlah pemakaian",
      "Nomor kontrak pengadaan dan unit kerja pengguna",
    ],
    jawaban: 3
  },
  {
    soal: "Penanganan entry yang tidak lengkap karena dokumen hilang adalah",
    pilihan: [
      "Memberi tanda khusus dan catatan penjelasan sementara",
      "Mengarsip terpisah",
      "Menghapus entry",
      "Menyusun ulang buku",
    ],
    jawaban: 0
  },
  {
    soal: "Pentingnya pencatatan manual dan digital (ganda) adalah",
    pilihan: [
      "Sistem digital tidak untuk audit",
      "Pencatatan manual informal",
      "Menjamin kesinambungan data jika salah satu sistem gagal",
      "Pencatatan digital tidak rinci",
    ],
    jawaban: 2
  },
  {
    soal: "Tantangan utama pencatatan prasarana (gedung) adalah",
    pilihan: [
      "Tidak ada data teknis",
      "Tidak ada nomor seri",
      "Informasi kompleks",
      "Ukuran dan spesifikasi tidak tercantum dalam dokumen serah terima",
    ],
    jawaban: 3
  },
  {
    soal: "Informasi paling penting di buku kendali untuk memudahkan pencarian adalah",
    pilihan: [
      "Lokasi akhir dan penanggung jawab",
      "Nama pengguna",
      "Kode barang, jenis, tanggal, dan nomor dokumen pengadaan",
      "Harga satuan",
    ],
    jawaban: 2
  },
  {
    soal: "Sistem pencatatan barang yang banyak dan mirip untuk audit internal adalah",
    pilihan: [
      "Alfabet",
      "Mengelompokkan per jenis dan menambah kode klasifikasi",
      "Harga",
      "Unit kerja",
    ],
    jawaban: 1
  },
  {
    soal: "Konsekuensi hilangnya nomor dokumen referensi dalam pencatatan adalah",
    pilihan: [
      "Barang tidak bisa digunakan",
      "Dokumen tidak sah",
      "Barang tidak masuk anggaran",
      "Barang sulit ditelusuri saat pemeriksaan silang",
    ],
    jawaban: 3
  },
  {
    soal: "Strategi mencari data berdasarkan banyak parameter (jenis dan lokasi) adalah",
    pilihan: [
      "Entri tunggal",
      "Deskripsi bebas",
      "Menambahkan kolom referensi silang (kode lokasi dan subkategori)",
      "Warna tinta",
    ],
    jawaban: 2
  },
  {
    soal: "Data yang tidak boleh diubah saat migrasi dari manual ke digital adalah",
    pilihan: [
      "Format satuan",
      "Ukuran kolom",
      "Nomor referensi dokumen dan kode barang",
      "Warna kertas",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah awal distribusi sarana adalah",
    pilihan: [
      "Input sistem",
      "Susun berita acara",
      "Serahkan langsung",
      "Pastikan barang tercatat di buku kendali dan tersedia fisik",
    ],
    jawaban: 3
  },
  {
    soal: "Dokumen pendukung utama distribusi barang adalah",
    pilihan: [
      "Berita acara serah terima barang",
      "Faktur",
      "Surat tugas",
      "Formulir pemakaian",
    ],
    jawaban: 0
  },
  {
    soal: "Tindakan saat distribusi barang kekurangan jumlah dari permintaan adalah",
    pilihan: [
      "Menunda distribusi",
      "Membagi merata",
      "Distribusi sebagian dengan berita acara sementara",
      "Serahkan seluruh ke satu unit",
    ],
    jawaban: 2
  },
  {
    soal: "Acuan adil distribusi sarana adalah",
    pilihan: [
      "Data kebutuhan tahunan (RKAKL/RKPD)",
      "Estimasi pegawai",
      "Permintaan lisan",
      "Jadwal kegiatan",
    ],
    jawaban: 0
  },
  {
    soal: "Koordinasi penting sebelum distribusi AC adalah",
    pilihan: [
      "Bagian umum",
      "PPK",
      "Teknisi/bagian pemeliharaan",
      "Pengguna",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah awal inventarisasi yang sesuai prosedur adalah",
    pilihan: [
      "Verifikasi daftar barang yang sudah tercatat",
      "Rencana pemanfaatan",
      "Menandai barang rusak",
      "Membuat laporan kebutuhan",
    ],
    jawaban: 0
  },
  {
    soal: "Informasi krusial di buku inventaris adalah",
    pilihan: [
      "Tahun dan merek",
      "Spesifikasi teknis",
      "Kode barang, kondisi, dan unit kerja pengguna",
      "Harga dan status",
    ],
    jawaban: 2
  },
  {
    soal: "Penanganan barang inventaris yang tidak ditemukan adalah",
    pilihan: [
      "Hapus dari daftar",
      "Susun berita acara kehilangan",
      "Catat sebagai belum ditemukan dan telusuri lebih lanjut",
      "Minta pernyataan pemindahan",
    ],
    jawaban: 2
  },
  {
    soal: "Fungsi utama hasil inventarisasi adalah",
    pilihan: [
      "Dasar anggaran",
      "Perkiraan pegawai",
      "Acuan daftar pengguna",
      "Menyesuaikan anggaran pemeliharaan dan penghapusan aset",
    ],
    jawaban: 3
  },
  {
    soal: "Pedoman pelaksanaan inventarisasi BMN adalah",
    pilihan: [
      "Keputusan unit",
      "Arahan lisan",
      "Pedoman internal",
      "Peraturan Menteri Keuangan/Peraturan Teknis BMN",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah pertama operator menyelesaikan konflik ruang rapat adalah",
    pilihan: [
      "Menolak",
      "Mengalokasikan acak",
      "Mengkaji urgensi dan prioritas kebutuhan",
      "Memprioritaskan jabatan",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan strategis untuk komputer yang performanya menurun adalah",
    pilihan: [
      "Abaikan",
      "Lapor lisan",
      "Batasi pengguna",
      "Pemeliharaan preventif dan mencatat riwayat kerusakan",
    ],
    jawaban: 3
  },
  {
    soal: "Kebijakan efisiensi saat ruang stok alat kantor sering digunakan tanpa catatan adalah",
    pilihan: [
      "Sistem peminjaman berbasis formulir/digital",
      "Mengunci ruangan",
      "Melarang penggunaan",
      "Membeli jumlah besar",
    ],
    jawaban: 0
  },
  {
    soal: "Solusi untuk permintaan kendaraan dinas mendadak adalah",
    pilihan: [
      "Mengabaikan",
      "Menyediakan cadangan",
      "Menetapkan sistem prioritas dan sanksi",
      "Delegasi ke unit",
    ],
    jawaban: 2
  },
  {
    soal: "Sikap saat ada perintah mendadak menggunakan aula yang sudah dipesan pihak lain adalah",
    pilihan: [
      "Menolak",
      "Memaksa",
      "Mencari alternatif dan lapor atasan",
      "Berbagi ruang",
    ],
    jawaban: 2
  },
  {
    soal: "Kebijakan efisiensi printer yang boros adalah",
    pilihan: [
      "Menghapus printer",
      "Memberi batasan cetak per pegawai",
      "Mencetak di rumah",
      "Mengunci printer",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah inspeksi saat fasilitas terbatas adalah",
    pilihan: [
      "Acak",
      "Prioritas fasilitas vital",
      "Menunda",
      "Minta bantuan",
    ],
    jawaban: 1
  },
  {
    soal: "Tindakan saat alat pemadam kebakaran lewat masa kalibrasi adalah",
    pilihan: [
      "Menunggu anggaran",
      "Info ke pegawai",
      "Lapor tertulis dan usul rencana darurat sementara",
      "Menyembunyikan",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan saat fasilitas tidak terawat dan laporannya tidak direspons atasan adalah",
    pilihan: [
      "Media sosial",
      "Paksa perbaikan",
      "Membuat laporan evaluasi dampak dan sampaikan di forum internal",
      "Mengabaikan",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan jika dokumen arsip lembab/pipa bocor adalah",
    pilihan: [
      "Pindah dokumen",
      "Tutup akses",
      "Mengeringkan dan usul perbaikan pipa",
      "Biarkan",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah preventif AC bising adalah",
    pilihan: [
      "Tunggu rusak",
      "Lapor teknisi dan catat dalam log",
      "Atur jam",
      "Abaikan",
    ],
    jawaban: 1
  },
  {
    soal: "Langkah untuk audit fasilitas yang tidak terpelihara rutin adalah",
    pilihan: [
      "Pengadaan baru",
      "Menyusun jadwal pemeliharaan rutin berbasis ceklis",
      "Sewa tenaga",
      "Hapus fasilitas",
    ],
    jawaban: 1
  },
  {
    soal: "Penanganan gangguan listrik yang berulang adalah",
    pilihan: [
      "Ganti kabel",
      "Audit jaringan menyeluruh",
      "Larang alat",
      "Pindah soket",
    ],
    jawaban: 1
  },
  {
    soal: "Intervensi untuk perangkat yang sering rusak akibat salah prosedur adalah",
    pilihan: [
      "Menonaktifkan",
      "Sosialisasi panduan penggunaan",
      "Batasi jumlah orang",
      "Simpan ruang terkunci",
    ],
    jawaban: 1
  },
  {
    soal: "Tindakan saat dinding retak untuk pemeliharaan berbasis bukti adalah",
    pilihan: [
      "Cat ulang",
      "Isi semen",
      "Larang lewat",
      "Dokumentasi visual dan usul pemeriksaan teknis",
    ],
    jawaban: 3
  },
  {
    soal: "Langkah awal saat proyektor dipinjam mendadak namun sudah habis dipesan adalah",
    pilihan: [
      "Pinjamkan langsung",
      "Batalkan pesanan",
      "Opsi jadwal alternatif dan minta permintaan resmi",
      "Abaikan prosedur",
    ],
    jawaban: 2
  },
  {
    soal: "Langkah sistemik mengatasi peminjaman tanpa dokumentasi adalah",
    pilihan: [
      "Larang pinjam",
      "Formulir manual",
      "Susun SOP dan sistem pelacakan (aplikasi/log)",
      "Sanksi",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan untuk peminjaman laptop yang terlambat adalah",
    pilihan: [
      "Lapor instansi",
      "Pengingat resmi dan catat keterlambatan",
      "Sanksi potong gaji",
      "Hapus data",
    ],
    jawaban: 1
  },
  {
    soal: "Sistem prioritas kendaraan dinas adalah",
    pilihan: [
      "Senioritas",
      "Waktu masuk",
      "Urgensi dan kepentingan instansi",
      "Kedekatan",
    ],
    jawaban: 2
  },
  {
    soal: "Tindakan saat perangkat printer rusak saat dipinjam adalah",
    pilihan: [
      "Ganti sendiri",
      "Hapus data",
      "Simpan gudang",
      "Berita acara kerusakan dan lapor teknis",
    ],
    jawaban: 3
  },
  {
    soal: "Prosedur permintaan barang dari unit tidak resmi adalah",
    pilihan: [
      "Konfirmasi ke pimpinan",
      "Proses",
      "Tolak",
      "Terima",
    ],
    jawaban: 0
  },
  {
    soal: "Efisiensi permintaan barang adalah",
    pilihan: [
      "Tolak semua",
      "Template permintaan standar",
      "Isi sendiri",
      "Abaikan",
    ],
    jawaban: 1
  },
  {
    soal: "Evaluasi sistem jika barang tidak sesuai permintaan adalah",
    pilihan: [
      "Biarkan",
      "Salahkan",
      "Tinjau ulang sistem pencatatan dan verifikasi",
      "Kurangi",
    ],
    jawaban: 2
  },
  {
    soal: "Kontrol untuk unit yang belum mengembalikan barang adalah",
    pilihan: [
      "Tolak sementara sampai barang kembali",
      "Abaikan",
      "Larang",
      "Sebar pelanggaran",
    ],
    jawaban: 0
  },
  {
    soal: "Usulan perbaikan sistem peminjaman jangka panjang adalah",
    pilihan: [
      "Komunikasi lisan",
      "Sistem digital terintegrasi",
      "Formulir manual",
      "Kurangi sarana",
    ],
    jawaban: 1
  }
];
