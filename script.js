const header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',this.window.scrollY>80)
})

document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
  
    imageContainer.addEventListener("mouseenter", function () {
      image1.classList.toggle("hidden");
      image2.classList.toggle("hidden");
    });
  
    imageContainer.addEventListener("mouseleave", function () {
      image1.classList.toggle("hidden");
      image2.classList.toggle("hidden");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const rainContainer = document.querySelector(".rain-container");

    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement("div");
        raindrop.className = "raindrop";
        raindrop.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración de la animación aleatoria
        rainContainer.appendChild(raindrop);
    }
});


//abrir menu//
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');
menu.onclick=()=>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}
//cerrar//

window.onscroll=()=>{
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');

}
//scrollreveal
const sr=ScrollReveal({
  origin:'top',
  distance:'85px',
  duration:2500,
  reset:false
})
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:300});
sr.reveal('.container',{delay:400});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:200});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn,.shop-content',{delay:300});

sr.reveal('.review,.contact',{delay:300});

document.addEventListener("DOMContentLoaded", function () {
  const transitionLayer = document.getElementById("transition-layer");

  // Muestra la capa de bienvenida
  setTimeout(function () {
      transitionLayer.classList.add("hide");
  }, 2500); // Muestra la bienvenida durante 3 segundos

  // Después de ocultar la capa de bienvenida, muestra el contenido de la página
  setTimeout(function () {
      transitionLayer.style.display = "none"; // Oculta la capa de bienvenida
      document.body.style.overflow = "visible"; // Permite el desplazamiento
  }, 5000); // Ajusta según sea necesario (3 segundos de bienvenida + 2 segundos de rotación)
});



function openWhatsApp(product) {
    // Reemplaza con tu número de teléfono
    var phoneNumber = '+51958784348';

    // Construye el mensaje con el nombre del producto
    var message = encodeURIComponent(`Hola estimado, me gustaría comprar la prenda ${product}.`);

    // Construye el enlace de WhatsApp
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Abre una nueva ventana para iniciar la conversación en WhatsApp
    var whatsappWindow = window.open(whatsappUrl, '_blank');

    // Agrega un mensaje personalizado después de abrir la ventana
    if (whatsappWindow) {
        window.alert(`¡Hola! La conversación de WhatsApp se ha iniciado para comprar ${product}. Puedes continuar la conversación allí.`);
    } else {
        window.alert('No se pudo abrir la conversación de WhatsApp. Asegúrate de tener la aplicación instalada.');
    }
}

function openWhatsApp() {
    var phoneNumber = '+51958784348';
    var message = encodeURIComponent('¡Hola! ¿En qué podemos ayudarte?');
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
// Agrega el evento de carga para asegurarte de que el botón y la biblioteca GSAP estén cargados
// Agrega el evento de carga para asegurarte de que el logo y la biblioteca GSAP estén cargados
window.addEventListener("load", function() {
  // Selecciona el logo
  var logo = document.querySelector('.about-img img'); // Ajusta el selector según tu estructura HTML

  // Define la animación de pulso usando GSAP
  function pulseAnimation() {
    gsap.to(logo, { scale: 1.1, duration: 0.5, ease: "power1.inOut", yoyo: true, repeat: -1 });
  }

  // Llama a la función para iniciar la animación
  pulseAnimation();
});


