/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./src/Title.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./src/Nav.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");





function Header() {
  const header = document.createElement('header');
  const container = document.createElement('div');

  header.classList.add('header');
  container.classList.add('container');

  const title = new _Title__WEBPACK_IMPORTED_MODULE_0__["default"]({ text: 'Cibo gustoso' });
  const nav = new _Nav__WEBPACK_IMPORTED_MODULE_1__["default"]([
    { link: '#', text: 'Home', handler: _Home__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { link: '#', text: 'Menu', handler: _Menu__WEBPACK_IMPORTED_MODULE_3__["default"] },
  ]);

  container.appendChild(title);
  container.appendChild(nav);
  header.appendChild(container);

  return header;
}

function displayHeader() {
  const content = document.querySelector('#content');
  content.appendChild(Header());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHeader);


/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tagline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tagline */ "./src/Tagline.js");


function Home() {
  const sentences = ['Made by Italians.', 'Enjoyed by Everyone'];
  const home = document.createElement('div');
  const container = document.createElement('div');
  const tagline = new _Tagline__WEBPACK_IMPORTED_MODULE_0__["default"](sentences);

  home.classList.add('home');
  container.classList.add('container');

  container.appendChild(tagline);
  home.appendChild(container);

  return home;
}

function displayHome() {
  const content = document.querySelector('#content');
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(Home());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);


/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem */ "./src/MenuItem.js");


const menuData = [
  {
    name: 'Gnocchi with almonds',
    imgURL: './assets/img/gnocohi.jpg',
    price: 10,
  },
  {
    name: 'Mini spinach ravioli',
    imgURL: './assets/img/ravioli.jpg',
    price: 12,
  },
  {
    name: 'Lasagna',
    imgURL: './assets/img/lasagna.jpg',
    price: 8,
  },
  {
    name: 'Carbonara spaghetti',
    imgURL: './assets/img/carbonara.jpg',
    price: 15,
  },
  {
    name: 'Lasagna',
    imgURL: './assets/img/lasagna.jpg',
    price: 8,
  },
  {
    name: 'Gnocchi with almonds',
    imgURL: './assets/img/gnocohi.jpg',
    price: 10,
  },
  {
    name: 'Mini spinach ravioli',
    imgURL: './assets/img/ravioli.jpg',
    price: 12,
  },
];

function Menu() {
  const menu = document.createElement('div');
  const container = document.createElement('div');
  const menuText = document.createElement('p');
  const menuList = document.createElement('div');

  menu.classList.add('menu');
  container.classList.add('container');
  menuText.classList.add('menu-text');
  menuList.classList.add('menu-list');

  menuText.textContent = 'Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla. Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.';

  container.appendChild(menuText);
  container.appendChild(menuList);
  menu.appendChild(container);

  menuData.forEach((menuItemData) => {
    const menuItem = new _MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"](menuItemData);
    menuList.appendChild(menuItem);
  });

  return menu;
}

function displayMenu() {
  const content = document.querySelector('#content');
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(Menu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);


/***/ }),

/***/ "./src/MenuItem.js":
/*!*************************!*\
  !*** ./src/MenuItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function MenuItem(menuItemData) {
  const item = document.createElement('div');
  const itemName = document.createElement('h3');
  const itemPrice = document.createElement('p');
  const itemImg = document.createElement('img');

  itemName.textContent = menuItemData.name;
  itemPrice.textContent = `$${menuItemData.price}`;
  itemImg.src = menuItemData.imgURL;

  item.classList.add('menu-item');
  itemName.classList.add('menu-item-name');
  itemPrice.classList.add('menu-item-price');
  itemImg.classList.add('menu-item-img');

  item.appendChild(itemImg);
  item.appendChild(itemName);
  item.appendChild(itemPrice);

  return item;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);


/***/ }),

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavItem */ "./src/NavItem.js");


