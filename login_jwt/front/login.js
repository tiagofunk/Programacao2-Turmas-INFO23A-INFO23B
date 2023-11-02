const URL_AUTH = "https://localhost:3000/auth/user/"

var botaoCadastrar = document.getElementById("botaoLogin")
botaoCadastrar.addEventListener("click",()=>{
    var email = document.getElementById("campoEmail").value
    var senha = document.getElementById("campoSenha").value

    enviaPOST( email, senha )
})

function enviaPOST( email, password ){
    var header = {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email, password
        })
    }
    fetch(URL_AUTH,header)
    .then(function(response){
        if (!response.ok && response.status === 422) {
            return response.json();            
        }else if(response.ok && response.status == 200 ) {
            window.location.href = "index.html"
        }
    }).then(function(data){
        if( data != undefined ){
            console.log(data);
            var mensagemErro = document.getElementById("mensagemErro")
            mensagemErro.innerText = data.msg
            mensagemErro.style.display = "block"
        }
    }).catch(function(error){
        console.log(error)
    })
}