// Visualiza senha
function togglePassword() {
    var senha = document.getElementById("senha");
    var eyeIcon = document.getElementById("eye-icon");

    if (senha.type === "password") {
        senha.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        senha.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}


// Se preenchido os dados, avanca para o perfil
document.getElementById("nextButton").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email && senha) {
        window.location.href = "profile.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
