
var initialPage = () => {
  const container = document.querySelector('#content');


  // Navbar creation
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  container.appendChild(navbar);

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
  return


}

export {
  initialPage
};

