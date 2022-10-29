const saida1=document.querySelector(".saida1");
const saida=document.querySelector(".saida");
const btn=document.querySelector(".send");
// const btnn=document.querySelector("#log");
// const log=document.querySelector("#log");

let nome_cdt, email_cdt, senha_cdt;
let email_log, senha_log;

// function foo() { 
//     if (email_log==email_cdt && senha_log==senha_cdt){
//         saida.innerHTML=("Logado");
//     }else{
//         saida.innerHTML=("Senha incorreta");
//     }
//     return true;
//   }

btn.addEventListener("click", function cadastro(e){

e.preventDefault();

const nome_cdt = document.querySelector("#nome_cdt");
const email_cdt = document.querySelector("#email_cdt");
const senha_cdt = document.querySelector("#senha_cdt");

const value_nome_cdt = nome_cdt.value;
const value_email_cdt = email_cdt.value;
const value_senha_cdt = senha_cdt.value;

console.log(value_nome_cdt);
console.log(value_email_cdt);
console.log(value_senha_cdt);

// os comandos abaixo serviam apenas para testar saída das variáveis
saida1.innerHTML+=`  O seu nome é ${value_nome_cdt}<br>`;
saida1.innerHTML+=`  O seu e-mail é ${value_email_cdt}<br>`;
saida1.innerHTML+=`  O sua senha é ${value_senha_cdt}<br>`;


})

btn.addEventListener("click", function cadastro(e){

e.preventDefault();

const email_log = document.querySelector("#email_log");
const senha_log = document.querySelector("#senha_log");

const value_email_log = email_log.value;
const value_senha_log = senha_log.value;

console.log(value_email_log);
console.log(value_senha_log);

// os comandos abaixo serviam apenas para testar saída das variáveis
saida.innerHTML+=`  O seu e-mail é ${value_email_log}<br>`;
saida.innerHTML+=`  O sua senha é ${value_senha_log}<br>`;
    
    
})


saida.innerHTML+=`oie`
// btnn.addEventListener("click,", function login(e){

// e.preventDefault();

// const nome_log = document.querySelector("#nome_log");
// const senha_log = document.querySelector("#senha_log");



// })

// log.addEventListener("click", function login(e){

// e.preventDefault();



// })