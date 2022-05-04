import { addTask, getAllTask } from "./utils/domFunctions.js";

//Banco de Dados NoSQL - Orientado a documentos. MongoDB, Firebase, Cassandra.
// Tarefas. Armazenar as tarefas em algum lugar. Por enquanto, estamos armazenamento em memória.
// usamos ema constante. Armazenamento em memória é volátil

// Em localStorege e sessionStorage

// NodeJS - MongoDB ou Firebase. Armazenamento em Banco de dados. Armazenamento Persistente.
// console.log(db[0].steps[2].step)
// objeto é um conjunto de atributos(ou propriedades) e métodos(ou funções ou ações)
// items: [{item:1},{item:2},{item:3}]

const db = [

    {
        id:1,
        title: 'Concluir Aula 03 Inglês',
        steps: [
            { step: "Conversação"},
            { step: "Leitura e escrita"},
            { step: "Treino diário"},

        ],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },

    {
        id:2,
        title: 'Aula projeto de software',
        steps: [
            { step: "Avaliação virtual"},
            { step: "Fórum"},
            { step: "Pré Aula"},

        ],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },


];

getAllTask(db);

//console.log(db[0].title);


const form = document.querySelector("#addNewTask");
const newTask = document.querySelector("#inputTxtNewTask");


form.addEventListener("submit", (e) => {
    e.preventDefault();
});

newTask.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        // Se newTask.value for ao contrário de true. Ou seja se for false, se estiver vazio.
        if (!newTask.value) {
        alert("Digite uma nova tarefa");
    } else {
        //alert(newTask.value);

        const d = new Date();
        const today = `${d.getDate()}/${d.getMonth() +1}/${d.getFullYear()}`;

        db.push({ 
            id: Number(db.length) + 1,
            title: newTask.value,
            done: false,
            dueDate: today, 
        });

        document.querySelector(".tasks").innerHTML="";
        getAllTask(db);

        newTask.value = "";
    
        console.log(db);
    }
    }
});



