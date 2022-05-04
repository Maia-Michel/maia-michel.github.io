// Função nominal com parâmetro obrigatório
// underfined é um tipo de valor que não existe.
// null é um tipo de valor inválido
// uma função sem return é uma subrotina.

function escreve(nome, sobrenome){
    const a = sobrenome;
    if (a === null) {
        console.log("a é nulo");
        console.log("Valor de a", a, "\n");
        console.log("valor de sobrenome", sobrenome, "\n");
    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Michel");

//função nominal que retorna valor.
function soma(a, b) {
    return Number(a) + Number(b);
}

const resultado = soma(1,2);

console.log(soma(3,5));

//expressão de função  = uma função é atribuida a um contexto por exemplo uma variável
const exibe = function(x){
    return `Exibindo parâmetro ${x};`
};

console.log(exibe(" -x- "));

//--
// this. variavel interna do JavaScript
// thi ele tem comportamento diferentes dependendo de onde ele está sendo usado
// refere-se a um objeto

//objeto global
let empresa = this; //window

// quando criamos um objeto, criamos um escopo
// quando usamos o this dentro de um objeto, o this é o objeto.
const aluno = {
    nome: 'Michel',
    matricula: 123,
    executar: function(){
        return this.nome;
    },
};

console.log(aluno.executar());

// estrito - this é undefined
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global

function globalObj() {
   // "use strict"; //this vira undefined;
    return this;
}

document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());

//globalObj().alert("Te Amo Jesus!!");


// onde o JavaScript está sendo executado ? qual o contexto ?
// contexto: navegador. this depende do contexto
// no navegador o this é a window.
// mas se você estiver usando a versão estrita do JS o this não será a window.

function quemEoThis() {
    console.log(this === window);
}

// quando queremos usar o JS na versão mais polida, o use strict deve ser informado no início.
function quemEoThisEstrito() {
    "use strict";
    console.log("strict");
    console.log(this === window);
}

quemEoThis();
quemEoThisEstrito();

function Exibe2() {
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto.a);

// arrow function - Função de seta, ela é mais curta, não tem o próprio contexto
const novaFuncao = () => {
    console.log("chamando de dentro de uma arrow function");
    // interpolação de variáveis é chamar uma variável dentro de uma string; template string.
    console.log(`Exibindo o valor de ${a}`);
    // concatenação de variáveis.
    console.log("Exibindo o total de caracteres " + b.length);
    // indentação é um código escrito de forma legível, que respeita hireraquia {dá espaço, para facilitar 
    // a leitura do código. Um código indentado é uma das maneiras de manter um código limpo}
};

const funcao3 = a => console.log(`Exibindo o total de caracteres de ${a.length}`);
funcao3("Michel Maia");

// novo JavaScript ES2017

// spread operator...

const carros = (primeiro, segundo, ...restante) => {
    console.log(`Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são ${restante.join(',')}`);
};

carros(
    "DelRey",
    "Opala",
    "Belina",
    "Variant",
    "Scort",
    "Gurgel",
    "Maverick",
    "Monza",
    "Fusca",
);

const frutas = ["Guaraná", "Cupuaçu", "Açaí"];
const todasFrutas = [...frutas, "banana", "abacaxi"];

console.log("Todas as frutas", todasFrutas);

// destructuring assignment
// Atribuição por desestruturação 

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro:" , primeiro);
console.log("Exibindo o resto: ", resto);

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(" - "));

//const [p, s, t, q] = meuArray;
//console.log("exibindo o quarto elemento", q);

//const [p, ...q] = meuArray;

const [q, ...p] = meuArray.reverse();
console.log(p.reverse());
//console.log("exibindo o primeiro e quarto elemento", q);





