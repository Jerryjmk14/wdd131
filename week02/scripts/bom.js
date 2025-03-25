//variables
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");


//Add event listener to button
button.addEventListener("click", function(){
    if (input.value.trim() !== '') { 
        const li = document.createElement("li");
        //populate li with input value
        li.textContent = input.value;
        const deleteButton = document.createElement("button");
        //populate delete button with ❌
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", "Remove Alma5");
        //append ❌ to the li
        li.append(deleteButton);
        //append li element to the unordered list element
        list.appendChild(li);

        //Add event listener to button
        deleteButton.addEventListener("click", function(){
        list.removeChild(li);
        input.focus();
        })
        input.value = "";
        input.focus()
    } else {
        alert("Pleas enter a book and chapter");
        input.focus()
    }   
})


