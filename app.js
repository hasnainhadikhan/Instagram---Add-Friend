let istatus = document.querySelector("h5")
let btn  = document.querySelector("#btn")
let img =document.querySelector("#image")
let check = 0;
btn.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML= "Friends"
    istatus.style.color="green"
    btn.innerHTML ="Remove Friend"
    btn.style.color="red"
    img.style.opacity="0.9"
    alert(`Papa ki Pari accepted your friend request`)
       check = 1;    //Both if else run vise verse
}else{
    istatus.innerHTML= "Starnger"
    istatus.style.color="red"
    btn.innerHTML ="Add Friends"
    btn.style.color="green"
    img.style.opacity ="0"
     check = 0; 
    }
})