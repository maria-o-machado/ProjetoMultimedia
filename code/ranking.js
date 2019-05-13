"use strict";

const pasta= "../resources/ranking/";
const opInativa = 0;  

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var cliques = 1;
	var photo = document.getElementById("photo");
	var buttonVoltar = document.getElementById("buttonVoltar");
	var buttonJogo = document.getElementById("buttonJogo");
	var buttonFrente = document.getElementById("buttonFrente");
	var buttonTras = document.getElementById("buttonTras");
	var jogar = document.getElementById("buttonJogo");
	var nivelAtivo="nivel1";

	console.log(getCookie("username"));

	buttonTras.disabled = true;
	buttonTras.style.cursor = "default";
	buttonTras.style.opacity = opInativa;

	mudaImagem(cliques, photo);

	function but(ev){
		cliques = botao(ev, cliques);
		nivelAtivo = "nivel"+cliques;
	}

	function jogarNivel(ev){
		jogarClickHandler(ev, nivelAtivo);
	}
	
	buttonFrente.addEventListener("click", but);
	buttonTras.addEventListener("click", but);
	jogar.addEventListener("click", jogarNivel);
	buttonVoltar.addEventListener("click", voltarClickHandler, true);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão
}

function botao(ev, cliques){

	var max = 5; 
	var botao = ev.currentTarget;
	
	if(botao==buttonFrente){
		cliques+=1;	
	}
	else if (botao==buttonTras){
		cliques-=1;
	}

	mudaImagem(cliques, photo);

	if(cliques==max){
			let btn=buttonFrente;
			btn.disabled = true;
			btn.style.cursor = "default";
			btn.style.opacity = opInativa;
		
	}	

	if(cliques==1){
			let btn=buttonTras;
			btn.disabled = true;
			btn.style.cursor = "default";
			btn.style.opacity = opInativa;
		
	}

	else if (cliques!=max && cliques!=1){
			let btn=buttonTras;
			btn.disabled = false;
			btn.style.cursor = "pointer";
			btn.style.opacity = 1;
			btn=buttonFrente;
			btn.disabled = false;
			btn.style.cursor = "pointer";
			btn.style.opacity = 1;
	}
	return cliques;
}

function mudaImagem(cliques, imagem){
		imagem.src = pasta + "nivel" + cliques + ".png";
}

function jogarClickHandler(ev, nivelAtivo){
	if (nivelAtivo == "nivel1"){
		location.href = "../niveis/nivel1.html";
	}
	if (nivelAtivo == "nivel2"){
		location.href = "../niveis/nivel2.html";
	}

}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }

  }
  return "";
}

function voltarClickHandler(ev){
	ev.stopPropagation();
    location.href = "../html/MenuPrincipal.html";

}