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

httpRequest();
