const popup = document.querySelector(".popup");
//Initial Code Profile
let edit = document.querySelector(".profile__info-link");
let pageEdit = document.querySelector("#edit");
const exit = document.querySelectorAll(".popup__exit");
//intial Code Cards
const addCard = document.querySelector(".profile__info_add");
let pageCards = document.querySelector("#card");
export class Popups {
  constructor() {
    this.openEditPopup = this.openEditPopup.bind(this);
    this.openCardsPopup = this.openCardsPopup.bind(this);
    this.closePopups = this.closePopups.bind(this);
    this._escapeKey = this._escapeKey.bind(this);
    this._eventListeners = this.eventListeners.bind(this);
  }
  openEditPopup() {
    pageEdit.classList.remove("popup");
    pageEdit.classList.add("popup__close");
  }
  openCardsPopup() {
    pageCards.classList.remove("popup");
    pageCards.classList.add("popup__close");
  }

  closePopups() {
    pageEdit.classList.remove("popup__close");
    pageEdit.classList.add("popup");
    pageCards.classList.remove("popup__close");
    pageCards.classList.add("popup");
  }
  _escapeKey(evt) {
    if (evt.key === "Escape") {
      this.closePopups();
    }
  }
  eventListeners() {
    addCard.addEventListener("click", this.openCardsPopup);
    edit.addEventListener("click", this.openEditPopup);

    document.addEventListener("keydown", this._escapeKey);
    exit.forEach((exit) => {
      exit.addEventListener("click", this.closePopups);
    });

    popup.addEventListener("dblclick", this.closePopups);
  }
}

//Open Photo
export class Images {
  constructor(imageCard, imageName, imageShow) {
    this.imageCard = document.querySelector("#image-card");
    this.imageName = document.querySelector(".image__name");
    this.imageShow = document.querySelector(".image__show");
  }

  openImage(title, link) {
    this.imageCard.classList.remove("image__card");
    this.imageCard.classList.add("image__card_hidden");
    this.imageName.textContent = title;
    this.imageShow.src = link;
  }
  closeImage() {
    this.imageCard.classList.add("image__card");
  }
}
