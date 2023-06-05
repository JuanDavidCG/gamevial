
function mostrar(enla , etik) { 
  obj = document.getElementById(etik); 
    obj.style.display = (obj.style.display == 'block') ? 'none' : 'block'; 
  enla.innerHTML = (enla.innerHTML == 'Ver[-]') ? 'Ver[+]' : 'Ver[-]'; 
}