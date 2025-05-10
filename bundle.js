/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/pic/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/js/goblinGenerate.js

class GoblinGenerate {
  constructor(field, cellField) {
    this.field = field;
    this.cellField = cellField;
    this.goblin = document.createElement("img");
    this.gameOver = false;
    this.skipHit = 0;
    this.countHit = 0;
    this.hammerHit = this.hammerHit.bind(this);
    this.createGoblinMove();
  }
  createGoblinMove() {
    if (this.gameOver) return;
    const goblinIndex = Math.floor(Math.random() * this.cellField);
    const inCellField = this.field.children[goblinIndex];
    this.goblin.src = goblin_namespaceObject;
    this.goblin.classList.add("goblin");
    this.goblin.dataset.index = goblinIndex;
    inCellField.appendChild(this.goblin);
    setTimeout(() => {
      if (inCellField.contains(this.goblin)) {
        this.skipHit += 1;
        this.resultGame();
      }
    }, 1000);
    this.goblin.addEventListener("click", this.hammerHit);
  }
  hammerHit() {
    this.countHit += 1;
    this.createGoblinMove();
  }
  resultGame() {
    if (this.skipHit >= 5) {
      this.isGameOver = true;
      alert(`Вы проиграли! Поймано гоблинов: ${this.countHit}. Пропущено гоблинов: ${this.skipHit}`);
    } else {
      this.createGoblinMove();
    }
  }
}
;// ./src/js/goblinGame.js

class GoblinGame {
  constructor() {
    this.field = document.querySelector(".game-field");
    this.cellField = 16;
    this.hammerDown = this.hammerDown.bind(this);
    this.hammerUp = this.hammerUp.bind(this);
    this.createFieldGame();
    this.startGame();
  }
  createFieldGame() {
    for (let i = 0; i < this.cellField; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell-field");
      this.field.appendChild(cell);
    }
  }
  startGame() {
    new GoblinGenerate(this.field, this.cellField);
    this.field.addEventListener("mousedown", this.hammerDown);
    this.field.addEventListener("mouseup", this.hammerUp);
  }
  hammerDown() {
    this.field.classList.add("hammer");
  }
  hammerUp() {
    this.field.classList.remove("hammer");
  }
}
;// ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new GoblinGame();
});
;// ./src/index.js


/******/ })()
;