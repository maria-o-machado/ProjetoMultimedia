"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var voltar = document.getElementById("buttonVoltar");
	var jogar = document.getElementById("buttonJogo");
	var buttonNivel1 = document.getElementById("buttonNivel1");
	var buttonNivel2 = document.getElementById("buttonNivel2");
	var buttonNivel3 = document.getElementById("buttonNivel3");
	var buttonNivel4 = document.getElementById("buttonNivel4");
	var buttonNivel5 = document.getElementById("buttonNivel5");

	var buttonAtivado="null";


	voltar.addEventListener("click", voltarClickHandler, true);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)

	var botoes = [buttonNivel5, jogar]

	for(let i=0; i<2; i++){
		botoes[i].disabled = true;
		botoes[i].style.filter="grayscale(100%)";
		botoes[i].style.cursor="auto";
	}

	var but=function(ev){
			buttonAtivado=buttonNivel1ClickHandler(ev, buttonAtivado);
	}

	var but2=function(ev){
			buttonAtivado=buttonNivel2ClickHandler(ev, buttonAtivado);
	}

	var but3=function(ev){
			buttonAtivado=buttonNivel3ClickHandler(ev, buttonAtivado);
	}

	var but4=function(ev){
			buttonAtivado=buttonNivel4ClickHandler(ev, buttonAtivado);
	}

	var jogarNivel=function(ev){
			buttonJogarClickHandler(ev, buttonAtivado);
	}

	buttonNivel1.addEventListener("click", but);
	buttonNivel2.addEventListener("click", but2);
	buttonNivel3.addEventListener("click", but3);
	buttonNivel4.addEventListener("click", but4);
	jogar.addEventListener("click", jogarNivel)
}


function buttonNivel1ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel1.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel1";
	}

	else if(buttonAtivado=="buttonNivel1"){
		buttonNivel1.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel2ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel2.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel2";
	}

	else if(buttonAtivado=="buttonNivel2"){
		buttonNivel2.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel3ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel3.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel3";
	}

	else if(buttonAtivado=="buttonNivel3"){
		buttonNivel3.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;
}

function buttonNivel4ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel4.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel4";
	}

	else if(buttonAtivado=="buttonNivel4"){
		buttonNivel4.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonJogarClickHandler(ev, buttonAtivado){
	if(buttonAtivado=="buttonNivel1"){
		location.href = "../niveis/nivel1.html"
	}

	if (buttonAtivado == "buttonNivel2"){
		location.href = "../niveis/nivel2.html";
	}

	if (buttonAtivado == "buttonNivel3"){
		location.href = "../niveis/nivel3.html";
	}

	if (buttonAtivado == "buttonNivel4"){
		location.href = "../niveis/nivel4.html";
	}
}

function voltarClickHandler(ev)
{
	ev.stopPropagation();
    location.href = "../html/MenuPrincipal.html";

}
