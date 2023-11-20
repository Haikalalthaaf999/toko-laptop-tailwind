const namaLaptop = document.querySelector('#nama-laptop')
const deskripsiLaptop = document.querySelector('#deskripsi-laptop')
const hargaLaptop = document.querySelector('#harga-laptop')
const nomorLaptop = document.querySelector('#nomor-laptop')
const maxLaptop = document.querySelector('#maksimal-laptop')
const gambarLaptop = document.querySelector('#gambar-laptop') // Fungsi Hamburger
const hamburger = document.querySelector('#hamburger')
const navigation = document.querySelector('#navigation')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navigation.classList.toggle('hidden')
})

// Data Laptop
const laptop = [{
        nama: 'MSI 15 - A11S',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium corporis sequi aut. Ducimus laudantium molestiae voluptate blanditiis, nostrum quaerat.',
        harga: 'Rp 12.000.000',
        img: './src/images/laptop-1.png',
        no: '1'
    },
    {
        nama: 'Dell AlienWare',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium corporis sequi aut. Ducimus laudantium molestiae voluptate blanditiis, nostrum quaerat.',
        harga: 'Rp 35.000.000',
        img: './src/images/Alien.png',
        no: '2'
    },
    {
        nama: 'HP OMEN',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium corporis sequi aut. Ducimus laudantium molestiae voluptate blanditiis, nostrum quaerat.',
        harga: 'Rp 25.000.000',
        img: './src/images/omen.png',
        no: '3'
    },
    {
        nama: 'Axio Pongo - 760',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium corporis sequi aut. Ducimus laudantium molestiae voluptate blanditiis, nostrum quaerat.',
        harga: 'Rp 14.000.000',
        img: './src/images/axio.png',
        no: '4'
    }
]

let nomor = 0
let maksimalLaptop = laptop.length
let selected = {
    nama: 'MSI 15 - A11S',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium corporis sequi aut. Ducimus laudantium molestiae voluptate blanditiis, nostrum quaerat.',
    harga: 'Rp 12.000.000',
    img: './src/images/laptop-1.png',
    no: '1',
}

const previousButton = document.querySelector('#previousButton')
const nextButton = document.querySelector('#nextButton')

nextButton.addEventListener('click', function() {
    namaLaptop.classList.add('animate-fade')
    deskripsiLaptop.classList.add('animate-fade')
    hargaLaptop.classList.add('animate-fade')
    gambarLaptop.classList.add('animate-rotate-right')


    if (nomor >= maksimalLaptop - 1) {
        nomor = 0
    } else {
        nomor++;
    }
    selected = laptop[nomor]
    setTimeout(function() {
        showData()

    }, 400)
    setTimeout(function() {
        namaLaptop.classList.remove('animate-fade')
        deskripsiLaptop.classList.remove('animate-fade')
        hargaLaptop.classList.remove('animate-fade')
        gambarLaptop.classList.remove('animate-rotate-right')
    }, 405)
})

previousButton.addEventListener('click', function() {
    namaLaptop.classList.add('animate-fade')
    deskripsiLaptop.classList.add('animate-fade')
    hargaLaptop.classList.add('animate-fade')
    gambarLaptop.classList.add('animate-rotate-left')
    if (nomor <= 0) {
        nomor = maksimalLaptop - 1
    } else {
        nomor--;
    }
    selected = laptop[nomor]

    setTimeout(function() {
        showData()
    }, 400)
    setTimeout(function() {
        namaLaptop.classList.remove('animate-fade')
        deskripsiLaptop.classList.remove('animate-fade')
        hargaLaptop.classList.remove('animate-fade')
        gambarLaptop.classList.remove('animate-rotate-left')
    }, 405)
})

function showData() {
    namaLaptop.innerText = selected.nama
    deskripsiLaptop.innerText = selected.description
    hargaLaptop.innerText = selected.harga
    gambarLaptop.src = selected.img
    nomorLaptop.innerText = selected.no
    maxLaptop.innerText = laptop[laptop.length - 1].no
}

showData()