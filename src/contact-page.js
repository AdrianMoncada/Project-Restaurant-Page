
var contactPage = () => {
  // Main Section creation
  const mainSection = document.createElement("div");
  mainSection.classList.add("mainSection");
  mainSection.id = "mainSection";
  body.appendChild(mainSection);
  
  // Content creation
  const title = document.createElement("h1");
  title.textContent = "Contact";
  mainSection.appendChild(title);

  const contactDetail = document.createElement("p");
  title.textContent = "Chef - 555-555-5554 - totallyRealEmail@notFake.com";
  mainSection.appendChild(contactDetail);

  return;
  }
  
  
  export {
    contactPage
  };
  