////..............Header..............////////
document.body.style.background = "#e6e3e3";
let headerDiv = document.createElement("div");
document.body.appendChild(headerDiv);

headerDiv.style.background = "#e6e3e3";
headerDiv.style.width = "99vw";
headerDiv.style.height = "100%";
headerDiv.innerText = "todos";
headerDiv.style.fontSize = "8rem";
headerDiv.style.display = "flex";
headerDiv.style.justifyContent = "center";
headerDiv.style.alignItems = "center";
headerDiv.style.color = "#f7999e";
headerDiv.className = "header-class";
headerDiv.style.flexDirection = "column";

//...........Checkbox for all checking.....//
let checkboxDiv = document.createElement("div");
headerDiv.appendChild(checkboxDiv);
checkboxDiv.classList.add("checkbox-Div");

let checkBoxAll = document.createElement("input");
checkBoxAll.setAttribute("type", "checkbox");
checkBoxAll.className = "checkboxall-class";
checkboxDiv.appendChild(checkBoxAll);
//////..............Inpute Box............./////

let inputBox = document.createElement("input");
checkboxDiv.appendChild(inputBox);
inputBox.style.fontSize = "30px";
inputBox.setAttribute = ("type", "text");
inputBox.placeholder = "What needs to be done?";
inputBox.style.lineHeight = "4rem";
inputBox.style.width = "35vw";
inputBox.style.border = "none";
inputBox.style.boxSizing = "border-box";
inputBox.style.boxShadow = "10px 20px 30px #b5b0b0";
inputBox.className = "css-inputBox";
inputBox.id = "filter";
inputBox.style.outline = "none";
inputBox.style.paddingLeft = "10%";

///...............Task Div................///

let taskDiv = document.createElement("div");
document.body.appendChild(taskDiv);
taskDiv.className = "css-taskdiv";

taskDiv.style.height = "100%";
taskDiv.style.display = "flex";
taskDiv.style.flexDirection = "column";

////..............ul list.................////

let listul = document.createElement("ul");
listul.setAttribute("id", "myUl");
taskDiv.appendChild(listul);
listul.classList.add("listul-class");

//...........All butn  div...........//

let btnDiv = document.createElement("div");
taskDiv.appendChild(btnDiv);
btnDiv.classList.add("btndiv");

let counterDiv = document.createElement("div");
btnDiv.appendChild(counterDiv);
counterDiv.classList.add("counterdiv-class");
counterDiv.innerText = " 0 Item Left";

let allBtnDiv = document.createElement("div");
btnDiv.appendChild(allBtnDiv);
allBtnDiv.classList.add("allbtndiv");
allBtnDiv.style.display = "flex";
allBtnDiv.style.gap = "5%";

let allbtn = document.createElement("button");
allBtnDiv.appendChild(allbtn);
allbtn.classList.add("allbtn-class", "btncolor");
allbtn.innerText = "All";

let activeBtn = document.createElement("button");
allBtnDiv.appendChild(activeBtn);
activeBtn.classList.add("activebtn-class", "btncolor");
activeBtn.innerText = "Active";

let completeBtn = document.createElement("button");
allBtnDiv.appendChild(completeBtn);
completeBtn.classList.add("completeBtn-class", "btncolor");
completeBtn.innerText = "Complete";

let clearDiv = document.createElement("button");
btnDiv.appendChild(clearDiv);
clearDiv.classList.add("cleardiv-class");
clearDiv.innerText = "Clear Data";
///.........Function For adding text........//////

let inputText = document.getElementById("filter");

//.....adding item........///

inputText.addEventListener("keypress", (event) => {
  addItem(event);
  countItem();
});
//.....Add Item..............Enter btn event for submiting task to li....
let addItem = (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    let newTask = inputText.value;
    if (newTask !== "") {
      let data = JSON.parse(localStorage.getItem("data"));
      if (data === null) {
        localStorage.setItem(
          "data",
          JSON.stringify([{ message: event.target.value }])
        );
      } else {
        let data = JSON.parse(localStorage.getItem("data"));
        const arrayData = [...data, { message: event.target.value }];
        localStorage.setItem("data", JSON.stringify(arrayData));
      }
      let myList = document.getElementById("myUl");
      myList.innerHTML = "";
      let clearValue = document.getElementById("filter");
      clearValue.value = "";

      localData();
    }
  }
};

