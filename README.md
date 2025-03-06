# 📌 #7daysOfcode-3dia

## 🧑 Sobre o Autor

👋 Olá! Meu nome é Roberto Gonçalves Conceição Filho e sou um entusiasta da programação. Você pode me encontrar no GitHub clicando [aqui](https://github.com/Betinho1990)!

<img src = "https://avatars.githubusercontent.com/u/194714356?v=4" width="150" height="150">

## 🚀 Descrição do Projeto

Este é um projeto desenvolvido em **JavaScript** para capturar informações sobre a área de interesse em programação e tecnologias a serem aprendidas. O usuário pode escolher entre Front-End ou Back-End e, com base na escolha, será solicitado que selecione uma tecnologia específica (como React, Vue, C#, Java), além de escolher o caminho a seguir (especialização ou Fullstack). O sistema também permite que o usuário adicione outras tecnologias de seu interesse.

## ✨ Funcionalidade

O código possui as seguintes funcionalidades:

✅ **Escolha da área de interesse**: Front-End ou Back-End  
✅ **Seleção de tecnologias**: O usuário escolhe uma tecnologia específica da área  
✅ **Escolha do caminho de aprendizado**: Especialização ou Fullstack  
✅ **Adição de tecnologias extras**: O usuário pode adicionar tecnologias que deseja aprender ao longo do processo.

## 📝 Código

```javascript
document.getElementById("area").addEventListener("change", function () {
    let area = this.value;
    let tecnologiaSelect = document.getElementById("tecnologia");
    let labelTecnologia = document.getElementById("labelTecnologia");
    let caminhoSelect = document.getElementById("caminho"); // Obtém o select de especialização
    let caminhoLabel = caminhoSelect.previousElementSibling; // Obtém o label acima dele

    tecnologiaSelect.innerHTML = "";

    // Reseta o select
    while (tecnologiaSelect.options.length > 0) {
        tecnologiaSelect.remove(0);
    }

    if (area === "front-end") {
        labelTecnologia.innerText = "Você quer aprender React ou Vue?";
        tecnologiaSelect.innerHTML = `<option value="" disabled selected>Selecione uma opção</option>`;
        ["React", "Vue"].forEach(option => {
            let newOption = document.createElement("option");
            newOption.value = option;
            newOption.textContent = option;
            tecnologiaSelect.appendChild(newOption);
        });

    } else if (area === "back-end") {
        labelTecnologia.innerText = "Você quer aprender C# ou Java?";
        tecnologiaSelect.innerHTML = `<option value="" disabled selected>Selecione uma opção</option>`;
        ["C#", "Java"].forEach(option => {
            let newOption = document.createElement("option");
            newOption.value = option;
            newOption.textContent = option;
            tecnologiaSelect.appendChild(newOption);
        });
    }

    // Exibe os campos corretamente
    labelTecnologia.style.display = "block";
    tecnologiaSelect.style.display = "block";
    caminhoLabel.style.display = "block";
    caminhoSelect.style.display = "block";
});

document.getElementById("caminho").addEventListener("change", function () {
    let areaSelecionada = document.getElementById("area").value;

    if (!areaSelecionada) {
        alert("Por favor, escolha primeiro entre Front-End ou Back-End antes de continuar.");
        this.value = ""; // Reseta a escolha para evitar avanço indevido
    }
});

function continuarJogo() {
    let tecnologia = document.getElementById("tecnologia").value;
    let caminho = document.getElementById("caminho").value;

    if (!tecnologia) {
        alert("Escolha uma tecnologia antes de continuar.");
        return;
    }

    if (caminho === "especializar") {
        alert(`Ótima escolha! Seguir se especializando em ${tecnologia} vai te tornar um expert.`);
    } else {
        alert("Expandir seus conhecimentos para se tornar Fullstack é um grande passo!");
    }

    let divTecnologias = document.getElementById("tecnologiasExtras");
    divTecnologias.innerHTML = "<label>Digite outras tecnologias que deseja aprender:</label>";
    divTecnologias.innerHTML += "<input type='text' id='novaTecnologia'><button onclick='adicionarTecnologia()'>Adicionar</button>";
    divTecnologias.innerHTML += "<ul id='listaTecnologias'></ul>";
}

function adicionarTecnologia() {
    let inputNovaTecnologia = document.getElementById("novaTecnologia");
    let lista = document.getElementById("listaTecnologias");

    if (inputNovaTecnologia.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = inputNovaTecnologia.value;
        lista.appendChild(li);
        inputNovaTecnologia.value = "";
    }
}
```
## 📌 Como Usar

1. Clone este repositório ou copie o código.
2. Crie um arquivo HTML com os seguintes elementos:
   - Um select para escolher entre Front-End ou Back-End (id="area").
   - Um select para escolher a tecnologia, dependendo da área escolhida (id="tecnologia").
   - Um select para escolher o caminho (especialização ou Fullstack) (id="caminho").
   - Adicione um botão para chamar a função `continuarJogo()`.
   - Adicione um campo para inserir tecnologias extras.
3. Execute o código em seu navegador e interaja com o formulário.

🎨 Exemplo de Uso
```html
Copiar
Editar
<select id="area">
  <option value="" disabled selected>Escolha sua área de interesse</option>
  <option value="front-end">Front-End</option>
  <option value="back-end">Back-End</option>
</select>

<label id="labelTecnologia" style="display:none;">Escolha uma tecnologia</label>
<select id="tecnologia" style="display:none;"></select>

<select id="caminho" style="display:none;">
  <option value="" disabled selected>Escolha o caminho</option>
  <option value="especializar">Especializar-se</option>
  <option value="fullstack">Se tornar Fullstack</option>
</select>

<button onclick="continuarJogo()">Continuar</button>

<div id="tecnologiasExtras"></div>
```
## 🔗 Tecnologias Utilizadas

- HTML
- CSS (opcional para estilização do formulário)
- JavaScript

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!

Se quiser ver mais projetos meus, acesse meu perfil no GitHub: [Seu GitHub 🚀](https://github.com/Betinho1990)
