const input=document.querySelector(".inputElement");
const addTodo=document.querySelector(".addTodo");
const mark=document.querySelector(".delete-icon");
const btn=document.querySelector(".button");
const filter=document.querySelector(".filter-asc");
const array=[];
const textarray=[];
let count=0;
var counter_id=0;
      
function addTask(){
    let element=document.createElement("div")
    element.setAttribute('draggable', true);
        this.counter_id+=1;
        element.setAttribute('id', this.counter_id);

        element.addEventListener('dragstart', (li) => {
        li.dataTransfer.setData("text",li.target.id);
        });
        addTodo.addEventListener("dragover",(li)=>{
          li.preventDefault();
        });
        addTodo.addEventListener("drop",(li)=>{
          const dragedItemId=li.dataTransfer.getData("text");
          addTodo.append(document.getElementById(dragedItemId));
        });
       
    element.classList.add("todoPart");
    let todoText=document.createElement("span");
    todoText.classList.add("todoText");
    todoText.innerText=input.value;
    textarray.push(input.value);
    element.append(todoText);
    element.innerHTML+=`<img class="delete-icon" src="images/xicon.png" alt="">`
    addTodo.append(element);
    array.push(element);
    addTodo.style.display="block";
}

btn.addEventListener("click",()=>{
    if(input.value !=""){
       addTask();
       input.value="";    
    } 
});

input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        addTask();
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

function sortList() {
    let myul,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
    myul = document.getElementById("addTodo");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = myul.getElementsByTagName("div");
        for (i = 0; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i];
            y = rows[i + 1];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

let sort1 = document.querySelector(".filter-asc");
let sort2 = document.querySelector(".filter-desc");
sort2.style.display = "none";

let sortblack1 = document.querySelector(".filter-asc1");
let sortblack2 = document.querySelector(".filter-desc2");
sortblack1.style.display = "none";
sortblack2.style.display = "none";
sort1.addEventListener("mouseover", () => {
   sortblack1.style.display = "block";
   sort1.style.display = "none"; 
});
sort2.addEventListener("mouseover", () => {
  sortblack2.style.display = "block";
  sort2.style.display = "none";
  
});

sort1.addEventListener("mouseout", () => {
    sortblack1.style.display = "none";
    sort1.style.display = "block"; 
 });
 sort2.addEventListener("mouseout", () => {
   sortblack2.style.display = "none";
   sort2.style.display = "block";
   
 });

 sortblack1.addEventListener("click", () => {
    sort2.style.display = "block";
    sort1.style.display = "none";
  });
  sortblack2.addEventListener("click", () => {
    sort1.style.display = "block";
    sort2.style.display = "none";
  });

