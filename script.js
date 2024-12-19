// Função para rolar até a seção de 'Sobre'
function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({
        behavior: 'smooth'
    });
}

// Formulário de Contato (exemplo de funcionalidade)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar envio do formulário
    alert("Formulário enviado com sucesso!");
});