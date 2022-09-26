var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade, som) {
        var _this = _super.call(this, nome, idade) || this;
        _this.som = som;
        return _this;
    }
    Cachorro.prototype.correr = function () {
        console.log('O Cachorro começou a correr');
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro('Rodolfo', 3, 'au au');
console.log("Nome do Cachorro: ".concat(cachorro.nome, " \n Idade: ").concat(cachorro.idade, " anos \n Som: ").concat(cachorro.som));
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(nome, idade, som) {
        var _this = _super.call(this, nome, idade) || this;
        _this.som = som;
        return _this;
    }
    Cavalo.prototype.correr = function () {
        console.log('O Cavalo começou a correr do Cachorro');
    };
    return Cavalo;
}(Animal));
var cavalo = new Cavalo('Chumbimho', 6, 'pocotó pocotó');
console.log("Nome do Cavalo:".concat(cavalo.nome, "\nIdade:").concat(cavalo.idade, " anos \n Som: ").concat(cavalo.som, " "));
var Preguica = /** @class */ (function (_super) {
    __extends(Preguica, _super);
    function Preguica(nome, idade, som) {
        var _this = _super.call(this, nome, idade) || this;
        _this.som = som;
        return _this;
    }
    Preguica.prototype.subir = function () {
        console.log('A preguiça esta subindo na arvoré com medo.');
    };
    return Preguica;
}(Animal));
var preguica = new Preguica('Durminhoco', 5, 'zzzzzz');
console.log("Nome do Pregui\u00E7a:".concat(preguica.nome, "\nIdade:").concat(preguica.idade, " anos \n Som: ").concat(preguica.som));
cachorro.correr();
cavalo.correr();
preguica.subir();
console.log('escolha um numero para saber o som do animal \n 1 = Cachorro \n 2 = Cavalo \n 3 = Prequiça');
var somAnimal = Number(prompt('Escolha seu numero: '));
switch (somAnimal) {
    case 1:
        console.log("".concat(cachorro.som));
        break;
    case 2:
        console.log("".concat(cavalo.som));
        break;
    case 3:
        console.log("".concat(preguica.som));
        break;
    default:
}
