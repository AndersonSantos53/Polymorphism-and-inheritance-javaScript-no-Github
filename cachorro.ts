import { Animal } from "./Animal";

class Cachorro extends Animal {
  public correr: boolean;

  constructor (nome: string, idade: number, som: string, correr: boolean) {
    super(nome, idade, som);
    this.correr = correr;
  }
}

export { Cachorro };