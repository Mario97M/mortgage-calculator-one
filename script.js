const sliders = document.querySelectorAll(".slider");
const purchasePriceDisplay = document.getElementById("purchasePriceDisplay");
const purchasePriceRange = document.getElementById("purchasePriceRange");
const equityDisplay = document.getElementById("equityDisplay");
const equityDisplayRange = document.getElementById("equityDisplayRange");
const repaymentTimeDisplay = document.getElementById("repaymentTimeDisplay");
const repaymentTimeRange = document.getElementById("repaymentTimeRange");
const loanAmount = document.getElementById("loanAmount");
const estPerMonth = document.getElementById("estPerMonth");
const submitButton = document.getElementById("submitButton");

function slideColorBackground(sliderElement) {
  sliderElement.addEventListener("input", () => {
    let value =
      ((sliderElement.value - sliderElement.min) /
        (sliderElement.max - sliderElement.min)) *
      100;
    sliderElement.style.background = `linear-gradient(to right, #4a56c2 0%, #4a56c2 ${value}%, white ${value}%, white 100%)`;
  });
}

sliders.forEach(sliderElement => slideColorBackground(sliderElement));

function mortgageCalculator() {
  const purchasePriceRangeValue = parseFloat(purchasePriceRange.value);
  const equityDisplayRangeValue = parseFloat(equityDisplayRange.value);
  const repaymentTimeRangeValue = parseFloat(repaymentTimeRange.value);
  const errorMessage = document.getElementById("error");

  const loanAmountForumula = purchasePriceRangeValue - equityDisplayRangeValue;
  loanAmount.textContent = `$${loanAmountForumula.toFixed(2)}`;

  const monthlyInterestRateFormula = 0.05 / 12;
  const numberOfPaymentsFormula = repaymentTimeRangeValue * 12;
  const monthlyPaymentFormula =
    (loanAmountForumula *
      (monthlyInterestRateFormula *
        Math.pow(1 + monthlyInterestRateFormula, numberOfPaymentsFormula))) /
    (Math.pow(1 + monthlyInterestRateFormula, numberOfPaymentsFormula) - 1);

  estPerMonth.textContent = `$${monthlyPaymentFormula.toFixed(2)}`;

  if (purchasePriceRangeValue < equityDisplayRangeValue) {
    errorMessage.textContent =
      "Purchase price cannot be less than the down payment";
  } else {
    errorMessage.textContent = "";
  }
}

purchasePriceRange.addEventListener("input", function () {
  purchasePriceDisplay.textContent = `$${this.value}`;
});

equityDisplayRange.addEventListener("input", function () {
  equityDisplay.textContent = `$${this.value}`;
});

repaymentTimeRange.addEventListener("input", function () {
  repaymentTimeDisplay.textContent = `$${this.value}`;
});

submitButton.addEventListener("click", mortgageCalculator);
