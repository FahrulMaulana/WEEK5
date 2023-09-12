class Person {
    constructor (name){
        if(this.constructor === Person){
            throw new Error(
                "tidak boleh menggunakan class ini"
            )
        }
        this.name = name
    }
    greet(){
       throw new Error("belum di implementasi")
    }

}

class Teacher extends Person {
    constructor (name,age){
        super(name)
        this.age = age
    }
    greet(){
        console.log("hai nama saya "+this.name)
    }

}

const lecture = new Teacher("santosos",69)
console.log(lecture.name)
console.log(lecture.age)
lecture.greet()