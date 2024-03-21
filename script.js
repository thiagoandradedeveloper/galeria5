window.onload = () => {
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let conteiner = document.querySelector(".container");

    next.addEventListener("click", function(){
        let imgs = document.querySelectorAll(".container img");
        conteiner.appendChild(imgs[0]);
    })
    prev.addEventListener("click", function(){
        let imgs = document.querySelectorAll(".container img");
        conteiner.prepend(imgs[imgs.length-1]);
    })
}