function randFundo(){
    var fundo = [1,2,3,4,5][Math.floor(Math.random()*4)];
    !localStorage.fundo ? localStorage.fundo = fundo : 0;
    return localStorage.fundo == fundo
    ?
    (localStorage.fundo = fundo+1)
    :
    (localStorage.fundo = fundo);
 }
 
 var e_header = document.querySelector("header");
 e_header.style.backgroundImage = "url(imagens/fundo"+randFundo()+".jpg)";
 
 
 function animate(element) {
    element.style.transform = "rotate(0deg)"; // Reinicia a rotação
    void element.offsetWidth; // Força uma reflow para reativar a animação
    element.style.transform = "rotate(360deg)"; // Aplica a animação
  }