

class Registro {
  static buttom = document .querySelector('button')
  static async httpRequest(nome, email){
    const httpRequest = await fetch(`http://localhost:8080/cadastrar`, {
      method: `POST`,
      body: JSON.stringify({ nome: nome, email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const response = await httpRequest.json();
    alert(JSON.stringify(response))
  }


  static async userDados(){
    const nome = document.getElementById('InputName1').value;
    const email = document.getElementById('InputEmail1').value;
    await this.httpRequest(nome, email)
  }  
  static buttomevent () {
  this.buttom.addEventListener('click',this.httpRequest() )

  }
}  

  Registro.buttomevent()