////...........Adding Task count................//////
let countItem = () => {
  let startCount = document.querySelector(".counterdiv-class");
  let newCount = 0;

  let listData = document.querySelectorAll(".checkbox-class");
  listData.forEach((ele) => {
    if (ele.checked === false) {
      newCount++;
    }
  });
  startCount.innerText = newCount + " Items Left";
};

///..........Romoving Item Function.........//

const filterData = (data, optionId) => {
  return data.filter((item, index) => {
    if (index !== optionId) {
      return item;
    }
  });
};
listul.addEventListener("click", (event) => {
  let data = JSON.parse(localStorage.getItem("data"));
  if (event.target.classList.contains("btn-class")) {
    let li = event.target.parentElement;
    let ret = li.id;
    const optionId = ret.replace(/\D/g, "") - 1;
    const dataToPushLocalstorage = filterData(data, optionId);
    localStorage.setItem("data", JSON.stringify(dataToPushLocalstorage));
    listul.removeChild(li);
    countItem();
  }
});

///......................Cheking All................./////
checkBoxAll.addEventListener("change", (e) => {
  let checkBoxSelect = document.querySelectorAll(".checkbox-class");
  let lineThrow = taskDiv.firstElementChild.childNodes;
  lineThrow.forEach((ele) => (ele.style.textDecoration = "line-through"));
  if (checkBoxAll.checked) {
    checkBoxSelect.forEach((ele) => (ele.checked = true));
    lineThrow.forEach((ele) => (ele.style.textDecoration = "line-through"));
  } else {
    checkBoxSelect.forEach((ele) => (ele.checked = false));
    lineThrow.forEach((ele) => (ele.style.textDecoration = "none"));
  }

  countItem();
});
///..........applying button to function.....///

let allTaskShow = document.querySelector(".allbtn-class");
allTaskShow.addEventListener("click", showTask);
function showTask(event) {
  let taskContain = document.querySelectorAll(".checkbox-class");
  taskContain.forEach((ele) => {
    ele.parentElement.style.display = "block";
  });
}

let activeshow = document.querySelector(".activebtn-class");
activeshow.addEventListener("click", showActiveTask);
function showActiveTask(event) {
  let taskContain = document.querySelectorAll(".checkbox-class");
  taskContain.forEach((ele) => {
    if (ele.checked) {
      ele.parentElement.style.display = "none";
    } else {
      ele.parentElement.style.display = "block";
    }
  });
}

let completedShow = document.querySelector(".completeBtn-class");
completedShow.addEventListener("click", completedShowTask);
function completedShowTask(event) {
  let taskContain = document.querySelectorAll(".checkbox-class");

  taskContain.forEach((ele) => {
    if (ele.checked) {
      ele.parentElement.style.display = "block";
    } else {
      ele.parentElement.style.display = "none";
    }
  });
}

let cleardataword = document.querySelector(".cleardiv-class");
cleardataword.addEventListener("click", () => {
  let taskContain = document.querySelectorAll(".checkbox-class");
  taskContain.forEach((ele) => {
    ele.parentElement.remove();
  });
  countItem();
  localStorage.clear();
  let uncheck = document.querySelector(".checkboxall-class");
  if (uncheck.checked == true) {
    uncheck.checked = false;
  } else {
    uncheck.checked = false;
  }
});

function localData() {
  let data = JSON.parse(localStorage.getItem("data"));

  if (data !== null) {
    let count = 0;

    data.forEach(function (item) {
      let li = document.createElement("li");
      count++;
      li.id = "liid" + count;
      li.className = "li-class";
      let btnCancel = document.createElement("button");
      btnCancel.className = "btn-class";
      btnCancel.appendChild(document.createTextNode("X"));
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.className = "checkbox-class";
      li.appendChild(document.createTextNode(item.message));
      li.appendChild(checkBox);
      listul.appendChild(li);
      li.appendChild(btnCancel);

      checkBox.addEventListener("change", (e) => {
        if (checkBox.checked) {
          e.target.parentElement.style.textDecoration = "line-through";
        } else {
          e.target.parentElement.style.textDecoration = "none";
        }
      });

      checkBox.addEventListener("click", countItem);
      document.getElementById("myUl").appendChild(li);
      countItem();
    });
  }
}
localData();
