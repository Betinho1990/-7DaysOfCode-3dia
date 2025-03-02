document.getElementById("area").addEventListener("change", function() {
    let area = this.value;
    let tecnologiaSelect = document.getElementById("tecnologia");
    let labelTecnologia = document.getElementById("labelTecnologia");
    tecnologiaSelect.innerHTML = "";

    while (tecnologiaSelect.options.length > 0) {
        tecnologiaSelect.remove(0);
    }

    if (area === "front-end") {
        labelTecnologia.innerText = "Você quer aprender React ou Vue?";
        let options = ["React", "Vue"];
        options.forEach(option => {
            let newOption = document.createElement("option");
            newOption.value = option;
            newOption.textContent = option;
            tecnologiaSelect.appendChild(newOption);
        });
        labelTecnologia.style.display = "block";
        tecnologiaSelect.style.display = "block";
    } else if (area === "back-end") {
        labelTecnologia.innerText = "Você quer aprender C# ou Java?";
        let options = ["C#", "Java"];
        options.forEach(option => {
            let newOption = document.createElement("option");
            newOption.value = option;
            newOption.textContent = option;
            tecnologiaSelect.appendChild(newOption);
        });
        labelTecnologia.style.display = "block";
        tecnologiaSelect.style.display = "block";
    }
});

function verificarEscolha() {
    let areaSelecionada = document.getElementById("area").value;
    let caminhoSelecionado = document.getElementById("caminho");

    if (!areaSelecionada) {
        alert("Por favor, escolha primeiro entre Front-End ou Back-End antes de continuar.");
        caminhoSelecionado.value = ""; // Reseta a seleção para evitar continuidade indevida
    }
}

function continuarJogo() {
    let tecnologia = document.getElementById("tecnologia").value;
    let caminho = document.getElementById("caminho").value;
    
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