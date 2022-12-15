////..............Header..............////////


document.body.style.background = "#e6e3e3"
let headerDiv = document.createElement("div");
document.body.appendChild(headerDiv);

headerDiv.style.background = "#e6e3e3";
headerDiv.style.width = "99vw";
headerDiv.style.height = "100%";
headerDiv.innerText = "todos";
headerDiv.style.fontSize ="8rem";
headerDiv.style.display = "flex";
headerDiv.style.justifyContent  = "center";
headerDiv.style.alignItems = "center";
headerDiv.style.color = "#f7999e";
headerDiv.className = "header-class";
headerDiv.style.flexDirection = "column"
// headerDiv.style.border ="2px solid red"

//////..............Inpute Box............./////

let inputBox = document.createElement("input");
headerDiv.appendChild(inputBox);
inputBox.style.fontSize = "24px"
inputBox.placeholder = "What needs to be done?"
inputBox.style.lineHeight = "4.5rem"
inputBox.style.width = "35vw";
inputBox.style.border ="none";
inputBox.style.boxSizing = "border-box";
inputBox.style.boxShadow = "10px 20px 30px #b5b0b0";
inputBox.className = "css-inputBox"
inputBox.id = "filter"

///...............Task Div................///

let taskDiv = document.createElement('div');
document.body.appendChild(taskDiv);
taskDiv.className = "css-taskdiv";
taskDiv.style.border = "2px solid black";
taskDiv.style.height = "100%";
// taskDiv.style.display = 'flex';
// taskDiv.style.justifyContent =" center"


////..............ul list.................////

 let listul = document.createElement('ul');
 taskDiv.appendChild(listul);
 listul.style.border = '2px solid black'
// listul.style.width = "30%"
listul.style.marginLeft = "30%"
// listul.style.background = "white"
listul.style.display = "flex";
listul.style.flexDirection = "column"

//...........All butn  div...........//
// let allBtnDiv = 
// let allbtn = document.createElement("button");
// listul.appendChild(allbtn);



///.........Function For adding text........//////

let inputText = document.getElementById("filter")
// console.log(inputText)


///......Enter btn event for submiting task to li....../

inputText.addEventListener('keypress',addItem);

////.........function for adding......///
listul.addEventListener("click", removeItem);

//.....adding item........///



function addItem(event){
    if(event.keyCode == 13){
      event.preventDefault();

      //........geting input.........//
      let newTask = inputText.value;

      //.......creating new element.....//

      let li = document.createElement("li");

      // li.style.display = "flex";
      // li.style.flexDirection = "row-reverse"

      // adding class to it...//
      li.className = "li-class";

      //....adding Cancel Button..////

      let btnCancel = document.createElement("button");

      btnCancel.className = "btn-class";
      
     btnCancel.appendChild(document.createTextNode("X"));

      ////......Check Box ul list...........///
      let checkBox = document.createElement("input");
      checkBox.className = "checkbox-class";
    //   btnCancel.appendChild(document.createTextNode(".checkbox-class"))

      //.......adding text from input to display in li ......//
      li.appendChild(document.createTextNode(newTask));
      console.log(li);
      li.appendChild(checkBox);
      listul.appendChild(li);
      li.appendChild(btnCancel);
      
     
    }
       
}

  ///..........Romoving Item Function.........//
function removeItem(event){
    
    if (event.target.classList.contains("btn-class")) {
     let li = event.target.parentElement;
     listul.removeChild(li)
    }
}


