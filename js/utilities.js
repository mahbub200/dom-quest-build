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

function calculateAmount(id, accountBalance, totalAmount, titleName) {
  // const feniAmountInput = setElementByValue("input-feni-amount");
  const regionAmountInputWithoutParsing = document.getElementById(id).value;
  const regionAmountInput = parseInt(regionAmountInputWithoutParsing);

  //   const accountBalance = setElementByIdText("account-balance");
  const currentBalance = setElementByIdText(accountBalance);
  //   let feniTotalAmount = setElementByIdText("feni-total-amount");
  let regionTotalAmount = setElementByIdText(totalAmount);
  //   const overallFeniAmount = feniTotalAmount + feniAmountInput;
  let nameOfTitle = document.getElementById(titleName).innerText;
  let modal = document.getElementById("my_modal_2");
  if (isNaN(regionAmountInput) || regionAmountInput < 0) {
    modal.close();
    alert("Please enter a valid, non-negative donation amount.");
    return;
  } else if (regionAmountInput > currentBalance) {
    modal.close();
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
  const time = new Date();
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='border border-black m-4 p-4'>
  <h3 class='font-bold text-2xl'>${regionAmountInput} Tk is donated for ${nameOfTitle}</h3>
  <p class='mt-2'>date: ${time}</p>
  </div>`;
  document.getElementById("history-section").appendChild(div);
  // let modal = document.getElementById("my_modal_2");

  modal.showModal();
}
