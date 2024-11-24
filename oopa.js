function armazenarValor() {

    // armazena o valor que o usuário digitou 
    var useInput = document.getElementById("userInput").value;

    // exibe o valor armazenado 
    console.log("O valor da variavel é: " + useInput);

    // atualiza o conteudo
    document.getElementById("valorInserido").innerText = "O valor inserido é " + useInput;
}
