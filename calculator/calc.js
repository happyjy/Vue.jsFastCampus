
  // document.getElementsByName result ? 
document.querySelector('.calculator').addEventListener('click', calculator);
document.querySelector('.minus').addEventListener('click', minus);
document.querySelector('.plus').addEventListener('click', plus);
document.querySelector('.init').addEventListener('click', init);

var operatorOptionChildren = document.querySelector('.operatorOption').children;

// operatorOptionChildren.forEach(element => {
//   element.addEventListener('mousedown', mouseDown);
  
// });

for(var i=0; i < operatorOptionChildren.length; i++){
  console.log(operatorOptionChildren[i]);
  operatorOptionChildren[i].addEventListener('mouseDown', mouseDown);
  operatorOptionChildren[i].addEventListener('mouseUp', mouseUp);
}

function mouseDown(){
  console.log('### mouseDown : ' + this);
}

function mouseUp(){
  console.log('### mouseUp : ' + this);
}

function calculator(){
  var operand1 = document.querySelector('.operand1');
  var operand2 = document.querySelector('.operand2');
  var operator = document.querySelector('.operator');

  var calResult = 0; 
  var calHistory = '';

  if(operator.innerHTML == '+'){
      calResult = parseInt(operand1.value) + parseInt(operand2.value);
      calHistory = operand1.value+''+ '+' + operand2.value+'';
  }else if(operator.innerHTML == '-'){
      calResult = parseInt(operand1.value) - parseInt(operand2.value);
      calHistory = operand1.value+''+ '-' + operand2.value+'';
  }

  if( !!operand1.value && !!operand2.value && !!operator.innerHTML){
    document.querySelector('.calHistory').innerHTML = calHistory;
    document.querySelector('.calResult').innerHTML = calResult;
  }
}

function minus(){
  document.querySelector('.operator').innerHTML = '-';
}

function plus(){
  document.querySelector('.operator').innerHTML = '+';
}

function init(){
  document.querySelector('.calHistory').innerHTML = '';
  document.querySelector('.calResult').innerHTML = '';
}

function keyUp(e){

  switch (e.keyCode) {
    case 13: //enter
      calculator();
      break;
    case 187:
      plus();
      break;
    case 189:
      minus();    
      break;
    default:
      break;
  }
}

window.addEventListener('keyup', keyUp);