function Nav(data) {
  const nav = document.createElement('ul');

  nav.classList.add('nav');

  data.forEach((menuItemData) => {
    const navItem = (0,_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"])(menuItemData);
    nav.appendChild(navItem);
  });

  return nav;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ "./src/NavItem.js":
/*!************************!*\
  !*** ./src/NavItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function NavItem(data) {
  const navItem = document.createElement('li');
  const navItemLink = document.createElement('a');

  navItem.classList.add('nav-item');
  navItemLink.classList.add('nav-item-link');

  navItemLink.textContent = data.text;
  navItemLink.href = data.link;

  navItem.appendChild(navItemLink);

  navItem.addEventListener('click', data.handler);

  return navItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);


/***/ }),

/***/ "./src/Tagline.js":
/*!************************!*\
  !*** ./src/Tagline.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Tagline(sentences) {
  const tagline = document.createElement('h2');
  tagline.classList.add('tagline');

  sentences.forEach((sentence) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = sentence;

    tagline.appendChild(paragraph);
  });

  return tagline;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tagline);


/***/ }),

/***/ "./src/Title.js":
/*!**********************!*\
  !*** ./src/Title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Title(data) {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = data.text;

  return title;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/Home.js");



(0,_Header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_Home__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSjtBQUNTO0FBQ0E7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQiw4Q0FBSyxHQUFHLHNCQUFzQjtBQUNsRCxrQkFBa0IsNENBQUc7QUFDckIsTUFBTSxrQ0FBa0MsNkNBQVcsRUFBRTtBQUNyRCxNQUFNLGtDQUFrQyw2Q0FBVyxFQUFFO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixpREFBUTtBQUNqQztBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJROztBQUVoQztBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZm5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2R2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQ1JyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNKOztBQUVqQyxtREFBYTtBQUNiLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL05hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTmF2SXRlbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFnbGluZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9NZW51JztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBuZXcgVGl0bGUoeyB0ZXh0OiAnQ2libyBndXN0b3NvJyB9KTtcbiAgY29uc3QgbmF2ID0gbmV3IE5hdihbXG4gICAgeyBsaW5rOiAnIycsIHRleHQ6ICdIb21lJywgaGFuZGxlcjogZGlzcGxheUhvbWUgfSxcbiAgICB7IGxpbms6ICcjJywgdGV4dDogJ01lbnUnLCBoYW5kbGVyOiBkaXNwbGF5TWVudSB9LFxuICBdKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SGVhZGVyO1xuIiwiaW1wb3J0IFRhZ2xpbmUgZnJvbSAnLi9UYWdsaW5lJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc2VudGVuY2VzID0gWydNYWRlIGJ5IEl0YWxpYW5zLicsICdFbmpveWVkIGJ5IEV2ZXJ5b25lJ107XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhZ2xpbmUgPSBuZXcgVGFnbGluZShzZW50ZW5jZXMpO1xuXG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuICBob21lLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgaWYgKGNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICB9XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWU7XG4iLCJpbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSc7XG5cbmNvbnN0IG1lbnVEYXRhID0gW1xuICB7XG4gICAgbmFtZTogJ0dub2NjaGkgd2l0aCBhbG1vbmRzJyxcbiAgICBpbWdVUkw6ICcuL2Fzc2V0cy9pbWcvZ25vY29oaS5qcGcnLFxuICAgIHByaWNlOiAxMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNaW5pIHNwaW5hY2ggcmF2aW9saScsXG4gICAgaW1nVVJMOiAnLi9hc3NldHMvaW1nL3JhdmlvbGkuanBnJyxcbiAgICBwcmljZTogMTIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGFzYWduYScsXG4gICAgaW1nVVJMOiAnLi9hc3NldHMvaW1nL2xhc2FnbmEuanBnJyxcbiAgICBwcmljZTogOCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDYXJib25hcmEgc3BhZ2hldHRpJyxcbiAgICBpbWdVUkw6ICcuL2Fzc2V0cy9pbWcvY2FyYm9uYXJhLmpwZycsXG4gICAgcHJpY2U6IDE1LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xhc2FnbmEnLFxuICAgIGltZ1VSTDogJy4vYXNzZXRzL2ltZy9sYXNhZ25hLmpwZycsXG4gICAgcHJpY2U6IDgsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR25vY2NoaSB3aXRoIGFsbW9uZHMnLFxuICAgIGltZ1VSTDogJy4vYXNzZXRzL2ltZy9nbm9jb2hpLmpwZycsXG4gICAgcHJpY2U6IDEwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01pbmkgc3BpbmFjaCByYXZpb2xpJyxcbiAgICBpbWdVUkw6ICcuL2Fzc2V0cy9pbWcvcmF2aW9saS5qcGcnLFxuICAgIHByaWNlOiAxMixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoJ21lbnUtdGV4dCcpO1xuICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QnKTtcblxuICBtZW51VGV4dC50ZXh0Q29udGVudCA9ICdMYWN1cyBsb2JvcnRpcyBudWxsYW0gbmFtIGNvbnNlY3RldHVyIGZlcm1lbnR1bSBtYXR0aXMgcGVsbGVudGVzcXVlIGlkIG51bGxhLiBSaXN1cyBjb252YWxsaXMgaWFjdWxpcyByaXN1cyBhYyBhbGlxdWFtIHNpdCB1bHRyaWNpZXMuIEFkaXBpc2NpbmcgYWRpcGlzY2luZyBwZWxsZW50ZXNxdWUgdGluY2lkdW50IHZpdGFlLiBBbGlxdWFtIGRvbG9yIGVnZXN0YXMgbmFtIGNvbmd1ZSBlbGl0IGRvbG9yLic7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcbiAgbWVudS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIG1lbnVEYXRhLmZvckVhY2goKG1lbnVJdGVtRGF0YSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gbmV3IE1lbnVJdGVtKG1lbnVJdGVtRGF0YSk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBpZiAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbiAgY29udGVudC5hcHBlbmRDaGlsZChNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudTtcbiIsImZ1bmN0aW9uIE1lbnVJdGVtKG1lbnVJdGVtRGF0YSkge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBtZW51SXRlbURhdGEubmFtZTtcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gYCQke21lbnVJdGVtRGF0YS5wcmljZX1gO1xuICBpdGVtSW1nLnNyYyA9IG1lbnVJdGVtRGF0YS5pbWdVUkw7XG5cbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcbiAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1pbWcnKTtcblxuICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcbiIsImltcG9ydCBOYXZJdGVtIGZyb20gJy4vTmF2SXRlbSc7XG5cbmZ1bmN0aW9uIE5hdihkYXRhKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gIGRhdGEuZm9yRWFjaCgobWVudUl0ZW1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbSA9IE5hdkl0ZW0obWVudUl0ZW1EYXRhKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiIsImZ1bmN0aW9uIE5hdkl0ZW0oZGF0YSkge1xuICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmF2SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xuICBuYXZJdGVtTGluay5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbS1saW5rJyk7XG5cbiAgbmF2SXRlbUxpbmsudGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG4gIG5hdkl0ZW1MaW5rLmhyZWYgPSBkYXRhLmxpbms7XG5cbiAgbmF2SXRlbS5hcHBlbmRDaGlsZChuYXZJdGVtTGluayk7XG5cbiAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhdGEuaGFuZGxlcik7XG5cbiAgcmV0dXJuIG5hdkl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iLCJmdW5jdGlvbiBUYWdsaW5lKHNlbnRlbmNlcykge1xuICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGFnbGluZS5jbGFzc0xpc3QuYWRkKCd0YWdsaW5lJyk7XG5cbiAgc2VudGVuY2VzLmZvckVhY2goKHNlbnRlbmNlKSA9PiB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHNlbnRlbmNlO1xuXG4gICAgdGFnbGluZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICB9KTtcblxuICByZXR1cm4gdGFnbGluZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnbGluZTtcbiIsImZ1bmN0aW9uIFRpdGxlKGRhdGEpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcblxuICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgZGlzcGxheUhvbWUgZnJvbSAnLi9Ib21lJztcblxuZGlzcGxheUhlYWRlcigpO1xuZGlzcGxheUhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==