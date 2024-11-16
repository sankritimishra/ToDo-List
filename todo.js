
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
let audioElement = new Audio('Assets/alert.mp3');
//let audioElement2= new Audio('Assets/alert2.mp3');

//this is arrow function (parameters)
const AddTask = ()=>{
    
    if(inputBox.value===''){
       //if input box is empty then we show an alert 
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        //we are creating the html element called the li 
        //and we are storing it in li 
        li.innerHTML=inputBox.value;
        //in the text area of li we will add the value that is in inputbox
        listContainer.appendChild(li);
        //that li should be displayed under the list container
        /*
        Element.append() allows you to also append string objects,
        can append several nodes and strings.
        */

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputBox.value="";
    //after appending one task it will be empty 

    saveData();
};


listContainer.addEventListener("click", function(e){
    //event that will occur when we click in listcontainer
      if(e.target.tagName==="LI"){
    //if where we have clicked the tagname is LI 
         if(!e.target.classList.contains("checked")){
            e.target.classList.add("checked")   
         audioElement.play();
        
         }else{
            e.target.classList.remove("checked")
            //audioElement2.play();
         }
         saveData();
    //we add classname checked, and if checked is already there we will
    //remove it.that is why we used toggle here.
      }
      else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
        //task deletion 
      }

},false);

//when we refresh the page we lose our task, so we need to find a way to 
//store it in the browser


const saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML); 
    //saves the data
}

const showTask = () =>{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();