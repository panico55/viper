let imagens=["img/bf3.jpg" ,"img/RD.jpg","img/bgIndex.jpg"];
let imagemAtual =0;

function trocarImagem(){
    imagemAtual = (imagemAtual + 1 ) % 3;
    document.querySelector('.banner img ').src=imagens[imagemAtual];
}
setInterval(trocarImagem, 2500); 