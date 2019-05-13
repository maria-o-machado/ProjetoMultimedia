"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var jogar = document.getElementsByTagName("button")[0];
	var tutorial = document.getElementsByTagName("button")[1];
	var ranking = document.getElementsByTagName("button")[2];
	var definicoes = document.getElementsByTagName("button")[3];
	var sair = document.getElementsByTagName("button")[4];
	var creditos= document.getElementsByTagName("button")[5];
	
	jogar.addEventListener("click", jogarClickHandler, true);
	creditos.addEventListener("click", creditosClickHandler, true);  
	definicoes.addEventListener("click", definicoesClickHandler, true);
	ranking.addEventListener("click", rankingClickHandler, true);
	sair.addEventListener("click", sairClickHandler, true);
}

function jogarClickHandler(ev){
	ev.stopPropagation();
    location.href = "../html/menuniveis.html";
}

function definicoesClickHandler(ev){
	ev.stopPropagation();
    location.href = "../html/definicoes.html";
}

function creditosClickHandler(ev)
{
	ev.stopPropagation();
    location.href = "../html/creditos.html";

}

function rankingClickHandler(ev)
{
	ev.stopPropagation();
    location.href = "../html/ranking.html";

}

function sairClickHandler(ev)
{
	window.close();
}
