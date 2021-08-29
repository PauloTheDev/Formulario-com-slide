
//CAPTURAS
const btnNext = document.querySelector('button#next');
const btnPrev = document.querySelector("button#prev");
const etapas = document.querySelectorAll('.etapas');


let position = 0
//POSIÇÃO INICIAL DO ARRAY 


//BOTÃO AVANÇAR
btnNext.addEventListener('click', ()=>{

  if(position < 3){  
  
    etapas[position].style.animation = 'transitionNext 1s'
    
    setTimeout(()=>{etapas[position].style.display = 'none'; position ++}, 1000); 
    
    //A ETAPA ATUAL TEM SEU DISPLAY DESATIVADO ENQUANTO A SEGUINTE ATIVA E FICA EM SEU LUGAR


    setTimeout(() => {etapas[position].style.display = 'block'
    etapas[position].style.animation = 'transitionNextReverse 1s'

}, 1000)
}

else{
    window.alert('Você está na última etapa')
}
}

)


//BOTÃO VOLTAR
btnPrev.addEventListener('click', ()=>{
    if(position > 0){
        etapas[position].style.animation = 'transitionPrev 1s';

        setTimeout(()=>{etapas[position].style.display = 'none';position--}, 1000);

        //A ETAPA ATUAL DESAPARECE E DÁ LUGAR A ANTERIOR

        setTimeout(()=>{etapas[position].style.display = 'block'
        etapas[position].style.animation = 'transitionPrevReverse 1s'
    }, 1000)

  
        
    }

    else{
        window.alert('Você está no início')
    }

})