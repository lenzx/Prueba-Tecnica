const respuesta = document.querySelector("#respuesta");

const generarNumero = (cantidad) => {
    lista = []
    for (let index = 0; index < cantidad; index++) {
        lista.push(Math.floor(Math.random()*10));  
    }
    if (lista[0] == 0){
        if (lista[1] == 0) {
            lista[1] = Math.floor(Math.random()*9) + 1;
        }
        lista.shift();
    }
    return lista
}

const numeroVerificador = (array) => {
    const nuevaLista = [...array];
    let suma = 0;
    let contador = 2;
    for (let i = nuevaLista.length-1 ; i >= 0 ; i--){
        suma = suma + nuevaLista[i]*contador;
        contador++;
        if (contador == 8){
            contador = 2;
        }
        
    }
    const resto = Math.trunc(suma/11)*11;
    const result = suma - resto;
    const digito = 11 - result;

    if (digito == 11) {
        nuevaLista.push(0)
    } else if (digito == 10) {
        nuevaLista.push('K')
    } else {
        nuevaLista.push(digito)
    }
    return nuevaLista;
}

const monstrarRut = (array) => {
    respuesta.innerHTML = ''
    if (array.length == 8) {
        respuesta.innerHTML = (`${array.slice(0,1)}.${array.slice(1,4)}.${array.slice(4,7)}-${array[7]}`).replace(/,/g, '')
    } else {
        respuesta.innerHTML = (`${array.slice(0,2)}.${array.slice(2,5)}.${array.slice(5,8)}-${array[8]}`).replace(/,/g, '')
    }
    console.log(respuesta.innerHTML);
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
    monstrarRut(numeroVerificador(generarNumero(8)));
})
