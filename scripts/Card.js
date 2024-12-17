//Create Cards
const cardsForm = document.querySelector("#cards");
const cardsTitle = document.querySelector("#title");
const cardsLink = document.querySelector("#url");
const grid = document.querySelector(".grid");
const template = document.querySelector("#template").content;

import { Images } from "./utils.js";
const openPhoto = new Images();

export class CreateCards {
  constructor(title, link) {
    this.title = title;
    this.link = link;
    this.gridCard = template.querySelector(".grid__card").cloneNode(true);
    this.cardTitle = this.gridCard.querySelector(".grid__name");
    this.cardImage = this.gridCard.querySelector(".grid__image");
    this.cardLike = this.gridCard.querySelector(".grid__like");
    this.imageClose = document.querySelector(".image__close");
    this.imageCard = document.querySelector("#image-card");
  }
  create() {
    this.cardTitle.textContent = this.title;
    this.cardImage.src = this.link;
    this.cardImage.alt = this.title;
    grid.append(this.gridCard);
    return this.gridCard;
  }
  eventListener() {
    this.cardLike.addEventListener("click", () => {
      this.cardLike.classList.toggle("grid__like_active");
    });
    this.cardImage.addEventListener("click", () => {
      openPhoto.openImage(this.title, this.link);
    });
    this.imageClose.addEventListener("click", () => {
      openPhoto.closeImage();
    });
    this.imageCard.addEventListener("dblclick", () => {
      openPhoto.closeImage();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        openPhoto.closeImage();
      }
    });
  }

  deleteCards() {
    grid.addEventListener("click", (event) => {
      if (event.target.classList.contains("card__delete")) {
        const card = event.target.closest(".grid__card");
        card.remove();
      }
    });
  }
}

//Add Cards
export class AddCards {
  constructor(item) {
    this.item = item;
  }
  _cardsCreate() {
    const newCard = new CreateCards(cardsTitle.value, cardsLink.value);
    grid.prepend(newCard.create());
  }
  eventListener() {
    cardsForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._cardsCreate();
    });
  }
}
