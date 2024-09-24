function setElementByIdText(id) {
  const textField = document.getElementById(id).innerText;
  const parseTextField = parseInt(textField);
  return parseTextField;
}
function setElementByValue(id) {
  const textValue = document.getElementById(id).value;
  const parseTextValue = parseInt(textValue);
  return parseTextValue;
}

function calculateAmount(id, accountBalance, totalAmount) {
  // const feniAmountInput = setElementByValue("input-feni-amount");
  const regionAmountInputWithoutParsing = document.getElementById(id).value;
  const regionAmountInput = parseInt(regionAmountInputWithoutParsing);

  console.log(typeof regionAmountInput);
  //   const accountBalance = setElementByIdText("account-balance");
  const currentBalance = setElementByIdText(accountBalance);
  //   let feniTotalAmount = setElementByIdText("feni-total-amount");
  let regionTotalAmount = setElementByIdText(totalAmount);
  //   const overallFeniAmount = feniTotalAmount + feniAmountInput;
  if (isNaN(regionAmountInput) || regionAmountInput < 0) {
    alert("Please enter a valid, non-negative donation amount.");
    return;
  } else if (regionAmountInput > currentBalance) {
    alert("Not enough balance in your account.so donate less");
    return;
  }
  const overallRegionAmount = regionAmountInput + regionTotalAmount;

  //   document.getElementById("feni-total-amount").innerText = overallFeniAmount;
  document.getElementById(totalAmount).innerText = overallRegionAmount;
  //   const remainingBalance = accountBalance - feniAmountInput;
  const remainingBalance = currentBalance - regionAmountInput;

  //   document.getElementById("account-balance").innerText = remainingBalance;
  document.getElementById(accountBalance).innerText = remainingBalance;
  console.log(remainingBalance);

  // console.log(overallFeniAmount);
  let name = "ffg";
  let parsed = parseInt(name);
  console.log(typeof parsed);
}
