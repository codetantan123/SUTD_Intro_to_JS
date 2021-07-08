// use an IIFE to keep everything inside function scope
(function setupSignup() {
  const signUpBtn = document.querySelector('#signup-button');
  // listen for click on #signup-button
  let timerId;
  signUpBtn.addEventListener('click', function invokeSignup() {
    // remove 'hidden' class on #signup-notification
    clearTimeout(timerId);
    const notification = document.querySelector('#signup-notification');
    notification.classList.remove('hidden');
    timerId = setTimeout(() => {
      // add the 'hidden' class back after 2 second
      notification.classList.add('hidden');
    }, 2000);
  });
})();
