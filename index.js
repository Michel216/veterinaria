let data = [];
let ed = true;
let indice = null;
var img
let datos = {};

function añadir() {
    const hoy = new Date();
    const fechaHoraActual = hoy.getFullYear() + '-' + (hoy.getMonth() + 1).toString().padStart(2, '0') + '-' + hoy.getDate().toString().padStart(2, '0') +
        ' ' + hoy.getHours().toString().padStart(2, '0') + ':' + hoy.getMinutes().toString().padStart(2, '0') + ':' + hoy.getSeconds().toString().padStart(2, '0');
    var nombre = document.getElementById('nombre').value;
    var dueño = document.getElementById('propietario').value;
    var telefono = document.getElementById('telefono').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var tipo = document.getElementById('tipo').value;
    var sintoma = document.getElementById('sintoma').value;

    var nombreError = document.getElementById('nombreError');
    var dueñoError = document.getElementById('dueñoError');
    var telefonoError = document.getElementById('telefonoError');
    var fechaError = document.getElementById('fechaError');
    var horaError = document.getElementById('horaError');
    var mascotaError = document.getElementById('mascotaError');
    var sintomaError = document.getElementById('sintomaError');

    nombreError.style.display = 'none';
    dueñoError.style.display = 'none';
    telefonoError.style.display = 'none';
    fechaError.style.display = 'none';
    horaError.style.display = 'none';
    mascotaError.style.display = 'none';
    sintomaError.style.display = 'none';

    const rangoMinimo = 8;
    const rangoMaximo = 18;

    if (nombre === '') {
        nombreError.textContent = 'Por favor, ingresa el nombre de la mascota.';
        nombreError.style.display = 'block';
        document.getElementById('nombre').classList.add('error');
        setTimeout(() => {
            nombreError.style.display = 'none';
            document.getElementById('nombre').classList.remove('error');
        }, 4000);
        return;
    }
    if (dueño === '') {
        dueñoError.textContent = 'Por favor, ingresa el nombre del dueño.';
        dueñoError.style.display = 'block';
        document.getElementById('propietario').classList.add('error');
        setTimeout(() => {
            dueñoError.style.display = 'none';
            document.getElementById('propietario').classList.remove('error');

        }, 4000);
        return;
    }
    if (document.getElementById('telefono').value.length < 9) {
        telefonoError.textContent = 'El telefono debe ser un número mayor a 9.';
        telefonoError.style.display = 'block';
        document.getElementById('telefono').classList.add('error');
        setTimeout(() => {
            telefonoError.style.display = 'none';
            document.getElementById('telefono').classList.remove('error');
        }, 4000);
        return;
    }
    if (fecha === '') {
        fechaError.textContent = 'Por favor, ingresa la fecha.';
        fechaError.style.display = 'block';
        document.getElementById('fecha').classList.add('error');
        setTimeout(() => {
            fechaError.style.display = 'none';
            document.getElementById('fecha').classList.remove('error');
        }, 4000);
        return;
    }
    const fechaInput = new Date(document.getElementById('fecha').value + ' ' + document.getElementById('hora').value);
    if (fechaInput < hoy) {
        fechaError.textContent = 'Ingresa una fecha mayor a la actual.';
        fechaError.style.display = 'block';
        document.getElementById('fecha').classList.add('error');
        setTimeout(() => {
            fechaError.style.display = 'none';
            document.getElementById('fecha').classList.remove('error');
        }, 4000);
        return;
    }
    if (hora === '') {
        horaError.textContent = 'Por favor, ingresa la hora.';
        horaError.style.display = 'block';
        document.getElementById('hora').classList.add('error');
        setTimeout(() => {
            horaError.style.display = 'none';
            document.getElementById('hora').classList.remove('error');
        }, 4000);
        return;
    }
    const horaInput = parseInt(document.getElementById('hora').value.split(':')[0], 10);
    if (horaInput < rangoMinimo || horaInput > rangoMaximo) {
        horaError.textContent = 'Por favor, ingresa una hora entre 8.00 a.m - 6:00 p.m.';
        horaError.style.display = 'block';
        document.getElementById('hora').classList.add('error');
        setTimeout(() => {
            horaError.style.display = 'none';
            document.getElementById('hora').classList.remove('error');

        }, 4000);
        return;
    }
    if (tipo === '') {
        mascotaError.textContent = 'Por favor, selecciona la mascota.';
        mascotaError.style.display = 'block';
        document.getElementById('tipo').classList.add('error');
        setTimeout(() => {
            mascotaError.style.display = 'none';
            document.getElementById('tipo').classList.remove('error');
        }, 4000);
        return;
    }
    if (sintoma === '') {
        sintomaError.textContent = 'Por favor, ingresa el sintoma.';
        sintomaError.style.display = 'block';
        document.getElementById('sintoma').classList.add('error');
        setTimeout(() => {
            sintomaError.style.display = 'none';
            document.getElementById('sintoma').classList.remove('error');
        }, 4000);
        return;
    }

    let Res_Tabla = document.getElementById("tarjeta");
    Res_Tabla.innerHTML = "";

    let masco = ""
    if (document.getElementById("tipo").value === "perro") {
        masco = "./IMG/perro.png";
    }
    if (document.getElementById("tipo").value === "gato") {
        masco = "./IMG/gato.png";
    }
    if (document.getElementById("tipo").value === "tortuga") {
        masco = "./IMG/tortuga.png";
    }
    if (document.getElementById("tipo").value === "ave") {
        masco = "./IMG/loro.png";
    }
    if (document.getElementById("tipo").value === "pez") {
        masco = "./IMG/pescado.png";
    }
    if (document.getElementById("tipo").value === "hamster") {
        masco = "./IMG/hamster.png";
    }
    if (document.getElementById("tipo").value === "conejo") {
        masco = "./IMG/conejo.png";
    }

    datos = {
        imagen: masco,
        mascota: document.getElementById("tipo").value,
        nombre: document.getElementById("nombre").value,
        dueño: document.getElementById("propietario").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        sintoma: document.getElementById("sintoma").value
    };

    if (ed === true) {
        data.push(datos);
        alert("Cita Agendada");
    } else {
        data[indice] = datos;
        alert("Informacion Actualizada");
        ed = true;
    }
    imprimir();
    editarCarta();
    limpiar();
}
let estadoSeleccionado = "";
function imprimir() {
    let carta = document.getElementById("tarjeta");
    estadoSeleccionado = "todos";
    carta.innerHTML = "";
    data.forEach((item, index) => {
        let tarj = document.createElement("div");
        tarj.className = "tarj";
        tarj.innerHTML = `
        <div class="mascota">
         <div class="mas">
             <img src="${item.imagen}">
             <h2><strong>${item.nombre}</strong></h2>
         </div>
         <div class="datos">
         <div class="datos1">
         <h2><strong>Propietario:</strong></h2>
         <div class="propietario-info">
             <h3>${item.dueño}</h3>
         </div>
     </div>
     <div class="datos2">
         <h2><strong>Teléfono:</strong></h2>
         <div class="telefono-info">
             <h3>${item.telefono}</h3>
         </div>
     </div>
     
     <div class="datos3">
         <h2><strong>Fecha:</strong></h2>
         <div class="fecha-info">
             <h3>${item.fecha}</h3>
         </div>
     </div>
     <div class="datos4">
         <h2><strong>Hora:</strong></h2>
         <div class="hora-info">
             <h3>${item.hora}</h3>
         </div>
     </div>
         </div>
         </div>
         </div>
         <div class="text2">
         <h2><strong>Sintomas:</strong></h2>
         <div class="hora-info">
             <h3>${item.sintoma}</h3>
         </div>
         <div class="boton">
             <button class="btn-eliminar" onclick="eliminarCarta(${index})">
                  <img src="./IMG/eliminar.png" alt="Eliminar">
             </button>
             <select name="estado" id="estado${index}" class="select">
    <option value=""></option>
    <option value="abierta">Abierta</option>
    <option value="cerrada">Cerrada</option>
    <option value="anuadas">Anulada</option>
</select>
             <button class="btn-editar" data-bs-dismiss="modal" onclick="editarCarta(${index})">
                 <img src="./IMG/editar.png" alt="Editar">
             </button>
         </div>
        `;
        let estadoSelect = tarj.querySelector(`#estado${index}`);
        estadoSelect.value = estadoSeleccionado;
        carta.appendChild(tarj);
    });
}
function mostrar() {
    let carta = document.getElementById("tarjeta");
    carta.style.display = "block";
    imprimir();
}
function eliminarCarta(index) {
    data.splice(index, 1);
    imprimir();
}
function editarCarta(index) {
    let item = data[index];
    if (item) {
        let modalAdministra = new bootstrap.Modal(document.getElementById('administra'));
        modalAdministra.hide();
        let modalAgendar = new bootstrap.Modal(document.getElementById('agendar'));
        modalAgendar.show();
        if (modalAgendar) {
            modalAgendar.show();
        }
        ed = false;
        document.getElementById("tipo").value = item.mascota
        document.getElementById("nombre").value = item.nombre;
        document.getElementById("propietario").value = item.dueño;
        document.getElementById("telefono").value = item.telefono;
        document.getElementById("fecha").value = item.fecha;
        document.getElementById("hora").value = item.hora;
        document.getElementById("sintoma").value = item.sintoma;
        indice = index;
    }
    estadoSeleccionado = "todos";
}

document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById("filtro");
    select.addEventListener('change', function () {
        filtrarCartas();
    });
    mostrarTodasLasCartas();
});

function filtrarCartas() {
    var filtro = document.getElementById("filtro").value;
    var selectEstados = document.querySelectorAll('.tarj [name="estado"]');
    selectEstados.forEach((selectEstado) => {
        estadoSeleccionado = selectEstado.value;
        if (filtro === "todos" || filtro === estadoSeleccionado) {
            selectEstado.closest('.tarj').style.display = "block"; 
        } else {
            selectEstado.closest('.tarj').style.display = "none";   
        }
    });
}

function mostrarTodasLasCartas() {
    const cartas = document.querySelectorAll('#cartas .tarj');
    cartas.forEach(function (carta) {
        carta.style.display = 'block';
    });
}

function limpiar() {
    document.getElementById("tipo").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("propietario").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("sintoma").value = ""
}