// Formulacion Cuadrado
console.group("cuadrados");
const ladoCuadrado = 5
console.log(`los lados del cuadrado miden :${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es:${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado :${areaCuadrado} cm"`);
console.groupEnd();


// Formulacion Triangulo
// console.group("Triangulos");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 6
// const baseTriangulo = 7
// console.log(`los lados del Triangulo miden :${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm (base del triangulo)`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log(`El perimetro del Triangulo es:${perimetroTriangulo} cm`);

// const areaTriangulo = ladoTriangulo * ladoTriangulo;
// console.log(`El area del Triangulo :${areaTriangulo} cm"`);
// console.groupEnd();


console.group("circulo");

// Radio
const radioCirculo= 4;
console.log(`El radio del circulo es ${radioCirculo} cm`);

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es ${diametroCirculo} cm`);

// PI
const PI = Math.PI;
console.log(`PI es ${PI}`);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI; 
console.log(`El perimetro del circulo es ${perimetroCirculo}`);

// Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log(`El area del circulo es ${areaCirculo}`);

console.groupEnd();