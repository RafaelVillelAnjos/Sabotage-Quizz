    let ponto1 = document.getElementById('resposta1')
    let ponto2 = document.getElementById('resposta2')
    let ponto3 = document.getElementById('resposta3')
    let inputPontos = document.getElementById('Resultado')
    let totalPontos 
   

function CalcularPontos(){
    totalPontos = 0

    if(ponto1.value == '2' || ponto2.value == '2' || ponto3.value == '2'){

        alert('ATENÇÃO! Você não selecionou alguma resposta. Marque alguma alternativa para prossegui rcom o quizz!')

    }else{

        if(ponto1.value == '1'){

            totalPontos++

        }

        if(ponto2.value == '1'){

            totalPontos++

        }

        if(ponto3.value == '1'){

            totalPontos++

        }

        inputPontos.value = totalPontos
        
        if(totalPontos == 3){
    
            alert("Você finalizou The Sabotage's Quizz com a pontuação MÁXIMA!!!! \nParabéns!!")            
    
        }else{
    
            alert("Você finalizou The Sabotage's Quizz! \nConfira sua pontuação na parte inferior da tela.")  
    
        }
        

    }


    
}
    