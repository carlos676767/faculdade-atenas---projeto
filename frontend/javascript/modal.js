class Modal {
  static element = document.getElementById("modal");
  static openModal() {
    Modal.element.style.display = `block`;
  }

  static closeModal() {
    Modal.element.style.display = `none`;
  }
}

class ButtonEvent extends Modal {
  static btn = document.getElementById("btn-success");
  static closeButton = document.querySelector("close-button");

  static btnEventOpen() {
    this.btn.addEventListener("click", () => {
      ButtonEvent.openModal();
    });
  }

  static btnClose() {
    this.closeButton.addEventListener("click", () => {
      ButtonEvent.closeModal();
    });
  }
}

ButtonEvent.btnEventOpen();
ButtonEvent.btnClose();

class Registro {
  static buttom = document.querySelector("button");

  static async httpRequest(nome, email) {
    try {
      const httpRequest = await fetch(`http://localhost:8080/cadastrar`, {
        method: "POST",
        body: JSON.stringify({ nome, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (httpRequest.ok) {
        alert("Usuário cadastrado com sucesso.");
      } else {
        const errorData = await httpRequest.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Erro na requisição: ${error.message}`);
    }
  }

  static async userDados() {
    const nome = document.getElementById("InputName1")?.value || "";
    const email = document.getElementById("InputEmail1")?.value || "";

    await this.httpRequest(nome, email);
  }

  static buttomevent() {
    this.buttom.addEventListener("click", () => this.userDados());
  }
}

Registro.buttomevent();
