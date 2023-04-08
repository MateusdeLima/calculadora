//Lógica calculadora
function calcular(tipo, valor) {
    /*Primeiro vamos identificar se estamos trabalhando 
    ou um valor*/ 
    if(tipo === 'acao') {
    //trabalhando com os botões que representam ações.

        if(valor === 'c') {
            //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        }
        
        if(valor === '+' || valor === '-' || valor == '*' || valor === '/' || valor === '.') {
            //identificando as ações matemáticas
            document.getElementById('resultado').value += valor
        }

        if(valor === '=') {
            /*Utilizamos a função eval para processar a string no contexto do interpretador 
            JS assim simplificando as operações matemáticas efetuando-as automáticamente.*/
            var valor_campo = eval(document.getElementById('resultado').value)
            
            document.getElementById('resultado').value = valor_campo
            
        }        

    } else if(tipo === 'valor') {
        //var valor_campo = document.getElementById('resultado').value0
        /*Aqui temos dua maneiras de deixar o valor acumulativo 1234 o
        decima é declarando uma variável e concatenando e a outra através
        do += que meio que faz isso automático deixando o código mais limpo*/
        document.getElementById('resultado').value += valor
    }
}