function createTecla() {
    const teclas = document.querySelector(".teclas")

    for(let i = 0; i < 10; i ++) {
        teclas.innerHTML += `<div class="tecla">
            <p>${i}</p>
        </div>`
    
    }
}

createTecla()