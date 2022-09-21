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
System.register("animal", [], function (exports_1, context_1) {
    "use strict";
    var Animal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Animal = /** @class */ (function () {
                function Animal(nome, idade, som) {
                    this.nome = nome;
                    this.idade = idade;
                    this.som = som;
                }
                return Animal;
            }());
            exports_1("Animal", Animal);
        }
    };
});
System.register("cachorro", ["animal"], function (exports_2, context_2) {
    "use strict";
    var Animal_1, Cachorro;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Animal_1_1) {
                Animal_1 = Animal_1_1;
            }
        ],
        execute: function () {
            Cachorro = /** @class */ (function (_super) {
                __extends(Cachorro, _super);
                function Cachorro(nome, idade, som, correr) {
                    var _this = _super.call(this, nome, idade, som) || this;
                    _this.correr = correr;
                    return _this;
                }
                return Cachorro;
            }(Animal_1.Animal));
            exports_2("Cachorro", Cachorro);
        }
    };
});
System.register("cavalo", ["animal"], function (exports_3, context_3) {
    "use strict";
    var Animal_2, Cavalo;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (Animal_2_1) {
                Animal_2 = Animal_2_1;
            }
        ],
        execute: function () {
            Cavalo = /** @class */ (function (_super) {
                __extends(Cavalo, _super);
                function Cavalo(nome, idade, som, correr1) {
                    var _this = _super.call(this, nome, idade, som) || this;
                    _this.correr1 = correr1;
                    return _this;
                }
                return Cavalo;
            }(Animal_2.Animal));
            exports_3("Cavalo", Cavalo);
        }
    };
});
System.register("pregui\u00E7a", ["animal"], function (exports_4, context_4) {
    "use strict";
    var Animal_3, Preguiça;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (Animal_3_1) {
                Animal_3 = Animal_3_1;
            }
        ],
        execute: function () {
            Preguiça = /** @class */ (function (_super) {
                __extends(Preguiça, _super);
                function Preguiça(nome, idade, som, subirEmArvores) {
                    var _this = _super.call(this, nome, idade, som) || this;
                    _this.subirEmArvores = _this.subirEmArvores;
                    return _this;
                }
                return Preguiça;
            }(Animal_3.Animal));
            exports_4("Pregui\u00E7a", Preguiça);
        }
    };
});
System.register("script", ["cachorro", "cavalo", "pregui\u00E7a"], function (exports_5, context_5) {
    "use strict";
    var cachorro_1, cavalo_1, pregui_a_1, cachorro, cavalo, preguiça;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (cachorro_1_1) {
                cachorro_1 = cachorro_1_1;
            },
            function (cavalo_1_1) {
                cavalo_1 = cavalo_1_1;
            },
            function (pregui_a_1_1) {
                pregui_a_1 = pregui_a_1_1;
            }
        ],
        execute: function () {
            cachorro = new cachorro_1.Cachorro('Rodolfo', 3, 'au au', true);
            cavalo = new cavalo_1.Cavalo('Chumbimho', 6, 'pocotó', true);
            preguiça = new pregui_a_1.Preguiça('Durminhoco', 5, 'zzzzzz', true);
        }
    };
});
