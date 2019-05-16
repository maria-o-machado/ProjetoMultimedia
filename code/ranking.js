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
	var music = document.getElementById("musica");
	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var nivelAtivo="nivel1";

	setTexto(cliques);

	buttonTras.disabled = true;
	buttonTras.style.cursor = "default";
	buttonTras.style.opacity = opInativa;

	mudaImagem(cliques, photo);

	var user;
	for (var key in localStorage){
		var bloqueado = localStorage.getItem(key);
		if (bloqueado==0){
			user = key;
		}
	}

	function but(ev){
		cliques = botao(ev, cliques);
		nivelAtivo = "nivel"+cliques;
		if (cliques!=1){
			var result = localStorage.getItem(key+"-nivel"+cliques);
			if (result==null){
				jogar.disabled = true;
				jogar.style.filter="grayscale(100%)";
				jogar.style.cursor="auto";
			}
		}
		else{
			jogar.style.filter="none";
			jogar.disabled = false;
			jogar.style.cursor = "pointer";
			jogar.style.opacity = 1;
		}
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

	var max = 10;
	var botao = ev.currentTarget;

	if(botao==buttonFrente){
		cliques+=1;
	}
	else if (botao==buttonTras){
		cliques-=1;
	}

	mudaImagem(cliques, photo);
	setTexto(cliques);

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

function setTexto(cliques){
	console.log(localStorage);
	var vetornome = Array();
	var vetorscore = Array();
	for (var key in localStorage){
		var score = localStorage.getItem(key);
		if (score!=0){
			var info=key.split('-');
			var str = "nivel";
			var str1 = str.concat(cliques);
			if (str1==info[1]){
				vetornome.push(info[0]);
				vetorscore.push(score);
			}
		}
	}

	for (var i=0; i<vetorscore.length-1; i++){
		var menor=i;
		for (var j=i+1; j<vetorscore.length; j++){
			if (parseInt(vetorscore[j]) > parseInt(vetorscore[menor]))
				menor=j
		}
		if (menor!=i){
			var aux_nome = vetornome[i];
			var score = vetorscore[i];
			vetornome[i] = vetornome[menor];
			vetorscore[i] = vetorscore[menor];
			vetornome[menor] = aux_nome;
			vetorscore[menor] = score;
		}
	}

	for (var i=0; i<vetorscore.length && i<10; i++){
		var string = vetornome[i]+"        "+vetorscore[i];
		document.getElementById("ranking".concat(i+1)).innerHTML = string;
	}

	console.log(vetorscore);
	if (vetorscore.length<10){
		for (var i=vetorscore.length; i<10; i++){
				document.getElementById("ranking".concat(i+1)).innerHTML = "";
		}
	}
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

function voltarClickHandler(ev){
	ev.stopPropagation();
    location.href = "../html/MenuPrincipal.html";

}
