class Kendaraan{
    constructor(produsen){
        this.produsen = produsen
    }
    lokasi(){
        return "Lokasi "+this.produsen+" ada pada 40 cabang"
    }
}

class Motor extends Kendaraan{
    constructor(produsen){
        super(produsen)
    }
    lokasi(){
        return "Lokasi "+this.produsen+" Ada pada 30 cabang"
    }
}

const honda = new Motor("Yahaha")
console.log(honda.lokasi())