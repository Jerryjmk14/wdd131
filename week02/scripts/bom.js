//variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

//populate li with input value
li.textContent = input.ariaValueMax;
//populate delete button with ❌
deleteButton.textContent = "❌";
deleteButton.setAttribute("aria-label", "Remove Alma5");

//append ❌ to the li
li.append(deleteButton);
//append li element to the unordered list element
list.appendChild(li);

// console.log(input);
// console.log(button);
// console.log(deleteButton);
// console.log(li);