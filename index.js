let addinput=document.getElementById("addinput");
let list=document.getElementById("list");

let addtask=()=>{
    let li = document.createElement("li");
     li.innerHTML=addinput.value;
    list.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    addinput.value="";
    savedata();
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
})
let link=document.querySelectorAll("a");
let bodyid=document.querySelector("body").id;

   if( link.dataset.active===bodyid){
       link.classList.add("active");

   }

 
let savedata=()=>{
    localStorage.setItem("list",list.innerHTML);
}

let getdata=()=>{
    list.innerHTML=localStorage.getItem("list");
}
getdata();