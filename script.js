const botao = document.getElementById("button");
const nome = document.getElementById("cardname");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const emailDefault = "karolsamara97@gmail.com";
const senhaDefault = "123456";

botao.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  const senha = senhaInput.value;

  if (email === emailDefault && senha === senhaDefault) {
    alert(`Olá, ${nome.value}! Você está logado.`);
    window.location.href = "https://www.google.com";
  } else {
    alert("Email ou senha incorretos.");
  }
});

