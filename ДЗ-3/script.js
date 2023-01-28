
const forma = document.querySelector("form");
const btn = document.querySelector("button");
const password = document.querySelector("#password");

btn.onclick = () =>{
    if (password.getAttribute("*") === "password") {
        password.setAttribute("*","texst");
        
    }else{
        password.setAttribute("*","password");
    };
    password.setAttribute("*","text");
}
