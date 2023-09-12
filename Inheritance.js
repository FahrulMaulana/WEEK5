class Kendaraan{
    constructor(tipe,cc){
        this.tipe = tipe
        this.cc = cc
    }
}

class Motor extends Kendaraan{
    constructor(tipe,cc,warna,panjang){
        super(tipe,cc)
        this.warna = warna
        this.panjang = panjang
    }
    penjualan(){
        return "penjuakan motor dengan cc "+this.cc+" adalah penjualan terbanyak"
    }
}

const honda = new Motor("Vario",150,"Putih",189)
console.log(honda.tipe)
console.log(honda.cc)
console.log(honda.warna)
console.log(honda.panjang)
console.log(honda.penjualan())