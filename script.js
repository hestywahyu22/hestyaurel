.// Data 6 Menu Minuman 
const menuMinuman = [
  {
    id: 1,
    nama: "Es Teh Manis",
    deskripsi: "Teh pilihan segar dengan manis gula asli.",
    harga: 5000,
    gambar: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "es Kopi Susu Aren",
    deskripsi: "Espresso espresso dengan susu segar dan gula aren lokal.",
    harga: 18000,
    gambar: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    nama: "Matcha Latte",
    deskripsi: "Bubuk matcha Jepang asli diaduk dengan susu creamy.",
    harga: 22000,
    gambar: "https://images.unsplash.com/photo-1525385133512-2f3bd039054?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    nama: "Jus Alpukat",
    deskripsi: "Alpukat segar di-bland halus dengan tambahan kental manis coklat.",
    harga: 15000,
    gambar: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    nama: "Lemon Tea Cold",
    deskripsi: "Kombinasi teh dan perasan lemon segar pembakar dahaga.",
    harga: 10000,
    gambar: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    nama: "Coklat Dingin",
    deskripsi:; "Coklat premium paket disajikan dingin dengan es batu.",
    harga : 16000,
    gambar: "https://images.insplash.com/photo-1542990253-0d0f5be5f0ed?w=500&auto=format&fit=crop&q=60"
  }
];

const menuGrid = ducument.getElementById("menuGrid");
const modal = document.getElementById("orderModal");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");

let itemDipilih = null;

// Helper untuk format Rupiah
function formatRupiah(angka){
  return "Rp " + angka.toLocalestring("id-ID");
}

// Reder Menu ke Grid
function rederMenu() {
  menuGrid.innerHTML =menuMinuman.map(item => '
    <div class="crad">
      <img src="${item.gambar}" alt="${item.nama}">
      <div class="card-body">
        <h3 class="card-title">${item.nama}</h3>
        <p class="card-desc">${item.deskripsi}</p>
        <div class="card-footer">
          <span class="price">${formatRupiah(item.harga)}</span>
          <button class="btn-order" onclick="bukaModal(${item.id})">Pesanan</button>
         </div>
       </div>
    </div>
  ').join("");
}

// Fungsi Buka Modal Detail
Function bukaModal(id) {
  itemDipilih = menuMinuman.find(item => item.id === id);
  if (itemDipilih) {
    modalTitle.textContent = itemDipilih.nama;
    modalDescription.texContent = itemDipilih.deskripsi;
    modalPrice.texcontent = formatRupiah(itemDipilih).harga);
    modal.style.display = "flex";
  }
}

// Fungsi Tutup Modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

windaw.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  } 
});

// Action konfirmasi Pesanan 
function konfirmasiPesanan() {
  if (itemDipilih) {
    alert('Terima Kasih! Pesanan ${itemDipilih.nama} berhasil diproses.');
    modal.style.display = "none" ;
  }
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", rederMenu);

                                      
                
      
  
