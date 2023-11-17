const from_currencyElement = document.getElementById("from_currency");
const from_amountElement = document.getElementById("from_amount");
const to_currencyElement = document.getElementById("to_currency");
const to_amountElement = document.getElementById("to_amount");
const rateElement = document.getElementById("rate");
const exchange = document.getElementById("exchange");

exchange.addEventListener("click", () => {
    const temp = from_currencyElement.value;
    from_currencyElement.value = to_currencyElement.value;
    to_currencyElement.value = temp;
    calculate();
});

from_currencyElement.addEventListener("change", calculate);
from_amountElement.addEventListener("input", calculate);
to_currencyElement.addEventListener("change", calculate);
to_amountElement.addEventListener("input", calculate);

function calculate() {
    const from_currency = from_currencyElement.value;
    const to_currency = to_currencyElement.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
    .then(res => res.json())
    .then(res => {
        const rate = res.rates[to_currency];
        rateElement.innerHTML = `1 ${from_currency} = ${rate} ${to_currency}`;
        to_amountElement.value = (from_amountElement.value * rate).toFixed(2);
    })
    .catch(error => console.error("Error fetching exchange rates:", error));
}

calculate();
