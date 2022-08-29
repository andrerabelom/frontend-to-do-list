//1. Adicionar tarefa
//Pegar o valor digitado pelo usuário
const inputTarefa = document.getElementById("nova-tarefa")

// Criar função para adicionar tarefa
const adicionarTarefa = () => {
  // Criar elemento li
  const item = document.createElement("li") // <li> </li>
  
  // Adicionar texto digitado no elemento
  item.innerHTML = `
    <button class="tarefa-ok">OK</button>
    <span>${inputTarefa.value}</span>
    <button class="excluir">X</button>
  `
  //Pega a lista de tarefas
  const lista = document.getElementById("listaPai")
  
  // Adicionar elemento na lista de tarefas
  if (inputTarefa.value.length > 0) {
  lista.appendChild(item)
  }

  
  // Limpa o valor digitado pelo usuário
  inputTarefa.value = ""
}

// Adiciona o envento de click no botão adicionar
// Quando clica você executa a funçao adicionarTarefa
document.getElementById("botaoAdicionar").addEventListener("click", adicionarTarefa) 


// 2. Limpar lista
// Pega botão Limpar
const botaoLimpar = document.getElementById("botaoApagar");

// Adiciona o envento de click no botão limpar
// Quando clica você executa a funçao definida na function
botaoLimpar.addEventListener("click", function (event){
  const lista = document.getElementById("listaPai")
  lista.innerHTML = "";
} )


//Marcar tarefa como concluida e exclur tarefa ao clicar no botaoLimpar

document.addEventListener("click", (e) => {

const targetEl = e.target;
const parentEl = targetEl.closest("li");


if(targetEl.classList.contains("tarefa-ok")){

parentEl.classList.toggle("done");

}

if(targetEl.classList.contains("excluir")) {

    parentEl.remove();

}


})

//Para casa: 
// 3. Marcar tarefa como concluída
// 4. Excluir tarefa ao clicar no botão

