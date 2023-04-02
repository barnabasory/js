const div = document.createElement("div");
const button = document.createElement("button");
const ul = document.createElement("ul");
const li = document.createElement("li");
button.textContent = "Delete Item";
const button2 = document.createElement("button");

function appendItem(item, buttonText) {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.appendChild(document.createTextNode(item));
  button.appendChild(document.createTextNode(buttonText));
  li.style.background = "lightblue";
  li.style.padding = "20px";
  li.style.width = "400px";
  button.style.background = "red";
  button.style.padding = "20px";
  button.style.width = "80px";
  button2.style.background = "red";
  button2.style.padding = "20px";
  button2.style.width = "80px";
  button2.innerHTML = "Delete all items";
  div.append(button2);

  button.onclick = () => {
    li.remove();
    button.remove();
  };
  ul.append(li, button);

  button2.onclick = () => {
    ul.remove();
  };
}

appendItem("milk", "Delete Item");
appendItem("egg", "Delete Item");
appendItem("cake", "Delete Item");

div.append(ul);
document.body.append(div);
