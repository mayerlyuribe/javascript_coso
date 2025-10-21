alert("Bienvenido al juego");
let num_compu = Math.floor(Math.random() * 10) + 1;

console.log(num_compu)
let nombre; 
let intentos = 0;
let num_person;

while (true){
    let opcion = prompt("este es el menú escoge un número:\n 1. Jugar para una persona\n 2. Jugar para dos personas\n 3. revelar numero\n 4. salir");

    if (opcion == 1){
        nombre = prompt("ingresa tu nombre: ")
        num_person = prompt("ingresa un numero")

        while (true){
            if (num_person == num_compu){
                console.log("muy bien, el numero era: " + num_compu, "has ganado :)");
                console.log(`\nnombre: ${nombre}\nintentos: ${intentos}`)
                break;
            }
            else{
                alert("vuelve a intentarlo");
                intentos++;
                num_person = prompt("ingresa un numero")
            }
        
        }
    }

break;
}
//usar un for para cuando sean dos personas

//imprimir el numero de la maquina, sea cuando lo adivine o prefiera rendirse

//salir del juego, ya sea si quiere o gana
