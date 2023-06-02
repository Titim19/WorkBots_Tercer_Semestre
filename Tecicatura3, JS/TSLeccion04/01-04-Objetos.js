let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase(); // Convierte las minusculas a mayusculas
    },
    set lang(Long){
        this.odioma = this.lang.toUpperCase();
    },
    nombreCompleto: function(){ //metodo o funcion JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //Este es el metodo get
        return'El nombre es: '+this.nombre+', Edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618587456';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); // Accedimos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellida = 'Betancud';//cambiamos dinamicamente un valor de un objeto
delete persona.apellida; // Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: las mas sencillas: concatenamos cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Numero 2: a traves del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: la funcion Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ // constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo','Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; // modificamos el nombre
padre.telefono = '5492618282821'; //una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //utilizamos la funcion
let madre = new Persona3('Laura', 'Contreta', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); //la propiedad no esta definida
console.log(madre.nombreCompleto());

//Difertentes formas de crear objetos

//casi numeri 1
let miObjeto = new Object();
//caso numero 2
let miObjeto2 = {}; //esta opcion es breve y recomendada

// caso String 1
let miCadena1 = new String('Hola'); //sintaxis formal
//caso String 2
let miCadena2 = 'Hola'; //esta es la sintaxis simplificada y recomendada

//caso con numero 1
let miNumero = new Number(1); // es formal no recomendable
//caso con numero 2
let miNumero2 = 1;

//caso boolean 1
let miBoolean1 = new Boolean(false); //formal
//caso boolean 2
let miBoolean2 = false; //sintaxis recomendada

//caso Arreglos 1
let miArreglo1 = new Array(); //formal
//caso Arreglos 2
let miarreglo2 = []; //sintaxis recomendada

//caso function 1
let miFuncion1 = new function(){}; //todo despues de new es considerado objeto
//caso function 2
let miFuncion2 = function(){}; //notacion simplificada y recomendada

// uso de prototype
Persona3.prototype.telefono = '2618383832';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5492618383832';
console.log(madre.telefono);

//uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido; 
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '5492618383834'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '54926185858856'));

//metodo Apply
let arreglo = ['Ing.', '54926185858856'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
