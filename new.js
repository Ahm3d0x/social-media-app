let fname = document.querySelector('.fname'),
  lname = document.querySelector('.lname');
window.onclick = function ahmed() {
  if (fname.value.length >= 3) {
    fname.style.border = '3px solid green';
  } else {
    fname.style.border = '3px solid red';
  }
  if (lname.value.length >= 3) {
    lname.style.border = '3px solid green';
  } else {
    lname.style.border = '3px solid red';
  }
}
window.onload = window.onclick

function check() {
  if (fname.value.length >= 3 && lname.value.length >= 3) {
    alert('The name is valid')
    document.location = 'new1.html'
  } else {
    alert('The name is invalid ')
  }
  if (fname.value.length >= 3) {
    fname.style.border = '3px solid green';
  } else {
    fname.style.border = '3px solid red';
  }
  if (lname.value.length >= 3) {
    lname.style.border = '3px solid green';
  } else {
    lname.style.border = '3px solid red';
  }
}