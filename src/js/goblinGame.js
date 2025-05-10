import GoblinGenerate from "./goblinGenerate";

export default class GoblinGame {
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
