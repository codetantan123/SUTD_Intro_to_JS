function updatePriceSpans(priceList, plan) {
  let priceSpans = Array.from(document.querySelectorAll('span[id$="-price"]'));
  let priceUnitSpans = Array.from(
    document.querySelectorAll('[class^="price-unit"]')
  );

  priceSpans.forEach((el, i) => {
    el.innerHTML = priceList[i];
    if (plan === 'annual') {
      priceUnitSpans[i].innerHTML = '/yr';
    } else {
      priceUnitSpans[i].innerHTML = '/mo';
    }
  });
}

function getPriceList(plan = 'monthly') {
  fetch('/api/pricing')
    .then((res) => res.json())
    .then((prices) => {
      let priceList;
      if (plan === 'annual') {
        priceList = prices.map((x) => x.annualPrice);
        updatePriceSpans(priceList, plan);
      } else {
        priceList = prices.map((x) => x.monthlyPrice);
        updatePriceSpans(priceList, plan);
      }
    });
}

const monthlyPlansButton = document.querySelector(`#monthly-plans-btn`);
monthlyPlansButton.addEventListener('click', () => {
  console.log('monthly');
  getPriceList('monthly');
});

const annualPlansButton = document.querySelector(`#annual-plans-btn`);
annualPlansButton.addEventListener('click', () => {
  console.log('annual');
  getPriceList('annual');
});

let priceList = getPriceList('monthly');
updatePriceSpans(priceList);
