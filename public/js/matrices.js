

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

const obtenerTabla = (columna, array) => {
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
    matrices.appendChild(tabla);
}

const generarTablas = (datos) => {
    matrices.innerHTML = '';
    for (const matriz of datos) {
       
        obtenerTabla(matriz.columna, JSON.parse(matriz.original));
        obtenerTabla(matriz.columna, JSON.parse(matriz.final))
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
        obtenerTabla(response.body.columna, JSON.parse(response.body.original));
        obtenerTabla(response.body.columna, JSON.parse(response.body.final));
    } catch (error) {
        alert('no se encontro la id buscada');
    }
})

