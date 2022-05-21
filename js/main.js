//variaveis
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputWhatsapp = document.getElementById("whatsapp");

//Comando que executa a função de checar os inputs quando o botão é clicado
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    checkInputs();
})

//Função que retonar o valor do input
function inputValue(dataInput){
    return dataInput.value.trim();
}

//Função que verificar se o input é um numero
function isNumber(a){
    return !isNaN(a);
}

//Função que verificar se o input esta vazio
function isVoid(a){
    return a === "" || a === null
}


//Função para entrada invalida
function setError(status, msg){
    const inputBox = status.parentElement;
    inputBox.querySelector('.form-control').className = "form-control error"; 
    inputBox.querySelector("span").innerText = msg;
    inputBox.querySelector("i").className = "bi bi-x-circle";
}

//Função para entrada valida
function setSucess(status){
    const inputBox = status.parentElement;
    inputBox.querySelector('.form-control').className = "form-control"; 
    inputBox.querySelector("span").innerText = "";
    inputBox.querySelector("i").className = "";
}

//Função q verificar as regras do email, whatsapp
function rulesInput(string, typeInput){

    const value = inputValue(string);
    return  (typeInput === "email") ? validEmail(value) :
            (typeInput === "name") ? validName(value) : validWhatsapp(value);   
}

//função que valida o email
function validEmail(string){
    const emailValid = /\S+@\S+\.\S+/;
    return string.search(emailValid) === -1 ? true : false;
}

//função que valida o nome
function validName(string){
    const list = ["0","1","2","3","4","5","6","7","8","9"];
    for(let i=0;i<string.length;i++){
        for(let j=0;j<list.length;j++){
            if(string[i] == list[j]){
                return true;
            }
        }
    }
    return false;
}

//função que valida o whatsapp
function validWhatsapp(string){
    const whatsAppValid = /^\(\d{2}\) \d{5}-\d{4}$/;
    return whatsAppValid.test(string) != true ? true : false;
}

//Função que verifica as entradas
function checkInputs(){

    //Checando Nome
    if(isVoid(inputValue(inputName))){
        setError(inputName, "Nome obrigatório!");
    }else{
        (rulesInput(inputName, "name")) ? setError(inputName, "Padrão inválido para o Nome!") : setSucess(inputName);
    }

    //Checando Email
    if(isVoid(inputValue(inputEmail))){
        setError(inputEmail, "Email obrigatório!");
    }else{
        (rulesInput(inputEmail, "email")) ? setError(inputEmail, "Padrão inválido para o Email!") : setSucess(inputEmail);
    }

    //Checando whatsapp
    if(isVoid(inputValue(inputWhatsapp))){
        setError(inputWhatsapp, "Whatsapp Obrigatório!");
    }else{
        (rulesInput(inputWhatsapp, "whatsapp")) ? setError(inputWhatsapp, "Padrão inválido para o Whatsapp!") : setSucess(inputWhatsapp);
    }
}