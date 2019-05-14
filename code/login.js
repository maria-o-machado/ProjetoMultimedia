"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	//Limpar os usernames que tem scores a 0
	for (var key in localStorage)  {
   		var score=localStorage.getItem(key);
   		if (score == 0){
   			localStorage.removeItem(key);
   		}
	}
	var login = document.getElementsByTagName("button")[0];
	var sair = document.getElementsByTagName("button")[1];
	login.addEventListener("click", loginClickHandler, true);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)
	sair.addEventListener("click", sairClickHandler, true);
}



function loginClickHandler(ev)
{
	var name =  window.document.getElementById("nome").value;
	var user="";
	if (name == ""){
		alert("Invalid username!");
	}
	else{
		for (var key in localStorage){
   			if (key == name){
   				user = name;
   			}
				var keys = key.split("-")
				if (keys[0] == name){
   				user = name;
   			}
   	}
		if(user!=""){
			alert("User already used!");
			return;
		}
		else{
			localStorage.setItem(name, 0);
			location.href = "../html/MenuPrincipal.html";
		}
	}
}

function sairClickHandler(ev)
{
	window.close();
}
