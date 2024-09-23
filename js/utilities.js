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
