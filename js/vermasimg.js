
function mostrar(enla1 , oculto1) { 
  obj = document.getElementById(oculto1); 
    obj.style.display = (obj.style.display == 'block') ? 'none' : 'block'; 
  enla1.innerHTML = (enla1.innerHTML == '<img src="images/about-images/DDunity.jpg" alt="" class="img-responsive"/>') ? '<img src="images/about-images/DDunity.jpg" alt="" class="img-responsive"/>' : '<img src="images/about-images/DDunity.jpg" alt="" class="img-responsive"/>'; 
}

function mostrar(enla2 , oculto2) { 
  obj = document.getElementById(oculto2); 
    obj.style.display = (obj.style.display == 'block') ? 'none' : 'block'; 
  enla2.innerHTML = (enla2.innerHTML == '<img src="images/about-images/DDweb.jpg" alt="" class="img-responsive"/>') ? '<img src="images/about-images/DDweb.jpg" alt="" class="img-responsive"/>' : '<img src="images/about-images/DDweb.jpg" alt="" class="img-responsive"/>'; 
}