console.log("dond");
document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    console.log("ddd");
    const feniAmountInput = setElementByValue("input-feni-amount");
    const accountBalance = setElementByIdText("account-balance");
    let feniTotalAmount = setElementByIdText("feni-total-amount");
    const overallFeniAmount = feniTotalAmount + feniAmountInput;
    document.getElementById("feni-total-amount").innerText = overallFeniAmount;
    const remainingBalance = accountBalance - feniAmountInput;
    document.getElementById("account-balance").innerText = remainingBalance;

    console.log(overallFeniAmount);
  });
