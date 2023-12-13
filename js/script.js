let tarefas = [];

function addTarefa() {
  const tarefaInput = document.getElementById("tarefaInput");
  const tarefaTexto = tarefaInput.value.trim();
  if (tarefaTexto !== "") {
    tarefas.push({ text: tarefaTexto, completed: false });
    tarefaInput.value = "";
    mostrarTarefas();
  }
}

function mostrarTarefas(filtro = 'all') {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    if (filtro === 'all' || (filtro === 'pending' && !tarefa.completed) || (filtro === 'completed' && tarefa.completed)) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="${tarefa.completed ? 'completed' : ''}" onclick="completar(${index})">${tarefa.text}</span> 
                      <button onclick="deletar(${index})">Excluir</button>`;
      listaTarefas.appendChild(li);
    }
  });
}

function completar(index) {
  tarefas[index].completed = !tarefas[index].completed;
  mostrarTarefas();
}

function deletar(index) {
  tarefas.splice(index, 1);
  mostrarTarefas();
}

function filtrarTarefas(filtro) {
  mostrarTarefas(filtro);
}

// Exibição inicial de todas as tarefas
mostrarTarefas();