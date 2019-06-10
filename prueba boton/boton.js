
function showPassword(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
   		tipo.type = "text";// TOGGLE
	}
}
function hidePassword(){
	var tipo = document.getElementById("password");
	if(tipo.type == "text"){
		tipo.type = "password"; 
	}
}