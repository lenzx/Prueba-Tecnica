const btn = document.querySelector('#button');
const form = document.querySelector('#busqueda');
const matrices = document.querySelector('#matrices');

const getData = async () => {
    try {
        const response = await fetch('/api/matriz',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
        return response.json();
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

const getOneData = async (idMatriz) => {
    try {
        const response = await fetch('/api/matriz/byid',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', id: idMatriz },
            })
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

const obtenerTabla = (columna, array, id, nombre) => {
    const name = document.createElement('div');
    name.innerText = `id: ${id} matriz: ${nombre}`;
    const tabla = document.createElement('table');
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
    matrices.appendChild(name);
    matrices.appendChild(tabla);
}

const generarTablas = (datos) => {
    matrices.innerHTML = '';
    for (const matriz of datos) {
        if (typeof(matriz.original) === 'string'){
            obtenerTabla(matriz.columna, JSON.parse(matriz.original), matriz.id, 'original');
            obtenerTabla(matriz.columna, JSON.parse(matriz.final), matriz.id, 'final');
        } else {
            obtenerTabla(matriz.columna, matriz.original, matriz.id, 'original');
            obtenerTabla(matriz.columna, matriz.final, matriz.id, 'final');
        }
    }

}


btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = await getData();
    generarTablas(data.body);    
})

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.target));
    dataForm.id = Number(dataForm.id);
    try {
        const response = await getOneData(dataForm.id);
        matrices.innerHTML = '';
        if (typeof(matriz.original) === 'string') {
            obtenerTabla(response.body.columna, JSON.parse(response.body.original), response.body.id, "original");
            obtenerTabla(response.body.columna, JSON.parse(response.body.final), response.body.id, "final");
        } else {
            obtenerTabla(response.body.columna, response.body.original, response.body.id, "original");
            obtenerTabla(response.body.columna, response.body.final, response.body.id, "final");
        }
    } catch (error) {
        alert('no se encontró la id buscada');
    }
})

