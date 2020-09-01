
$(document).ready(function () {
    home();
    $('#home').click(function () {
        home()
    })

    $('#sobre').click(function () {
        sobre()
    })

    $('#form').click(function () {
        form()
    })
})

function home() {
    $('section').html('<h1>Home</h1>')
}

function sobre() {
    $('section').html('<h1>Sobre</h1>')
}

function form() {
    $('section').load('view/formulario.html', enviar)
}

function enviar() {
    $('section').load('view/formulario.html', function(){
        $('#btnEnviar').click(function(){
            console.log('jdsjkfjsbj')

            let nome = $("#nome").val()
            let email = $("#email").val()
            let telefone = $("#telefone").val()
            let assunto = $("#assunto").val()
            let cep = $("#cep").val()
            
            getLocal(cep, function(local){

                let cadastro = new Cadastro(nome, email, telefone, assunto, local)

                console.log(cadastro.email)
                $('section').load('view/dados.html', function () {
                    $('#nome').html(cadastro.nome)
                    $('#email').html(cadastro.email)
                    $('#telefone').html(cadastro.telefone)
                    $('#assunto').html(cadastro.assunto) 
                    console.log('local '+cadastro.local)
                    $('#cep').html(cadastro.local)
                })
            })
        })
     })
}
    
function getLocal(cep, callBack) {
    $.getJSON('http://viacep.com.br/ws/'+cep+'/json', function(data){
        console.log(data.localidade)
        return callBack(data.localidade)
    } )
}

class Cadastro{
    constructor(nome, email, telefone, assunto, local){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.assunto = assunto
        this.local = local
    }
}