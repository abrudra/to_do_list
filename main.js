////..............Header..............////////

document.body.style.background = "#e6e3e3"
let headerDiv = document.createElement("div");
document.body.appendChild(headerDiv);

headerDiv.style.background = "#e6e3e3";
headerDiv.style.width = "99vw";
headerDiv.style.height = "30vh";
headerDiv.innerText = "todos";
headerDiv.style.fontSize ="8rem";
headerDiv.style.display = "flex";
headerDiv.style.justifyContent  = "center";
headerDiv.style.alignItems = "center";
headerDiv.style.color = "#f7999e";
headerDiv.className = "header-class";
headerDiv.style.flexDirection = "column"

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

//........Leable


///............Footer................///////


//............CheckBox..................../////
