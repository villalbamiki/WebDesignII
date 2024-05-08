// Materia CRUD

// Función para guardar en localStorage
function guardarMateria(materia) {
    let materias = JSON.parse(localStorage.getItem('materias')) || [];
    materias.push(materia);
    localStorage.setItem('materias', JSON.stringify(materias));
}

// Función para mostrar en la tabla
function mostrarMaterias() {
    let materias = JSON.parse(localStorage.getItem('materias')) || [];
    let materiaList = document.getElementById('materiaList');
    materiaList.innerHTML = '';
    materias.forEach((materia, index) => {
        materiaList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${materia.nombre}</td>
                <td>${materia.codigo}</td>
                <td>${materia.anio}</td>
                <td>${materia.docente}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarMateria(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarMateria(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

// Función para cargar docentes en el select
function cargarDocentes() {
    let docentes = JSON.parse(localStorage.getItem('docentes')) || [];
    let docenteSelect = document.getElementById('docente');
    docenteSelect.innerHTML = '<option value="">Seleccionar Docente</option>';
    docentes.forEach(docente => {
        docenteSelect.innerHTML += `<option value="${docente.nombre}">${docente.nombre}</option>`;
    });
}

// Función para agregar una materia
document.getElementById('materiaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let codigo = document.getElementById('codigo').value;
    let anio = document.getElementById('anio').value;
    let docente = document.getElementById('docente').value;

    let materia = { nombre, codigo, anio, docente };
    guardarMateria(materia);
    mostrarMaterias();
    this.reset();
});

// Función para editar una materia
function editarMateria(index) {
    let materias = JSON.parse(localStorage.getItem('materias')) || [];
    let materia = materias[index];
    document.getElementById('nombre').value = materia.nombre;
    document.getElementById('codigo').value = materia.codigo;
    document.getElementById('anio').value = materia.anio;
    document.getElementById('docente').value = materia.docente;

    materias.splice(index, 1);
    localStorage.setItem('materias', JSON.stringify(materias));
    mostrarMaterias();
}

// Función para eliminar una materia
function eliminarMateria(index) {
    let materias = JSON.parse(localStorage.getItem('materias')) || [];
    materias.splice(index, 1);
    localStorage.setItem('materias', JSON.stringify(materias));
    mostrarMaterias();
}

// Mostrar materias al cargar la página y cargar docentes en el select
mostrarMaterias();
cargarDocentes();
