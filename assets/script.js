// assets/script.js
const btn = document.getElementById('Confirm');
const nome = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const modalMessage = document.getElementById('modalMessage');

btn.addEventListener('click', function(e) {
  e.preventDefault(); 

  if (nome.value === '' || email.value === '' || message.value === '') {
    alert('Ops! Parece que você esqueceu de preencher todos os campos.');
    return;
  } else {
     //const data = {
      // nome: nome.value,
     // email: email.value,
    // message: message.value,
    // Exibe o modal com mensagem personalizada
    modalMessage.textContent = `Parabéns ${nome.value}! Sua mensagem foi enviada com sucesso. Nós entraremos em contato através do email: ${email.value}.`;
    modal.style.display = 'block';
  }
});

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = 'none';
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
