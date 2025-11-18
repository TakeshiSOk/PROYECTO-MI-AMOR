const fileInput = document.getElementById('fileInput');
const profilePic = document.getElementById('profilePic');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        profilePic.src = URL.createObjectURL(file);
    }
});
