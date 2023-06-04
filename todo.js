//variables 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//simply to add task to the to make the button function
function addTask(){
    if(inputBox.value ==='') {alert("You must write something!");}
    else{
        let listItem = document.createElement("LI");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement("SPAN")
        span.innerHTML = "\u00d7";
        listItem.appendChild(span)
    }
    inputBox.value = ''
    //calling the function sava data to keep track of the data
    saveData();
    
    
};

//listen for the click and either delete/remove or cross over done tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //calling the function sava data to keep track of the data
        saveData()
    }
}, false)

///function to Sava the data. Simply to keep track
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//function to remember data whe page is reloaded 
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//dont forget to call this function
showData();