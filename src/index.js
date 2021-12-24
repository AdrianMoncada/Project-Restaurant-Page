import {initialPage} from "./initial-page-load"
import {menuPage} from "./menu-page"
import {contactPage} from "./contact-page"

initialPage();

  // On click functions
  const menu = document.querySelector("#menu")
  const main = document.querySelector('#mainSection')
  menu.onclick = () => {
    body.removeChild(main);
    menuPage();
  }
  

  const contact = document.querySelector("#contact")
  contact.onclick = () => {
    body.removeChild(main);
    contactPage();
  }

