const slides = [
  "nuevasfotos/PORTADA 1_Mesa de trabajo 1.jpg",
  "nuevasfotos/PORTADA 2_Mesa de trabajo 1.jpg",
  "nuevasfotos/PORTADA 3_Mesa de trabajo 1.jpg",
];

let currentIndex = 0;
const imgElement = document.getElementById("slider-img");

// Inicializamos con la primera imagen de forma inmediata
imgElement.src = slides[currentIndex];

function changeSlideSmoothly() {
  // Fade out
  imgElement.style.opacity = "0"; // Esto aplicará la transición de opacidad

  setTimeout(() => {
    // Cambiar imagen cuando esté completamente desvanecida
    currentIndex = (currentIndex + 1) % slides.length;
    imgElement.src = slides[currentIndex];

    // Fade in
    setTimeout(() => {
      imgElement.style.opacity = "1"; // Esto aplica el efecto de fade-in
    }, 50); // Pequeña demora para asegurar el cambio de imagen
  }, 1000); // Duración del fade-out
}

// Llama a la función cada 3 segundos (ajustable)
setInterval(changeSlideSmoothly, 5000); // Cambiar cada 3 segundos








const services = {
  vacunacion: {
    title: "Vacunación",
    description: "Ofrecemos programas de vacunación personalizados para prevenir enfermedades graves.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Vacunación"
  },
  petshop: {
    title: "Pet Shop",
    description: "Alimentos premium, suplementos y productos de cuidado para tu mascota.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Pet Shop"
  },
  consultas: {
    title: "Consultas",
    description: "Consultas generales y especializadas para tu mascota.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Consultas"
  },
  cirugias: {
    title: "Cirugías",
    description: "Procedimientos quirúrgicos rutinarios y complejos para tu mascota.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Cirugías"
  },
  examenes: {
    title: "Exámenes de Laboratorio",
    description: "Análisis rápidos de sangre, orina y otros para un diagnóstico preciso.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Exámenes de Laboratorio"
  },
  banos: {
    title: "Baños y Grooming",
    description: "Baños terapéuticos, cortes y limpieza de tu mascota.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Baños y Grooming"
  },
  desparacitacion: {
    title: "Desparacitación",
    description: "Programas de desparacitación interna y externa para tu mascota.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Desparacitación"
  },
  otros: {
    title: "Otros Servicios",
    description: "Radiografías, ecografías, hospitalización y otros servicios especializados.",
    image: "https://via.placeholder.com/500x300",
    whatsappLink: "https://wa.me/+51966842258?text=Hola, me gustaría obtener más información sobre el servicio de Otros Servicios"
  }
};

function showServiceDetails(serviceId) {
  const service = services[serviceId];
  document.getElementById('modal-image').src = service.image;
  document.getElementById('modal-title').textContent = service.title;
  document.getElementById('modal-description').textContent = service.description;
  document.getElementById('whatsapp-btn').setAttribute('onclick', `window.open('${service.whatsappLink}', '_blank')`);
  document.getElementById('service-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('service-modal').style.display = 'none';
}


