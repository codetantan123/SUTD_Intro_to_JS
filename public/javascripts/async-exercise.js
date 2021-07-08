/* eslint-disable */

// TODO: rewrite the following code using Promise instead of callback
function getServerTime(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}
getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

function getServerTimePromise() {
  return new Promise((resolve) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      resolve(xmlHttp.getResponseHeader('Date'));
    });
    xmlHttp.send('');
  });
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function
function wait(second) {
  console.log('wait');
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
}

function fetchPricingData() {
  console.log('fetchPricingData');
  return fetch('/api/pricing').then((res) => res.json());
}

function fetchDataThenWait() {
  console.log('fetchDataThenWait');
  return fetchPricingData().then((pricingData) => {
    console.log('dataFetched');
    console.log(pricingData);
    return wait(1).then(() => pricingData);
  });
}

// (async () => {
//   console.log(await fetchDataThenWait());
// })();

// Async version below

function waitAsync(second) {
  console.log('waitAsync');
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
  // in general if we are using callback functions, it's better to use a Promise
}

async function fetchPricingDataAsync() {
  console.log('fetchPricingDataAsync');
  let res = await fetch('/api/pricing'); // res is Response obj
  return res.json();
}

async function fetchDataThenWaitAsync() {
  console.log('fetchDataThenWaitAsync');
  let res = await fetchPricingDataAsync();
  console.log('dataFetchedAsync', res);
  await waitAsync(4); //must await otherwise it will just run a promise without waiting for the promise to resolve
  return res;
}

// (async () => {
//   console.log(await fetchDataThenWaitAsync());
// })();

//callback version
fetch(
  '/api/pricing'.then((res) => {
    return res.json().then((pricingData) => {
      setTimeout(() => {
        console.log(pricingData);
      }, 1000);
    });
  })
);
