async function httpRequest(nome, email) {
  const httpRequest = await fetch(`http://localhost:8080/cadastrar`, {
    method: `POST`,
    body: JSON.stringify({ nome: nome, email: email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await httpRequest.json();
  console.log(response);
}

function registrarUsuario() {

  const nome = document.getElementById('InputName1').value;
  const email = document.getElementById('InputEmail1').value;
  const telefone = document.getElementById('InputNumber1').value;

  httpRequest(nome, email, telefone);
}
