const donationButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");

const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

donationButton.addEventListener("click", function () {
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");
});
historyButton.addEventListener("click", function () {
  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});
document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    console.log("ddd");
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
    console.log("ddd");
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
    console.log("ddd");
    calculateAmount(
      "input-quota-amount",
      "account-balance",
      "quota-total-amount",
      "quota-title"
    );
    // const feniAmountInput = setElementByValue("input-feni-amount");
    // const accountBalance = setElementByIdText("account-balance");
    // let feniTotalAmount = setElementByIdText("feni-total-amount");
    // const overallFeniAmount = feniTotalAmount + feniAmountInput;
    // document.getElementById("feni-total-amount").innerText = overallFeniAmount;
    // const remainingBalance = accountBalance - feniAmountInput;
    // document.getElementById("account-balance").innerText = remainingBalance;

    // console.log(overallFeniAmount);
  });
