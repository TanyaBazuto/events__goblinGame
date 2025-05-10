import goblin from "../pic/goblin.png";

export default class GoblinGenerate {
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

    this.goblin.src = goblin;
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
      alert(
        `Вы проиграли! Поймано гоблинов: ${this.countHit}. Пропущено гоблинов: ${this.skipHit}`,
      );
    } else {
      this.createGoblinMove();
    }
  }
}
