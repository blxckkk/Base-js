let forma = 'retângulo';
let base = 20;
let altura = 40;
// let areaRetangulo = altura * base;
// let areaTriangulo = (altura * base) / 2;
let area;

// Condicional Se... então...

if (forma === 'retângulo'  ) {
   area = altura * base;
    console.log(area);
} else {
    area = (altura * base) / 2;
    console.log(area);
}

// Boolean
const usuarioLogado = true;
const contaPaga = false;

// Truthy ou falsy
// 0 -> false
// 1 -> true

console.log(0 == false); // retorna verdadeiro(true)
console.log('' == false); // retorna verdadeiro(True)
console.log(1 == true); // retorna verdadeiro(True)

console.log(contaPaga == 1 )

// Underfiend -> Não definido;
// nuell -> nulo;

let minhaVar;
let varNull = null;
let numero = 3;
let string = 'oi';

console.log(typeof minhaVar);
console.log(typeof varNull);
console.log(typeof numero);
console.log(typeof string);


