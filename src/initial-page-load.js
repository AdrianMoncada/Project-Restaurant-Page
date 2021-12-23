
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

  for (var i = 0; i < 3; i++) {
    const content = document.createElement('li');
    list.appendChild(content);
  }
  list.getElementsByTagName('li')[0].innerHTML = "Home"
  list.getElementsByTagName('li')[1].innerHTML = "Menu"
  list.getElementsByTagName('li')[2].innerHTML = "Contact"

  const image = document.createElement('img')
  image.src = "/src/index-removebg-preview.png"
  navbar.appendChild(image)
  
  // Main Section creation
  const mainSection = document.createElement("div");
  mainSection.classList.add("mainSection");
  body.appendChild(mainSection);
  // Banner creation
  const banner = document.createElement("img");
  banner.src = "/src/banner.png"
  mainSection.appendChild(banner)
  // Content creation
  const title = document.createElement("h1");
  title.textContent = "BoardGameGeek Coffee Shop";
  const paragraph = document.createElement("p");
  paragraph.textContent = "Established in 2010, Snakes & Lattes provides a FUN experience. We offer our Guests beautiful spaces, and an unique Hospitality Experience centered around our passion: Board Games!"
  const openCloseHours = document.createElement("ol");
  for (var i = 0; i < 7; i++) {
    const content = document.createElement('li');
    content.textContent = "8am - 10pm"
    openCloseHours.appendChild(content);
    
  }
  mainSection.appendChild(title);
  mainSection.appendChild(paragraph);
  mainSection.appendChild(openCloseHours);
  return

}

export {
  initialPage
};

