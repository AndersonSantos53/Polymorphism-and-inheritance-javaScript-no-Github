abstract class Animal {
    public nome: string;
    public idade: number;
    public som: string;
   
  
    constructor (nome: string, idade: number, som: string) {
      this.nome = nome;
      this.idade = idade;
      this.som = som;
      
    }
  }
  
  export { Animal }