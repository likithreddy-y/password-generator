const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/|";

document.getElementById("generate").onclick = function(){

    let length = Number(document.getElementById("length").value);

    let chars = "";

    if(document.getElementById("uppercase").checked){
        chars += upper;
    }

    if(document.getElementById("lowercase").checked){
        chars += lower;
    }

    if(document.getElementById("numbers").checked){
        chars += numbers;
    }

    if(document.getElementById("symbols").checked){
        chars += symbols;
    }

    if(chars === ""){
        alert("Select at least one option.");
        return;
    }

    let password = "";

    for(let i=0;i<length;i++){

        let randomIndex = Math.floor(Math.random()*chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
};

document.getElementById("copy").onclick = function(){

    let password = document.getElementById("password");

    password.select();

    document.execCommand("copy");

    alert("Password Copied!");
};