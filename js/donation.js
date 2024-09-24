const donationButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");

const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

donationButton.addEventListener("click", function () {
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");
  donationButton.classList.add("bg-green-300");
  historyButton.classList.remove("bg-green-300");
});
historyButton.addEventListener("click", function () {
  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
  historyButton.classList.add("bg-green-300");
  donationButton.classList.remove("bg-green-300");
});
document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    calculateAmount(
      "input-feni-amount",
      "account-balance",
      "feni-total-amount",
      "feni-title"
    );
  });
document
  .getElementById("donate-for-noakhali")
  .addEventListener("click", function () {
    calculateAmount(
      "input-noakhali-amount",
      "account-balance",
      "noakhali-total-amount",
      "noakhali-title"
    );
  });
document
  .getElementById("donate-for-quota")
  .addEventListener("click", function () {
    calculateAmount(
      "input-quota-amount",
      "account-balance",
      "quota-total-amount",
      "quota-title"
    );
  });
