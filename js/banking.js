function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = input.value;
  const inputAmount = parseFloat(inputValue);

  // clear input field
  input.value = '';

  return inputAmount;
}

function updateTotalField(totalId, amount) {
  const totalElement = document.getElementById(totalId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}
//   handle deposit button
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
      updateTotalField('deposit-total', depositAmount);
      updateBalance(depositAmount, true);
    } else {
      alert('Please input a positive Number');
    }
  });

//   handle withdraw button
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
      updateTotalField('withdraw-total', withdrawAmount);
      updateBalance(withdrawAmount, false);
    } else {
      alert('Please input a positive Number');
    }
  });
