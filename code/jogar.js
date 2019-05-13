"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var login = document.getElementsByTagName("button")[0];
	var sair = document.getElementsByTagName("button")[1];
	login.addEventListener("click", loginClickHandler, true);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)
	sair.addEventListener("click", sairClickHandler, true);
}


function loginClickHandler(ev)
{
	var name =  window.document.getElementById("nome");
	window.document.getElementBy 
    location.href = "../html/MenuPrincipal.html";
}

function sairClickHandler(ev)
{
	window.close();
}
