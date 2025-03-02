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