export class Spaceship {
  #leftArrow = false;
  #rightArrow = false;
  #position = 5;

  constructor(element) {
    this.element = element;
  }
  init() {
    this.#setPosition();
    this.#eventListener();
    this.#gameLoop();
  }

  #setPosition() {
    this.element.style.bottom = "0px";
    this.element.style.left = `${
      window.innerWidth / 2 -
      this.element.offsetLeft -
      this.element.offsetWidth / 2
    }px`;
  }

  #eventListener() {
    window.addEventListener("keydown", ({ keyCode }) => {
      if (
        this.element.offsetLeft <= 0 ||
        this.element.offsetLeft > window.innerWidth - 64
      ) {
        this.#leftArrow = false;
        this.#rightArrow = false;
      }
      switch (keyCode) {
        case 37:
          this.#leftArrow = true;
          break;
        case 39:
          this.#rightArrow = true;
          break;
      }
    });

    window.addEventListener("keyup", ({ keyCode }) => {
      switch (keyCode) {
        case 37:
          this.#leftArrow = false;
          break;
        case 39:
          this.#rightArrow = false;
          break;
      }
    });
  }

  #gameLoop = () => {
    this.#whatKey();
    requestAnimationFrame(this.#gameLoop);
  };

  #whatKey() {
    if (this.#leftArrow) {
      this.element.style.left = `${
        parseInt(this.element.style.left, 10) - this.#position
      }px`;
    }

    if (this.#rightArrow) {
      this.element.style.left = `${
        parseInt(this.element.style.left, 10) + this.#position
      }px`;
    }
  }
}
