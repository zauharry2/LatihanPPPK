if(sessionStorage.getItem("loginPPPK") !== "true"){

document.addEventListener("DOMContentLoaded", function(){

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#2563eb;
font-family:Arial;
">

<div style="
background:white;
padding:30px;
border-radius:15px;
width:300px;
text-align:center;
box-shadow:0 5px 15px #333;
">

<h2>🔐 Login PPPK</h2>

<input id="username"
placeholder="Username"
style="width:90%;padding:10px;margin:8px">

<br>

<input id="password"
type="password"
placeholder="Password"
style="width:90%;padding:10px;margin:8px">

<br>

<button onclick="cekLogin()"
style="
background:#16a34a;
color:white;
border:0;
padding:10px 30px;
border-radius:8px;
cursor:pointer;
">
Masuk
</button>

<p id="error" style="color:red"></p>

</div>

</div>

`;

});

}



function cekLogin(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;


if(user==="admin" && pass==="pppk2026"){

sessionStorage.setItem(
"loginPPPK",
"true"
);

location.reload();

}

else{

document.getElementById("error").innerHTML =
"Username / Password salah";

}

}
