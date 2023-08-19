const formulario = document.querySelector("#matriz");
const tabla = document.querySelector("#tabla");
const botones = document.querySelector("#boton");
let lista = []


const postData = async (original, final, columna) => {   //verificar datos
    try {
        const response = await fetch('/api/matriz',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    original: original,
                    final: final,
                    columna: columna
                })
            })
        return response.json();
    } catch (error) {
        console.log(`Error: ${err}`)
    }
};



const obtenerNumeroAleatorio = (cantidad) => {
    lista = []
    for (let index = 0; index < cantidad; index++) {
        lista.push(Math.ceil(Math.random()*1000));  
    }
    return lista
}

const obtenerTabla = (columna, array) => {
    tabla.innerHTML = '';
    let contador = 0;
    let newfila;
    for (let index = 0; index < array.length; index++) {
        if (contador == 0) {
            newfila = document.createElement('tr');
        }
        let newcampo = document.createElement('td');
        newcampo.innerText = `${array[index]}`;
        contador++;
        newfila.appendChild(newcampo);
        if (contador == columna) {
            contador = 0;
            tabla.appendChild(newfila);
        } 
    }
}

const ordenarLista = (array) => {
    for (let index = 1; index < array.length; index++) {
        let j = index;
        while (j > 0 && array[j - 1] > array[j]) {
            let temporal = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temporal;
            j--;
        }
    }
    return array
}

const transformarMatriz = (array) => {
    const listaFinal = []
    for (let index = array.length-1; index >= 0; index--) {
        listaFinal.push(array[index]);
    }
    return listaFinal;
}

const renderizarBoton = (id, mensaje, columna) => {
    botones.innerHTML = '';
    botones.toggleAttribute('display',)
    const btn = document.createElement('button');
    btn.setAttribute('id',`${id}`);
    btn.innerText = `${mensaje}`;
    botones.appendChild(btn);
    document.querySelector(`#${id}`).addEventListener('click', async (e) => {
        e.preventDefault();
        const listaOrdenada = ordenarLista([...lista]);
        if (e.target.id === 'ordenar') {
            obtenerTabla(columna, listaOrdenada);
            renderizarBoton('transformar', 'Definitive edition deluxe', columna )
        } else {
            const listaFinal = transformarMatriz([...listaOrdenada]);
            obtenerTabla(columna, listaFinal);
            const response = await postData(lista, listaFinal, columna);
            botones.innerHTML="";
            alert("La matriz se a guardado correctamente");
        }        
    })
}



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.target));
    dataForm.fila = Number(dataForm.fila);
    dataForm.columna = Number(dataForm.columna);
    obtenerNumeroAleatorio(dataForm.fila*dataForm.columna);
    obtenerTabla(dataForm.columna, lista);
    renderizarBoton('ordenar','Ordenar Matriz',dataForm.columna);
})









