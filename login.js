const USERNAME = "admin";
const PASSWORD = "pppk2026";


if(sessionStorage.getItem("loginPPPK") !== "true"){

document.body.style.display="none";


window.onload=function(){


let loginBox = `

<div id="loginBox">

<h2>🔐 Login PPPK</h2>

<input id="user" placeholder="Username">

<input id="pass" 
type="password"
placeholder="Password">

<button onclick="login()">
Masuk
</button>

<p id="pesan"></p>

</div>

`;

document.body.innerHTML = loginBox;

document.body.style.display="block";

}

}



function login(){


let u =
document.getElementById("user").value;


let p =
document.getElementById("pass").value;



if(u === USERNAME && p === PASSWORD){


sessionStorage.setItem(
"loginPPPK",
"true"
);


location.reload();


}else{


document.getElementById("pesan").innerHTML =
"❌ Username atau password salah";


}


}
