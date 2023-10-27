class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let atacar = "espada"
        if (this.tipo === "mago"){
            console.log(`O ${this.tipo} atacou usando ${atacar}`)
        }else if (this.tipo === "guerreiro"){
            console.log(`O ${this.tipo} atacou usando ${atacar}`)
        }else if (this.tipo === "monge"){
            console.log(`O ${this.tipo} atacou usando ${atacar}`)
        }else{
            console.log(`O ${this.tipo} atacou usando ${atacar}`)
        }
    }
}

let heroi = new hero("Alexandre", "20", "guerreiro")
heroi.atacar()