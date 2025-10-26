alert("Bienvenido al juego");
let num_compu = Math.floor(Math.random() * 100) + 1;

console.log(num_compu);
let nombre; 
let intentos = 0;
let num_person;

const rango = [];
for (let i = num_compu - 5; i <= num_compu + 5; i++) {
    rango.push(i);
}
const nuevoRango = rango.filter(num => num !== num_compu);

alert("el numero es: "+ num_compu)

function jugar_uno() {
    nombre = prompt("ingresa tu nombre: ");
    num_person = parseInt(prompt("ingresa un número"));

    while (true){
        if (num_person == num_compu){
            alert("muy bien, el numero era: " + num_compu + ", has ganado :)");
            console.log(`\nnombre: ${nombre}\nintentos: ${intentos}`);
            break;

        } else if (nuevoRango.includes(num_person)){
            alert("caliente");
            intentos++;
            num_person = parseInt(prompt("ingresa un número"));
        }
        else{
            alert("frio");
            intentos++;
            num_person = parseInt(prompt("ingresa un número"));
        }
    }
}

while (true){
    let opcion = prompt("este es el menú escoge un número:\n 1. Jugar para una persona\n 2. Jugar para dos personas\n 3. revelar numero\n 4. salir");

    if (opcion == 1){
        jugar_uno(); // Llamar la función
    }
    break;
}