let button = document.getElementById("access");
let links = document.getElementById("links");
let i = 0;

button.addEventListener("click", function(e){
    e.preventDefault();
    if(i==0){
        links.className = ("links two")
        i=1;
    }else{
        links.classList.remove("two")
        links.className = ("links one")
        i=0;
    }
})

