// SOLID 


// Princípios de boas práticas de programação.

// S - SRP - single responsibility principle
// Princípio da responsabilidade única

// Funções bem escritas, devem ser mantidas simples, curtas e realizando um objetivo.

// quando precisamos acessar uma função em outro arquivo, é necessário exportá-la.

//CRUD - Create read update delete
export function addTask(db, title = "") {
// criando uma nova tarefa
    const task = document.createElement("div");
    //const id = Number(db.length) + 1;
    task.classList.add("task");
    task.setAttribute("id", db.id);

    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}" /></div>
        <div>
            <div><span class="title-task">${
                // operador ternário. If de uma linha
                // condicao ? verdadeiro : falso;
                title ? title : db.title
            }</span></div>
                                        
        </div>
    <div>Star</div>
`;

    task.innerHTML = taskBody;
    document.querySelector(".taks").appendChild(task);

}


export function removeTask() {
    alert("Removendo uma nova tarefa");
}

export function updateTask() {
    alert("Alterando uma nova tarefa");
}

// é possível colocar qualquer qualquer nome
export function getAllTasks(qualquerNome) {
    qualquerNome.forEach((item) => {
        addTask(item);
    });
    
}

export function getTaskById() {
    alert("Exibindo uma tarefa");
}

// quando for importar do arquivo domFunctions. o JS não sabe quantas funções estão disponíveis.
// quando eu preciso extrair qualque recurso, usando a desetruturação.
// import { addTask } from './domFunctions.js