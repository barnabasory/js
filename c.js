const keyValue = document.querySelector(".keyvalue");
const keyCodeValue = document.querySelector(".keycodevalue");
const codeValue = document.querySelector(".codevalue");

window.addEventListener("keydown", (e) => {
  keyCodeValue.value = e.keyCode;
  keyValue.value = e.key;
  codeValue.value = e.code;
});
