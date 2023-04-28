function validar() {
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let data_de_nascimento = document.getElementById("data-de-nascimento").value;
    let cpf = document.getElementById("cpf").value;
    let cidade = document.getElementById("cidade").value;
    let logradouro = document.getElementById("logradouro").value;
    let senha = document.getElementById("senha").value;
    let repetir_senha = document.getElementById("repetir-senha").value;

    if(!email || !nome || !telefone || !data_de_nascimento || !cpf || !cidade || !logradouro || !senha || !repetir_senha) {
        alert('Opss... Preencha todos os campos!');
    } else {
        if(senha === repetir_senha) {
            alert('Cadastro realizado com sucesso!')
        } else {
            alert('As senha não estão iguais!')
        }
    }
}