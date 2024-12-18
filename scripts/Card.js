//Create Cards
const cardsForm = document.querySelector("#cards");
const cardsTitle = document.querySelector("#title");
const cardsLink = document.querySelector("#url");
const grid = document.querySelector(".grid");
const template = document.querySelector("#template").content;

import { Card } from "./utils.js";
const openPhoto = new Card();

export class GridCards {
  constructor(title, link, item) {
    this.title = title;
    this.link = link;
    this.item = item;
    this.alt = title;
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
    return this.gridCard;
  }
  eventListener() {
    this.cardLike.addEventListener("click", () => {
      this.cardLike.classList.toggle("grid__like_active");
    });
    this.cardImage.addEventListener("click", () => {
      utils.openImage(this.title, this.link, this.alt);
    });
    this.imageClose.addEventListener("click", () => {
      utils.closeImage();
    });
    this.imageCard.addEventListener("dblclick", () => {
      utils.closeImage();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        utils.closeImage();
      }
    });
    cardsForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._cardsCreate();
    });
  }
  _enterKey() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        utils.closePopups();
      }
    });
  }
  _cardsCreate() {
    const newCard = this.create(cardsTitle.value, cardsLink.value);
    grid.prepend(newCard);
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
