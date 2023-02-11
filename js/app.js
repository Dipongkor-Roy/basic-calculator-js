const screenDisplay=document.querySelector('.screen');
const buttons=document.querySelectorAll('button');

let calculation=[];
let accuCalculation;
function calculate(button){
 const value=button.textContent;
 if(value ==='clear'){
    calculate=[];
    screenDisplay.textContent='.'
 }else if(value ==='='){
    screenDisplay.textContent=eval(accuCalculation);
 }else{
    calculation.push(value);
    accuCalculation=calculation.join('');
    screenDisplay.textContent=accuCalculation;
 }
    console.log(accuCalculation)

}

buttons.forEach(button=>button.addEventListener('click',()=> calculate(button)))