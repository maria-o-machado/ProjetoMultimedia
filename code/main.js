"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
  var frm = document.getElementById('frame');
  var messageHandler = function(ev){
    messageEventHandler(ev, frm);
  }

  var musica = document.getElementById('musica');

  frm.src="html/login.html";

  window.addEventListener("message", messageHandler, musica);

  localStorage.setItem("musica", "on");
	localStorage.setItem("sons", "on");


}

function messageEventHandler(ev, frm, musica){
  var messageSource = ev.source.location.pathname;
  var frameName = messageSource.substring(messageSource.lastIndexOf('/')+1, messageSource.length);
  var message = ev.data;

  if(frameName=="login.html" && message=="botaologin"){
    frm.src = "./html/MenuPrincipal.html";
  }
	else if(frameName=="login.html" && message=="botaosair"){
    window.close();
  }
  else if(frameName=="MenuPrincipal.html" && message=="botaojogar"){
    frm.src = "./html/menuniveis.html";
  }
	else if(frameName=="MenuPrincipal.html" && message=="botaotutorial"){
    frm.src = "./html/tutorial.html";
  }
  else if(frameName=="MenuPrincipal.html" && message=="botaodefenicoes"){
    frm.src = "./html/definicoes.html";
  }
  else if(frameName=="MenuPrincipal.html" && message=="botaoranking"){
    frm.src = "./html/ranking.html";
  }
  else if(frameName=="MenuPrincipal.html" && message=="botaocreditos"){
    frm.src = "./html/creditos.html";
  }
	else if(frameName=="MenuPrincipal.html" && message=="botaosair"){
    window.close();
  }
	else if(frameName=="tutorial.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
	else if(frameName=="tutorial.html" && message=="botaojogar"){
    frm.src = "./html/menuniveis.html";
  }
	else if(frameName=="tutorial2.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
	else if(frameName=="tutorial2.html" && message=="botaojogar"){
    frm.src = "./html/menuniveis.html";
  }
	else if(frameName=="tutorial3.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
	else if(frameName=="tutorial3.html" && message=="botaojogar"){
    frm.src = "./html/menuniveis.html";
  }
  else if(frameName=="creditos.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
	else if(frameName=="creditos.html" && message=="botaosair"){
    window.close();
  }
  else if(frameName=="ranking.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
  else if(frameName=="ranking.html" && message=="nivel1"){
    frm.src = "../niveis/nivel1.html";
  }
  else if(frameName=="ranking.html" && message=="nivel2"){
    frm.src = "../niveis/nivel2.html";
  }
  else if(frameName=="ranking.html" && message=="nivel3"){
    frm.src = "../niveis/nivel3.html";
  }
  else if(frameName=="ranking.html" && message=="nivel4"){
    frm.src = "../niveis/nivel4.html";
  }
  else if(frameName=="ranking.html" && message=="nivel5"){
    frm.src = "../niveis/nivel5.html";
  }
  else if(frameName=="ranking.html" && message=="nivel6"){
    frm.src = "../niveis/nivel6.html";
  }
  else if(frameName=="ranking.html" && message=="nivel7"){
    frm.src = "../niveis/nivel7.html";
  }
  else if(frameName=="ranking.html" && message=="nivel8"){
    frm.src = "../niveis/nivel8.html";
  }
  else if(frameName=="ranking.html" && message=="nivel9"){
    frm.src = "../niveis/nivel9.html";
  }
  else if(frameName=="ranking.html" && message=="nivel10"){
    frm.src = "../niveis/nivel10.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel1"){
    frm.src = "../niveis/nivel1.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel2"){
    frm.src = "../niveis/nivel2.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel3"){
    frm.src = "../niveis/nivel3.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel4"){
    frm.src = "../niveis/nivel4.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel5"){
    frm.src = "../niveis/nivel5.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel6"){
    frm.src = "../niveis/nivel6.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel7"){
    frm.src = "../niveis/nivel7.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel8"){
    frm.src = "../niveis/nivel8.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel9"){
    frm.src = "../niveis/nivel9.html";
  }
  else if(frameName=="menuniveis.html" && message=="buttonNivel10"){
    frm.src = "../niveis/nivel10.html";
  }
  else if(frameName=="menuniveis.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
  else if(frameName=="definicoes.html" && message=="botaovoltar"){
    frm.src = "./html/MenuPrincipal.html";
  }
	else if(frameName=="fim.html" && message=="botaocreditos"){
    frm.src = "./html/creditos.html";
  }
}
