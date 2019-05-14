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
	var name =  window.document.getElementById("nome").value;
	var user = localStorage.getItem(name);
	if (name == ""){
		alert("Invalid username!");
	}
	else{
		if(user!=null){
			alert("User already used!");
			return;
		}
		else{
			localStorage.setItem(name, name);
			location.href = "../html/MenuPrincipal.html";
		}
	}
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function sairClickHandler(ev)
{
	window.close();
}
