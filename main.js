(()=>{"use strict";const e=function(e){const t=document.createElement("h1");return t.classList.add("title"),t.textContent=e.text,t},t=function(e){const t=document.createElement("ul");return t.classList.add("menu"),e.forEach((e=>{const n=function(e){const t=document.createElement("li"),n=document.createElement("a");return t.classList.add("menu-item"),n.classList.add("menu-item-link"),n.textContent=e.text,n.href=e.link,t.appendChild(n),t.addEventListener("click",e.handler),t}(e);t.appendChild(n)})),t},n=function(e){const t=document.createElement("h2");return t.classList.add("tagline"),e.forEach((e=>{const n=document.createElement("p");n.textContent=e,t.appendChild(n)})),t},d=function(){const e=document.querySelector("#content");e.children.length>1&&e.removeChild(e.lastChild),e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),d=new n(["Made by Italians.","Enjoyed by Everyone"]);return e.classList.add("home"),t.classList.add("container"),t.appendChild(d),e.appendChild(t),e}())};document.querySelector("#content").appendChild(function(){const n=document.createElement("header"),c=document.createElement("div");n.classList.add("header"),c.classList.add("container");const a=new e({text:"Cibo gustoso"}),l=new t([{link:"#",text:"Home",handler:d},{link:"#",text:"Menu",handler(){}},{link:"#",text:"Contacts",handler(){}}]);return c.appendChild(a),c.appendChild(l),n.appendChild(c),n}()),d()})();