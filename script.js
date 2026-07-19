const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", function () {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

modeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}
else{

modeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});