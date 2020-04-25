const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById("backdrop");

const startAddMovieButton = document.querySelector("header button");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
//console.log("cancelAddMovieButton", cancelAddMovieButton);
//console.log("confirmAddMovieButton", confirmAddMovieButton);

const userInputs = addMovieModal.querySelectorAll("input");
console.log("userInputs", userInputs);

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid value(rating between 1 to 5)");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  //console.log(movies);
  toggleMovieModal();
  clearInterval();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
};

const renderNewMovieElement = (title, imagUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <image src="${imageUrl}" alt="${title}" >
  </div>
  <div class="movie-element__into">
  <h2> ${title} </h2>
  <p> ${rating}/5 stars </p
  </div>
  `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
  updateUI();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", toggleMovieModal);

cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
cancelAddMovieButton.addEventListener("click", addMovieHandler);
