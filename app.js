const hideButton = document.querySelector('button#toggleList');
const listDiv = document.querySelector('div.list');
const pDescription = document.querySelector('p.description');
const buttonDescription = document.querySelector('button.description');
const inputDescription = document.querySelector('input.description');
const addItemButton = document.querySelector('button.addItemButton');
const removeLastItemButton = document.querySelector('button.removeLastItemButton');
const ul = document.getElementsByTagName('ul')[0];
const li = ul.querySelectorAll('li');
const addItemInput = document.querySelector('input.addItemInput');

function getThreeButtons(li) {
  let upButton = document.createElement('button');
  li.appendChild(upButton);
  upButton.className = 'up';
  upButton.textContent = 'Up';

  let downButton = document.createElement('button');
  li.appendChild(downButton);
  downButton.className = 'down';
  downButton.textContent = 'Down';

  let removeButton = document.createElement('button');
  li.appendChild(removeButton);
  removeButton.className = 'remove';
  removeButton.textContent = 'Remove';
}

for (let i = 0; i < li.length; i += 1) {
  getThreeButtons(li[i]);
}

ul.addEventListener('click', (event) => {
  if (event.target.className == 'remove') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});

ul.addEventListener('click', (event) => {
  if (event.target.className == 'up') {
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if (prevLi) {
      ul.insertBefore(li, prevLi);
    }
  }
});

ul.addEventListener('click', (event) => {
  if (event.target.className == 'down') {
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if (nextLi) {
      ul.insertBefore(nextLi, li);
    }
  }
});

hideButton.addEventListener('click', () => {
  if (listDiv.style.display == "block") {
    listDiv.style.display = "none";
  } else {
    listDiv.style.display = "block"
  }
});

buttonDescription.addEventListener('click', () => {
  pDescription.textContent = inputDescription.value;
  inputDescription.value = '';
  if (inputDescription.value = '') {
    return false;
  }
});

addItemButton.addEventListener('click', () => {
  if (addItemInput.value == '') {
    return false;
  }
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = addItemInput.value;
  addItemInput.value = '';
  getThreeButtons(li);
});

removeLastItemButton.addEventListener('click', () => {
  let lastLi = ul.lastChild;
  lastLi.remove();
})
