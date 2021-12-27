
var menuPage = () => {
// Main Section creation
const mainSection = document.createElement("div");
mainSection.classList.add("mainSection");
mainSection.id = "mainSection";
body.appendChild(mainSection);

// Content creation
const title = document.createElement("h1");
title.textContent = "Menu";
mainSection.appendChild(title);

for(let i = 0; i < 7; i++) {
  const menuItem = document.createElement("div");
  mainSection.appendChild(menuItem);
  const itemTitle = document.createElement("h1");
  if(i === 0) {
  itemTitle.textContent = "Triple Bacon Hamburger";
  } else {
    itemTitle.textContent = "Random Meal"
  }
  menuItem.appendChild(itemTitle)

  
  
}
return;
}


export {
  menuPage
};
