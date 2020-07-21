let button = document.getElementById("access");
let links = document.getElementById("links");
let access = document.getElementById('access');
let i = 0;

button.addEventListener("click", function(e){
    e.preventDefault();
    if(i==0){
        links.className = ("links two")
        access.className = ("access acces-two")
        i=1;
    }else{
        links.classList.remove("two")
        links.className = ("links one")
        access.className = ("access access-one")
        i=0;
    }
})