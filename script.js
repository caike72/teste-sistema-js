
    
    //console.log(document.getElementById('arroz').value * 15.99 + document.getElementById('feijao').value * 5.65) 
            function atualizaPreco() {
            var arroz = 15.99 * document.getElementById('arroz').value
            var feijao = 5.65 * document.getElementById('feijao').value
            var macarrao = 4.50 * document.getElementById('macarrao').value

            var carne_moida = 10 * document.getElementById('carne_moida').value
            var carne_de_frango = 25 * document.getElementById('carne_de_frango').value
            var bife = 30 * document.getElementById('bife').value

            var laranja = 5.50 * document.getElementById('laranja').value
            var maca = 6.25 * document.getElementById('maca').value
            var maracuja = 10 * document.getElementById('maracuja').value
    
            var agua_mineral = 2.50 * document.getElementById('agua_mineral').value
            var refrigerante = 6 * document.getElementById('refrigerante').value
            var suco = 2.50 * document.getElementById('suco').value

            var compra = eval(arroz + feijao + macarrao + carne_moida + carne_de_frango + bife + laranja + maca + maracuja + agua_mineral + refrigerante + suco)
            
            document.getElementById('totalCompra').value = compra.toLocaleString('pt-BR')
        }
        
            //recuperar o valor contido no campo de texto
            function verificaValores() {
                var valorRecebido = document.getElementById('valorRecebido').value
                var totalCompra = document.getElementById('totalCompra').value
        
        
                if (valorRecebido == 0) {
                    alert('Informe um valor válido')
                }
        
                //cálculo do troco
        
                if (valorRecebido >= totalCompra) {
                    document.getElementById('troco').style.color = '#28A745'
                } else {
                    document.getElementById('troco').style.color = '#DC3545'
                    alert('Dinheiro não suficiente para completar a compra.')
                }
        
                var troco = valorRecebido - totalCompra
        
                document.getElementById('troco').innerHTML = troco
        
            }
        

  

