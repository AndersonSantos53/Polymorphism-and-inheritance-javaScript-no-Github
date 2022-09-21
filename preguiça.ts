import { Animal } from "./Animal";

class Preguiça extends Animal {
  public subirEmArvores: boolean;

  constructor (nome: string, idade: number, som: string, subirEmArvores: boolean) {
    super(nome, idade, som);
    this.subirEmArvores = this.subirEmArvores;
  }
}

export { Preguiça};