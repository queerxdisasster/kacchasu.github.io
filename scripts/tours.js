let add = document.getElementsByClassName("add");
let remove = document.getElementsByClassName("remove");
let nothing = document.getElementById("nothing");
let plans = document.getElementById("plans");
let added = 0;
for(let i = 0; i < add.length; i++){
    add[i].addEventListener("click", function(){
        add[i].style.display = "none";
        remove[i].style.display = "block";
        added--;
        if (added === 0){
            nothing.style.display = "block";
        }
        plans.style.display = "none";
    });
    remove[i].addEventListener("click", function(){
        remove[i].style.display = "none";
        add[i].style.display = "block";
        nothing.style.display = "none";
        added++;
        if (added === add.length){
            plans.style.display = "block";
        }
    });
}