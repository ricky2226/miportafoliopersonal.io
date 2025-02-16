let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Powerpoint");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("word");
        habilidades[4].classList.add("excel");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
// Función para actualizar el contador de visitas
function actualizarContador() {
    if (localStorage.getItem('visitas')) {
        // Si ya existe, incrementa el contador
        let visitas = parseInt(localStorage.getItem('visitas')) + 1;
        localStorage.setItem('visitas', visitas);
        document.getElementById('visitas').textContent = visitas;
    } else {
        // Si no existe, inicializa el contador en 1
        localStorage.setItem('visitas', 1);
        document.getElementById('visitas').textContent = 1;
    }
}

// Función para reiniciar el contador a 0
function reiniciarContador() {
    localStorage.setItem('visitas', 0); // Reinicia a 0
    document.getElementById('visitas').textContent = 0; // Actualiza el valor en la tarjeta
    alert('¡Contador reiniciado a 0!'); // Opcional: Muestra un mensaje
}

// Llama a la función para actualizar el contador cuando la página se carga
window.onload = actualizarContador;
























