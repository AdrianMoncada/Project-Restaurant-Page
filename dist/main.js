(()=>{"use strict";(()=>{const e=document.querySelector("#header"),n=document.querySelector("#body"),t=document.createElement("nav");t.classList.add("navbar"),e.appendChild(t);const a=document.createElement("ol");a.classList.add("navList"),t.appendChild(a);for(var d=0;d<3;d++){const e=document.createElement("li");a.appendChild(e)}a.getElementsByTagName("li")[0].innerHTML="Home",a.getElementsByTagName("li")[1].innerHTML="Menu",a.getElementsByTagName("li")[2].innerHTML="Contact";const c=document.createElement("img");c.src="/src/index-removebg-preview.png",t.appendChild(c);const o=document.createElement("div");o.classList.add("mainSection"),n.appendChild(o);const s=document.createElement("img");s.src="/src/banner.png",o.appendChild(s);const i=document.createElement("h1");i.textContent="BoardGameGeek Coffee Shop";const r=document.createElement("p");r.textContent="Established in 2010, Snakes & Lattes provides a FUN experience. We offer our Guests beautiful spaces, and an unique Hospitality Experience centered around our passion: Board Games!";const l=document.createElement("ol");for(d=0;d<7;d++){const e=document.createElement("li");e.textContent="8am - 10pm",l.appendChild(e)}o.appendChild(i),o.appendChild(r),o.appendChild(l)})()})();