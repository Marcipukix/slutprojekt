const ctaButton = document.getElementById('ctaButton');

ctaButton.addEventListener('click', () => {
  let email = prompt('Please enter your email address:');
  while (email !== null) {
    if (validateEmail(email)) {
      // Valid email address, progress with the subscription
      alert(`Now you have subscribed to our newsletter! You will receive our monthly newsletter on  ${email} email address!`);
      break;
    } else {
      // Invalid email address, add the prompt again
      email = prompt('Please enter a valid email address:');
    }
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
