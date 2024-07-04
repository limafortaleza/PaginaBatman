const nome = document.querySelector("#fname") 
const email = document.querySelector("#email")
const bloco = document.querySelector("#bloco")
const formulario = document.querySelector("#forms")

function enviar_dados(event){
    event.preventDefault()
    if ((nome.value == "") || (email.value=="")) {
        alert ("Falta preencher algum campo")
    }else{
        nome.value = ""
        email.value= ""
        bloco.value = ""
        nome.focus()
        return alert ('Sua mensagem foi enviada com sucesso')
        
    }
   
}



formulario.addEventListener("submit",enviar_dados)

