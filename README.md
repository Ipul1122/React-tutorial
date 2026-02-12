**Branch component-and-props** 
- Membuat form login and register
- menggunakan konsep atomic design
- dibuat hingga tidak bisa lagi dipecah
- component berfungsi untuk parent
- parent berfungsi untuk children menggunakan props

**Branch React Router**
- npm i react-router-dom
- berfungsi untuk pindah beberapa halaman
- App.jsx sudah tidak digunakan 
- Langsung di main.jsx untuk merender halmana
- Pakai library LINK to untuk pindah halaman tanpa reload

**React Conditional Rendering**
- Component dibuat terpisah dan dijadikan satu ke dalam AuthLayouts.jsx

**Nested Component**
- Dimana component memiliki component di dalamnya
- Dalam component dipecah beberapa props seperti dibuat component baru yaitu header, body dan footer
- tiap component yang dipecah memiliki fungsi tersendiri
- component CardProduct dapat direusable

**Rendering List**
- Menyederhanakan value component parent dibuat array
- Menggunakan method .map untuk rendering data di dalam array

**Event Handler**
- Suatu fitur yang dapat diinteraksi seperti button 
- Button dari formLogin dapat diinteraksi
- menggunakan preventDefault untuk input ke localstorage
- menggunakan removeItem untuk logout 

**State**
- State adalah data dinamis di dalam komponen yang memicu re-render saat berubah
- Sebuah memori yang dimiliki componenet 
- Datanya bisa berubah-ubah 

**UseState**
- menambahkan state (data dinamis) ke dalam functional component.
- useState adalah Hook (fungsi khusus) yang digunakan dalam functional component untuk membuat, menyimpan, dan memperbarui state tersebut.

**LifeCycle**
- Disebut juga sebagai siklus hidup, sama halnya manusia.
- setiap component di dalam React memiliki 3 tahap yaitu mounting, update, unmounting
- Mounting => Dimana fase diciptakan atau mulai seperti inisialisasi
- Updating => proses dimana hasilnya berkembang, perubahan
- Unmouting => Ketika component dihancurkan atau tidak ditampilkan di sisi client-side
- Ada 2 tipe dalam lifecycle yaitu Render Phase dan Commit Phase
- Render Phase => Pure tidak bisa diubah-ubah
- Commit Phase => Bisa dapat melakukan update, scheduling, dom Dll.
- projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

**UseEffect**
- Dapat memanipulasi component, untuk melakukan sync component
- Menggunakan metode yang ada di lifecycle

**UseRef**
- Sebuah hook yang memiliki beberapa fungsi
- Referensi Values sama halnya seperti useState bisa menyimpan data di dalamnya namun bedanya jika menggunakan Ref tidak melakukan reRender Component
- Studi kasus : formLogin tidak perlu cursor ke form untuk mengarahkan, otomatis sudah di dalam form
