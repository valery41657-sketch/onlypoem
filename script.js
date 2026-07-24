// Mensaje de bienvenida
console.log("Bienvenida a OnlyPoem 💜");

// Animación suave al hacer clic en el botón
const boton = document.querySelector(".boton");

if (boton) {
    boton.addEventListener("click", function () {
        boton.textContent = "💜 Gracias por confiar en OnlyPoem";
    });
}
