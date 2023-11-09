let inputTarea = document.getElementById("tarea");
let btn = document.getElementById("agregar");
let listado = document.getElementById("listado");
let cantidad = document.getElementById("cantidad");

let tareas = [];

btn.onclick = function (){ //funcion que va agregar
    if(inputTarea.value == ""){  //controlo si el campo esta vacio
        return;
    }
    tareas.push({ titulo: inputTarea.value, id: tareas.length + 1, fecha: '', descripcion: '' });
    console.log(tareas);
    let elemento = inputTarea.value; //tomo el valor del campo

    let li = document.createElement("li");
    li.textContent = elemento;
    li.setAttribute('id', tareas.length);

    listado.appendChild(li);

    cantidad.innerHTML = tareas.length;

    let btnEliminar = document.createElement("span"); //boton eliminar a cada elemento
    btnEliminar.style.color = "white";
    btnEliminar.innerText = "x";
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function(){
        li.remove();
        tareas.splice(Number(li.getAttribute('id')) - 1, 1);
        cantidad.innerText = tareas.length;
        console.log(tareas);
    }
    inputTarea.value = "";
}
