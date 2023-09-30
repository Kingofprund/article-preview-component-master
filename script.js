const buttonShare = document.querySelector("button");
const popUp = document.querySelector(".pop-up");
buttonShare.addEventListener("click", () => {
  popUp.classList.toggle("hidden");
  console.log("ciava");
});
