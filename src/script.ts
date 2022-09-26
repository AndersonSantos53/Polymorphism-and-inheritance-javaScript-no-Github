
abstract class Animal {
    public nome :string;
    public idade : number;
   

    constructor(nome : string, idade: number){
        this.nome= nome;
        this.idade = idade;
    }
}


class Cachorro extends Animal {
    public som: string;
  
    constructor (nome: string, idade: number, som: string) {
      super(nome, idade, );
      this.som = som;
    }
    correr(){
      console.log('O Cachorro começou a correr');
    }
}
const cachorro = new Cachorro('Rodolfo', 3,'au au');
console.log(`Nome do Cachorro: ${cachorro.nome} \n Idade: ${cachorro.idade} anos \n Som: ${cachorro.som}`);


class Cavalo extends Animal {
    public som: string;
  
    constructor (nome: string, idade: number, som: string) {
      super(nome, idade, );
      this.som = som;
    }
    correr(){
      console.log('O Cavalo começou a correr do Cachorro');
    }
}
const cavalo = new Cavalo('Chumbimho', 6,'pocotó pocotó');
console.log(`Nome do Cavalo:${cavalo.nome}\nIdade:${cavalo.idade} anos \n Som: ${cavalo.som} `);


class Preguica extends Animal {
    public som: string;
  
    constructor (nome: string, idade: number, som: string) {
      super(nome, idade, );
      this.som = som;
    }
    subir(){
      console.log('A preguiça esta subindo na arvoré com medo.');
    }
}
const preguica = new Preguica('Durminhoco', 5,'zzzzzz');
console.log(`Nome do Preguiça:${preguica.nome}\nIdade:${preguica.idade} anos \n Som: ${preguica.som}`);


cachorro.correr();
cavalo.correr();
preguica.subir();


console.log('escolha um numero para saber o som do animal \n 1 = Cachorro \n 2 = Cavalo \n 3 = Prequiça');

const somAnimal = Number(prompt('Escolha seu numero: '))

switch (somAnimal){
    case 1:
        console.log(`${cachorro.som}`)
        break

    case 2:
        console.log(`${cavalo.som}`)
        break

    case 3:
        console.log(`${preguica.som}`)
        break

    default:
}
