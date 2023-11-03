const boton = document.getElementById("boton1");
    const inputGustos = document.getElementById("id_gustos");
    const tablaGustos = document.getElementById("tablaGustos");

    boton.addEventListener("click", function() {
      const nuevoGusto = inputGustos.value;

      if (nuevoGusto.trim() !== "") {
        const fila = document.createElement("tr");
        const celdaGusto = document.createElement("td");
        celdaGusto.textContent = nuevoGusto;
        const celdaPorcentaje = document.createElement("td");
        celdaPorcentaje.textContent = "0";
        const celdaEditar = document.createElement("td");
        celdaEditar.textContent = "En edición";

        fila.appendChild(celdaGusto);
        fila.appendChild(celdaPorcentaje);
        fila.appendChild(celdaEditar);

        tablaGustos.querySelector("tbody").appendChild(fila);
        inputGustos.value = "";
      }
    });


    function validarYRedirigir() {
        var nombre = document.getElementById("id_nombre").value;
        var correo = document.getElementById("id_correo").value;
        var numero = document.getElementById("id_numero").value;
        var gustos = document.getElementById("id_gustos").value;
    
        if (/\d/.test(nombre)) {
            alert('El campo de nombre no debe contener números.');
            return;
        }
    
        if (!/^\d+$/.test(numero)) {
            alert('El campo de número solo debe contener números.');
            return;
        }
    
        if (nombre === '' || correo === '' || numero === '' || gustos === '') {
            alert('Por favor, completa todos los campos antes de continuar.');
        } else {
            // Redirige a "resultado.html" con parámetros en la URL
            window.location.href = 'resultado.html' + '?nombre=' + encodeURIComponent(nombre) + '&correo=' + encodeURIComponent(correo) + '&numero=' + encodeURIComponent(numero) + '&gustos=' + encodeURIComponent(gustos);
        }
    }
    
    
    
    function redirigirB() {
      document.getElementById("id_nombre").value = ""; 
      document.getElementById("id_correo").value = ""; 
      document.getElementById("id_numero").value = ""; 
      document.getElementById("id_gustos").value = ""; 
    }
    