const input=document.querySelector(".inputElement");
const addTodo=document.querySelector(".addTodo");
const mark=document.querySelector(".delete-icon");
const btn=document.querySelector(".button");
const filter=document.querySelector(".filter-asc");
const array=[];
const textarray=[];
let count=0;
var counter_id=0;
      

btn.addEventListener("click",()=>{
    if(input.value !=""){
       
       input.value="";    
    } 
});

input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        
        input.value="";
    }
});

mark.addEventListener("click",()=>{
    input.value="";
    input.focus();
});

addTodo.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-icon")){
   
       e.target.parentElement.remove();
       array.splice(e.target.parentElement,1)
       
       if(array.length==0){
           addTodo.style.display="none";
       }  
    }
});