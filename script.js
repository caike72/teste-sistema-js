            
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

        document.getElementById('troco').innerHTML = 'R$' + troco

    }

  

