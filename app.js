var openModal = document.querySelector(".btn");
var closeBtn = document.querySelector("#closeBtn");
var modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
