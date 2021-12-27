
var initialPage = () => {

  // Header & Body Selector
  const header = document.querySelector('#header');
  const body = document.querySelector("#body");

  // Navbar creation
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  header.appendChild(navbar);

  const list = document.createElement("ol");
  list.classList.add("navList");
  navbar.appendChild(list);

  const image = document.createElement('img')
  image.src = "/src/index-removebg-preview.png"
  navbar.appendChild(image)

  for (var i = 0; i < 3; i++) {
    const content = document.createElement('li');
    list.appendChild(content);
    if(i === 0) {
      content.textContent = "Home"
      content.id = "home"
    } else if(i === 1) {
      content.textContent = "Menu"
      content.id = "menu"
    } else if(i === 2) {
      content.textContent = "Contact"
      content.id = "contact"
    }
  }




}

var homePage = () => {
    // Main Section creation
    const mainSection = document.createElement("div");
    mainSection.classList.add("mainSection");
    mainSection.id = "mainSection"
    body.appendChild(mainSection);
    
    // Banner creation
    const banner = document.createElement("img");
    banner.src = "/src/banner.jpg"
    mainSection.appendChild(banner)
    // Content creation
    const title = document.createElement("h1");
    title.textContent = "BoardGameGeek Coffee Shop";
  
    const paragraph = document.createElement("p");
    paragraph.textContent = "Established in 2010, Snakes & Lattes provides a FUN experience. We offer our Guests beautiful spaces, and an unique Hospitality Experience centered around our passion: Board Games!"
  
    const openCloseHours = document.createElement("ol");
    for (var i = 0; i < 7; i++) {
      const content = document.createElement('li');
      openCloseHours.appendChild(content);
      i === 0 || i === 6?content.textContent = "8am - 10pm":content.textContent = "6am - 6pm";  
    }
    mainSection.appendChild(title);
    mainSection.appendChild(paragraph);
    mainSection.appendChild(openCloseHours);
}

export {
  initialPage,
  homePage
};

