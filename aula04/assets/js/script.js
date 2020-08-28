
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
    console.log( "asjjfab")
    $('form').submit(function () {
        
        let nome = $("#nome").val()
        let email = $("#email").val()
        let telefone = $("#telefone").val()
        let assunto = $("#assunto").val()
        
        let cadastro = new Cadastro(nome, email, telefone, assunto)

        console.log(cadastro.email)
        $('section').load('view/dados.html', function () {
            $('#nome').html(cadastro.nome)
            $('#email').html(cadastro.email)
            $('#telefone').html(cadastro.telefone)
            $('#assunto').html(cadastro.assunto) 
        })
    })
}
    

class Cadastro{
    constructor(nome, email, telefone, assunto){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.assunto = assunto
    }
}