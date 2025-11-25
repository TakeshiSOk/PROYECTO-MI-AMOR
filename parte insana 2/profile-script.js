// Función para ir a la página de editar perfil
function editProfile() {
    // Cambia 'editar-perfil.html' por el nombre que le hayas puesto a tu archivo HTML de editar perfil
    window.location.href = 'editar-perfil.html';
}

// Función para cambiar entre tabs
function switchTab(tabName) {
    // Ocultar todos los contenidos de tabs
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remover clase active de todos los botones
    const allButtons = document.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar el tab seleccionado
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    
    // Agregar clase active al botón clickeado
    event.target.classList.add('active');
}

// Función para compartir perfil
document.querySelector('.btn-share').addEventListener('click', function() {
    // Simular compartir perfil
    const profileUrl = window.location.href;
    
    if (navigator.share) {
        // Si el navegador soporta la API de compartir
        navigator.share({
            title: 'Mi Perfil - Galerías Urbanas',
            text: 'Mira mi perfil en Galerías Urbanas',
            url: profileUrl
        }).then(() => {
            console.log('Perfil compartido exitosamente');
        }).catch((error) => {
            console.log('Error al compartir:', error);
        });
    } else {
        // Copiar al portapapeles como alternativa
        navigator.clipboard.writeText(profileUrl).then(() => {
            alert('✅ ¡Enlace copiado al portapapeles!');
        }).catch(() => {
            alert('📋 Enlace: ' + profileUrl);
        });
    }
});

// Agregar efecto hover a las cards de eventos
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function() {
        alert('Abriendo detalles del evento...');
    });
});

// Agregar animación de entrada
window.addEventListener('load', function() {
    const profileContainer = document.querySelector('.profile-container');
    profileContainer.style.opacity = '0';
    profileContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        profileContainer.style.transition = 'all 0.6s ease';
        profileContainer.style.opacity = '1';
        profileContainer.style.transform = 'translateY(0)';
    }, 100);
});