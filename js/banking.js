/* function doubleIt(num) {
  const result = num * 2;
  return result;
}
const first = doubleIt(5);
const second = doubleIt9(7); */

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

document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue('deposit-input');

    // get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount; */

    updateTotalField('deposit-total', depositAmount);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // clear input field
    // depositInput.value = '';
  });

//   handle withdraw button
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    console.log(withdrawAmountText);
    const withdrawAmount = parseFloat(withdrawAmountText); */

    const withdrawAmount = getInputValue('withdraw-input');

    // get and update withdraw total

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    updateTotalField('withdraw-total', withdrawAmount);

    // Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input field
    // withdrawInput.value = '';
  });
