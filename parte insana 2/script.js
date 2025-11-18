// Toggle de selección de tags
function toggleTag(element) {
    element.classList.toggle('selected');
}

// Agregar nuevo tag
function addTag() {
    const input = document.getElementById('newTag');
    const tagText = input.value.trim();
    
    if (tagText) {
        const container = document.getElementById('tagsContainer');
        const newTag = document.createElement('div');
        newTag.className = 'tag selected';
        newTag.onclick = function() { toggleTag(this); };
        newTag.innerHTML = `🎨 ${tagText}`;
        container.appendChild(newTag);
        input.value = '';
    }
}

// Cancelar edición
function cancelEdit() {
    if (confirm('¿Estás seguro de cancelar? Los cambios no guardados se perderán.')) {
        window.history.back();
    }
}

// Manejar envío del formulario
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedTags = Array.from(document.querySelectorAll('.tag.selected'))
        .map(tag => tag.textContent.trim());
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        ciudad: document.getElementById('ciudad').value,
        pais: document.getElementById('pais').value,
        biografia: document.getElementById('biografia').value,
        intereses: selectedTags
    };
    
    console.log('Datos del formulario:', formData);
    
    alert('✅ Perfil actualizado con éxito!\n\nIntereses seleccionados: ' + selectedTags.join(', '));
});

// Permitir agregar tag con Enter
document.getElementById('newTag').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
    }
});

// Simular cambio de foto de perfil
document.querySelector('.photo-circle').addEventListener('click', function() {
    alert('Aquí se abriría un selector de archivos para cambiar la foto de perfil');
});

document.querySelector('.change-photo').addEventListener('click', function() {
    alert('Aquí se abriría un selector de archivos para cambiar la foto de perfil');
});