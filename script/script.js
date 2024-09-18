const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if (inputBox.value === "") {
        alert("Enter the task first!!");
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = '<i class="far fa-trash-alt"></i>';
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
};


listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check")
        saveData()
    }
    else if(e.target.tagName === "SPAN" || e.target.tagName === "I"){
         e.target.closest('li').remove();
         saveData()
    }
},false)

const saveData = ()=>{
    localStorage.setItem('data', listContainer.innerHTML)
}

const showData= () =>{
    listContainer.innerHTML= localStorage.getItem('data')
}
showData();