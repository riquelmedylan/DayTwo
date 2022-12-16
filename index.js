const container = document.querySelector(".container");
const buttonPrev = document.querySelector("#prev");
const buttonNext = document.querySelector("#next");
let maxNumber = 4;
let initialNumber = 1;
let slideMove = 1;
let borderMove = 2;

const createBorders = (index) => {
  const number = document.createElement("div");
  number.classList.add("number");
  index === 0
    ? number.classList.add("active-border")
    : number.classList.add("move-border");
  number.textContent = index + 1;
  container.append(number);
};

const createSlides = (index) => {
  const bar = document.createElement("div");
  bar.classList.add("bar");
  index != maxNumber - 1 && container.append(bar);
};

for (let i = 0; i < maxNumber; i++) {
  createBorders(i);
  createSlides(i);
}

const activeButtonNext = () => {
  if (initialNumber !== maxNumber) {
    buttonNext.classList.add("active");
    buttonNext.attributes.getNamedItem("disabled") &&
      buttonNext.attributes.removeNamedItem("disabled");
  } else {
    buttonNext.classList.remove("active");
    !buttonNext.attributes.getNamedItem("disabled") &&
      buttonNext.setAttribute("disabled", "");
  }
};

const activeButtonPrev = () => {
  if (initialNumber > 1) {
    buttonPrev.classList.add("active");
    buttonPrev.attributes.getNamedItem("disabled") &&
      buttonPrev.attributes.removeNamedItem("disabled");
  } else {
    buttonPrev.classList.remove("active");
    !buttonPrev.attributes.getNamedItem("disabled") &&
      buttonPrev.setAttribute("disabled", "");
  }
};

buttonNext.addEventListener("click", (e) => {
  addSlide();
  initialNumber++;
  activeButtonPrev();
  activeButtonNext();
});

buttonPrev.addEventListener("click", (e) => {
  removeSlide();
  initialNumber--;
  activeButtonPrev();
  activeButtonNext();
});

const addSlide = () => {
  container.children[slideMove].classList.add("active");
  container.children[borderMove].classList.add("active-border");
  slideMove += 2;
  borderMove += 2;
};

const removeSlide = () => {
  slideMove -= 2;
  borderMove -= 2;
  container.children[slideMove].classList.remove("active");
  container.children[borderMove].classList.remove("active-border");
};
