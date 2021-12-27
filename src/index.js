import {initialPage, homePage} from "./initial-page-load"
import {menuPage} from "./menu-page"
import {contactPage} from "./contact-page"
import './style.css';

initialPage();
homePage();

  // On click functions
  const menu = document.querySelector("#menu")
  
  menu.addEventListener('click', () => {
    const main = document.querySelector('#mainSection')
    main.remove();
    menuPage();
  });

  const contact = document.querySelector("#contact")

  contact.addEventListener('click', () => {
    const main = document.querySelector('#mainSection')
    main.remove();
    contactPage();
  });

  const home = document.querySelector("#home");

  home.addEventListener('click', () => {
    const main = document.querySelector('#mainSection')
    main.remove();
    homePage();
  });
