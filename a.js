const container = document.createElement("div");
const ul = document.createElement("ul");

const items = ["mango", "pawpaw", "cashew", "apple"];

const createListItem = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
};

createListItem("Egg");
createListItem("Mango");
createListItem("Pawpaw");
createListItem("eba");

// items.forEach((item) => {
//   const li2 = document.createElement("li");
//   li2.appendChild(document.createTextNode(item));
//   ul.append(li2);
// });

container.append(ul);
document.body.append(container);
