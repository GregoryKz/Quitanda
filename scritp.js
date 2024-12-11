document.getElementById('opcao').addEventListener('change', function() {
    const opcao = parseInt(this.value);

    function comprabanana (){

        alert("O preço da banana e de R$ 1,30  no caso de uma comprar com  12 banana ou mais ela sai no valor de R$ 1,00")
            var quantidadeBanana = Number (prompt("Quantas Banana voç ira levar:"))
            if (quantidadeBanana <12){
                alert(`O valor da sua compra foi de ${quantidadeBanana*1.30}`)
            }
            else{
                alert(`O valor da sua compra foi de ${quantidadeBanana*1.00}`)
            }



    }
    function compraMaca (){
        alert ("O Kilo da maça é de  R$ 8,55 a partir de 2KG sai por R$6,99")
        var quantidadeMaca = Number (prompt ("Quantos Kilos voçe ira levar:"))
        if (quantidadeMaca <2){
            alert(`O valor da sua compra foi de ${quantidadeMaca*9.55}`)
        }
        else{
            alert(`O valor da sua compra foi de ${quantidadeMaca*6.99}`)
        }

    }
    function compraManga (){
        const opcao = Number (prompt ("Qual manga voçe quer"))
        switch (opcao){
            case 1:
                alert ("Voçe escolheu a manga Palmer, o Kilo dela esta R$ 5,49")
                var quantidadeManga = Number (prompt ("Quantos kg ira levar"))
                alert (`O valor da sua compra foio de ${quantidadeManga*5.49}` )
                break;
            case 2 :
                alert ("Voçe escolheu a manga Rosa, o Kilo dela esata R$ 10,00")
                var quantidadeManga = Number (prompt ("Quantos kg ira levar"))                alert (`O valor da sua compra foio de ${quantidadeManga*10.00}` )
                break;
            case 3:
                alert ("Voçe escolheu a manga Tommy, o Kilo dela esata R$ 2,99")
                var quantidadeManga = Number (prompt ("Quantos kg ira levar"))
                alert (`O valor da sua compra foio de ${quantidadeManga*2.99}` )
                break;
        }
    }
function compraLaranja (){
    const opcao = Number (prompt ("Escolha qual laranja voçe quer comprar"))

    switch (opcao){
        case 1: 
        alert ("")
        break
    }
}



    switch (opcao) {
        case 1:
            alert ("Você escolheu Banana")
            comprabanana()
            break;
        case 2:
            alert("Você escolheu Maçã.");
            compraMaca()
            break;
        case 3:
            alert("Você escolheu Laranja.");
            compraManga()
            break;
        case 4:
            alert("Você escolheu Abacate.");
            break;
        case 5:
            alert("Você escolheu Pera.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um número de 1 a 5.");
            break;
    }
});