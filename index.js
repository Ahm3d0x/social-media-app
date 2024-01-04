console.log('halle world');

let name = document.querySelector('.name1');
let pass = document.querySelector('.pass1');

let user = 'ahmed@like.com';
let passw = 'adminlike';

window.onclick = function number() {
  if (name.value.length > 9) {
    name.style.border = '3px solid green';

  } else {
    name.style.border = '3px solid red';


  }


  if (pass.value.length > 8) {
    pass.style.border = '3px solid green';

  } else {
    pass.style.border = '3px solid red';

  }
  
  
}

window.onload = window.onclick

function ahmed(){
  
  

  if (name.value.length > 6) {
    name.style.border = '3px solid green';

  } else {
    name.style.border = '3px solid red';
  }

  if (pass.value.length > 8) {
    pass.style.border = '3px solid green';

  } else {
    pass.style.border = '3px solid red';

  }



//if (name.value != user) {
//  name.style.border = '3px solid red';

//}
  
  
  

  if (name.value == user && pass.value == passw) {

    alert('Login succeed')
    document.location = 'home.html'

  } else {
    console.log('Date is Error')
    alert('Email or password is incorrect')

  }
}