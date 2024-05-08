// Docente CRUD

// Función para guardar en localStorage
function guardarDocente(docente) {
    let docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    docentes.push(docente);
    localStorage.setItem('docentes', JSON.stringify(docentes));
}

// Función para mostrar en la tabla
function mostrarDocentes() {
    let docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    let docenteList = document.getElementById('docenteList');
    docenteList.innerHTML = '';
    docentes.forEach((docente, index) => {
        docenteList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${docente.apellido}</td>
                <td>${docente.nombre}</td>
                <td>${docente.email}</td>
                <td>${docente.cumple || ''}</td>
                <td>${docente.celular || ''}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarDocente(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarDocente(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

// Función para agregar un docente
document.getElementById('docenteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let apellido = document.getElementById('apellido').value;
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let cumple = document.getElementById('cumple').value;
    let celular = document.getElementById('celular').value;

    let docente = { apellido, nombre, email, cumple, celular };
    guardarDocente(docente);
    mostrarDocentes();
    this.reset();
});

// Función para editar un docente
function editarDocente(index) {
    let docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    let docente = docentes[index];
    document.getElementById('apellido').value = docente.apellido;
    document.getElementById('nombre').value = docente.nombre;
    document.getElementById('email').value = docente.email;
    document.getElementById('cumple').value = docente.cumple || '';
    document.getElementById('celular').value = docente.celular || '';

    docentes.splice(index, 1);
    localStorage.setItem('docentes', JSON.stringify(docentes));
    mostrarDocentes();
}

// Función para eliminar un docente
function eliminarDocente(index) {
    let docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    docentes.splice(index, 1);
    localStorage.setItem('docentes', JSON.stringify(docentes));
    mostrarDocentes();
}

// Mostrar docentes al cargar la página
mostrarDocentes();
