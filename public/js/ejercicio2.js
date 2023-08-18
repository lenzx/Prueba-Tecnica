const lista = document.querySelector("#lista");
const obj = document.querySelector("#objeto");
const datos_entrada = ["Yungay",
    "Calbuco",
    "Taltal",
    "Iquique",
    "Los Vilos",
    "Algarrobo",
    "Iquique",
    "Yungay",
    "Calbuco",
    "Palena",
    "Yungay"];

const ordenarLista = (array) => {
    for (let index = 1; index < array.length; index++) {
        let j = index;
        while (j > 0 && array[j - 1] < array[j]) {
            let temporal = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temporal;
            j--;
        }
    }
    return array
}

const nuevaLista = (array) => {
    const lista = ordenarLista(array);
    const arrayObjetos = [];
    let contador = 1
    for (let index = 1; index < lista.length; index++ ) {
        let name = lista[index];
        if (lista[index-1] == name) {
            contador++
        } else {
            let obj = { 
                "comuna" : lista[index-1],
                "cantidad" : contador
            }
            arrayObjetos.push(obj);
            contador=1;
        }
    }
    return arrayObjetos
}

for (let j of datos_entrada){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = j;
    tr.appendChild(td)
    lista.appendChild(tr)
}

for (let i of nuevaLista(datos_entrada)){
    let tr = document.createElement("tr");
    let comuna = document.createElement("td");
    let cantidad = document.createElement("td");
    comuna.innerText = i.comuna;
    cantidad.innerText = i.cantidad;
    tr.appendChild(comuna)
    tr.appendChild(cantidad)
    obj.appendChild(tr)
}
console.log(datos_entrada)
console.log(nuevaLista(datos_entrada));