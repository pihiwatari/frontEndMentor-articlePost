const $shareButton = document.getElementById("share");
const $shareButtonActive = document.getElementById("share--active");
const $modal = document.getElementById("modal");

$shareButton.addEventListener("click", () => {
  $modal.classList.toggle("hidden");
})
$shareButtonActive.addEventListener("click", () => {
  $modal.classList.toggle("hidden");
})

