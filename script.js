'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage=function(messsage){
    document.querySelector('.message').textContent=messsage;
};
document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);
console.log(secretNumber,typeof secretNumber)

//input eğer boş gelirse
if(!guess){
    displayMessage('Bir sayı giriniz.');
}
//sayılar birbiryle aynıysa

else if(guess=== secretNumber){
    displayMessage=('doğru tahmini');
    document.querySelector('.number').textContent=secretNumber;
    
    document.querySelector('body').style.backgroundColor='#6ab347';
document.querySelector('.number').style.width='30rem'

if(score>highscore){
    highscore=score;


    document.querySelector('.hightscore').textContent=hight
}
}


//sayılar birbiryle eşleşmiyor ise
else if (guess!==secretNumber){
    if(score>1){
        displayMessage(guess>secretNumber ? ':çok yüksek':'çok düşük ')

        document.querySelector('.score').textContent
        =score;
    }
    else{
        displayMessage('oyunu kaybettin');
        document.querySelector('.score').textContent=0;
    }
}
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;


    displayMessage('tahmin ediliyor....');

    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});