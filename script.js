//Creating three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

/* a function that runs in response to the button being clicked,
storing the current value of the input element in a variable*/
button.onclick = function () {
  let addItem = input.value;
  input.value = "";

  //Creating three new elements,and storing them in variables
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const listButton = document.createElement("button");

  //Appending the span and the button as children of the list item
  listItem.append(span);
  listItem.append(listButton);
  span.textContent = addItem;
  listButton.textContent = "Delete";

  //Appending the list item as a child of the list.
  ul.append(listItem);

  //event handler to the delete button, when clicked it will delete the entire list item it is inside
  listButton.onclick = function (e) {
    ul.removeChild(listItem);
  };

  input.focus();
};
