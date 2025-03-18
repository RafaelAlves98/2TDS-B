// Array inicial de tarefas
const arrayTarefas = ["Comprar leite", "Estudar JavaScript", "Lavar o carro"];

function exibirTarefas() {
  const lista = document.getElementById("listaTarefas");
  // Limpa a lista atual
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  // Usa forEach para criar e adicionar cada <li>
  arrayTarefas.forEach((tarefa) => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.appendChild(item);
  });
}

function adicionarTarefa(tarefa) {
  if (tarefa) {
    // Usa push para adicionar a nova tarefa ao array
    arrayTarefas.push(tarefa);
    exibirTarefas();
    document.getElementById("tarefa").value = ""; // Limpa o campo
  } else {
    alert("Por favor, insira uma tarefa válida.");
  }
}

function removerTarefa(tarefa) {
  if (tarefa && arrayTarefas.length > 0) {
    // Busca o índice da tarefa (case-insensitive)
    const indice = arrayTarefas.findIndex((item) => item.toLowerCase() === tarefa.toLowerCase());
    if (indice !== -1) {
      // Usa splice para remover a tarefa no índice encontrado
      arrayTarefas.splice(indice, 1);
      exibirTarefas();
      document.getElementById("tarefaRemover").value = ""; // Limpa o campo
    } else {
      alert("Tarefa não encontrada.");
    }
  } else {
    alert("Nenhuma tarefa digitada ou lista vazia.");
  }
}

function configurarEventos() {
  const inputTarefa = document.getElementById("tarefa");
  const botaoAdicionar = document.getElementById("adicionarBtn");
  const inputRemover = document.getElementById("tarefaRemover");
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

  // Remover tarefa com botão
  botaoRemover.addEventListener("click", () => {
    removerTarefa(inputRemover.value);
  });

  // Remover tarefa com Enter
  inputRemover.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      removerTarefa(inputRemover.value);
    }
  });
}

// Exibe as tarefas iniciais e configura os eventos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  exibirTarefas();
  configurarEventos();
});