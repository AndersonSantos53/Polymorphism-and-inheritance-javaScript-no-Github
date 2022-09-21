import { Animal } from "./Animal";

class Cavalo extends Animal {
  public correr1: boolean;

  constructor (nome: string, idade: number, som: string, correr1: boolean) {
    super(nome, idade, som);
    this.correr1 = correr1;
  }
}

export {Cavalo};