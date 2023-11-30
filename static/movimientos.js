const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  const text = link.textContent;
  const originalColor = getComputedStyle(link).color;

  link.addEventListener('mouseover', () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    link.style.color = randomColor;
  });

  link.addEventListener('mouseout', () => {
    link.style.color = originalColor;
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); /* Puedes ajustar el umbral según tus necesidades */

    var animatedImage = document.querySelector('.animated-image');
    observer.observe(animatedImage);
});


document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show2');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); /* Puedes ajustar el umbral según tus necesidades */

    var animatedImage = document.querySelector('.animated-image2');
    observer.observe(animatedImage);
});

document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show3');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); /* Puedes ajustar el umbral según tus necesidades */

    var animatedImage = document.querySelector('.animated-image3');
    observer.observe(animatedImage);
});



document.addEventListener("DOMContentLoaded", function () {
    var scrollBtn = document.getElementById("scroll-to-top-btn");
  
    // Mostrar u ocultar el botón según la posición de desplazamiento
    window.onscroll = function () {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };
  });
  
  // Función para desplazarse al principio de la página
  function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
  }
  

  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });