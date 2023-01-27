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
    { link: '#', text: 'Contacts', handler() { } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSjtBQUNTO0FBQ0E7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQiw4Q0FBSyxHQUFHLHNCQUFzQjtBQUNsRCxrQkFBa0IsNENBQUc7QUFDckIsTUFBTSxrQ0FBa0MsNkNBQVcsRUFBRTtBQUNyRCxNQUFNLGtDQUFrQyw2Q0FBVyxFQUFFO0FBQ3JELE1BQU0sNENBQTRDO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixpREFBUTtBQUNqQztBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJROztBQUVoQztBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZm5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2R2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7OztVQ1JyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNKOztBQUVqQyxtREFBYTtBQUNiLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL05hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTmF2SXRlbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFnbGluZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9NZW51JztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBuZXcgVGl0bGUoeyB0ZXh0OiAnQ2libyBndXN0b3NvJyB9KTtcbiAgY29uc3QgbmF2ID0gbmV3IE5hdihbXG4gICAgeyBsaW5rOiAnIycsIHRleHQ6ICdIb21lJywgaGFuZGxlcjogZGlzcGxheUhvbWUgfSxcbiAgICB7IGxpbms6ICcjJywgdGV4dDogJ01lbnUnLCBoYW5kbGVyOiBkaXNwbGF5TWVudSB9LFxuICAgIHsgbGluazogJyMnLCB0ZXh0OiAnQ29udGFjdHMnLCBoYW5kbGVyKCkgeyB9IH0sXG4gIF0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChIZWFkZXIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIZWFkZXI7XG4iLCJpbXBvcnQgVGFnbGluZSBmcm9tICcuL1RhZ2xpbmUnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzZW50ZW5jZXMgPSBbJ01hZGUgYnkgSXRhbGlhbnMuJywgJ0Vuam95ZWQgYnkgRXZlcnlvbmUnXTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFnbGluZSA9IG5ldyBUYWdsaW5lKHNlbnRlbmNlcyk7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBpZiAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbiAgY29udGVudC5hcHBlbmRDaGlsZChIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZTtcbiIsImltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJztcblxuY29uc3QgbWVudURhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiAnR25vY2NoaSB3aXRoIGFsbW9uZHMnLFxuICAgIGltZ1VSTDogJy4vYXNzZXRzL2ltZy9nbm9jb2hpLmpwZycsXG4gICAgcHJpY2U6IDEwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01pbmkgc3BpbmFjaCByYXZpb2xpJyxcbiAgICBpbWdVUkw6ICcuL2Fzc2V0cy9pbWcvcmF2aW9saS5qcGcnLFxuICAgIHByaWNlOiAxMixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMYXNhZ25hJyxcbiAgICBpbWdVUkw6ICcuL2Fzc2V0cy9pbWcvbGFzYWduYS5qcGcnLFxuICAgIHByaWNlOiA4LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NhcmJvbmFyYSBzcGFnaGV0dGknLFxuICAgIGltZ1VSTDogJy4vYXNzZXRzL2ltZy9jYXJib25hcmEuanBnJyxcbiAgICBwcmljZTogMTUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGFzYWduYScsXG4gICAgaW1nVVJMOiAnLi9hc3NldHMvaW1nL2xhc2FnbmEuanBnJyxcbiAgICBwcmljZTogOCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHbm9jY2hpIHdpdGggYWxtb25kcycsXG4gICAgaW1nVVJMOiAnLi9hc3NldHMvaW1nL2dub2NvaGkuanBnJyxcbiAgICBwcmljZTogMTAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWluaSBzcGluYWNoIHJhdmlvbGknLFxuICAgIGltZ1VSTDogJy4vYXNzZXRzL2ltZy9yYXZpb2xpLmpwZycsXG4gICAgcHJpY2U6IDEyLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgbWVudVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS10ZXh0Jyk7XG4gIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuXG4gIG1lbnVUZXh0LnRleHRDb250ZW50ID0gJ0xhY3VzIGxvYm9ydGlzIG51bGxhbSBuYW0gY29uc2VjdGV0dXIgZmVybWVudHVtIG1hdHRpcyBwZWxsZW50ZXNxdWUgaWQgbnVsbGEuIFJpc3VzIGNvbnZhbGxpcyBpYWN1bGlzIHJpc3VzIGFjIGFsaXF1YW0gc2l0IHVsdHJpY2llcy4gQWRpcGlzY2luZyBhZGlwaXNjaW5nIHBlbGxlbnRlc3F1ZSB0aW5jaWR1bnQgdml0YWUuIEFsaXF1YW0gZG9sb3IgZWdlc3RhcyBuYW0gY29uZ3VlIGVsaXQgZG9sb3IuJztcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuICBtZW51LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbWVudURhdGEuZm9yRWFjaCgobWVudUl0ZW1EYXRhKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0obWVudUl0ZW1EYXRhKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGlmIChjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgfVxuICBjb250ZW50LmFwcGVuZENoaWxkKE1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZW51O1xuIiwiZnVuY3Rpb24gTWVudUl0ZW0obWVudUl0ZW1EYXRhKSB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtRGF0YS5uYW1lO1xuICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBgJCR7bWVudUl0ZW1EYXRhLnByaWNlfWA7XG4gIGl0ZW1JbWcuc3JjID0gbWVudUl0ZW1EYXRhLmltZ1VSTDtcblxuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWltZycpO1xuXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgcmV0dXJuIGl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xuIiwiaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9OYXZJdGVtJztcblxuZnVuY3Rpb24gTmF2KGRhdGEpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgZGF0YS5mb3JFYWNoKChtZW51SXRlbURhdGEpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtID0gTmF2SXRlbShtZW51SXRlbURhdGEpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiZnVuY3Rpb24gTmF2SXRlbShkYXRhKSB7XG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBuYXZJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XG4gIG5hdkl0ZW1MaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLWxpbmsnKTtcblxuICBuYXZJdGVtTGluay50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcbiAgbmF2SXRlbUxpbmsuaHJlZiA9IGRhdGEubGluaztcblxuICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdkl0ZW1MaW5rKTtcblxuICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5oYW5kbGVyKTtcblxuICByZXR1cm4gbmF2SXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbTtcbiIsImZ1bmN0aW9uIFRhZ2xpbmUoc2VudGVuY2VzKSB7XG4gIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoJ3RhZ2xpbmUnKTtcblxuICBzZW50ZW5jZXMuZm9yRWFjaCgoc2VudGVuY2UpID0+IHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gc2VudGVuY2U7XG5cbiAgICB0YWdsaW5lLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIH0pO1xuXG4gIHJldHVybiB0YWdsaW5lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdsaW5lO1xuIiwiZnVuY3Rpb24gVGl0bGUoZGF0YSkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuXG4gIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5SGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL0hvbWUnO1xuXG5kaXNwbGF5SGVhZGVyKCk7XG5kaXNwbGF5SG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9