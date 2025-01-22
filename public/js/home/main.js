

const img1 = document.querySelector('.columna-izquierda .imagen-pequeña:nth-child(1)');
const img2 = document.querySelector('.columna-izquierda .imagen-pequeña:nth-child(2)');

// Asignar eventos de clic
img1.addEventListener('click', () => {
    window.location.href = 'paciente';
});

img2.addEventListener('click', () => {
    window.location.href = 'paciente';
});
