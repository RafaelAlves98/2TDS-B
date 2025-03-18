const arrayTarefas = [];

function exibirTarefas() {
  const lista = document.getElementById("listaTarefas");
  // Limpa a lista atual
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  // Exibe cada tarefa com um checkbox
  arrayTarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `tarefa-${index}`; // ID único para cada checkbox
    checkbox.value = tarefa; // Armazena o valor da tarefa
    
    const label = document.createElement("label");
    label.htmlFor = `tarefa-${index}`; // Associa o label ao checkbox
    label.textContent = tarefa;
    
    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);
  });
}

function adicionarTarefa(tarefa) {
  if (tarefa) {
    // Verifica se a tarefa já existe (case-insensitive)
    const tarefaLower = tarefa.toLowerCase();
    if (arrayTarefas.some((item) => item.toLowerCase() === tarefaLower)) {
      alert("Essa tarefa já foi cadastrada.");
    } else {
      arrayTarefas.push(tarefa);
      exibirTarefas();
      document.getElementById("tarefa").value = ""; // Limpa o campo
    }
  } else {
    alert("Por favor, insira uma tarefa válida.");
  }
}

function removerTarefasSelecionadas() {
  const checkboxes = document.querySelectorAll("#listaTarefas input[type='checkbox']:checked");
  if (checkboxes.length === 0) {
    alert("Selecione pelo menos uma tarefa para remover.");
    return;
  }

  // Remove as tarefas selecionadas do array
  checkboxes.forEach((checkbox) => {
    const tarefa = checkbox.value;
    const indice = arrayTarefas.indexOf(tarefa);
    if (indice !== -1) {
      arrayTarefas.splice(indice, 1);
    }
  });

  exibirTarefas(); // Atualiza a exibição
}

function configurarEventos() {
  const inputTarefa = document.getElementById("tarefa");
  const botaoAdicionar = document.getElementById("adicionarBtn");
  const botaoRemover = document.getElementById("removerBtn");

  // Adicionar tarefa com botão
  botaoAdicionar.addEventListener("click", () => {
    adicionarTarefa(inputTarefa.value);
  });

  // Adicionar tarefa com Enter
  inputTarefa.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      adicionarTarefa(inputTarefa.value);
    }
  });

  // Remover tarefas selecionadas com botão
  botaoRemover.addEventListener("click", () => {
    removerTarefasSelecionadas();
  });
}

// Configura os eventos e exibe a lista vazia ao carregar
document.addEventListener("DOMContentLoaded", () => {
  exibirTarefas();
  configurarEventos();
});