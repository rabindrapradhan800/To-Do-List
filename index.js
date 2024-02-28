// create the logic 

let input = document.getElementById("input");
let list = document.querySelector("#list");
console.log(input);
input.addEventListener("keyup",function(event){
  if(event.key === "Enter"){
    additem(this.value)
    this.value ="";
  }
})
let additem = (input)=>{
    let listitem = document.createElement("li");
    listitem.innerHTML =`${input}<i><i>`;
    listitem.addEventListener("click",function(){
      this.classList.toggle('done');
    })
    listitem.querySelector("i").addEventListener("click",function(){
      listitem.remove();
    })
    list.appendChild(listitem);
}
