"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var voltar = document.getElementsByTagName("button")[0];
	var sair = document.getElementsByTagName("button")[1];
	var music = document.getElementById("musica");
	
	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}
	
	voltar.addEventListener("click", voltarClickHandler, true);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)
	sair.addEventListener("click", sairClickHandler, true);
}


function voltarClickHandler(ev)
{
	ev.stopPropagation();
    location.href = "../html/MenuPrincipal.html";

}

function sairClickHandler(ev)
{
	window.close();
}


