
var contactPage = () => {
  // Main Section creation
  const mainSection = document.createElement("div");
  mainSection.classList.add("mainSection");
  mainSection.id = "mainSection";
  body.appendChild(mainSection);
  
  // Content creation
  const title = document.createElement("h1");
  title.textContent = "contact";
  mainSection.appendChild(title);
  }
  
  
  export {
    contactPage
  };
  