function tarea5(){
    const num = parseInt(prompt("Introduce un numero del 1 al 7 para escoger el programa: \n 1. Escribir nombre \n 2. Realizar suma \n 3. FOR \n 4. AND \n 5. OR \n 6. NOT \n 7. Numero al azar"));

    switch(num){
        case 1:
            Nombre = prompt("Introduce tu nombre: ");
            console.log("Tu nombre es: "+ Nombre);
            break;

        case 2:
            Num1 = parseInt(prompt("Introduce un numero entero: "));
            Num2 = parseInt(prompt("Introduce otro numero entero: "));
            Num3 = parseInt(prompt("Introduce otro numero entero: "));
            suma = Num1+Num2+Num3;
            console.log("El resultado de la suma de los tres numero es de: "+ suma);
            break;

        case 3:
            for (let i = 0; i < 11; i++) {
                console.log("Numero: " + i);  
            }
            break;

        case 4:
            Num1 = parseInt(prompt("Introduce un numero entero: "));
            Num2 = parseInt(prompt("Introduce otro numero entero: "));
            Num3 = parseInt(prompt("Introduce otro numero entero: "));
            if (Num1 > 0 && Num2 > 0) {
                console.log("Los numeros son mayores que 0");
            }
            if (Num1 > 0 && Num2 > 0 && Num3 > 0) {
                console.log("Los numeros son mayores que 0");
            }
            else{
                console.log("al menos un numero no es mayor que 0");
            }
            break;

        case 5:
            Num1 = parseInt(prompt("Introduce un numero entero: "));
            Num2 = parseInt(prompt("Introduce otro numero entero: "));
            Num3 = parseInt(prompt("Introduce otro numero entero: "));
            if (Num1 > 0 || Num2 > 0) {
                console.log("Cualquiera de los numeros es mayor que 0"); 
            }
            if (Num > 0 || Num3 > 0){
                console.log("Cualquiera de los numeros es mayor que 0");
            }
            else{
                console.log("Ninguno de los numeros es mayor que 0")
            }
            break;

        case 6:
            a = [];
            if (!a) {
                console.log("La lista está vacia");
            }
            else{
                console.log(a);
            }
            break;

        case 7:
            let numeroMaquina = Math.floor(Math.random()*(10-1))+1;
            console.log(numeroMaquina);

            let numeroUser = parseInt(prompt("Adivina el numero del 1 al 10: "));

            let vidas = 3;
            while(numeroMaquina !== numeroUser && vidas < 6 ){
                
                if(numeroUser < numeroMaquina){
                    console.log("el numero es menor");
                }else{
                    console.log("El numero es mayor");
                }
                if (numeroUser === numeroMaquina) {
                    break;
                }
                
                vidas++;
            }

            if(numeroUser === numeroMaquina){
                alert("Felicidades ganaste, el numero es: " + numeroMaquina);
            }else{
                alert("se te acabaron los intentos chavo, el numero es: " + numeroMaquina);
            }
        break;

    }
}