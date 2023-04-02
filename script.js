const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const container = document.querySelector(".container");
const ul = document.querySelector("ul");

const button1 = document.querySelector(".submit-button");
const button2 = document.querySelector(".clearBtn");

//add item

function addItem(e) {
  e.preventDefault();

  const newItem = input1.value;
  if (!newItem) {
    alert("Please enter a value");
  }

  //create the list

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("red");

  //create buttons
  function createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;
    li.appendChild(button);
  }

  ul.appendChild(li);
  input1.value = "";
}
form1.addEventListener("submit", addItem);
