 /* 
 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve? Una variable son datos guardados en memoria. 
¿Cuál es la diferencia entre declarar e inicializar una variable? Declarar una variable solamente implica darle nombre y reservar el espacio en la memoria para esta. Inicializar la variable implica declararla y también asignarle un valor. Ejemplo: Declarar : let resultado 
           inicializar : let resultado = 8
¿Cuál es la diferencia entre sumar números y concatenar strings? 
	Aunque utilizamos el mismo símbolo “+”, la suma realiza una operación matemática con dos números y la concatenación une los strings
¿Cuál operador me permite sumar o concatenar?
+

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre - String
Apellido - String
Nombre de usuario en Platzi - String
Edad - Number
Correo electrónico - String
Mayor de edad - Boolean
Dinero ahorrado - Number
Deudas - Number

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Sarah"
let apellido = "Peña"
let nombreUsuario = "sarah.pena"
let edad = 28
let correo = "sarahpenavasquez@gmail.com"
let esMayorDeEdad = yes
let dineroAhorrado = 0
let deudas = 3000000
 
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

console.log (`${nombre} ${apellido}`)
console.log (dineroAhorrado - deudas)

Funciones
1️⃣  Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función? Es una expresión encapsulada reutilizable que se guarda en memoria para representar procesos que se repite a lo largo de nuestro código
¿Cuándo me sirve usar una función en mi código? Cuando debo repetir un proceso. Varialbes y bloques de código repetidos. repetidos, parecidos, cuando el código es muy largo. Sirve para ordenar y mejorar la legibilidad del código
¿Cuál es la diferencia entre parámetros y argumentos de una función? El parametro son las variables que defino previamente en la declaración de la función. El argumento es la variable específica que le paso a la función cuando la mando a llamar.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");



Respuesta 

function mostrarNombre (completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

mostrarNombre ("Sarah Peña Vásquez", "sarah.pena");

CONDICIONALES
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional? Es una instrucción que se ejecuta solo si se cumple una condición.
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? If (else, elseif): permite hacer validaciones totalmente distints. En el Switch todos los casos se comparan con la misma variable o condición. Switch se utiliza si hay varios casos conocidos que se pueden definir.
¿Puedo combinar funciones y condicionales? Si. 

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

let tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if  (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if  (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if  (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}
```

CICLOS
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo? Una secuencia de acciones que se repiten hasta que se cumpla cierta condición.
¿Qué tipos de ciclos existen en JavaScript? For, for of, while, do While
¿Qué es un ciclo infinito y por qué es un problema? Es la repeticion de la secuencia de acciones de manera infinita sin definir en qué momento se termina. Es un problema porque detiene el flujo de trabajo del código
¿Puedo mezclar ciclos y condicionales? Yes, it is possible

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0
while(i < 5) {
    console.log("El valor de i es: " + i);
    i++ ;
}

let i = 10
while(i >= 2) {
    console.log("El valor de i es: " + i);
    i-- ;
}

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

do {
    let respuesta = prompt("cuánto es 2 + 2"); 
} while (respuesta != 4);


LISTAS

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array? Un conjunto de datos agrupados en una variable
¿Qué es un objeto? Un conjunto de datos agrupados en una variable con características y palabras clave para acceder a ellos. 
¿Cuándo es mejor usar objetos o arrays? Arrays cuando lo que haremos en un elemento es lo mismo que en los demás, mientras que un objeto es mejor cuando los nombres de cada elemento son importantes.
¿Puedo mezclar arrays con objetos o incluso objetos con arrays? Se puede tener un array con varios objetos. Los arrays pueden guadar objetos y los objetos pueden guarfar arrays en sus propiedades

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function mostrarPrimerElemento (array) {
    console.log (array[0]);    
}

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function mostrarElementos (elementos) {
    for (const elemento of elementos){
        console.log (elemento);
    }
}


4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let object = {a: 1, b: 2, c: 3};

for (const property in object) {
    console.log (object [property]);
}



*/







 




















